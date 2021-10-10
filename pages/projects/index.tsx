import type { NextPage } from "next";
import GlobalWrapper from "../../components/core/GlobalWrapper";
import SEO from "../../components/core/SEO";
import TitleSection from "components/ui/base/TitleSection";
import ProjectSection from "components/ui/extended/ProjectSection";

const Projects: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title="Projects" />
      <TitleSection
        subtitle={"Projects"}
        title={"This is not everything..."}
        description={
          "Here you can find some of my projects or projects in which I have worked, if you are interested in something else contact me, i did not post them all."
        }
      />
      <ProjectSection
        id={"bestondesk"}
        type={"Personal side project"}
        title={"BestOnDesk"}
        description={
          "Italian blog, business created to earn with affiliate marketing, Amazon and others."
        }
        imageWidth={1920}
        imageHeight={1080}
      />
      <ProjectSection
        inverted
        id={"customerly"}
        type={"Customer project"}
        title={"Customerly"}
        description={
          "Italian blog, business created to earn with affiliate marketing, Amazon and others."
        }
        imageWidth={1950}
        imageHeight={1010}
      />
      <ProjectSection
        id={"amz-discount-bot"}
        type={"Personal side project"}
        title={"AMZ DiscountBot"}
        description={
          "Italian blog, business created to earn with affiliate marketing, Amazon and others."
        }
        imageWidth={1920}
        imageHeight={1080}
      />
      <ProjectSection
        inverted
        id={"racing-line-motorsport"}
        type={"Team project"}
        title={"Racing Line Motorsport"}
        description={
          "Sim racing international team, competing in most important championships in the world"
        }
        imageWidth={1920}
        imageHeight={1080}
      />
    </GlobalWrapper>
  );
};

export default Projects;
