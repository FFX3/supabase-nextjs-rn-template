-- Revert supabase-template:interface-schema from pg

BEGIN;

    DROP SCHEMA INTERFACE;

COMMIT;
