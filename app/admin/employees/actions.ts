
'use server';

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function getEmployees() {
    const { data, error } = await supabase
        .from('employees')
        .select('*')
        .order('last_name', { ascending: true });
    
    if (error) {
        console.error("Error fetching employees:", error);
        return [];
    }
    return data;
}
