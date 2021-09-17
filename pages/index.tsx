import type { NextPage } from "next";
import React from "react";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";
import PageContainer from "../components/ui/base/PageContainer";
import MainCard from "../components/ui/base/MainCard";

const Home: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title="Home" />
      <PageContainer>
        <MainCard />
      </PageContainer>
    </GlobalWrapper>
  );
};

export default Home;
