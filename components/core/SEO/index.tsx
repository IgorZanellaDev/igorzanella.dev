import { FunctionComponent } from "react";
import Head from "next/head";
import { OpenGraphObject, TwitterCard } from "../../../types/seo";
import { Thing, WithContext } from "schema-dts";
import { TITLE_SUFFIX } from "../../../constants/seo";
import { useRouter } from "next/router";
import { WEBSITE_URL } from "../../../constants/url";

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
    </Head>
  );
};

export default SEO;
