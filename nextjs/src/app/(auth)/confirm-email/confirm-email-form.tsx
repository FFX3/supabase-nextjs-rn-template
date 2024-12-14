'use client'

import { DASHBOARD_URL } from '@/configs';
import { confirmEmail } from '@/features/auth/actions'
import { useActionState } from 'react';

export function ConfirmEmailForm({ email }: { email: string }) {
  
  const [state, action, isPending] = useActionState(confirmEmail, { redirect: DASHBOARD_URL })

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Confirm your email
      </h2>
      <p className="text-sm text-gray-600 text-center mb-4">
        Enter your code to confirm your email.
      </p>
      <form className="space-y-4" action={action}>
        <input
          type="hidden"
          id="email"
          name="email"
          value={email}
        />
        <div>
          <label
            htmlFor="code"
            className="block text-sm font-medium text-gray-700"
          >
            Code
          </label>
          <input
            disabled={isPending}
            type="token"
            id="token"
            name="token"
            placeholder="XXXXXX"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
          />
          { !!state?.errors && !!state.errors['token'] && <p className="mt-1 text-sm text-red-500">{state.errors['token'].message}</p> }
        </div>
        <button
          disabled={isPending}
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Confirm Email
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        <a href="/login" className="text-indigo-600 hover:underline">
          Back to Login
        </a>
      </p>
    </div>
  );
};

export default ConfirmEmailForm;

