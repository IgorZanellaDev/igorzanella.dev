import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import TitleSection from "components/ui/base/TitleSection";
import InsertEmailInput from "components/ui/extended/InsertEmailInput";
import { GetServerSideProps, NextPage } from "next";
import { getCookie } from "cookies-next";
import { IUBENDA_COOKIE_NAME } from "constants/cookie";
import { TOOLS } from "constants/tools";

interface ToolsProps {
  cookieConsent: boolean;
}

const Tools: NextPage<ToolsProps> = ({ cookieConsent }) => {
  return (
    <GlobalWrapper withLayout>
      <SEO
        title="Unlock My Developer Arsenal"
        description={`Unlock my top ${TOOLS.length} developer tools and supercharge your productivity. Subscribe now!`}
      />
      <TitleSection
        subtitle={"Tools"}
        title={"Unlock My Developer Arsenal"}
        description={
          "Subscribe with your email and discover the tools that boost my productivity."
        }
      />
      <InsertEmailInput cookieConsent={cookieConsent} />
    </GlobalWrapper>
  );
};

export const getServerSideProps: GetServerSideProps<ToolsProps> = async ({
  req,
  res,
}) => {
  const iubendaCookie = getCookie(IUBENDA_COOKIE_NAME, { req, res });

  const parsedIubendaCookie =
    iubendaCookie &&
    typeof iubendaCookie === "string" &&
    JSON.parse(iubendaCookie);

  return {
    props: { cookieConsent: !!parsedIubendaCookie?.consent },
  };
};

export default Tools;
