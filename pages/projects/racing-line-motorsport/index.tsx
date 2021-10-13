import React from "react";
import type { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import ProjectTitle from "components/ui/base/ProjectTitle";
import H2 from "components/ui/base/Typography/h2";
import P from "components/ui/base/Typography/p";
import ProjectSection from "components/ui/base/ProjectSection";
import A from "components/ui/base/Typography/a";
import H3 from "components/ui/base/Typography/h3";

const RacingLineMotorsport: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title={"Racing Line Motorsport"} />
      <ProjectTitle
        category={"Sim Racing"}
        links={{
          web: "https://racinglinemotorsport.com",
          instagram: "https://www.instagram.com/racinglinemotorsport/",
          facebook: "https://www.facebook.com/RacingLineMotorsport/",
          twitter: "https://twitter.com/racingliners",
        }}
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
          "serverless",
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
        <H2>Official website</H2>
        <P>
          Racing Line Motorsport also organize races, which are available on the{" "}
          <A
            href={"https://racinglinemotorsport.com"}
            target="_blank"
            rel="noopener"
          >
            official website
          </A>
          . Website has been created also to show to the world the team members
          and to share contacts and community links.
        </P>
        <H3>Frontend</H3>
        <P>
          I completely created the frontend by my own, it's based on React, with
          2 available languages, I used Bootstrap as CSS Framework, then there
          is Redux for state management and i18next. It's CI-built on Netlify.
          We use Google Analytics for visitors analysis.
        </P>
        <H3>Backend</H3>
        <P>
          Backend has been made by a friend of mine, I helped him sometimes.
          Backend is on Node.JS and Express, on MongoDB, it's hosted on AWS,
          with Serverless framework.
        </P>
        <H3>News section</H3>
        <P>
          After website I also created a separate{" "}
          <A
            href={"https://news.racinglinemotorsport.com/"}
            target="_blank"
            rel="noopener"
          >
            news section
          </A>{" "}
          based on Gatsby framework. It's a separate section to optimize SEO for
          news. CMS is Contentful, where Gatsby download posts on every build.
          Hosted on Netlify.
        </P>
      </ProjectSection>
    </GlobalWrapper>
  );
};

export default RacingLineMotorsport;
