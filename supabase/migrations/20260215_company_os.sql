-- Company OS Schema
-- 1. Applicants (Bewerber)
create table if not exists applicants (
    id uuid default gen_random_uuid() primary key,
    full_name text not null,
    email text,
    phone text,
    position text,
    -- 'Sicherheitsmitarbeiter', 'Objektleiter', etc.
    status text default 'new',
    -- 'new', 'screened', 'interviewed', 'offered', 'hired', 'rejected'
    cv_url text,
    -- Link to storage
    notes text,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);
-- 2. Employees (Mitarbeiter)
create table if not exists employees (
    id uuid default gen_random_uuid() primary key,
    user_id uuid references auth.users(id),
    -- Optional link to Supabase Auth if they have login
    first_name text not null,
    last_name text not null,
    email text unique,
    phone text,
    role text default 'guard',
    -- 'guard' (Sicherheitsmitarbeiter), 'supervisor' (Einsatzleiter), 'admin'
    status text default 'active',
    -- 'active', 'inactive', 'on_leave'
    joined_at date default CURRENT_DATE,
    qualifications text [],
    -- Array of strings e.g. ['34a', 'First Aid', 'Fire Safety']
    avatar_url text,
    created_at timestamptz default now()
);
-- 3. Clients / Sites (Kunden / Objekte)
create table if not exists clients (
    id uuid default gen_random_uuid() primary key,
    company_name text not null,
    contact_person text,
    email text,
    phone text,
    address text,
    status text default 'active',
    -- 'active', 'churned', 'lead'
    contract_start_date date,
    notes text,
    created_at timestamptz default now()
);
-- 4. Reports / Wachbuch (Berichte)
create table if not exists reports (
    id uuid default gen_random_uuid() primary key,
    employee_id uuid references employees(id),
    client_id uuid references clients(id),
    type text default 'daily',
    -- 'daily' (Tagesbericht), 'incident' (Vorfall), 'patrol' (Rundgang)
    content text,
    -- Markdown or plain text description
    images text [],
    -- Array of image URLs
    severity text default 'low',
    -- 'low', 'medium', 'high', 'critical' (relevant for incidents)
    created_at timestamptz default now()
);
-- RLS Policies
-- Enable RLS
alter table applicants enable row level security;
alter table employees enable row level security;
alter table clients enable row level security;
alter table reports enable row level security;
-- Policies (Allow Service Role full access, could refine for specific authenticated users later)
create policy "Service Role Full Access Applicants" on applicants for all using (true) with check (true);
create policy "Service Role Full Access Employees" on employees for all using (true) with check (true);
create policy "Service Role Full Access Clients" on clients for all using (true) with check (true);
create policy "Service Role Full Access Reports" on reports for all using (true) with check (true);
-- Create some indexes
create index if not exists applicants_status_idx on applicants(status);
create index if not exists employees_status_idx on employees(status);
create index if not exists reports_client_idx on reports(client_id);
create index if not exists reports_created_at_idx on reports(created_at);