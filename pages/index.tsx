import type { NextPage } from "next";
import React from "react";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import HeaderSection from "components/ui/extended/HeaderSection";
import ServicesSection from "components/ui/extended/ServicesSection";
import CTASection from "components/ui/extended/CTASection";
import TestimonialSection from "components/ui/extended/TestimonialSection";

const Home: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO
        withoutTitleSuffix
        title="Hello, I'm Igor, Freelance Full Stack Developer"
        description="Looking for a Freelance Developer? You are in luck! I'm an Experienced Full Stack Developer and DevOps Specialist from Italy. How can I help you?"
      />
      <HeaderSection />
      <ServicesSection />
      <TestimonialSection />
      <CTASection />
    </GlobalWrapper>
  );
};

export default Home;
