import React from "react";
import type { NextPage } from "next";
import Logo from "components/core/Logo";
import Link from "next/link";
import Footer from "components/ui/extended/Layout/Footer";
import SEO from "components/core/SEO";

const Custom404: NextPage = () => {
  return (
    <>
      <SEO title={"404 - Page not found"} description="Test" />
      <div className="min-h-screen flex flex-col bg-gray-900">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <a href="/" className="inline-flex">
              <span className="sr-only">IZDev</span>
              <Logo />
            </a>
          </div>
          <div className="py-6">
            <div className="text-center">
              <p className="text-sm font-semibold text-iz-blue-light uppercase tracking-wide">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-400">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <Link href={"/"}>
                  <a
                    href="#"
                    className="text-base font-medium text-iz-blue-light hover:text-iz-blue-light-darker-10 transition"
                  >
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Custom404;
