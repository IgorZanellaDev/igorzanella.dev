import React from "react";
import type { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import ProjectTitle from "components/ui/base/ProjectTitle";
import H2 from "components/ui/base/Typography/h2";
import P from "components/ui/base/Typography/p";
import ProjectSection from "components/ui/base/ProjectSection";

const RacingLineMotorsport: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title={"Racing Line Motorsport"} />
      <ProjectTitle
        category={"Sim Racing"}
        id={"racing-line-motorsport"}
        name={"Racing Line Motorsport"}
        subtitle={"Team project"}
        imageWidth={1920}
        imageHeight={1080}
        technologies={[
          "aws",
          "bootstrap",
          "contentful",
          "css3",
          "express",
          "gatsby",
          "ganalytics",
          "html5",
          "i18next",
          "mongodb",
          "netlify",
          "nodejs",
          "react",
          "redux",
          "windows",
        ]}
      />
      <ProjectSection>
        <H2>What is Racing Line Motorsport?</H2>
        <P>
          Racing Line Motorsport is a Sim Racing team created by me and other
          passioned guys. The team competes in the best championships in the
          world for the game Assetto Corsa Competizione, which is one of the
          best simulative racing games.
          <br />
          Team has been created in 2019, but had great results from the
          beginning. Competing against other teams like Ferrari and working with
          real automotive brands like Bentley and Mercedes AMG.
        </P>
        <H2>React website</H2>
        <P>Racing Line Motorsport also organize races, which are </P>
      </ProjectSection>
    </GlobalWrapper>
  );
};

export default RacingLineMotorsport;
