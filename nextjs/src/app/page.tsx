import AccountInfoClientSide from './account-client-side'
import { createClient } from '@/utils/supabase/server'

export default async function Home() {

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <>
      <h1>Client side</h1>
      <AccountInfoClientSide />
      <h1>Client side</h1>
      <p>{ user?.email }</p>
      <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </>
  )
}
