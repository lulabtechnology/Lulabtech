"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { siteCopy, type Locale } from "@/lib/site-copy";

type SiteLanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  copy: (typeof siteCopy)[Locale];
};

const STORAGE_KEY = "lulabtech-locale";

const SiteLanguageContext = createContext<SiteLanguageContextValue | null>(null);

export function SiteLanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<SiteLanguageContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((prev) => (prev === "es" ? "en" : "es")),
      copy: siteCopy[locale]
    }),
    [locale]
  );

  return (
    <SiteLanguageContext.Provider value={value}>
      {children}
    </SiteLanguageContext.Provider>
  );
}

export function useSiteLanguage() {
  const context = useContext(SiteLanguageContext);

  if (!context) {
    throw new Error("useSiteLanguage must be used within SiteLanguageProvider");
  }

  return context;
}
