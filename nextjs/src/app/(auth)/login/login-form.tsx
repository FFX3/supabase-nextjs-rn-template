'use client'

import { login } from '@/features/auth/actions'
import { useActionState } from 'react';

export function LoginForm() {
  
  const [state, action, isPending] = useActionState(login, { redirect: "/" })

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Login
      </h2>
      <form className="space-y-4" action={action}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            disabled={isPending}
            type="email"
            id="email"
            name="email"
            defaultValue={state?.email}
            placeholder="you@example.com"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
          />
          { !!state?.errors && !!state.errors['email'] && <p className="mt-1 text-sm text-red-500">{state.errors['email'].message}</p> }
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            disabled={isPending}
            type="password"
            id="password"
            name="password"
            defaultValue={state?.password}
            placeholder="••••••••"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
          />
          { !!state?.errors && !!state.errors['password'] && <p className="mt-1 text-sm text-red-500">{state.errors['password'].message}</p> }
        </div>
        <div className="flex items-center justify-between">
          <a
            href="/forgot-password"
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </a>
        </div>
        <button
          disabled={isPending}
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Don&apos;t have an account?{" "}
        <a 
          href="/sign-up"
          className="text-indigo-600 hover:text-indigo-500">
          Sign up
        </a>
      </p>
    </div>
  );
}

export default LoginForm
