-- Revert supabase-template:util-schema from pg

BEGIN;

    drop schema util cascade;

COMMIT;
