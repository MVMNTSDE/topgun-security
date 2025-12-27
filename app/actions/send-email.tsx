'use server';

import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = 'verwaltung@topgun-security.de';

export async function sendEmail(formData: FormData) {
  const type = formData.get('type') as 'contact' | 'partner' | 'campaign' | 'funnel';
  const rawData: Record<string, any> = {};

  // Extract all data from formData
  formData.forEach((value, key) => {
    if (key !== 'type') {
      rawData[key] = value;
    }
  });

  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY is missing. Email would have contained:', rawData);
    return { success: true, message: 'Simulated success (API Key missing)' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Topgun Security Website <verwaltung@topgun-security.de>',
      to: [TO_EMAIL],
      replyTo: rawData.email as string,
      subject: `[Website] ${type.toUpperCase()} - Anfrage`,
      react: <EmailTemplate type={type} data={rawData} />,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, message: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error('Server error during email sending:', error);
    return { success: false, message: error.message || 'Internal server error' };
  }
}

