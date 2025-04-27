import { Link, useLocation } from 'wouter';
import { supabase } from '../supabaseClient';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const getSession = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email ?? null);
      }
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email ?? null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const linkClasses = (path: string) =>
    `relative text-sm cursor-pointer transition ${
      location === path ? 'text-yellow-300 font-bold' : 'hover:text-yellow-300'
    } after:block after:h-0.5 after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left`;

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white">
      {/* Logo */}
      <Link href="/home">
        <a className="text-xl font-bold cursor-pointer hover:text-yellow-300 transition">
          TranslaCode
        </a>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        {userEmail && (
          <span className="text-sm hidden md:block">
            Welcome, {userEmail.split('@')[0]} 👋
          </span>
        )}

        <Link href="/">
          <span className={linkClasses("/")}>
            Home
          </span>
        </Link>

        <Link href="/dashboard">
          <a className={linkClasses("/dashboard")}>
            Dashboard
          </a>
        </Link>

        <Link href="/tutorials">
          <a className={linkClasses("/tutorials")}>
            Tutorials
          </a>
        </Link>

        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 hover:bg-yellow-400 hover:text-blue-800 text-sm font-semibold px-4 py-2 rounded-lg transition"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
}