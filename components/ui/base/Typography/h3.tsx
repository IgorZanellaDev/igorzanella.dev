import { FunctionComponent, ReactNode } from "react";

interface H3Props {
  children?: ReactNode;
  className?: string;
}

const H3: FunctionComponent<H3Props> = (props: H3Props) => {
  return <h3 className={`text-white ${props.className}`}>{props.children}</h3>;
};

export default H3;
