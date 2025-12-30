
import { Resend } from 'resend';
import dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config({ path: '.env.local' });
dotenv.config();

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

async function check() {
  const key = process.env.RESEND_API_KEY || '';
  console.log(`🔑 Using Key matching: ${key.substring(0, 10)}...`);
  console.log(`🔍 Checking Audience: ${AUDIENCE_ID}`);
  
  if (!AUDIENCE_ID) {
      console.error('No Audience ID found.');
      return;
  }

  try {
      const response = await resend.contacts.list({
          audienceId: AUDIENCE_ID,
      });
      
      console.log('API Response:', response);
      
      if (response.data && response.data.data.length > 0) {
          console.log(`✅ Update: Found ${response.data.data.length} contacts via API.`);
          console.log('Sample:', response.data.data[0]);
      } else {
          console.log('❌ No contacts found via API either.');
      }

      // Also list audiences to see if we have access to the right one
      const audiences = await resend.audiences.list();
      console.log('Available Audiences:', audiences.data?.data?.map(a => ({ id: a.id, name: a.name })));

  } catch (e: any) {
      console.error('Error:', e?.message || e);
  }
}

check();
