
'use server';

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function getReports() {
    // Join with employees and clients
    const { data, error } = await supabase
        .from('reports')
        .select(`
            *,
            employees (first_name, last_name),
            clients (company_name)
        `)
        .order('created_at', { ascending: false });
    
    if (error) {
        console.error("Error fetching reports:", error);
        return [];
    }
    return data;
}
