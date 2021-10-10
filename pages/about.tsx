import type { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import TitleSection from "components/ui/base/TitleSection";

const About: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title="About" />
      <TitleSection
        subtitle={"About"}
        title={"Do you want to get to know me?"}
        description={"You will discover my previous jobs and my passions"}
      />
    </GlobalWrapper>
  );
};

export default About;
