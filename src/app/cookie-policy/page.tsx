import Header from "@/components/header";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Cookie Policy",
  alternates: {
    canonical: "/cookie-policy",
  },
};

const CookiePolicy: FC = () => {
  return (
    <>
      <Header title={"Cookie Policy"} description={"Last updated: March 2026"} />

      <section className={"flex flex-col gap-4 leading-relaxed"}>
        <div>
          <p>
            This page explains what cookies and similar technologies this site uses, and why. This site does not use
            advertising, tracking, or marketing cookies.
          </p>
        </div>

        <div>
          <h2 className={"text-xl font-medium"}>Analytics — Umami</h2>
          <p className={"mt-2"}>
            This site uses{" "}
            <a href={"https://umami.is"} target={"_blank"} rel={"noopener noreferrer"} className={"underline"}>
              Umami
            </a>{" "}
            for analytics. By default, Umami operates in a cookieless mode and does not store any cookies on your
            device. It does not track users across sessions or websites. All data is aggregated and stored on our own
            private server.
          </p>
        </div>

        <div>
          <h2 className={"text-xl font-medium"}>Live Chat — Customerly</h2>
          <p className={"mt-2"}>
            This site embeds the{" "}
            <a href={"https://customerly.io"} target={"_blank"} rel={"noopener noreferrer"} className={"underline"}>
              Customerly
            </a>{" "}
            chat widget. If you interact with the chat, Customerly may set functional cookies to maintain your chat
            session state and, if you provide your details, to recognise you on future visits. These cookies are
            strictly functional and are only set upon engagement with the widget.
          </p>
          <p className={"mt-2"}>
            If you do not open or interact with the chat widget, no cookies are set by Customerly.
          </p>
        </div>

        <div>
          <h2 className={"text-xl font-medium"}>No other cookies</h2>
          <p className={"mt-2"}>
            This site does not use Google Analytics, Google Tag Manager, Hotjar, or any other measurement, advertising,
            or remarketing services. No third-party cookies are set by default.
          </p>
        </div>

        <div>
          <h2 className={"text-xl font-medium"}>Contact</h2>
          <p className={"mt-2"}>
            For any questions about this cookie policy, contact us at{" "}
            <a href={"mailto:igorzanella.dev@gmail.com"} className={"underline"}>
              igorzanella.dev@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;
