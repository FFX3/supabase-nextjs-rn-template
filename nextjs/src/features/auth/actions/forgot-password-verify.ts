'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { VerifyOtpParams } from '@supabase/supabase-js'

type ErrorObject = { [key: string]: { message: string } }

type ForgotPasswordState = {
    redirect: string,
    errors?: ErrorObject
    email?: string,
    token?: string
}

export async function forgotPasswordVerify(oldState: ForgotPasswordState, formData: FormData): Promise<ForgotPasswordState> {

  const email = formData.get('email') as string
  const token = formData.get('token') as string
  const state: ForgotPasswordState = {
      ...oldState,
      email,
      token,
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

  const payload: VerifyOtpParams = {
      type: 'email',
      token,
      email,
  }

  const { error: supabaseError } = await supabase.auth.verifyOtp(payload)

  if (supabaseError) {
    state.errors['email'] = { message: supabaseError.message } 
    return state
  }

  revalidatePath(state.redirect, 'layout')
  redirect(state.redirect)

}
