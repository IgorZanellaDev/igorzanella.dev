import "styles/globals.css";
import "animate.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { GTM_ID } from "constants/seo";
import React, { useEffect } from "react";
import TagManager from "react-gtm-module";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import Script from "next/script";

const tagManagerArgs = {
  gtmId: GTM_ID,
};

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <Script type="text/javascript">
          {`
              var _iub = _iub || [];
              _iub.csConfiguration = {
                "enableCcpa":true,
                "countryDetection":true,
                "reloadOnConsent":false,
                "consentOnContinuedBrowsing":false,
                "ccpaAcknowledgeOnDisplay":true,
                "whitelabel":false,
                "lang":"en",
                "siteId":2016555,
                "cookiePolicyId":36569385,
                "banner": {
                  "acceptButtonDisplay":true,
                  "customizeButtonDisplay":true,
                  "rejectButtonDisplay":true,
                  "position":"float-bottom-left",
                  "acceptButtonColor":"#0073CE",
                  "acceptButtonCaptionColor":"white",
                  "customizeButtonColor":"#DADADA",
                  "customizeButtonCaptionColor":"#4D4D4D",
                  "rejectButtonColor":"#0073CE",
                  "rejectButtonCaptionColor":"white",
                  "textColor":"black",
                  "backgroundColor":"white"
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
        <Script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/ccpa/stub.js"
        />
        <Script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          charSet="UTF-8"
          async
        />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
