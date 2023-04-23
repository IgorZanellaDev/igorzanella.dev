import "styles/globals.css";
import "animate.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { GTM_ID } from "constants/seo";
import React, { useEffect } from "react";
import TagManager from "react-gtm-module";
import Script from "next/script";

const tagManagerArgs = {
  gtmId: GTM_ID,
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Script type="text/javascript" id={"iubenda-script"}>
        {`
              var _iub = _iub || [];
              _iub.csConfiguration = {
                "askConsentAtCookiePolicyUpdate":true,
                "countryDetection":true,
                "enableLgpd":true,
                "enableUspr":true,
                "lang":"en",
                "reloadOnConsent":true,
                "whitelabel":false,
                "siteId":2016555,
                "cookiePolicyId":36569385,
                "banner": {
                  "acceptButtonCaptionColor":"white",
                  "acceptButtonColor":"#0073CE",
                  "acceptButtonDisplay":true,
                  "backgroundColor":"white",
                  "closeButtonRejects":true,
                  "customizeButtonCaptionColor":"#4D4D4D",
                  "customizeButtonColor":"#DADADA",
                  "customizeButtonDisplay":true,
                  "explicitWithdrawal":true,
                  "listPurposes":true,
                  "position":"float-bottom-left",
                  "rejectButtonCaptionColor":"white",
                  "rejectButtonColor":"#0073CE",
                  "rejectButtonDisplay":true,
                  "showPurposesToggles":true,
                  "textColor":"black"
                },
                "callback": {
                  onPreferenceExpressedOrNotNeeded: function(preference) {
                    dataLayer.push({
                      iubenda_ccpa_opted_out: _iub.cs.api.isCcpaOptedOut()
                    });
                    if (!preference) {
                      dataLayer.push({
                        event: "iubenda_preference_not_needed"
                      });
                    } else {
                      if (preference.consent === true) {
                        dataLayer.push({
                          event: "iubenda_consent_given"
                        });
                      } else if (preference.consent === false) {
                        dataLayer.push({
                          event: "iubenda_consent_rejected"
                        });
                      } else if (preference.purposes) {
                        for (var purposeId in preference.purposes) {
                          if (preference.purposes[purposeId]) {
                            dataLayer.push({
                              event: "iubenda_consent_given_purpose_" + purposeId
                            });
                          }
                        }
                      }
                    }
                  }
                }
              };
            `}
      </Script>
      <Script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js" />
      <Script
        type="text/javascript"
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        charSet="UTF-8"
        async
      />
      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`}
      />
    </>
  );
}

export default MyApp;
