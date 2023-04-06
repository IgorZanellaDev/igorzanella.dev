import type { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import ProjectTitle from "components/ui/base/ProjectTitle";
import H2 from "components/core/Typography/H2";
import ProjectSection from "components/ui/base/ProjectSection";
import P from "components/core/Typography/P";
import Img from "components/core/Typography/Img";

const Customerly: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO
        title="Customerly"
        description="The First Customer Centric Communication Suite. A startup in which I'm participating."
        image="/projects/customerly/main.jpg"
      />
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
          automation and customer satisfaction features. I&apos;m in the startup
          team as a Full Stack Dev and I help the other people in developing the
          product in all its parts, from frontend to backend and database. The
          mission is to help and inspire at least 1 billion people.
        </P>
        <H2>Messenger</H2>
        <P>
          The first thing people usually see is the messenger, the widget you
          can also find in this website, in the bottom right part of the screen.
          That&apos;s the first way the customers connect to Customerly, that
          allows your customers to contact you, but not only. It also has the
          knowledge base, campaigns notifications and triggers (a part which I
          mostly developed). It&apos;s been coded in React and StyledComponents
          for styling.
        </P>
        <Img
          src={
            "/projects/customerly/live-chat-with-superpowers-from-customerly.jpg"
          }
          width={2236}
          height={1434}
          alt="Customerly live chat"
        />
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
        <Img
          src={"/projects/customerly/app.png"}
          width={2926}
          height={1880}
          alt="Customerly app"
        />
        <H2>Knowledge base</H2>
        <P>
          The Knowledge Base section is created on PHP. We will rework it in the
          future, to align it with the rest of style.
        </P>
        <Img
          src={"/projects/customerly/help-center-software-with-live-chat.jpg"}
          width={3257}
          height={1930}
          alt="Customerly help center"
        />
        <H2>Landing page</H2>
        <P>
          The landing page is made by me and another colleague.It&apos;s a
          static website made with Gatsby, built on CircleCI and hosted on S3
          with Cloudfront cache.
        </P>
        <Img
          src={"/projects/customerly/landing.png"}
          width={1440}
          height={810}
          alt="Customerly landing website"
        />
        <H2>Backend and APIs</H2>
        <P>
          Backend is mainly on PHP, with frameworks like Symfony and Laravel. DB
          is SQL. API are on AWS servers on docker services.
        </P>
        <H2>What I did most</H2>
        <P>
          I worked a lot on Messenger and backend to create Triggers, which are
          workflows which let you shoot a message to some people on certain
          conditions.
          <br />
          After that I did about 50% of the landing pages on Gatsby, with
          another guy of the team, an hard work, but with good results.
          <br />
          Now we are recreating webapp on React, this will take in more
          customers, because it will optimize UX of our customers.
        </P>
        <H2>Future</H2>
        <P>
          I will remain for a long time in this team, because the people with
          whom I work are fantastic.
        </P>
      </ProjectSection>
    </GlobalWrapper>
  );
};

export default Customerly;
