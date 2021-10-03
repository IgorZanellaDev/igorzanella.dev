import React, { FunctionComponent, ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: FunctionComponent<PageContainerProps> = (
  props: PageContainerProps
) => {
  return (
    <div className="mx-auto container px-6 lg:px-14 xl:px-0">
      {props.children}
    </div>
  );
};

export default PageContainer;
