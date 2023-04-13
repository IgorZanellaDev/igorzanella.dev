import { NextPage } from "next";
import SEO from "components/core/SEO";
import TitleSection from "components/ui/base/TitleSection";
import GlobalWrapper from "components/core/GlobalWrapper";
import ToolsSection from "components/ui/extended/ToolsSection";

const Tools: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO
        title="Tools"
        description="Discover the tools I use every day as a developer, but also in my life."
      />
      <TitleSection
        subtitle={"Tools"}
        title={"Do you want to know the tools I use daily?"}
        description={
          "Discover what I use every day as a developer, but also in my life."
        }
      />
      <ToolsSection />
    </GlobalWrapper>
  );
};

export default Tools;
