"use client";

import { useCookieConsent } from "@/components/cookie-consent-provider";
import Link from "next/link";

const CookieConsentBanner = () => {
  const { consented, accept, decline } = useCookieConsent();

  if (consented !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-4 border-t bg-background px-4 py-3 text-sm text-muted-foreground">
      <p>
        This site uses the Customerly chat widget which may set functional cookies if you engage with it.{" "}
        <Link href="/cookie-policy" className="underline">
          Cookie Policy
        </Link>
      </p>
      <div className="flex shrink-0 gap-2">
        <button onClick={decline} className="underline">
          Decline
        </button>
        <button onClick={accept} className="rounded bg-foreground px-3 py-1 text-background">
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
