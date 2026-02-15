
'use server';

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function getClients() {
    const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('company_name', { ascending: true });
    
    if (error) {
        console.error("Error fetching clients:", error);
        return [];
    }
    return data;
}
