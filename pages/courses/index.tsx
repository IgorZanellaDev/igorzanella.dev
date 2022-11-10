import type { NextPage } from "next";
import GlobalWrapper from "../../components/core/GlobalWrapper";
import SEO from "../../components/core/SEO";
import TitleSection from "components/ui/base/TitleSection";
import CoursesSection from "components/ui/extended/CoursesSection";

const Projects: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO
        title="Courses"
        description="My public programming courses, some of them with a discount code just for you."
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
