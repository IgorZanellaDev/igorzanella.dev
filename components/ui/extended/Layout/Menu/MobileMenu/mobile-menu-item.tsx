import Link from "next/link";
import React, { FunctionComponent, ReactChild } from "react";

interface MobileMenuItemProps {
  children: ReactChild | ReactChild[];
  href: string;
  current?: boolean;
}

const MobileMenuItem: FunctionComponent<MobileMenuItemProps> = (
  props: MobileMenuItemProps
) => {
  return (
    <Link href={props.href}>
      <a
        className={
          "block px-3 py-2 rounded-md text-base font-medium " +
          (props.current
            ? "bg-gray-900 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white")
        }
      >
        {props.children}
      </a>
    </Link>
  );
};

export default MobileMenuItem;
