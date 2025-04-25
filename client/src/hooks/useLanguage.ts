import { useState, useEffect, createContext, useContext } from 'react';
import { translations, type LanguageKey, type Translations } from '../data/translations';

// Define the context type
type LanguageContextType = {
  currentLanguage: LanguageKey;
  setCurrentLanguage: (language: LanguageKey) => void; // Fix the name to match!
  t: Translations;
};

// Create the Language Context
export const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  setCurrentLanguage: () => {}, // Fix the name here too!
  t: translations.en
});

// Custom hook to access the context
export const useLanguage = () => useContext(LanguageContext);

// Language Provider hook
export const useLanguageProvider = () => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageKey>('en');
  const [t, setT] = useState<Translations>(translations.en);

  useEffect(() => {
    setT(translations[currentLanguage]);
  }, [currentLanguage]);

  return { currentLanguage, setCurrentLanguage, t }; // Notice: setCurrentLanguage not setLanguage
};