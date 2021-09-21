import React, { FunctionComponent } from "react";
import Link from "next/link";
import { LinkProps } from "next/dist/client/link";
import { useRouter } from "next/router";

const NavbarItem: FunctionComponent<React.PropsWithChildren<LinkProps>> = (
  props: React.PropsWithChildren<LinkProps>
) => {
  const isActive = props.href === useRouter().pathname;

  return (
    <Link {...props}>
      <a
        className={
          "cursor-pointer text-base hover:text-white focus:outline-none focus:text-white font-semibold leading-none transition fill-current " +
          (isActive ? "text-white" : "text-gray-500")
        }
      >
        {props.children}
      </a>
    </Link>
  );
};

export default NavbarItem;
