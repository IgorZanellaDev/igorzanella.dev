"use client";

import { useCookieConsent } from "@/components/cookie-consent-provider";
import { ReactNode, useEffect } from "react";
import { CustomerlyProvider, useCustomerly } from "react-live-chat-customerly";

const CustomerlyLoader = () => {
  const { load } = useCustomerly();
  const { consented } = useCookieConsent();

  useEffect(() => {
    if (consented === true) load({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consented]);

  return null;
};

const CustomerlyWidget = ({ children }: { children: ReactNode }) => (
  <CustomerlyProvider appId="351f9c13">
    <CustomerlyLoader />
    {children}
  </CustomerlyProvider>
);

export default CustomerlyWidget;
