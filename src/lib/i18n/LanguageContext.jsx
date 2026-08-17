import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { en } from "./en.js";
import { pt } from "./pt.js";

const STORAGE_KEY = "moz-demog-api-locale";

const translations = { en, pt };

const LanguageContext = createContext(null);

function detectLocale() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "pt") return saved;
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(detectLocale);

  const setLocale = (next) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt" : "en";
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return context;
}
