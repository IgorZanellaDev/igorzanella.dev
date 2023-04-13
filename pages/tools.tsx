import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import TitleSection from "components/ui/base/TitleSection";
import InsertEmailInput from "components/ui/extended/InsertEmailInput";
import { GetServerSideProps, NextPage } from "next";
import { getCookie } from "cookies-next";
import { IUBENDA_COOKIE_NAME } from "constants/cookie";

interface ToolsProps {
  cookieConsent: boolean;
}

const Tools: NextPage<ToolsProps> = ({ cookieConsent }) => {
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
