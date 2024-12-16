-- Verify supabase-template:interface-schema on pg

BEGIN;

    SELECT has_schema_privilege('interface', 'usage')

ROLLBACK;
