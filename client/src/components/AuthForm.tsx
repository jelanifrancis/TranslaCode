import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (authMode === 'signup') {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) alert(error.message);
        else alert('Check your email to confirm your account!');
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) alert(error.message);
        else alert('Logged in!');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-100 via-white to-yellow-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">
            Welcome to TranslaCode!
          </h2>
          <p className="text-sm text-gray-600">
            Unlock the power of coding — in your language, at your pace.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 font-semibold rounded-lg transition-all ${
              loading
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-yellow-400 hover:text-blue-800'
            }`}
          >
            {loading ? 'Loading...' : authMode === 'signup' ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <p
          onClick={() => setAuthMode(authMode === 'signup' ? 'login' : 'signup')}
          className="text-sm text-center mt-4 text-blue-500 hover:text-yellow-500 cursor-pointer transition"
        >
          {authMode === 'signup'
            ? 'Already have an account? Log in'
            : 'Don’t have an account? Sign up'}
        </p>
      </div>
    </div>
  );
}