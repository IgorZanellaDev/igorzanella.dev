"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "cookie_consent";

interface CookieConsentContextValue {
  consented: boolean | null;
  accept: () => void;
  decline: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export const useCookieConsent = () => {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used inside CookieConsentProvider");
  return ctx;
};

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consented, setConsented] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted") setConsented(true);
    else if (stored === "declined") setConsented(false);
    // else remains null → banner shows
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsented(true);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setConsented(false);
  };

  return (
    <CookieConsentContext.Provider value={{ consented, accept, decline }}>{children}</CookieConsentContext.Provider>
  );
};
