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
      <SEO title="About" />
      <TitleSection
        subtitle={"About"}
        title={"Do you want to get to know me?"}
        description={"My previous jobs and passions."}
      />
      <PresentationSection />
      <JobsTimelineSection />
      <StatsSection />
    </GlobalWrapper>
  );
};

export default About;
