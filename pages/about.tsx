import type { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import TitleSection from "components/ui/base/TitleSection";
import JobsTimelineSection from "components/ui/extended/JobsTimelineSection";
import PresentationSection from "components/ui/extended/PresentationSection";
import StatsSection from "components/ui/extended/StatsSection";

const About: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO
        title="About"
        description="I'm not only a developer. My story and previous jobs experiences."
      />
      <TitleSection
        subtitle={"About"}
        title={"Do you want to get to know me?"}
        description={"I'm not only a developer. Life is not only code."}
      />
      <PresentationSection />
      <JobsTimelineSection />
      <StatsSection />
    </GlobalWrapper>
  );
};

export default About;
