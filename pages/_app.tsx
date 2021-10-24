import "styles/globals.css";
import "animate.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { GTM_ID } from "constants/seo";
import React, { useEffect } from "react";
import TagManager from "react-gtm-module";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

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
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
