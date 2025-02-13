import type { NextPage } from "next";
import GlobalWrapper from "../../components/core/GlobalWrapper";
import SEO from "../../components/core/SEO";
import TitleSection from "components/ui/base/TitleSection";
import ProjectsSection from "components/ui/extended/ProjectsSection";

const Projects: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO
        title="Projects"
        description="Some of the most important projects which I created or took part."
      />
      <TitleSection
        subtitle={"Projects"}
        title={"This is not everything..."}
        description={
          "Here you can find some of my projects or projects in which I have worked, if you are interested in something else contact me, i did not post them all."
        }
      />
      <ProjectsSection />
    </GlobalWrapper>
  );
};

export default Projects;
