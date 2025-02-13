import React, { FunctionComponent, ReactChild } from "react";
import Layout from "components/ui/extended/Layout";

interface GlobalWrapperProps {
  withLayout?: boolean;
  children: ReactChild[];
}

const GlobalWrapper: FunctionComponent<GlobalWrapperProps> = (
  props: GlobalWrapperProps
) => {
  return (
    <>{props.withLayout ? <Layout>{props.children}</Layout> : props.children}</>
  );
};

export default GlobalWrapper;
