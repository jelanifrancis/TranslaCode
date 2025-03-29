import { useState } from 'react';
import { Route, Switch } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { Toaster } from '@/components/ui/toaster';
import NotFound from '@/pages/not-found';
import Home from './pages/Home';
import { LanguageContext, useLanguageProvider } from './hooks/useLanguage';

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
