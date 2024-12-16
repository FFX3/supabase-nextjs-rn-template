-- Deploy supabase-template:contacts to pg
-- requires: organizations
-- requires: util-schema

BEGIN;

    CREATE TABLE public.contacts (
        id uuid primary key,
        created_at timestamp with time zone not null default now(),
        organization_id uuid not null references organizations (id) on delete cascade,
        first_name text null,
        last_name text null,
        phone_number text null,
        email text null,
        linkedin text null
    );

    ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

    CREATE POLICY "Organization member can all"
    ON public.contacts FOR ALL
    TO authenticated
    USING (organization_id in (select organizations_user_is_member()));

    create function util.guard_contact_organization_id()
    returns trigger 
    language plpgsql
    as
    $$ BEGIN
        ASSERT old.organization_id = new.organization_id, 'Changing organization_id is not allowed';
    END; $$;

    create trigger guard_contact_organization_id
    before update on public.contacts for each row
    execute procedure util.guard_contact_organization_id();

    create view interface.contacts 
    with(security_invoker=true) as
    select
        id,
        first_name,
        last_name,
        phone_number,
        email,
        linkedin
    from
        public.contacts;

COMMIT;
