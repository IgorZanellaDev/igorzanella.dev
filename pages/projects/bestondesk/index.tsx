import type { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import ProjectTitle from "components/ui/base/ProjectTitle";
import ProjectSection from "components/ui/base/ProjectSection";
import H2 from "components/ui/base/Typography/h2";
import P from "components/ui/base/Typography/p";

const BestOnDesk: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title={"BestOnDesk"} />
      <ProjectTitle
        category={"Affiliate marketing blog"}
        id={"bestondesk"}
        links={{
          web: "https://www.bestondesk.com",
          instagram: "https://www.instagram.com/bestondesk/",
          facebook: "https://www.facebook.com/bestondeskcom/",
          telegram: "https://t.me/bestondesk",
        }}
        name={"BestOnDesk"}
        subtitle={"Personal side project"}
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
          personal growth and personal finance.
        </P>
        <H2>Website</H2>
        <P>
          The actual website is created with Gatsby, with the legacy Wordpress
          as CMS. The legacy blog was entirely on Wordpress, so, with more than
          400 articles, it would be difficult to move everything on another CMS.
          So I decided to keep Wordpress and use it only as CMS, building the
          new website with Gatsby, importing articles with GraphQL.
        </P>
      </ProjectSection>
    </GlobalWrapper>
  );
};

export default BestOnDesk;
