import React, { FunctionComponent, ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: FunctionComponent<PageContainerProps> = (
  props: PageContainerProps
) => {
  return (
    <div className={"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"}>
      <div className={"px-4 sm:px-6 xl:px-8 pt-10 pb-16"}>{props.children}</div>
    </div>
  );
};

export default PageContainer;
