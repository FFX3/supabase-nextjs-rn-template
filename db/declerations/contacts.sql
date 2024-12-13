drop table if exists data.contacts cascade;

create table
  data.contacts (
    id serial primary key,
    created_at timestamp with time zone not null default now(),
    user_id uuid references profiles (id) on delete cascade,
    first_name text null,
    last_name text null,
    phone_number text null,
    email text null,
    linkedin text null
  );

create or replace view
  public.contacts with(security_invoker) as
select
  contacts.id,
  contacts.first_name,
  contacts.last_name,
  contacts.phone_number,
  contacts.email,
  contacts.linkedin
from
  data.contacts;

ALTER TABLE data.contacts ENABLE ROW LEVEL SECURITY;

create policy "Owner can view and edit"
on data.contacts
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

