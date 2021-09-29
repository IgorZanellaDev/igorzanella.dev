import React, { FunctionComponent, ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: FunctionComponent<PageContainerProps> = (
  props: PageContainerProps
) => {
  return <>{props.children}</>;
};

export default PageContainer;
