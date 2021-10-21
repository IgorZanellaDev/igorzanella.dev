import type { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import TitleSection from "components/ui/base/TitleSection";
import JobsTimeline from "components/ui/extended/JobsTimeline";

const About: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title="About" />
      <TitleSection
        subtitle={"About"}
        title={"Do you want to get to know me?"}
        description={"My previous jobs and passions."}
      />
      <JobsTimeline />
    </GlobalWrapper>
  );
};

export default About;
