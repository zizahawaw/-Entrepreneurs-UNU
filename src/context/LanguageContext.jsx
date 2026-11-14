/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('ec_lang') || 'id';
  });

  useEffect(() => {
    localStorage.setItem('ec_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const setLanguage = (newLang) => {
    if (newLang === 'id' || newLang === 'en') {
      setLang(newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
