'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

type ErrorObject = { [key: string]: { message: string } }

type ChangePasswordState = {
    redirect?: string,
    errors?: ErrorObject
    password?: string
}

export async function changePassword(oldState: ChangePasswordState, formData: FormData): Promise<ChangePasswordState> {
  
  const password = formData.get('password') as string
  const state: ChangePasswordState = {
      ...oldState,
      password,
  }

  state.errors = {}

  const supabase = await createClient()

  if(!password) {
    state.errors['password'] = { message: 'The new password is required' }
  }

  if(Object.keys(state.errors).length){
    return state
  }

  const { error: supabaseError } = await supabase.auth.updateUser({ password })

  if (supabaseError) {
    state.errors['password'] = { message: supabaseError.message } 
    return state
  }

  if(state.redirect) {
    revalidatePath(state.redirect, 'layout')
    redirect(state.redirect)
  }

  return state

}
