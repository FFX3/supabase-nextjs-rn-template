import { createSeedClient } from '@snaplet/seed'

async function main() {

  const seed = await createSeedClient({ dryRun: false })
  
  await seed.$resetDatabase()

  // password is "bingo"
  const PASSWORD_HASH = "$2a$10$asnydYKT4kWhXHomhKgtRe9VA4iiAON4mEUF7ON5tjp7g91ghEJDa"

  const email = `default@test`

  await seed.auth_users((x) => x(1, {
      email,
      raw_user_meta_data: { seeded: true },
      encrypted_password: PASSWORD_HASH,
      is_super_admin: false,
      banned_until: null,
      instance_id: '00000000-0000-0000-0000-000000000000',
      role: 'authenticated',
      aud: 'authenticated',
      public_users: [{
          email,
          organizations: [{
              contacts: (x) => x(10, {})
          }],
      }]
  }))




  process.exit()
}

main()
