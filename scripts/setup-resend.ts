
import { Resend } from 'resend';
import dotenv from 'dotenv';

// Load environment variables (prefer .env.local for Next.js secrets)
dotenv.config({ path: '.env.local' });
dotenv.config(); // Fallback to standard .env

const resend = new Resend(process.env.RESEND_API_KEY);

async function setupResendProperties() {
  const properties = [
    { key: 'company', type: 'string', fallbackValue: 'Privat' },
    { key: 'industry', type: 'string', fallbackValue: 'General' },
    { key: 'service', type: 'string', fallbackValue: 'Security' },
    { key: 'phone', type: 'string', fallbackValue: '' },
    { key: 'source_type', type: 'string', fallbackValue: 'website' }, // 'contact', 'funnel', etc.
  ];

  console.log('🚀 Setting up Resend Contact Properties...');

  for (const prop of properties) {
    try {
      // Note: There isn't a "check if exists" easy method without listing all.
      // We'll try to create it. If it fails (already exists), we catch it.
      await resend.contactProperties.create({
        key: prop.key,
        type: 'string', // resend type is just string or 'boolean' etc? user passed 'string'
        fallbackValue: prop.fallbackValue,
      });
      console.log(`✅ Created property: ${prop.key}`);
    } catch (error: any) {
      if (error?.message?.includes('already exists')) {
        console.log(`ℹ️ Property already exists: ${prop.key}`);
      } else {
        console.error(`❌ Failed to create ${prop.key}:`, error.message);
      }
    }
  }

  console.log('✨ Setup complete.');
}

setupResendProperties();
