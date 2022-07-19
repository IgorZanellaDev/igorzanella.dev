import type { NextPage } from "next";
import GlobalWrapper from "../../components/core/GlobalWrapper";
import SEO from "../../components/core/SEO";
import TitleSection from "components/ui/base/TitleSection";
import ProjectsSection from "components/ui/extended/ProjectsSection";
import CoursesSection from "components/ui/extended/CoursesSection";

const Projects: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO
        title="Courses"
        description="Some of the most important projects which I created or took part."
      />
      <TitleSection
        subtitle={"Courses"}
        title={"I also love teaching..."}
        description={
          "After some friends told me, I started teaching programming. So now I'm also creating courses, for people who wants to learn programming."
        }
      />
      <CoursesSection />
    </GlobalWrapper>
  );
};

export default Projects;
