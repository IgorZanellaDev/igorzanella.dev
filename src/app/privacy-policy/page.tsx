import Header from "@/components/header";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const PrivacyPolicy: FC = () => {
  return (
    <>
      <Header title={"Privacy Policy"} description={"Last updated: March 2026"} />

      <section className={"flex flex-col gap-4 leading-relaxed"}>
        <div>
          <h2 className={"text-xl font-medium"}>Data Controller</h2>
          <p className={"mt-2"}>
            Igor Zanella
            <br />
            Via Francesco Baracca 80/a, Crocetta del Montello (TV), Italy
            <br />
            <a href={"mailto:igorzanella.dev@gmail.com"} className={"underline"}>
              igorzanella.dev@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h2 className={"text-xl font-medium"}>What data we collect and why</h2>

          <h3 className={"mt-3 font-semibold"}>Analytics — Umami</h3>
          <p className={"mt-1"}>
            This site uses{" "}
            <a href={"https://umami.is"} target={"_blank"} rel={"noopener noreferrer"} className={"underline"}>
              Umami
            </a>
            , a self-hosted, privacy-first analytics tool. Umami does not use cookies and does not collect personally
            identifiable information. Page views and referrer data are aggregated and stored on our own private server.
            No data is shared with third parties.
          </p>

          <h3 className={"mt-3 font-semibold"}>Live Chat — Customerly</h3>
          <p className={"mt-1"}>
            This site embeds the{" "}
            <a href={"https://customerly.io"} target={"_blank"} rel={"noopener noreferrer"} className={"underline"}>
              Customerly
            </a>{" "}
            chat widget. If you choose to start a conversation, Customerly may process your name, email address, and the
            content of your messages in order to provide support. Data is processed in accordance with{" "}
            <a
              href={"https://customerly.io/privacy"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              className={"underline"}
            >
              Customerly&apos;s Privacy Policy
            </a>
            . If you do not interact with the chat widget, no personal data is collected.
          </p>
        </div>

        <div>
          <h2 className={"text-xl font-medium"}>Infrastructure</h2>
          <p className={"mt-2"}>
            This site is self-hosted on a private server managed by Igor Zanella. No third-party hosting provider
            processes your data on our behalf.
          </p>
        </div>

        <div>
          <h2 className={"text-xl font-medium"}>Legal basis for processing</h2>
          <p className={"mt-2"}>
            Analytics data is processed on the basis of our legitimate interest in understanding aggregate site usage.
            Chat data is processed on the basis of your consent (by initiating a conversation).
          </p>
        </div>

        <div>
          <h2 className={"text-xl font-medium"}>Your rights</h2>
          <p className={"mt-2"}>
            Under applicable data protection law (including the GDPR), you have the right to access, rectify, erase, or
            restrict the processing of your personal data, and to object to processing or request portability. To
            exercise these rights, contact us at{" "}
            <a href={"mailto:igorzanella.dev@gmail.com"} className={"underline"}>
              igorzanella.dev@gmail.com
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className={"text-xl font-medium"}>Changes to this policy</h2>
          <p className={"mt-2"}>
            We may update this policy from time to time. Material changes will be reflected by an updated date at the
            top of this page.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
