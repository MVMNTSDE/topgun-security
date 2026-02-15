
import { createClient } from '@/utils/supabase/server';

export async function getMailLogs(page = 1, limit = 50) {
    const supabase = await createClient();
    
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error, count } = await supabase
        .from('mail_logs')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(from, to);

    if (error) {
        console.error("Error fetching logs:", error);
        return { logs: [], count: 0, error };
    }

    return { logs: data, count: count || 0, error: null };
}
