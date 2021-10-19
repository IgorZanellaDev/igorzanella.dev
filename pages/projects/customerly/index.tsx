import type { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import ProjectTitle from "components/ui/base/ProjectTitle";

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
    </GlobalWrapper>
  );
};

export default Customerly;
