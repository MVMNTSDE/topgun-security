"use server";

import { createClient } from "@/utils/supabase/server";

export async function getLeads(
  page = 1,
  limit = 50,
  status?: string,
  search?: string,
) {
  const supabase = await createClient();
  let query = supabase.from("leads").select("*", { count: "exact" });

  if (status && status !== "all") {
    query = query.eq("status", status);
  }

  if (search) {
    query = query.or(`email.ilike.%${search}%,company.ilike.%${search}%`);
  }

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, error, count } = await query
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) {
    console.error("Error fetching leads:", error);
    return { leads: [], count: 0, error };
  }

  return { leads: data, count: count || 0, error: null };
}

export async function deleteLeadAction(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("leads").delete().eq("id", id);
  if (error) return { success: false, message: error.message };
  return { success: true, message: "Lead deleted" };
}

export async function updateLeadStatusAction(id: string, status: string) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("leads")
    .update({ status })
    .eq("id", id);
  if (error) return { success: false, message: error.message };
  return { success: true, message: "Status updated" };
}

export async function getLeadById(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching lead:", error);
    return null;
  }
  return data;
}
