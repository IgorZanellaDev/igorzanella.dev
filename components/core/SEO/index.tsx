import { FunctionComponent } from "react";
import Head from "next/head";
import { Thing, WithContext } from "schema-dts";
import { DEFAULT_META_IMG_SRC, TITLE, TITLE_SUFFIX } from "constants/seo";
import { useRouter } from "next/router";
import { TWITTER_ID, WEBSITE_URL } from "constants/url";

interface SEOProps {
  title: string;
  withoutTitleSuffix?: boolean;
  withoutDefaultStructuredData?: boolean;
  description: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  structuredData?: WithContext<Thing>[];
}

const SEO: FunctionComponent<SEOProps> = (props: SEOProps) => {
  const canonical = WEBSITE_URL + useRouter().pathname;
  const title = `${props.title} ${
    !props.withoutTitleSuffix ? TITLE_SUFFIX : ""
  }`;
  const image = props.image ? WEBSITE_URL + props.image : DEFAULT_META_IMG_SRC;

  const defaultStructuredData: WithContext<Thing>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      url: WEBSITE_URL,
      logo: "/android-chrome-512x512.png",
    },
  ];

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="site_name" property="og:site_name" content={TITLE} />
      <meta
        name="description"
        property="og:description"
        content={props.description}
      />
      <meta name="twitter:description" content={props.description} />
      <link
        rel="canonical"
        href={props.canonical ? props.canonical : canonical}
      />
      <meta
        name="og:url"
        content={props.canonical ? props.canonical : canonical}
      />
      <meta name="image" property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
      <meta
        name="og:image:alt"
        content={props.imageAlt ? props.imageAlt : TITLE}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_ID} />
      {props.structuredData &&
        props.structuredData.map((data, i) => (
          <script type="application/ld+json" key={i}>
            {JSON.stringify(data)}
          </script>
        ))}
      {!props.withoutDefaultStructuredData &&
        defaultStructuredData.map((data, i) => {
          return (
            <script type="application/ld+json" key={i}>
              {JSON.stringify(data)}
            </script>
          );
        })}
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
    </Head>
  );
};

export default SEO;
