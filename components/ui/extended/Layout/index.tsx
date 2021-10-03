import { FunctionComponent, ReactChild } from "react";
import Header from "./Header";
import PageContainer from "../../base/PageContainer";

interface LayoutProps {
  children: ReactChild | ReactChild[];
}

const Layout: FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <PageContainer>{props.children}</PageContainer>
    </>
  );
};

export default Layout;
