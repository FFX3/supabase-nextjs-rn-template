'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { VerifyEmailOtpParams } from '@supabase/supabase-js'

type ErrorObject = { [key: string]: { message: string } }

type verifyOtpState = {
    errors?: ErrorObject
    email?: string,
    token?: string,
    redirect: string
}

export async function confirmEmail(oldState: verifyOtpState, formData: FormData): Promise<verifyOtpState> {

  console.log(oldState)

  const token = formData.get('token') as string
  const email = formData.get('email') as string
  const state: verifyOtpState = {
      ...oldState,
      email,
      token
  }

  state.errors = {}

  const supabase = await createClient()

  if(!email) {
    revalidatePath('/', 'layout')
    redirect('/')
  }

  if(!token) {
    state.errors['token'] = { message: 'Code is required' }
  }

  if(Object.keys(state.errors).length){
    return state
  }

  const payload: VerifyEmailOtpParams = {
    type: 'email',
    email,
    token,
  }

  const { error: supabaseError } = await supabase.auth.verifyOtp(payload)

  if (supabaseError) {
    state.errors['token'] = { message: supabaseError.message } 
    return state
  }

  revalidatePath(state.redirect, 'layout')
  redirect(state.redirect)

}
