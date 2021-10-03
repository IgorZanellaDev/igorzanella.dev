import type { NextPage } from "next";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";

const About: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title="About" />
      <h1>About</h1>
    </GlobalWrapper>
  );
};

export default About;
