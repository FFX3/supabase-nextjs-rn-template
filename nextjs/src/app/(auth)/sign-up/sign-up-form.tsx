'use client'

import { signup } from '@/features/auth/actions'
import { useActionState } from 'react';

export function SignupForm() {
  
  const [state, action, isPending] = useActionState(signup, { redirect: '/confirm-email' })
  
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Sign Up
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
            type="email"
            id="email"
            name="email"
            disabled={isPending}
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
            type="password"
            id="password"
            name="password"
            disabled={isPending}
            placeholder="••••••••"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
          />
          { !!state?.errors && !!state.errors['password'] && <p className="mt-1 text-sm text-red-500">{state.errors['password'].message}</p> }
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?{" "}
        <a 
          href="/login"
          className="text-indigo-600 hover:text-indigo-500">
          Login
        </a>
      </p>
    </div>
  );
};

export default SignupForm;

