import type { NextPage } from "next";
import React from "react";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";
import HeaderSection from "../components/ui/extended/HeaderSection";

/**
 * Header
 * Technology stack (programming languages, ecc)
 * Interested in startups section
 * */

const Home: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title="Hello" />
      <HeaderSection />
    </GlobalWrapper>
  );
};

export default Home;
