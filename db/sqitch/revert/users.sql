-- Revert supabase-template:users from pg

BEGIN;

    DROP TABLE users CASCADE;
    DROP TRIGGER on_auth_user_created ON auth.users;
    DROP FUNCTION auth.handle_new_user();

COMMIT;
