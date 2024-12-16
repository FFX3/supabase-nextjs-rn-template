-- Verify supabase-template:users on pg

BEGIN;

    -- check table exists
    SELECT  id, email
    FROM users
    WHERE FALSE;

    -- test trigger
    DO $$
    DECLARE user_id uuid := '00000000-0000-0000-0000-000000000000';
    BEGIN
        INSERT INTO auth.users
        (instance_id, id, aud, "role", email, encrypted_password, email_confirmed_at, invited_at, confirmation_token, confirmation_sent_at, recovery_token, recovery_sent_at, email_change_token_new, email_change, email_change_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, created_at, updated_at, phone, phone_confirmed_at, phone_change, phone_change_token, phone_change_sent_at, email_change_token_current, email_change_confirm_status, reauthentication_token, is_sso_user, is_anonymous)
        VALUES('00000000-0000-0000-0000-000000000000'::uuid, user_id, 'authenticated', 'authenticated', '0@0', '$2a$10$87R2wZS3gio0KQdMpL5cDO/XyedHcMLVCc7cgCXTqH.m6BRFG1Kti', '2024-12-14 01:12:57.325', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}'::jsonb, '{"email": "0@0"}'::jsonb, NULL, '2024-12-14 01:12:57.323', '2024-12-14 01:12:57.325', NULL, NULL, '', '', NULL, '', 0, '', false, false);

        ASSERT 1 = (SELECT count(*) FROM public.users WHERE id = user_id), 'public.users entry was not created';
    END$$;

ROLLBACK;
