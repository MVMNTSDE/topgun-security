
'use server';

import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  content: string; // Markdown or HTML
  created_at: string;
  updated_at: string;
}

export async function getTemplates() {
  const { data, error } = await supabase
    .from('email_templates')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching templates:", error);
    return [];
  }
  return data as EmailTemplate[];
}

export async function getTemplate(id: string) {
  const { data, error } = await supabase
    .from('email_templates')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data as EmailTemplate;
}

export async function createTemplateAction(formData: FormData) {
  const name = formData.get('name') as string;
  const subject = formData.get('subject') as string;
  const content = formData.get('content') as string;

  if (!name || !subject || !content) {
    throw new Error("Missing required fields");
  }

  const { error } = await supabase
    .from('email_templates')
    .insert({ name, subject, content });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath('/admin/mailing/templates');
  redirect('/admin/mailing/templates');
}

export async function updateTemplateAction(id: string, formData: FormData) {
  const name = formData.get('name') as string;
  const subject = formData.get('subject') as string;
  const content = formData.get('content') as string;

  const { error } = await supabase
    .from('email_templates')
    .update({ name, subject, content, updated_at: new Date().toISOString() })
    .eq('id', id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath('/admin/mailing/templates');
  revalidatePath(`/admin/mailing/templates/${id}`);
  redirect('/admin/mailing/templates');
}

export async function deleteTemplateAction(id: string) {
  const { error } = await supabase
    .from('email_templates')
    .delete()
    .eq('id', id);

  if (error) throw new Error(error.message);
  
  revalidatePath('/admin/mailing/templates');
}
