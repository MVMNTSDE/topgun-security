
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testConnection() {
  console.log('Testing Supabase connection...');
  
  try {
    // Try to select from the 'leads' table (limit 1)
    const { data, error } = await supabase
      .from('leads')
      .select('count')
      .limit(1);

    if (error) {
      console.error('❌ Connection failed or table "leads" not found:', error.message);
      console.error('Details:', error);
    } else {
      console.log('✅ Connection successful!');
      console.log('✅ Table "leads" is accessible.');
    }
  } catch (err) {
    console.error('❌ Unexpected error:', err);
  }
}

testConnection();
