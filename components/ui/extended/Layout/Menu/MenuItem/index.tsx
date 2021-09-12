import React, { FunctionComponent, ReactChild } from "react";
import Link from "next/link";

interface MenuItemProps {
  children: ReactChild | ReactChild[];
  href: string;
  current?: boolean;
  cta?: boolean;
}

const MenuItem: FunctionComponent<MenuItemProps> = (props: MenuItemProps) => {
  return (
    <Link href={props.href}>
      <a
        className={
          "px-3 py-2 rounded-md text-sm font-medium transition duration-300 " +
          (props.current
            ? "bg-gray-900 text-white"
            : props.cta
            ? "bg-yellow-500 hover:bg-yellow-600 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white")
        }
        aria-current={props.current ? "page" : undefined}
      >
        {props.children}
      </a>
    </Link>
  );
};

export default MenuItem;
