import React, { FunctionComponent, ReactNode } from "react";

interface PProps {
  children?: ReactNode;
}

const P: FunctionComponent<PProps> = (props: PProps) => {
  return <p className="mt-4 text-lg text-white">{props.children}</p>;
};

export default P;
