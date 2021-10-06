import type { NextPage } from "next";
import GlobalWrapper from "../../components/core/GlobalWrapper";
import SEO from "../../components/core/SEO";
import TitleSection from "components/ui/base/TitleSection";

const Projects: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title="Projects" />
      <TitleSection
        subtitle={"Projects"}
        title={"blablablabla"}
        description={"asdasdsadasdasdsasd"}
      />
    </GlobalWrapper>
  );
};

export default Projects;
