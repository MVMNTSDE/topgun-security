-- Create leads table
create table if not exists leads (
    id uuid default gen_random_uuid() primary key,
    email text not null unique,
    first_name text,
    last_name text,
    company text,
    source text,
    -- e.g. 'purchased_list_2026'
    status text default 'new',
    -- 'new', 'contacted', 'unsubscribed', 'bounced'
    unsubscribed_at timestamptz,
    last_contacted_at timestamptz,
    created_at timestamptz default now()
);
-- Create mail_logs table
create table if not exists mail_logs (
    id uuid default gen_random_uuid() primary key,
    lead_id uuid references leads(id),
    campaign_name text,
    recipient_email text,
    status text,
    -- 'sent', 'failed'
    error_message text,
    sent_at timestamptz default now()
);
-- Index for faster lookups
create index if not exists leads_email_idx on leads(email);
create index if not exists leads_status_idx on leads(status);
-- RLS Policies (Optional: Adjust based on your auth needs, enabling read for service role is default)
alter table leads enable row level security;
alter table mail_logs enable row level security;
-- Allow service role full access (usually default, but good to be explicit if using Supabase client)
create policy "Enable access for service role" on leads for all using (true) with check (true);
create policy "Enable access for service role" on mail_logs for all using (true) with check (true);