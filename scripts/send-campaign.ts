
import { Resend } from 'resend';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import * as React from 'react';
import { CampaignEmailTemplate } from '../components/campaign-email-template';

// Force load .env.local to override any shell-cached values
try {
  const envLocal = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf-8');
  const envConfig = dotenv.parse(envLocal);
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
} catch (e) { console.log('No .env.local found'); }

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

// TEST MODE: Send all emails to this address instead of the real contact
const TEST_EMAIL_RECIPIENT = 'verwaltung@topgun-security.de'; 
const IS_TEST_MODE = true;

async function sendCampaign() {
  if (!AUDIENCE_ID) {
      console.error('❌ Missing AUDIENCE_ID');
      return;
  }

  console.log('🚀 Starting Campaign Send...');
  if (IS_TEST_MODE) {
      console.log(`⚠️  TEST MODE ACTIVE: All emails will be sent to ${TEST_EMAIL_RECIPIENT}`);
  }

  // 1. Fetch Contacts from "Cold Leads (Import)" Segment
  // We need to resolve the segment ID again or just list all contacts and filter (audience list is paginated)
  // For simplicity/reliability, we'll list contacts from the audience and filter by source_type 'cold_import_souvenir'
  // or simply take the list. 
  
  let allContacts: any[] = [];
  try {
      const response = await resend.contacts.list({ audienceId: AUDIENCE_ID });
      allContacts = response.data?.data || [];
      console.log(`📋 Found ${allContacts.length} contacts in Audience.`);
  } catch (e) {
      console.error('❌ Failed to list contacts:', e);
      return;
  }

  // Filter if needed (optional, assuming audience is clean or we want all)
  const targetContacts = allContacts.filter(c => !c.unsubscribed); // Basic filter
  console.log(`🎯 Targeting ${targetContacts.length} active contacts.`);

  let sentCount = 0;
  let failCount = 0;

  for (const contact of targetContacts) {
      const { email, first_name, last_name, data } = contact;
      
      // Determine recipient
      const recipient = IS_TEST_MODE ? TEST_EMAIL_RECIPIENT : email;
      
      // Extract data
      const companyName = (data && data.company) ? data.company : '';
      const fullName = (first_name && last_name) ? `${first_name} ${last_name}` : (first_name || 'Partner');

      console.log(`📨 Sending to ${recipient} (Original: ${email}) - Company: ${companyName}`);

      try {
        const { data: emailData, error } = await resend.emails.send({
            from: 'Topgun Security <verwaltung@topgun-security.de>',
            to: [recipient],
            subject: `Sicherheit für ${companyName || 'Ihr Geschäft'} – Exklusiv-Angebot`,
            react: React.createElement(CampaignEmailTemplate, { 
              name: fullName, 
              company: companyName, 
              offerCode: "TOPGUN30" 
            }) as React.ReactElement, 
        });

        if (error) {
            console.error('❌ Error sending email:', error);
            failCount++;
        } else {
            console.log(`✅ Sent! ID: ${emailData?.id}`);
            sentCount++;
        }

        // Rate limit protection
        await new Promise(r => setTimeout(r, 1000));

      } catch (e) {
          console.error('❌ Critial Error:', e);
          failCount++;
      }
  }

  console.log(`\n🎉 Campaign Finished!`);
  console.log(`✅ Sent: ${sentCount}`);
  console.log(`❌ Failed: ${failCount}`);
}

sendCampaign();
