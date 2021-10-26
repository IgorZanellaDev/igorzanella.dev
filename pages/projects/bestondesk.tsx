import type { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import ProjectTitle from "components/ui/base/ProjectTitle";
import ProjectSection from "components/ui/base/ProjectSection";
import H2 from "components/core/Typography/H2";
import P from "components/core/Typography/P";
import H3 from "components/core/Typography/H3";
import A from "components/core/Typography/A";
import Img from "components/core/Typography/Img";

const BestOnDesk: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO
        title="BestOnDesk"
        description="An Italian blog which I created with a friend of mine, Marco."
        image="/projects/bestondesk/main.jpg"
      />
      <ProjectTitle
        category={"Affiliate marketing blog"}
        id={"bestondesk"}
        links={{
          web: "https://www.bestondesk.com",
          github: "https://github.com/BestOnDesk/gatsby-bod",
          instagram: "https://www.instagram.com/bestondesk/",
          facebook: "https://www.facebook.com/bestondeskcom/",
          telegram: "https://t.me/bestondesk",
        }}
        name={"BestOnDesk"}
        subtitle={"CTO"}
        imageWidth={1920}
        imageHeight={1080}
        technologies={[
          "algolia",
          "aws",
          "gads",
          "gadsense",
          "ganalytics",
          "gatsby",
          "github-actions",
          "graphql",
          "gsearchconsole",
          "gtm",
          "html5",
          "openlitespeed",
          "react",
          "sass",
          "styledcomponents",
          "telegram",
          "terraform",
          "typescript",
          "wordpress",
        ]}
      />
      <ProjectSection>
        <H2>What is BestOnDesk?</H2>
        <P>
          BestOnDesk is an italian blog, created for the people who work in
          office, to give advices on products, but also articles on motivation,
          personal growth and personal finance. Idea came from a friend of mine,
          Marco Campagnolo, I created the first website in Wordpress and he is
          still writing the articles.
        </P>
        <H2>Website</H2>
        <P>
          The actual website is created with Gatsby, with the legacy Wordpress
          as CMS built with Gatsby, importing articles with GraphQL.
        </P>
        <H3>Open Source</H3>
        <P>
          The project is Open Source and it's available on Github in{" "}
          <A href="https://github.com/BestOnDesk/gatsby-bod">this repository</A>
          , where you can find obviously only the frontend.
        </P>
        <H3>Frontend</H3>
        <P>
          Frontend is based on Gatsby, which is a React framework created to
          build static websites from dynamic assets. The website builds on
          Github Actions and then it goes on AWS S3 and the cache is on AWS
          Cloudfront.
        </P>
        <Img
          src={"/projects/bestondesk/website.jpg"}
          width={1920}
          height={1080}
        />
        <H3>CMS</H3>
        <P>
          Wordpress is the CMS I used in this project, because the legacy
          website was on Wordpress, and there were more than 400 articles. I
          didn't have time to move the articles on another CMS, also because I
          used on Wordpress a plugin to show Amazon products, which are the core
          business of the website, so I continue to use Wordpress with the same
          plugin, but I redesigned the website and did it static with Gatsby.
        </P>
        <H3>Legacy website</H3>
        <P>
          The first website was based entirely on Wordpress, on an OpenLiteSpeed
          server on AWS EC2, performances were good for a Wordpress website,
          because it had a good cache system with LiteSpeed Cache, which has
          been a good choice. But we needed something more, so I decided to
          implement JAMStack, and I went for Gatsby.
        </P>
        <Img
          src={"/projects/bestondesk/website-legacy.jpg"}
          width={1902}
          height={947}
        />
        <H2>Collaborations</H2>
        <P>
          We collaborate with some startups, like 4Books and we are affiliated
          with Amazon, Fiverr, BigCommerce, GearBest, SkyScanner and many other
          companies.
        </P>
        <H2>Telegram bot</H2>
        <P>
          I created a Telegram channel for BestOnDesk followers. There are 3
          bots which let me manage that channel.
        </P>
        <H3>Manager bot</H3>
        <P>
          The manager bot is the one which permit me to start/stop the other
          bots and to have some info like percentages of usage of services,
          etc..
        </P>
        <H3>Target bot</H3>
        <P>
          The second bot use a list of ASINs (I created) and gets price averages
          for the last months, after that it calculates the target price for
          products, with a logarithmic expression.
        </P>
        <H3>Alert bot</H3>
        <P>
          Last but not least, the alert bot, it writes on Telegram channel the
          offers and the real discounts, because it alerts people only when
          price is really under the target price which is calculated on previous
          prices, and not on fake discounts you find on Amazon.
        </P>
      </ProjectSection>
    </GlobalWrapper>
  );
};

export default BestOnDesk;
