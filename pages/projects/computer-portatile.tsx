import React from "react";
import { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import ProjectTitle from "components/ui/base/ProjectTitle";
import ProjectSection from "components/ui/base/ProjectSection";
import H2 from "components/core/Typography/H2";
import P from "components/core/Typography/P";
import A from "components/core/Typography/A";

const ComputerPortatile: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO
        title="ComputerPortatile"
        description="Affiliate marketing website, created to advice laptops to people who are searching."
        image="/projects/computer-portatile/main.jpg"
      />
      <ProjectTitle
        subtitle={"Owner"}
        id={"computer-portatile"}
        links={{
          web: "https://www.bestondesk.com",
        }}
        name={"ComputerPortatile"}
        category={"Affiliate marketing website"}
        imageWidth={1920}
        imageHeight={1080}
        technologies={[
          "css3",
          "ganalytics",
          "gsearchconsole",
          "gtm",
          "html5",
          "nextjs",
          "react",
          "sass",
          "styledcomponents",
          "typescript",
          "vercel",
        ]}
      />
      <ProjectSection>
        <H2>Where can I find the website?</H2>
        <P>
          This is simple, you can find it{" "}
          <A href="https://www.computerportatile.com">here</A>.
        </P>
        <H2>Why did I create this website?</H2>
        <P>
          A lot of friends often ask me which model of laptop should they buy, I
          help them searching on Amazon, but the laptops I advice are usually
          the same. For this reason I created ComputerPortatile, which is an
          Italian website, with the lists of the top laptops on Amazon.it.
        </P>
        <H2>Is helping the only reason I created this website?</H2>
        <P>
          Obviously not, having experience in affiliate marketing, the idea is
          earning through Amazon Affiliate Program, which I was part of some
          years ago with BestOnDesk. So I decided to reenter the program and try
          to earn something on this.
        </P>
        <H2>Are there plan for some ads?</H2>
        <P>
          Now I'm testing some keywords and SEO tricks, so I currently don't
          want to invest money in this project, because could be difficult to
          pay ads for these keywords.
        </P>
        <H2>How do I think this site will grow organically?</H2>
        <P>
          As I said, there are some keywords and SEO tricks which I'm trying and
          which I will try, to climb Google Rank and try to get to the top of
          Google Search.
        </P>
        <H2>Why didn't I publish the code?</H2>
        <P>
          I didn't publish the code because there are some SEO tricks I want to
          try and maybe keep them for other websites, so for now I don't want to
          publish the code. If you have a valid reason to see the code contact
          me, but no promises.
        </P>
        <H2>Future</H2>
        <P>
          This is a website created in 10 days in free time, so about 20 hours,
          this means I didn't invest much time and money, because I don't have
          expectations. Let's see how it goes.
        </P>
      </ProjectSection>
    </GlobalWrapper>
  );
};

export default ComputerPortatile;
