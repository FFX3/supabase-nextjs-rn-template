import { createSeedClient } from '@snaplet/seed'
import { copycat } from '@snaplet/copycat'
import { createClient } from '@supabase/supabase-js'
import { firstName } from '@snaplet/copycat/dist/firstName';

async function main() {

  const supabase = createClient(
    'http://127.0.0.1:54321',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU'
  );
  
  const seed = await createSeedClient()
  
  await seed.$resetDatabase()

  const PASSWORD = "bingo";
  for (let i = 0; i < 5; i++) {
    const email = `${i}@test`
    // const fullName = copycat.fullName(i);
    // const userName = copycat.username(i);

    {
      const { data: user } = await supabase.from('profiles').select('id').eq('email', email).single()

      if(user) {
        console.log(`Deleting user "${user.id}" with email "${email}"`)
        await supabase.auth.admin.deleteUser(user.id)
      }
    }
    
    const { data: { user } } = await supabase.auth.admin.createUser({
      email,
      password: PASSWORD,
      email_confirm: true,
      user_metadata: { email }
    });

    if(!user) {
        throw('Failed to create user')
    }

    console.log(`Created user with email "${user.email}" and id "${user.id}"`)

    await seed.contacts([{
        id: undefined,
        user_id: user.id,
    }])

  }

  process.exit()
}

main()
