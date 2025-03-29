import { useState, useEffect, createContext, useContext } from 'react';
import { translations, type LanguageKey, type Translations } from '../data/translations';

// Create a context for language
type LanguageContextType = {
  currentLanguage: LanguageKey;
  setLanguage: (language: LanguageKey) => void;
  t: Translations;
};

export const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  setLanguage: () => {},
  t: translations.en
});

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Hook for language provider
export const useLanguageProvider = () => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageKey>('en');
  const [t, setT] = useState<Translations>(translations.en);

  useEffect(() => {
    setT(translations[currentLanguage]);
  }, [currentLanguage]);

  const setLanguage = (language: LanguageKey) => {
    setCurrentLanguage(language);
  };

  return { currentLanguage, setLanguage, t };
};
