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
        title="Hello"
        description="Welcome to my personal developer portfolio, with some of my projects and my personal info."
      />
      <HeaderSection />
      <ServicesSection />
      <TestimonialSection />
      <CTASection />
    </GlobalWrapper>
  );
};

export default Home;
