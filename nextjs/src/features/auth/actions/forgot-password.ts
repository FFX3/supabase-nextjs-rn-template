'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { headers } from 'next/headers'

type ErrorObject = { [key: string]: { message: string } }

type ForgotPasswordState = {
    redirect: string,
    errors?: ErrorObject
    email?: string,
}

export async function forgotPassword(oldState: ForgotPasswordState, formData: FormData): Promise<ForgotPasswordState> {

  const email = formData.get('email') as string
  const state: ForgotPasswordState = {
      ...oldState,
      email,
  }

  state.errors = {}

  const supabase = await createClient()

  if(!email) {
    state.errors['email'] = { message: 'Email is required' }
  }

  if(Object.keys(state.errors).length){
    return state
  }

  const host = (await headers()).get('host')

  console.log("host", host)

  const { error: supabaseError } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `http://${host}/forgot-password/change` })

  if (supabaseError) {
    state.errors['email'] = { message: supabaseError.message } 
    return state
  }

  revalidatePath(state.redirect, 'layout')
  redirect(`${state.redirect}?email=${email}`)

}
