create schema interface;
/* https://supabase.com/docs/guides/api/using-custom-schemas */
GRANT USAGE ON SCHEMA interface TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA interface TO anon, authenticated, service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA interface TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA interface TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA interface GRANT ALL ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA interface GRANT ALL ON ROUTINES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA interface GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;

/* contacts */
drop table if exists public.contacts cascade;

create table
  public.contacts (
    id serial primary key,
    created_at timestamp with time zone not null default now(),
    user_id uuid references profiles (id) on delete cascade,
    first_name text null,
    last_name text null,
    phone_number text null,
    email text null,
    linkedin text null
  );
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

create or replace view
  interface.contacts with(security_invoker=true) as
select
  contacts.id,
  contacts.first_name,
  contacts.last_name,
  contacts.phone_number,
  contacts.email,
  contacts.linkedin
from
  public.contacts;

create policy "Owner can view and edit"
on public.contacts
to public
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);


