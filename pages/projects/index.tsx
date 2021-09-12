import type { NextPage } from "next";
import GlobalWrapper from "../../components/core/GlobalWrapper";
import SEO from "../../components/core/SEO";

const Projects: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title="Projects" />
    </GlobalWrapper>
  );
};

export default Projects;
