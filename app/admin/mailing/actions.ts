
'use server';

import { createClient } from "@supabase/supabase-js";

// Init admin client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function getMailingStats() {
  try {
    const [total, contacted, unsubscribed] = await Promise.all([
      supabase.from('leads').select('*', { count: 'exact', head: true }),
      supabase.from('leads').select('*', { count: 'exact', head: true }).eq('status', 'contacted'),
      supabase.from('leads').select('*', { count: 'exact', head: true }).eq('status', 'unsubscribed'),
    ]);

    return {
      total: total.count || 0,
      contacted: contacted.count || 0,
      unsubscribed: unsubscribed.count || 0,
      error: null
    };
  } catch (error) {
    console.error("Error fetching stats:", error);
    return { total: 0, contacted: 0, unsubscribed: 0, error: "Failed to fetch stats" };
  }
}

export async function getRecentLeads(limit = 20) {
    const { data } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit);
    return data || [];
}


export async function importLeadsAction(formData: FormData) {
    const file = formData.get('csvFile') as File;
    if (!file) return { success: false, message: "No file uploaded" };

    try {
        const text = await file.text();
        const lines = text.split('\n').filter(Boolean);
        const leadsToInsert: { email: string; source: string; status: string }[] = [];
        const source = (formData.get('source') as string) || 'csv_import';

        // Assuming simple CSV: just emails per line OR "email,name,..."
        // Simple parser for "email" column
        lines.forEach(line => {
             // Handle "email@domain.com" or "name,email@domain.com"
             const parts = line.split(/[;,]/); 
             // Find the part that looks like an email
             const email = parts.find(p => p.includes('@') && p.includes('.'));
             
             if (email) {
                 leadsToInsert.push({
                     email: email.trim().replace(/['"]/g, ''),
                     source: source,
                     status: 'new'
                 });
             }
        });

        if (leadsToInsert.length === 0) {
            return { success: false, message: "No valid emails found in CSV" };
        }

        const { error } = await supabase.from('leads').upsert(
            leadsToInsert, 
            { onConflict: 'email', ignoreDuplicates: true } 
        );

        if (error) throw error;

        return { success: true, count: leadsToInsert.length, message: `Imported ${leadsToInsert.length} leads successfully.` };

    } catch (error: unknown) {
        console.error("Import error:", error);
        const msg = error instanceof Error ? error.message : String(error);
        return { success: false, message: msg };
    }
}


import { Resend } from 'resend';
import * as React from 'react';
import { CampaignEmailTemplate } from '@/components/campaign-email-template';

const resend = new Resend(process.env.RESEND_API_KEY);
const CAMPAIGN_NAME = "cold_acquisition_feb_2026";
// WARNING: Set to FALSE to send real emails. currently in manual trigger mode, so maybe safe?
// User asked to "connect to logic", implying real sending or at least the ability to.
// We will default to TEST mode for safety until explicitly changed or based on an env var?
// Let's rely on a variable we can pass or just hardcode for now as "Test Mode" default.
const IS_TEST_MODE = process.env.NEXT_PUBLIC_IS_PRODUCTION_MODE !== 'true'; 
const TEST_RECIPIENT = 'verwaltung@topgun-security.de';

export async function sendCampaignBatchAction(batchSize = 5, templateId?: string) {
    try {
        // 1. Fetch 'new' leads
        const { data: leads, error } = await supabase
            .from('leads')
            .select('*')
            .eq('status', 'new')
            .limit(batchSize);

        if (error) throw error;
        if (!leads || leads.length === 0) return { success: true, count: 0, message: "No new leads to send." };

        const results = { sent: 0, failed: 0 };

        for (const lead of leads) {
            const recipient = IS_TEST_MODE ? TEST_RECIPIENT : lead.email;
             // Simple duplicate check if test mode to avoid spamming admin (optional)
            
            const companyName = lead.company || '';
            let salutation = 'Sehr geehrte Damen und Herren,';
            if (lead.last_name && lead.last_name.length > 1) {
                if (lead.first_name) {
                    salutation = `Hallo ${lead.first_name} ${lead.last_name},`;
                } else {
                    salutation = 'Sehr geehrte Damen und Herren,';
                }
            }

            const unsubscribeLink = `https://topgun-security.de/api/unsubscribe?email=${encodeURIComponent(lead.email)}`;

// 0. Fetch content from DB if templateId is provided
    let subject = `Sicherheit für ${lead.company || 'Ihr Geschäft'} – Exklusiv-Angebot`;
    let content = '';

    if (templateId) {
        const { data: template } = await supabase
            .from('email_templates')
            .select('*')
            .eq('id', templateId)
            .single();
        
        if (template) {
            subject = template.subject.replace('{{company}}', companyName);
            content = template.content
                .replace(/{{salutation}}/g, salutation)
                .replace(/{{name}}/g, `${lead.first_name || ''} ${lead.last_name || ''}`.trim())
                .replace(/{{company}}/g, companyName)
                .replace(/{{offerCode}}/g, "TOPGUN30");
        }
    }

            try {
                const { error: emailError } = await resend.emails.send({
                    from: 'Topgun Security <verwaltung@topgun-security.de>',
                    to: [recipient],
                    subject: subject,
                    headers: {
                        'List-Unsubscribe': `<${unsubscribeLink}>`,
                    },
                    react: React.createElement(CampaignEmailTemplate, { 
                        name: `${lead.first_name || ''} ${lead.last_name || ''}`.trim(), 
                        salutation: salutation, 
                        company: companyName, 
                        offerCode: "TOPGUN30",
                        unsubscribeLink: unsubscribeLink,
                        content: content
                    }) as React.ReactElement, 
                });

                if (emailError) {
                    console.error(`❌ Send failed for ${lead.email}:`, emailError);
                    await supabase.from('mail_logs').insert({
                        lead_id: lead.id,
                        campaign_name: CAMPAIGN_NAME,
                        recipient_email: recipient,
                        status: 'failed',
                        error_message: JSON.stringify(emailError)
                    });
                } else {
                    await supabase.from('mail_logs').insert({
                        lead_id: lead.id,
                        campaign_name: CAMPAIGN_NAME,
                        recipient_email: recipient,
                        status: 'sent'
                    });

                    await supabase.from('leads').update({
                        status: 'contacted',
                        last_contacted_at: new Date().toISOString()
                    }).eq('id', lead.id);

                    results.sent++;
                }
            } catch (e) {
                console.error(`❌ Error processing ${lead.email}:`, e);
                results.failed++;
            }
            
            // Tiny delay to be nice to API
            await new Promise(r => setTimeout(r, 500));
        }

        const modeMsg = IS_TEST_MODE ? "[TEST MODE] " : "";
        return { 
            success: true, 
            count: results.sent, 
            message: `${modeMsg}Processed ${leads.length} leads. Sent: ${results.sent}, Failed: ${results.failed}` 
        };

    } catch (error: unknown) {
        const msg = error instanceof Error ? error.message : String(error);
        return { success: false, message: msg };
    }
}
