-- Verify supabase-template:util-schema on pg

BEGIN;

    SELECT has_schema_privilege('util', 'usage')

ROLLBACK;
