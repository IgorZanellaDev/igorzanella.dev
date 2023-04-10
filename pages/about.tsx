import type { GetServerSideProps, NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import TitleSection from "components/ui/base/TitleSection";
import JobsTimelineSection from "components/ui/extended/JobsTimelineSection";
import PresentationSection from "components/ui/extended/PresentationSection";
import StatsSection from "components/ui/extended/StatsSection";
import axios from "axios";
import { GithubStatsApi } from "types/github";
import absoluteUrl from "next-absolute-url";

interface AboutProps {
  stats: GithubStatsApi;
}

const About: NextPage<AboutProps> = ({ stats }) => {
  return (
    <GlobalWrapper withLayout>
      <SEO
        title="About"
        description="I'm not only a developer. My story and previous jobs experiences."
        image="/about/igor-zanella.jpg"
      />
      <TitleSection
        subtitle={"About"}
        title={"Do you want to get to know me?"}
        description={"I'm not only a developer. Life is not only code."}
      />
      <PresentationSection />
      <JobsTimelineSection />
      <StatsSection stats={stats} />
    </GlobalWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { origin } = absoluteUrl(req);
  const stats = (await axios.get(`${origin}/api/github-stats`)).data;

  return {
    props: {
      stats,
    },
  };
};

export default About;
