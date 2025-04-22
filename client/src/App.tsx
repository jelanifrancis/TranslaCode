import { useEffect, useState } from 'react';
import { Route, Switch } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { Toaster } from '@/components/ui/toaster';
import NotFound from '@/pages/not-found';
import Home from './pages/Home';
import { LanguageContext, useLanguageProvider } from './hooks/useLanguage';
import { supabase } from './supabaseClient';
import AuthForm from './components/AuthForm';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const languageContext = useLanguageProvider();
  const [user, setUser] = useState<any>(null);

  // Check for user on load and subscribe to auth changes
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContext.Provider value={languageContext}>
        {user ? (
          <>
            <div className="p-4 text-right">
              <button
                onClick={handleLogout}
                className="text-sm text-blue-600 hover:text-yellow-400 transition-colors"
              >
                Log out
              </button>
            </div>
            <Router />
          </>
        ) : (
          <AuthForm />
        )}
        <Toaster />
      </LanguageContext.Provider>
    </QueryClientProvider>
  );
}

export default App;