import "../styles/globals.css";
import "animate.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { GTM_ID } from "../constants/seo";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: GTM_ID,
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Component {...pageProps} />;
}
export default MyApp;
