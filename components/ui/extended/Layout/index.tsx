import { FunctionComponent, ReactChild } from "react";
import Header from "./Header";
import PageContainer from "components/ui/base/PageContainer";
import Footer from "components/ui/extended/Layout/Footer";

interface LayoutProps {
  children: ReactChild | ReactChild[];
}

const Layout: FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <PageContainer>{props.children}</PageContainer>
      <Footer />
    </>
  );
};

export default Layout;
