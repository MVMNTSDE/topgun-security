import { Resend } from 'resend';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function setupResend() {
  console.log('🚀 Starting Resend Setup...');

  // 1. Configure Contact Properties
  const properties = [
    { key: 'company', type: 'text', fallbackValue: 'Privat' },
    { key: 'industry', type: 'text', fallbackValue: 'General' },
    { key: 'service', type: 'text', fallbackValue: 'Security' },
    { key: 'phone', type: 'text', fallbackValue: '' },
    { key: 'source_type', type: 'text', fallbackValue: 'website' },
    { key: 'security_level', type: 'text', fallbackValue: 'Standard' },
    { key: 'start_date', type: 'text', fallbackValue: 'ASAP' },
  ];

  console.log('\n🔧 Configuring Contact Properties...');
  for (const prop of properties) {
    try {
      await resend.contactProperties.create({
        key: prop.key,
        type: 'text', 
        fallbackValue: prop.fallbackValue,
      });
      console.log(`✅ Created property: ${prop.key}`);
    } catch (error: any) {
      if (error?.message?.includes('already exists') || error?.statusCode === 409) {
        console.log(`ℹ️ Property already exists: ${prop.key}`);
      } else {
        console.error(`❌ Failed to create ${prop.key}:`, error?.message || error);
      }
    }
  }

  // 2. Configure Segments
  const segments = [
    { name: 'Cold Leads (Import)' },
    { name: 'Mandate Inquiries' },
    { name: 'Website Contact' },
    { name: 'Partners' }
  ];

  console.log('\n📂 Configuring Segments...');
  for (const seg of segments) {
    try {
      // Note: Resend API doesn't have a simple "check if exists" by name without listing.
      // We will try to create it. Typical "already exists" might not throw 409 for segments with same name,
      // so we might want to list first or just create. 
      // For safety, we list first.
      
      const allSegments = await resend.segments.list();
      const existing = allSegments.data?.data?.find((s: any) => s.name === seg.name);

      if (existing) {
        console.log(`ℹ️ Segment already exists: ${seg.name} (${existing.id})`);
      } else {
        const created = await resend.segments.create({
          name: seg.name,
        });
        console.log(`✅ Created segment: ${seg.name} (${created.data?.id})`);
      }
    } catch (error: any) {
      console.error(`❌ Failed to configure segment ${seg.name}:`, error?.message || error);
    }
  }

  // 3. Configure Topics
  const topics = [
    { name: 'Newsletter', description: 'Allgemeine Neuigkeiten und Updates' },
    { name: 'Sicherheits-Warnungen', description: 'Wichtige Sicherheitsinformationen für Kunden' }
  ];

  console.log('\n📣 Configuring Topics...');
  for (const topic of topics) {
    try {
      // Create blindly, catch error if exists (no list/check easy pattern provided in snippets for topics that guarantees uniqueness simply)
      // Actually snippet shows list/get/create. We'll try create.
      await resend.topics.create({
        name: topic.name,
        description: topic.description,
        default_subscription: 'opt_out',
      });
      console.log(`✅ Created topic: ${topic.name}`);
    } catch (error: any) {
       // Resend might return 409 or similar.
       if (error?.message?.includes('already exists') || error?.statusCode === 409) {
          console.log(`ℹ️ Topic already exists: ${topic.name}`);
       } else {
          console.error(`❌ Failed to create topic ${topic.name}:`, error?.message || error);
       }
    }
  }

  console.log('\n✨ Setup complete.');
}

setupResend();
