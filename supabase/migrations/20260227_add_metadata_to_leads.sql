-- Migration to add metadata column for fastpal details
alter table leads
add column if not exists metadata jsonb default '{}'::jsonb;
alter table leads
add column if not exists phone text;
alter table leads
add column if not exists website text;
alter table leads
add column if not exists address text;