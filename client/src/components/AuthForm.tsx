import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // adjust if your path is different

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (authMode === 'signup') {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) alert(error.message);
      else alert('Check your email to confirm your account!');
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) alert(error.message);
      else alert('Logged in!');
    }
  };

  return (
    <div>
      <h2>{authMode === 'signup' ? 'Sign Up' : 'Log In'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">
          {authMode === 'signup' ? 'Sign Up' : 'Log In'}
        </button>
      </form>
      <p style={{ cursor: 'pointer', marginTop: '10px' }}
         onClick={() => setAuthMode(authMode === 'signup' ? 'login' : 'signup')}>
        {authMode === 'signup'
          ? 'Already have an account? Log in'
          : 'Don’t have an account? Sign up'}
      </p>
    </div>
  );
}