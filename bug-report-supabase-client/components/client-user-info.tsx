'use client'

import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

export default function ClientUserInfo() {

  const [user, setUser] = useState<User>()
  
  const supabase = createClient()
  useEffect(()=>{
    supabase.auth.getUser().then(({ data, error }) => {
      if(error) {
        console.error
        return
      }

      setUser(data.user)
    })
  },[])

  console.log("CLIENT", user)

  return (
    <div>
      <h1>Client</h1>
      <p>{user?.email}</p>
    </div>
  )
}
