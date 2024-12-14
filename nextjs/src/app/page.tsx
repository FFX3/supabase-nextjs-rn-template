import ClientUserInfo from './client-user-info'
import { createClient } from '@/utils/supabase/server'

export default async function Home() {

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log("SERVER", user)

  return (
    <div>
      <ClientUserInfo />
      <div>
        <h1>Server side</h1>
        <p>{ user?.email }</p>
      </div>
      <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  )
}
