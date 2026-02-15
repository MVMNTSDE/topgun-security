create table if not exists email_templates (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    subject text not null,
    content text not null,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);
alter table email_templates enable row level security;
create policy "Enable access for service role" on email_templates for all using (true) with check (true);