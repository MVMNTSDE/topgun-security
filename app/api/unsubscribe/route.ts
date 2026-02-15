import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// Init Supabase Client (Service Role preferred for admin tasks, but Anon might work if policy allows update)
// For security, using separate env vars if available, or falling back to standard NEXT_PUBLIC ones 
// BUT for writing to the DB based on a public link, we traditionally need a secure way or an open endpoint.
// Since this is a simple unsubscribe link from an email, we'll verify the email existence.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 });
  }

  try {
    // 1. Mark as unsubscribed in DB
    const { error } = await supabase
      .from('leads')
      .update({ 
        status: 'unsubscribed',
        unsubscribed_at: new Date().toISOString()
      })
      .eq('email', email);

    if (error) {
        console.error('Supabase error:', error);
        // Even if error (e.g. not found), we should probably show success to user to not leak info
    }

    // 2. Redirect to success page
    // Using 307 Temporary Redirect
    return NextResponse.redirect(new URL('/unsubscribe', request.url));

  } catch (error) {
    console.error('Unsubscribe error:', error);
    return NextResponse.redirect(new URL('/unsubscribe?error=1', request.url));
  }
}
