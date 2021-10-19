import type { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import ProjectTitle from "components/ui/base/ProjectTitle";
import H2 from "components/ui/base/Typography/h2";
import ProjectSection from "components/ui/base/ProjectSection";
import P from "components/ui/base/Typography/p";

const Customerly: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title={"Customerly"} />
      <ProjectTitle
        subtitle={"Full stack developer"}
        id={"customerly"}
        links={{
          web: "https://www.customerly.io",
          facebook: "https://www.facebook.com/customerly/",
          instagram: "https://www.instagram.com/customerly/",
          twitter: "https://twitter.com/customerlyio",
          linkedin: "https://www.linkedin.com/company/customerly/",
        }}
        name={"Customerly"}
        category={"Communication Suite"}
        imageWidth={1920}
        imageHeight={1080}
        technologies={[
          "aws",
          "chargify",
          "circleci",
          "contentful",
          "css3",
          "docker",
          "ganalytics",
          "gatsby",
          "graphql",
          "html5",
          "i18next",
          "javascript",
          "laravel",
          "mixpanel",
          "php",
          "react",
          "react-query",
          "recoil",
          "redis",
          "redux",
          "sass",
          "svelte",
          "sveltekit",
          "symfony",
          "terraform",
          "typescript",
          "wordpress",
        ]}
      />
      <ProjectSection>
        <H2>What is Customerly?</H2>
        <P>
          Customerly is a communication suite, its core business is the customer
          support with a chat widget for websites. But it has also marketing
          automation and customer satisfaction features. I'm in the startup team
          as a Full Stack Dev and I help the other people in developing the
          product in all its parts, from frontend to backend and database. The
          mission is to help and inspire at least 1 billion people.
        </P>
        <H2>Messenger</H2>
        <P>
          The first thing people usually see is the messenger, the widget you
          can also find in this website, in the bottom right part of the screen.
          That's the first way the customers connect to Customerly, that allows
          your customers to contact you, but not only. It also has the knowledge
          base, campaigns notifications and triggers (a part which I mostly
          developed). It's been coded in React and StyledComponents for styling.
        </P>
        <H2>App</H2>
        <P>
          The app is the product our users usually use most in their days, to
          answers to their customers, but also to manage campaigns, funnels and
          knowledge base.
          <br />
          The previous app was created on Angular JS, but at this moment we are
          redesigning it from scratch, with React, using innovative technologies
          like React Query and Recoil.
        </P>
        <H2>Knowledge base</H2>
        <H2>Landing page</H2>
        <H2>What I did most</H2>
      </ProjectSection>
    </GlobalWrapper>
  );
};

export default Customerly;
