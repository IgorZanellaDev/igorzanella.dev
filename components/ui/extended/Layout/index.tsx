import { FunctionComponent, ReactChild } from "react";

interface LayoutProps {
  children: ReactChild | ReactChild[];
}

const Layout: FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  return <>{props.children}</>;
};

export default Layout;
