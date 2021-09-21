import { FunctionComponent, ReactChild } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactChild | ReactChild[];
}

const Layout: FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
