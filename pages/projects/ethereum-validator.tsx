import { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import ProjectTitle from "components/ui/base/ProjectTitle";
import ProjectSection from "components/ui/base/ProjectSection";
import H2 from "components/core/Typography/H2";
import P from "components/core/Typography/P";

const EthereumValidator: NextPage = () => {
  return (
    <GlobalWrapper withLayout>
      <SEO
        title="Customerly"
        description="The First Customer Centric Communication Suite. A startup in which I'm participating."
        image="/projects/customerly/main.jpg"
      />
      <ProjectTitle
        subtitle={"Consultant"}
        id={"ethereum-validator"}
        name={"Ethereum validator"}
        category={"Crypto staking server"}
        imageWidth={1920}
        imageHeight={1080}
        technologies={["ethereum", "geth", "grafana", "prysm", "ubuntu"]}
      />
      <ProjectSection>
        <H2>What is an Ethereum validator server?</H2>
        <P>
          In a proof of stake blockchain you need validators node, which are
          automated servers which validate the blockchain transaction.
        </P>
      </ProjectSection>
    </GlobalWrapper>
  );
};

export default EthereumValidator;
