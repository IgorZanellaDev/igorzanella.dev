import type { NextPage } from "next";
import React from "react";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import HeaderSection from "components/ui/extended/HeaderSection";
import StartProjectCTASection from "components/ui/extended/StartProjectCTASection";
import ServicesSection from "components/ui/extended/ServicesSection";

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
      {/*What do I do? (services divided by dev and devops)*/}
      <ServicesSection />
      {/*StartProjectCTASection: Want to start a new project? CTA*/}
      <StartProjectCTASection />
      {/*Testimonials*/}
    </GlobalWrapper>
  );
};

export default Home;
