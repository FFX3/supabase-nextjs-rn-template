-- Revert supabase-template:contacts from pg

BEGIN;

    drop table contacts cascade;
    drop function util.guard_contact_organization_id cascade;

COMMIT;
