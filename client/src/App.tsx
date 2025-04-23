import { useState } from 'react';
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

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContext.Provider value={languageContext}>
        <Router />
        <Toaster />
      </LanguageContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
