
import { Resend } from 'resend';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Load environment variables
dotenv.config({ path: '.env.local' });
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

if (!AUDIENCE_ID) {
  console.error('❌ RESEND_AUDIENCE_ID is missing in .env.local');
  process.exit(1);
}

const CSV_FILE_PATH = path.join(process.cwd(), 'leads.csv');

if (!fs.existsSync(CSV_FILE_PATH)) {
  console.error(`❌ File not found: ${CSV_FILE_PATH}`);
  console.log('Please place your CSV file in the root directory and name it "leads.csv".');
  process.exit(1);
}

// Simple CSV Parser (splitting by comma, handling quotes roughly)
function parseCSV(content: string) {
  const lines = content.split(/\r?\n/).filter(l => l.trim() !== '');
  if (lines.length === 0) return [];

  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i];
    // This regex handles commas inside quotes
    const values = currentLine.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || []; 
    // Fallback split if regex fails or simple structure
    const simpleValues = currentLine.split(',').map(v => v.trim().replace(/^"|"$/g, ''));

    const row: any = {};
    headers.forEach((header, index) => {
      // Use simple split for robustness if regex didn't output enough cols
      // Note: This is a basic parser. For complex CSVs with commas in values, standard lib is better.
      const val = simpleValues[index] || ''; 
      row[header] = val;
    });
    data.push(row);
  }
  return data;
}

async function run() {
  // Specific path for the user's file
  const SPECIFIC_CSV_PATH = path.join(process.cwd(), '2025121023_Souvenirshop_Köln.csv');
  const targetPath = fs.existsSync(SPECIFIC_CSV_PATH) ? SPECIFIC_CSV_PATH : CSV_FILE_PATH;

  console.log(`🚀 Reading ${targetPath}...`);
  const fileContent = fs.readFileSync(targetPath, 'utf-8');
  const results = parseCSV(fileContent);

  console.log(`📋 Found ${results.length} rows. Importing into Audience: ${AUDIENCE_ID}`);

  // 1. Get or Create "Cold Leads (Import)" Segment
  let segmentId: string | undefined;
  try {
    // Note: resend.segments.list() might not be available or returns different structure depending on version
    // We will just try to create or assume it exists if finding fails. 
    // For safety, we will just CREATE a segment with a timestamp if we want to be unique, 
    // or just use a hardcoded known one. 
    // Let's try to 'get' by listing.
    const allSegments = await resend.segments.list();
    const segmentName = 'Cold Leads (Souvenirs)';
    const existing = allSegments.data?.data?.find((s: any) => s.name === segmentName);
    
    if (existing) {
        segmentId = existing.id;
        console.log(`ℹ️ Using existing segment: ${segmentName} (${segmentId})`);
    } else {
        const created = await resend.segments.create({ name: segmentName });
        segmentId = created.data?.id;
        console.log(`✅ Created new segment: ${segmentName} (${segmentId})`);
    }
  } catch (e) {
      console.warn('⚠️ Could not resolve Segment ID. Contacts will be added to Audience only.');
  }

  let successCount = 0;
  let failCount = 0;

  for (const row of results) {
     // Helper to get value from multiple possible keys
     const getVal = (keys: string[]) => {
        for (const k of keys) {
            // Exact match first, then case insensitive
            let foundKey = Object.keys(row).find(rk => rk === k);
            if (!foundKey) foundKey = Object.keys(row).find(rk => rk.toLowerCase() === k.toLowerCase());
            
            if (foundKey && row[foundKey] && row[foundKey].trim() !== '') return row[foundKey].trim();
        }
        return undefined;
     };

    // Priority for Email: Main E-Mail -> Contact 1 -> Contact 2
    const email = getVal(['E-Mail', 'Kontaktperson 1 - E-Mail', 'Kontaktperson 2 - E-Mail', 'email']);
    
    // Priority for Name: Contact 1 -> Name (General)
    const rawName = getVal(['Kontaktperson 1 - Name', 'Name', 'Kontaktperson 2 - Name']) || '';
    
    // Name splitting logic
    let firstName = '';
    let lastName = '';
    
    if (rawName) {
         // Remove titles if present (simple check)
         const cleanName = rawName.replace(/^(Herr|Frau|Dr\.|Prof\.)\s+/i, '');
         const parts = cleanName.split(' ');
         if (parts.length > 1) {
             firstName = parts[0];
             lastName = parts.slice(1).join(' ');
         } else {
             firstName = cleanName;
         }
    }

    const company = getVal(['Unternehmen', 'company']) || '';
    const phone = getVal(['Telefonnummer (Google Maps)', 'Telefonnummer (FastPal Enrichment)', 'Kontaktperson 1 - Telefon']) || '';
    const city = getVal(['Stadt', 'Ort']) || '';
    const zip = getVal(['PLZ']) || '';
    const address = getVal(['Straße']) || '';
    const website = getVal(['Webseite']) || '';
    const industry = getVal(['Unternehmensart', 'Branche']) || 'Souvenir Shop'; // Default from CSV context

    if (!email || !email.includes('@')) {
    //   console.warn(`⚠️  Skipping row (No Email): ${company}`);
      failCount++;
      continue;
    }

    try {
      // 1. Create/Update Contact
      // Note: Resend update is implicit on create if email exists (upsert)
      const contact = await resend.contacts.create({
        audienceId: AUDIENCE_ID!,
        email: email,
        firstName: firstName,
        lastName: lastName,
        unsubscribed: false,
        data: {
          company: company,
          phone: phone,
          industry: industry,
          city: city,
          zip: zip,
          address: address,
          website: website,
          source_type: 'cold_import_souvenir',
        },
      } as any);

      const contactId = contact.data?.id;

      // 2. Add to Segment (if segment found and contact created)
      if (segmentId && contactId) {
          try {
            await resend.contacts.segments.add({
                contactId: contactId,
                segmentId: segmentId
            });
          } catch(segErr) {
              // Ignore if already in segment
          }
      }

      console.log(`✅ Imported: ${email} (${company})`);
      successCount++;
      
      // Rate limit to avoid hitting API limits
      await new Promise(r => setTimeout(r, 150));

    } catch (error: any) {
      console.error(`❌ Failed to import ${email}:`, error?.message || error);
      failCount++;
    }
  }

  console.log(`\n🎉 Import Complete!`);
  console.log(`✅ Success: ${successCount}`);
  console.log(`❌ Failed: ${failCount}`);
}

run();
