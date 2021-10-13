import Link from "next/link";
import React, { FunctionComponent } from "react";

const A: FunctionComponent<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  href,
  ...rest
}) => {
  return (
    <Link href={href ? href : "/"}>
      <a
        {...rest}
        className="text-iz-blue-light hover:text-iz-blue-light-darker-10 transition"
      >
        {children}
      </a>
    </Link>
  );
};

export default A;
