import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import * as React from 'react';
import { CampaignEmailTemplate } from '../components/campaign-email-template';

// Force load .env.local
try {
  const envLocal = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf-8');
  const envConfig = dotenv.parse(envLocal);
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
} catch (e) { console.log('No .env.local found'); }

// Init Clients
const resend = new Resend(process.env.RESEND_API_KEY);
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Config
const CAMPAIGN_NAME = "cold_acquisition_feb_2026";
const IS_TEST_MODE = true; // Set to FALSE to send real emails
const TEST_RECIPIENT = 'verwaltung@topgun-security.de';
const RATE_LIMIT_MS = 2000; // 2 seconds between emails

async function sendCampaignV2() {
  console.log(`🚀 Starting Campaign: ${CAMPAIGN_NAME}`);
  if (IS_TEST_MODE) console.log(`⚠️  TEST MODE: Sending to ${TEST_RECIPIENT}`);

  // 1. Fetch 'new' leads from Supabase
  // We prioritize 'new' status. 
  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .eq('status', 'new') // Only send to new
    .limit(50); // Batch size for safety

  if (error) {
    console.error("❌ Failed to fetch leads:", error);
    return;
  }

  if (!leads || leads.length === 0) {
    console.log("✅ No new leads to contact.");
    return;
  }

  console.log(`📋 Found ${leads.length} new leads.`);

  for (const lead of leads) {
    // Check if unsubscribed (double check, though filtered by status='new' usually)
    // In our schema, status='unsubscribed' would be excluded by .eq('status', 'new')
    // But safely we could check if there is an unsubscribe record if we had a separate table, 
    // but here we use a status field.
    
    const recipient = IS_TEST_MODE ? TEST_RECIPIENT : lead.email;
    const companyName = lead.company || '';
    
    // Greeting logic
    let salutation = 'Sehr geehrte Damen und Herren,';
    if (lead.last_name && lead.last_name.length > 1) {
       if (lead.first_name) {
         salutation = `Hallo ${lead.first_name} ${lead.last_name},`;
       } else {
         salutation = 'Sehr geehrte Damen und Herren,';
       }
    }

    console.log(`📨 Sending to: ${recipient} (${lead.email})`);

    try {
        // Send via Resend
        const { data: emailData, error: emailError } = await resend.emails.send({
            from: 'Topgun Security <verwaltung@topgun-security.de>',
            to: [recipient],
            subject: `Sicherheit für ${companyName || 'Ihr Geschäft'} – Exklusiv-Angebot`,
            react: React.createElement(CampaignEmailTemplate, { 
              name: `${lead.first_name || ''} ${lead.last_name || ''}`.trim(), 
              salutation: salutation, 
              company: companyName, 
              offerCode: "TOPGUN30",
              unsubscribeLink: `https://topgun-security.de/api/unsubscribe?email=${encodeURIComponent(lead.email)}`
            }) as React.ReactElement, 
        });

        if (emailError) {
            console.error(`❌ Send failed for ${lead.email}:`, emailError);
            // Log failure
            await supabase.from('mail_logs').insert({
                lead_id: lead.id,
                campaign_name: CAMPAIGN_NAME,
                recipient_email: recipient,
                status: 'failed',
                error_message: JSON.stringify(emailError)
            });
            // Update lead status? Maybe keep 'new' to retry or set 'bounced' if permanent
        } else {
            console.log(`✅ Sent! ID: ${emailData?.id}`);
            
            // Log success
            await supabase.from('mail_logs').insert({
                lead_id: lead.id,
                campaign_name: CAMPAIGN_NAME,
                recipient_email: recipient,
                status: 'sent'
            });

            // Update lead status
            await supabase.from('leads').update({
                status: 'contacted',
                last_contacted_at: new Date().toISOString()
            }).eq('id', lead.id);
        }

    } catch (e) {
        console.error(`❌ Critical error for ${lead.email}:`, e);
    }

    // Rate Limit
    await new Promise(r => setTimeout(r, RATE_LIMIT_MS));
  }

  console.log("🎉 Batch finished.");
}

sendCampaignV2();
