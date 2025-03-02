"use client";

import Script from "next/script";
import { FC } from "react";

const IubendaScripts: FC = () => {
  return (
    <>
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
                  "acceptButtonCaptionColor":"hsl(var(--background))",
                  "acceptButtonColor":"hsl(var(--primary))",
                  "acceptButtonDisplay":true,
                  "backgroundColor":"hsl(var(--background))",
                  "closeButtonRejects":true,
                  "customizeButtonCaptionColor":"hsl(var(--foreground))",
                  "customizeButtonColor":"hsl(var(--muted))",
                  "customizeButtonDisplay":true,
                  "explicitWithdrawal":true,
                  "listPurposes":true,
                  "position":"float-bottom-left",
                  "rejectButtonCaptionColor":"hsl(var(--background))",
                  "rejectButtonColor":"hsl(var(--primary))",
                  "rejectButtonDisplay":true,
                  "showPurposesToggles":true,
                  "textColor":"hsl(var(--foreground))"
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
      <Script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charSet="UTF-8" async />
    </>
  );
};

export default IubendaScripts;
