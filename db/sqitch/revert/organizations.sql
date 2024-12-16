-- Revert supabase-template:organization from pg

BEGIN;

    DROP TABLE organization_members cascade;
    DROP TABLE organizations cascade;
    DROP FUNCTION organizations_user_is_member cascade;

COMMIT
