'use client'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import { useState } from 'react'

export default function AccountInfoClientSide() {

  const [user, setUser] = useState<User>()
  
  const supabase = createClient()
  supabase.auth.getUser().then(({ data, error }) => {
      if(error) {
          console.error
          return
      }

      setUser(data.user)
  })

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={user?.email} disabled />
      </div>
    </div>
  )
}
