-- Verify supabase-template:contacts on pg

BEGIN;

    select 
        id, 
        created_at,
        organization_id,
        first_name,
        last_name,
        phone_number,
        email,
        linkedin
    from contacts
    where false;

    select
        id,
        first_name,
        last_name,
        phone_number,
        email,
        linkedin
    from interface.contacts
    where false;

ROLLBACK;
