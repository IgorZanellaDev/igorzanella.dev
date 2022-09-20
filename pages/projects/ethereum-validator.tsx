import { NextPage } from "next";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import ProjectTitle from "components/ui/base/ProjectTitle";
import ProjectSection from "components/ui/base/ProjectSection";
import H2 from "components/core/Typography/H2";
import P from "components/core/Typography/P";
import A from "components/core/Typography/A";

const EthereumValidator: NextPage = () => {
  const handleChatClick = () => {
    //@ts-ignore
    window.customerly.showNewMessage(
      "Hi Igor! I would like to have more information for an Ethereum validator server."
    );
  };

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
          automated servers which validate the blockchain transaction. So there
          are server maintained by the people who wants to help the project. The
          servers are linked to a wallet, where a part of transactions fee comes
          as a reward.
        </P>
        <H2>What are the hardware requirements?</H2>
        <P>
          The server has to be up as long as possible, to earn more and to not
          get penalties. Theoretically server needs to have at minimum 90-95%
          uptime, but if you keep it above, it's obviously better. The
          requirements are big storage (starting with 1TB), high network uptime
          and obviously infrastructure stability.
        </P>
        <H2>Which are the budget requirements?</H2>
        <P>
          To start an ethereum validator you need to block 32 ETH in the
          network, at the start of the project (in 2020), 32 ETH were equals to
          20-30k USD, a big investment on the network. You can check the actual
          price on{" "}
          <A
            href={"https://coinmarketcap.com/currencies/ethereum/"}
            target={"_blank"}
            rel={"nofollow"}
          >
            CoinMarketCap
          </A>
          . These ETH can't be sell until the shard chains update. It's an
          investment in the future of Ethereum.
        </P>
        <H2>Decentralization</H2>
        <P>
          One of the most important parts of blockchains is decentralization, so
          it's a good practice to host this server at home, but sometimes there
          can be some problems, for example noise, power consumption, uptime,
          etc.. So, I decided to host the server on a small but stable service
          provider.
        </P>
        <H2>Client diversity</H2>
        <P>
          When I started the server, there were not so many different execution
          clients and consensus clients. So I chose the most used which was{" "}
          <A
            href={"https://geth.ethereum.org/"}
            target={"_blank"}
            rel={"nofollow"}
          >
            Geth
          </A>{" "}
          and{" "}
          <A
            href={"https://docs.prylabs.network/"}
            target={"_blank"}
            rel={"nofollow"}
          >
            Prysm
          </A>
          . Today a lot of users are promoting{" "}
          <A
            href={"https://clientdiversity.org/"}
            target={"_blank"}
            rel={"nofollow"}
          >
            Client Diversity
          </A>
          , which add a second level of decentralization. In addition to
          diversify server locations, we should need to diversify clients, in
          order to not have the same problems if some clients have some bugs,
          etc..
        </P>
        <H2>Monitoring</H2>
        <P>
          There are different ways to monitor an Ethereum staking validator
          server, you can do it online, checking block validations, after that
          you can do it locally on the server. I installed Prometheus and
          Grafana on the server, to let the owner check if server is up and
          running.
        </P>
        <H2>Future</H2>
        <P>
          Server needs to be updated, so I continue maintaining this server. If
          you need a validator server or more info,{" "}
          <A href={"#contact-me"} id={"contact-me"} onClick={handleChatClick}>
            contact me
          </A>
          .
        </P>
      </ProjectSection>
    </GlobalWrapper>
  );
};

export default EthereumValidator;
