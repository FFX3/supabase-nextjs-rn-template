-- Deploy supabase-template:organization to pg
-- requires: users

BEGIN;

    CREATE TABLE organizations (
        id uuid PRIMARY KEY,
        owner_id uuid not null REFERENCES users (id) on delete cascade
    );

    ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;

    CREATE TABLE organization_members (
        organization_id uuid not null REFERENCES organizations (id) on DELETE CASCADE,
        user_id uuid not null REFERENCES users (id) on DELETE CASCADE,
        PRIMARY KEY (organization_id, user_id)
    );

    ALTER TABLE public.organization_members ENABLE ROW LEVEL SECURITY;

    CREATE POLICY "Owner do what he wants"
    ON public.organizations FOR ALL
    TO authenticated
    USING ((select auth.uid()) = owner_id)
    WITH CHECK ((select auth.uid()) = owner_id);

    create function organizations_user_is_member()
    returns uuid
    security definer
    stable
    language sql as $$
        SELECT organization_id
        FROM organization_members om
        WHERE om.user_id = (select auth.uid())
    $$;

    CREATE POLICY "Members can view"
    ON public.organizations FOR SELECT
    TO authenticated
    USING (id in (select organizations_user_is_member()));

COMMIT;
