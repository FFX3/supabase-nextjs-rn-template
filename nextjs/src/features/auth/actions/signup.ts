'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

type ErrorObject = { [key: string]: { message: string } }

type SignupState = {
    errors?: ErrorObject
    email?: string,
    password?: string,
    redirect: string,
}

export async function signup(oldState: SignupState, formData: FormData): Promise<SignupState> {

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const state: SignupState = {
      ...oldState,
      email,
      password,
  }

  state.errors = {}

  const supabase = await createClient()

  if(!email) {
    state.errors['email'] = { message: 'Email is required' }
  }

  if(!password) {
    state.errors['password'] = { message: 'Password is required' }
  }

  if(Object.keys(state.errors).length){
    return state
  }

  const payload = {
    email: email! as string,
    password: password! as string,
  }

  const { error: supabaseError } = await supabase.auth.signUp(payload)

  if (supabaseError) {
    state.errors['email'] = { message: supabaseError.message } 
    return state
  }

  revalidatePath(state.redirect, 'layout')
  redirect(`${state.redirect}?email=${email}`)

}
