'use server';

import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = 'verwaltung@topgun-security.de';

import { UserConfirmationTemplate } from '@/components/email-template-user';

// ... (existing helper function if any, or just import)

export async function sendEmail(formData: FormData) {
  const type = formData.get('type') as 'contact' | 'partner' | 'campaign' | 'funnel';
  const rawData: Record<string, any> = {};

  // Extract all data from formData
  formData.forEach((value, key) => {
    if (key !== 'type') {
      rawData[key] = value;
    }
  });

  const email = rawData.email as string;
  const name = rawData.name as string;
  const offerCode = "TOPGUN30"; // Static for now, or derive from logic

  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY is missing. Email would have contained:', rawData);
    return { success: true, message: 'Simulated success (API Key missing)' };
  }

  try {
    // 1. Send Notification to Admin (Topgun)
    const adminData = await resend.emails.send({
      from: 'Website Formular <noreply@topgun-security.de>',
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[Website] ${type.toUpperCase()} - Anfrage`,
      react: <EmailTemplate type={type} data={rawData} />,
    });

    if (adminData.error) {
        console.error('Admin email error:', adminData.error);
        throw new Error(adminData.error.message);
    }

    // 2. Send Confirmation to User (Auto-Responder)
    // Only send if we have a valid email
    if (email) {
        const userSubject = type === 'campaign' || type === 'funnel' 
            ? `Ihr Sicherheits-Code: ${offerCode}` 
            : 'Eingangsbestätigung: Ihre Anfrage bei Topgun Security';

        await resend.emails.send({
            from: 'Topgun Security <verwaltung@topgun-security.de>',
            to: [email],
            subject: userSubject,
            react: <UserConfirmationTemplate type={type} name={name} offerCode={offerCode} />,
        });
    }

    // 3. Add to Resend Audience (Lead Capture)
    if (process.env.RESEND_AUDIENCE_ID && email) {
        try {
            await resend.contacts.create({
                email: email,
                firstName: name,
                audienceId: process.env.RESEND_AUDIENCE_ID,
                // Map custom properties (must be registered in Resend first via script)
                data: {
                    company: rawData.company as string || 'Privat',
                    industry: rawData.industry as string || 'General',
                    service: rawData.service as string || 'Security',
                    phone: rawData.phone as string || '',
                    source_type: type,
                },
            } as any);
        } catch (contactError) {
            // Non-blocking error for contact creation
            console.warn('Failed to add contact to audience:', contactError);
        }
    }

    return { success: true, data: adminData.data };
  } catch (error: any) {
    console.error('Server error during email sending:', error);
    return { success: false, message: error.message || 'Internal server error' };
  }
}

