'use client'

import { changePassword } from '@/features/auth/actions'
import { useActionState } from 'react';

export function ChangePasswordForm() {
  
  const [state, action, isPending] = useActionState(changePassword, { redirect: "/" })

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Change Password
      </h2>
      <p className="text-sm text-gray-600 text-center mb-4">
        Enter your new password
      </p>
      <form className="space-y-4" action={action}>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <input
            disabled={isPending}
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
          />
          { !!state?.errors && !!state.errors['password'] && <p className="mt-1 text-sm text-red-500">{state.errors['password'].message}</p> }
        </div>
        <button
          disabled={isPending}
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Change Your Password
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

export default ChangePasswordForm;

