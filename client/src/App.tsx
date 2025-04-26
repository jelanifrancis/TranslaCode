import { useState, useEffect } from 'react';
import { Route, Switch } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { Toaster } from '@/components/ui/toaster';
import { LanguageContext, useLanguageProvider } from './hooks/useLanguage';
import { supabase } from './supabaseClient';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import AuthForm from './components/AuthForm';
import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/not-found';
import PythonVariables from './pages/tutorials/PythonVariables';
import PythonFunctions from './pages/tutorials/PythonFunctions';
import PythonConditionals from './pages/tutorials/PythonConditionals';
import JavaScriptVariables from './pages/tutorials/JavaScriptVariables';
import JavaScriptFunctions from './pages/tutorials/JavaScriptFunctions';
import JavaScriptConditionals from './pages/tutorials/JavaScriptConditionals';
import JavaScriptArrays from './pages/tutorials/JavaScriptArrays';
import JavaScriptLoops from './pages/tutorials/JavaScriptLoops';
import PythonLists from './pages/tutorials/PythonLists';
import PythonLoops from './pages/tutorials/PythonLoops';

function Router({ user }: { user: any }) {
  return (
    <Switch>
      {!user && (
        <>
          <Route path="/" component={Landing} />
          <Route path="/signin" component={AuthForm} />
          <Route>
            {() => {
              window.location.href = '/';
              return null;
            }}
          </Route>
        </>
      )}

      {user && (
        <>
          <Route path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/tutorials" component={Tutorials} />
          <Route path="/tutorials/python/variables" component={PythonVariables} />
          <Route path="/tutorials/python/functions" component={PythonFunctions} />
          <Route path="/tutorials/python/conditionals" component={PythonConditionals} />
          <Route path="/tutorials/javascript/variables" component={JavaScriptVariables} />
          <Route path="/tutorials/javascript/functions" component={JavaScriptFunctions} />
          <Route path="/tutorials/javascript/conditionals" component={JavaScriptConditionals} />
          <Route path="/tutorials/javascript/arrays" component={JavaScriptArrays} />
          <Route path="/tutorials/javascript/loops" component={JavaScriptLoops} />
          <Route path="/tutorials/python/lists" component={PythonLists} />
          <Route path="/tutorials/python/loops" component={PythonLoops} />
          <Route component={NotFound} />
        </>
      )}
    </Switch>
  );
}

export default function App() {
  const languageContext = useLanguageProvider();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContext.Provider value={languageContext}>
        {user && <Navbar />}
        <Router user={user} />
        <Toaster />
      </LanguageContext.Provider>
    </QueryClientProvider>
  );
}