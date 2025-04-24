import { useState, useEffect } from 'react';
import { Route, Switch } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { Toaster } from '@/components/ui/toaster';
import NotFound from '@/pages/not-found';
import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
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
import { LanguageContext, useLanguageProvider } from './hooks/useLanguage';
import { supabase } from './supabaseClient';
import AuthForm from './components/AuthForm';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
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
    </Switch>
  );
}

function App() {
  const languageContext = useLanguageProvider();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial load
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });

    // Auth change listener
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  if (loading) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContext.Provider value={languageContext}>
        <div className="min-h-screen bg-white text-black px-4 py-2">
          {user ? (
            <>
              <div className="flex justify-end mb-4">
                <button
                  className="text-sm text-blue-600 underline"
                  onClick={() => supabase.auth.signOut()}
                >
                  Log Out
                </button>
              </div>
              <Router />
            </>
          ) : (
            <AuthForm />
          )}
        </div>
        <Toaster />
      </LanguageContext.Provider>
    </QueryClientProvider>
  );
}

export default App;