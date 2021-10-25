import React, { FunctionComponent } from "react";
import Link from "next/link";
import { LinkProps } from "next/dist/client/link";
import { useRouter } from "next/router";

interface NavbarItemProps {
  newTab?: boolean;
}

type Props = React.PropsWithChildren<LinkProps> & NavbarItemProps;

const NavbarItem: FunctionComponent<Props> = (props: Props) => {
  const isActive = props.href === useRouter().pathname;

  return (
    <Link {...props}>
      <a
        className={
          "cursor-pointer text-base hover:text-white focus:outline-none focus:text-white font-semibold leading-none transition fill-current " +
          (isActive ? "text-white" : "text-gray-500")
        }
        rel={props.newTab ? "noopener" : undefined}
        target={props.newTab ? "_blank" : undefined}
      >
        {props.children}
      </a>
    </Link>
  );
};

export default NavbarItem;
