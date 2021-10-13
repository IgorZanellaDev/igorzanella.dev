import { FunctionComponent, ReactNode } from "react";

interface H3Props {
  children?: ReactNode;
  className?: string;
}

const H3: FunctionComponent<H3Props> = (props: H3Props) => {
  return (
    <h3
      className={`text-white text-xl lg:text-3xl font-semibold mt-2 ${props.className}`}
    >
      {props.children}
    </h3>
  );
};

export default H3;
