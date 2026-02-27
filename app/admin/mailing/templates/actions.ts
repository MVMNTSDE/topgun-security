"use server";

import { createClient } from "@supabase/supabase-js";

// Init admin client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  content: string;
  created_at?: string;
  updated_at?: string;
}

export async function getTemplates() {
  const { data, error } = await supabase
    .from("email_templates")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching templates:", error);
    return [];
  }
  return data || [];
}

export async function getTemplate(id: string) {
  const { data, error } = await supabase
    .from("email_templates")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching template:", error);
    return null;
  }
  return data;
}

export async function createTemplate(formData: FormData) {
  const name = formData.get("name") as string;
  const subject = formData.get("subject") as string;
  const content = formData.get("content") as string;

  if (!name || !subject || !content) {
    return { success: false, message: "Bitte alle Felder ausfüllen." };
  }

  const { error } = await supabase
    .from("email_templates")
    .insert([{ name, subject, content }]);

  if (error) {
    console.error("Error creating template:", error);
    return { success: false, message: error.message };
  }

  return { success: true, message: "Template erfolgreich erstellt." };
}

export async function updateTemplate(formData: FormData) {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const subject = formData.get("subject") as string;
  const content = formData.get("content") as string;

  if (!id || !name || !subject || !content) {
    return { success: false, message: "Bitte alle Felder ausfüllen." };
  }

  const { error } = await supabase
    .from("email_templates")
    .update({ name, subject, content, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    console.error("Error updating template:", error);
    return { success: false, message: error.message };
  }

  return { success: true, message: "Template erfolgreich gespeichert." };
}

export async function deleteTemplate(formData: FormData) {
  const id = formData.get("id") as string;

  if (!id) {
    return { success: false, message: "ID fehlt." };
  }

  const { error } = await supabase
    .from("email_templates")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting template:", error);
    return { success: false, message: error.message };
  }

  return { success: true, message: "Template gelöscht." };
}
