'use server';

import { EmailTemplate } from '@/components/email-template';
import * as React from 'react';
import { render } from '@react-email/render';
import { UserConfirmationTemplate } from '@/components/email-template-user';

const N8N_WEBHOOK_URL = "http://87.106.190.120:5678/webhook/send-mail";
const TO_EMAIL = 'info@topgun.gmbh';


function getTypeSubject(type: string, data: Record<string, unknown>): string {
  switch (type) {
    case 'contact': return 'Neue Kontaktanfrage über Webseite';
    case 'partner': return 'Partneranfrage erhalten';
    case 'mandate': return `Dringende Mandatsanfrage: ${data.company || 'Neu'}`;
    case 'campaign': return 'Neukunden-Kampagne (Code angefordert)';
    case 'funnel': return `Funnel-Anfrage: ${data.industry || 'Allgemein'}`;
    default: return 'Neue Nachricht über Webseite';
  }
}

export async function sendEmail(formData: FormData) {
  const type = formData.get('type') as 'contact' | 'partner' | 'campaign' | 'funnel' | 'mandate';
  const rawData: Record<string, unknown> = {};

  // Extract all data from formData
  formData.forEach((value, key) => {
    if (key !== 'type') {
      rawData[key] = value;
    }
  });

  const email = rawData.email as string;
  const name = rawData.name as string;
  const offerCode = "TOPGUN30"; // Static for now, or derive from logic

  // N8n webhook will handle the sending without an API key check here.

  try {
    // 1. Send Notification to Admin (Topgun)
    const adminHtml = await render(
        <EmailTemplate type={type} data={rawData} />
    );

    const adminResponse = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            from_email: "info@topgun.gmbh",
            from_name: "Topgun Security (System)",
            to: TO_EMAIL,
            reply_to: email,
            subject: getTypeSubject(type, rawData),
            html: adminHtml,
            type: "system_notification"
        })
    });

    if (!adminResponse.ok) {
        throw new Error(`Admin email n8n webhook failed with status ${adminResponse.status}`);
    }

    // 2. Send Confirmation to User (Auto-Responder)
    // Only send if we have a valid email
    if (email) {
        const userSubject = type === 'campaign' || type === 'funnel' 
            ? `Ihr Sicherheits-Code: ${offerCode}` 
            : 'Eingangsbestätigung: Ihre Anfrage bei Topgun Security';

        const userHtml = await render(
            <UserConfirmationTemplate type={type} name={name} offerCode={offerCode} />
        );

        const userResponse = await fetch(N8N_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                from_email: "info@topgun.gmbh",
                from_name: "Topgun Security",
                to: email,
                subject: userSubject,
                html: userHtml,
                type: "autoresponder"
            })
        });

        if (!userResponse.ok) {
            console.warn(`User confirmation n8n webhook failed with status ${userResponse.status}`);
        }
    }

    // 3. Add to Resend Audience (Lead Capture) -> Skip or send to n8n CRM trigger
    // Since Resend is removed, we could send a separate webhook for lead capture,
    // or we assume n8n handles it at the same endpoint based on the type.
    
    return { success: true, message: "Emails dispatched via n8n" };
  } catch (error: unknown) {
    console.error('Server error during email sending:', error);
    const msg = error instanceof Error ? error.message : String(error);
    return { success: false, message: msg || 'Internal server error' };
  }
}

