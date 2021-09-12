import { FunctionComponent, ReactChild } from "react";
import Menu from "./Menu";

interface LayoutProps {
  children: ReactChild | ReactChild[];
}

const Layout: FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <Menu />
      {props.children}
    </>
  );
};

export default Layout;
