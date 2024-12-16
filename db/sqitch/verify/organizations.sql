-- Verify supabase-template:organization on pg

BEGIN;

    SELECT id, owner_id
    FROM organizations
    WHERE FALSE;

    SELECT organization_id, user_id
    FROM organization_members
    WHERE FALSE;

    SELECT organizations_user_is_member();

ROLLBACK;
