
'use server';

import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function getApplicants() {
    const { data, error } = await supabase
        .from('applicants')
        .select('*')
        .order('created_at', { ascending: false });
    
    if (error) {
        console.error("Error fetching applicants:", error);
        return [];
    }
    return data;
}

export async function createApplicant(formData: FormData) {
    const rawData = {
        full_name: formData.get('full_name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        position: formData.get('position') as string,
        notes: formData.get('notes') as string,
        status: 'new'
    };

    const { error } = await supabase.from('applicants').insert(rawData);

    if (error) {
        return { success: false, message: error.message };
    }

    revalidatePath('/admin/applicants');
    return { success: true, message: 'Applicant created' };
}

export async function updateApplicantStatus(id: string, newStatus: string) {
    const { error } = await supabase
        .from('applicants')
        .update({ status: newStatus })
        .eq('id', id);

    if (error) return { success: false, message: error.message };
    
    revalidatePath('/admin/applicants');
    return { success: true };
}
