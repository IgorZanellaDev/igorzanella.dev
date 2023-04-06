import React from "react";
import type { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import ProjectTitle from "components/ui/base/ProjectTitle";
import H2 from "components/core/Typography/H2";
import P from "components/core/Typography/P";
import ProjectSection from "components/ui/base/ProjectSection";
import A from "components/core/Typography/A";
import H3 from "components/core/Typography/H3";
import Img from "components/core/Typography/Img";

const RacingLineMotorsport: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO
        title="Racing Line Motorsport"
        description="One of the most important sim racing teams on Assetto Corsa Competizione. A team created by me and my friends."
        image="/projects/racing-line-motorsport/main.jpg"
      />
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
        subtitle={"Staff member"}
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
          "javascript",
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
          best simulative racing games. In 2020 and 2021 the team was deemed to
          be in the World Top 10 of Assetto Corsa Competizione sim racing teams.
          <br />
          The team has been created in 2019, but had great results from the
          beginning. Competing against other teams like Ferrari and working with
          real automotive brands like Bentley and Mercedes AMG.
        </P>
        <Img
          src={
            "/projects/racing-line-motorsport/racing-line-motorsport-silverstone-bentley.jpg"
          }
          width={1920}
          height={1080}
          alt="Racing Line Motorsport Bentley at Silverstone"
        />
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
        <Img
          src={"/projects/racing-line-motorsport/website.jpg"}
          width={1440}
          height={786}
          alt="Racing Line Motorsport website"
        />
        <H3>Frontend</H3>
        <P>
          I completely created the frontend by my own, it&apos;s based on React,
          with 2 available languages, I used Bootstrap as CSS Framework, then
          there is Redux for state management and i18next. It&apos;s CI-built on
          Netlify. We use Google Analytics for visitors analysis.
        </P>
        <H3>Backend</H3>
        <P>
          Backend has been made by another team member, but I helped him
          sometimes. Backend is on Node.JS and Express, on MongoDB, it&apos;s
          hosted on AWS, with Serverless framework.
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
          based on Gatsby framework. It&apos;s a separate section to optimize
          SEO for news. CMS is Contentful, where Gatsby download posts on every
          build. Hosted on Netlify.
        </P>
        <Img
          src={"/projects/racing-line-motorsport/news.jpg"}
          width={1440}
          height={850}
          alt="Racing Line Motorsport news section"
        />
        <H2>Race/training servers</H2>
        <P>
          We have training servers and races servers on AWS EC2 with Windows
          Server OS, we use them to organize our races or to train for important
          championships.
        </P>
        <H2>Target</H2>
        <P>
          Obviously, the target is to stay on top of main competitions in sim
          racing and to continue growing as a team and a group, with the same
          passion we had have till now.
        </P>
      </ProjectSection>
    </GlobalWrapper>
  );
};

export default RacingLineMotorsport;
