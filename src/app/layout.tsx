import IubendaScripts from "@/components/iubenda-scripts";
import Menu from "@/components/menu";
import Footer from "@/components/menu/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { DEFAULT_SUFFIX, DEFAULT_TITLE, GTM_ID, WEBSITE_URL } from "@/constants/seo";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import type { Organization, WithContext } from "schema-dts";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#005CB4",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: `%s${DEFAULT_SUFFIX}`,
  },
  metadataBase: new URL(WEBSITE_URL),
  icons: {
    icon: "/favicons/favicon-32x32.png",
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/favicons/site.webmanifest",
  openGraph: {
    images: [
      {
        url: "/images/meta.jpg",
        width: 1920,
        height: 1080,
        alt: "IZDev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/images/meta.jpg",
        width: 1920,
        height: 1080,
        alt: "IZDev",
      },
    ],
  },
};

const defaultStructuredData: WithContext<Organization>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: WEBSITE_URL,
    logo: "/android-chrome-512x512.png",
  },
];

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html suppressHydrationWarning lang={"en"} className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <GoogleTagManager gtmId={GTM_ID} />
      <Analytics />
      <body className={"mx-auto flex flex-col gap-2 md:max-w-screen-lg md:flex-row"}>
        <script
          type={"application/ld+json"}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(defaultStructuredData) }}
        />
        <ThemeProvider disableTransitionOnChange enableSystem attribute={"class"} defaultTheme={"system"}>
          <IubendaScripts />
          <Menu />
          <div className={"flex flex-1 flex-col overflow-x-hidden"}>
            <main className={"flex flex-1 flex-col p-4 md:mt-4 md:p-8 md:pb-10"}>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
