-- Deploy supabase-template:users to pg

BEGIN;

    CREATE TABLE users (
        id uuid NOT NULL,
        email text NULL,
        CONSTRAINT users_pkey PRIMARY KEY (id),
        CONSTRAINT users_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE
    );

    ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

    CREATE FUNCTION auth.handle_new_user()
    RETURNS trigger
    LANGUAGE plpgsql
    SECURITY DEFINER
    AS $$
    DECLARE
        email text;
        seeded bool;
    BEGIN
        seeded := new.raw_user_meta_data->> 'seeded';
        if seeded then
            return new;
        end if;

        email := new.raw_user_meta_data->> 'email';

        assert email is not null, 'add the email to the raw_user_meta_data';

        INSERT INTO public.users (id, email)
        VALUES (new.id, new.raw_user_meta_data ->> 'email');

        return new;
    END;$$;

    CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE PROCEDURE auth.handle_new_user();

COMMIT;
