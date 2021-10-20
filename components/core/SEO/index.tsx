import { FunctionComponent } from "react";
import Head from "next/head";
import { OpenGraphObject, TwitterCard } from "types/seo";
import { Thing, WithContext } from "schema-dts";
import { TITLE_SUFFIX } from "constants/seo";
import { useRouter } from "next/router";
import { WEBSITE_URL } from "constants/url";

interface SEOProps {
  title: string;
  withoutTitleSuffix?: boolean;
  withoutDefaultStructuredData?: boolean;
  description?: string;
  canonical?: string;
  image?: string;
  openGraph?: OpenGraphObject;
  twitterCard?: TwitterCard;
  meta?: JSX.IntrinsicElements["meta"][];
  structuredData?: WithContext<Thing>[];
}

const SEO: FunctionComponent<SEOProps> = (props: SEOProps) => {
  return (
    <Head>
      <title>
        {props.title}
        {!props.withoutTitleSuffix ? TITLE_SUFFIX : ""}
      </title>
      {props.description && (
        <meta name="description" content={props.description} />
      )}
      <link
        rel="canonical"
        href={
          props.canonical ? props.canonical : WEBSITE_URL + useRouter().pathname
        }
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#1f2937" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#005CB4" />
      <html lang="en" />
    </Head>
  );
};

export default SEO;
