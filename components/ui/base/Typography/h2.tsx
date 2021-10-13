import { FunctionComponent, ReactNode } from "react";

interface H2Props {
  children?: ReactNode;
  className?: string;
}

const H2: FunctionComponent<H2Props> = (props: H2Props) => {
  return (
    <h2 className={`text-white text-4xl font-bold mt-4 ${props.className}`}>
      {props.children}
    </h2>
  );
};

export default H2;
