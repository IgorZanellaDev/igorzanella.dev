import Link from "next/link";
import React, { FunctionComponent } from "react";

const A: FunctionComponent<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  href,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      href={href ? href : "/"}
      className="text-iz-blue-light hover:text-iz-blue-light-darker-10 transition"
    >
      {children}
    </Link>
  );
};

export default A;
