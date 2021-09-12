import type { NextPage } from "next";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";

const Home: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title="Home" />
    </GlobalWrapper>
  );
};

export default Home;
