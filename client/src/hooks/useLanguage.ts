import { useState, useEffect, createContext, useContext } from 'react';
import { translations, type LanguageKey, type Translations } from '../data/translations';

// Define the context type
type LanguageContextType = {
  currentLanguage: LanguageKey;
  setLanguage: (language: LanguageKey) => void; // ✅ Must be 'setLanguage'
  t: Translations;
};

// Create the Language Context
export const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  setLanguage: () => {}, // ✅ Must be 'setLanguage'
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

  // ✅ Here we manually create the setLanguage function!
  const setLanguage = (language: LanguageKey) => {
    setCurrentLanguage(language);
  };

  return { currentLanguage, setLanguage, t };
};