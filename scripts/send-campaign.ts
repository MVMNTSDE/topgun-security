
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
const IS_TEST_MODE = false;

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
      
      // Name Logic:
      // User Requirement: Use "Sehr geehrte Damen und Herren," if no last name is present.
      // Also validate against long garbage strings.
      
      let salutation = 'Sehr geehrte Damen und Herren,';
      let cleanName = '';

      const hasLastName = last_name && last_name.trim().length > 1 && last_name.length < 20;
      const hasFirstName = first_name && first_name.trim().length > 1 && first_name.length < 20;

      if (hasLastName) {
          // If we have a valid last name, we can try a personal greeting.
          // Since we might not know gender (Herr/Frau), we can default to "Guten Tag Vorname Nachname," or keep the friendly "Hallo".
          // Given the "Exklusiv-Angebot" context, "Guten Tag" might be safer effectively, or stick to "Hallo" if that's the brand voice.
          // Let's use "Guten Tag" as a middle ground between "Hallo" and "Sehr geehrte...". 
          // However, the previous default was "Hallo". If the user didn't complain about "Hallo" explicitly, but about the *weird inputs*,
          // I will use "Hallo [First] [Last]" if both exist, otherwise just formal.
          
          if (hasFirstName) {
             cleanName = `${first_name} ${last_name}`;
             salutation = `Hallo ${cleanName},`;
          } else {
             // Only last name? "Hallo Herr/Frau X" requires gender. 
             // Safer to fallback to formal if we only have one part and can't determine gender.
             salutation = 'Sehr geehrte Damen und Herren,';
          }
      }

      console.log(`📨 Sending to ${recipient} (Original: ${email}) - Company: ${companyName} | Salutation: "${salutation}"`);

      try {
        const { data: emailData, error } = await resend.emails.send({
            from: 'Topgun Security <verwaltung@topgun-security.de>',
            to: [recipient],
            subject: `Sicherheit für ${companyName || 'Ihr Geschäft'} – Exklusiv-Angebot`,
            react: React.createElement(CampaignEmailTemplate, { 
              name: cleanName, // Optional now
              salutation: salutation, 
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
