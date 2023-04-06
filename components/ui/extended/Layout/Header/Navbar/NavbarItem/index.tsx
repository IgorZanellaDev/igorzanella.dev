import React, { FunctionComponent } from "react";
import Link from "next/link";
import { LinkProps } from "next/dist/client/link";
import { useRouter } from "next/router";

interface NavbarItemProps {
  newTab?: boolean;
  title?: string;
}

type Props = React.PropsWithChildren<LinkProps> & NavbarItemProps;

const NavbarItem: FunctionComponent<Props> = (props: Props) => {
  const isActive = props.href === useRouter().pathname;

  return (
    <Link
      {...props}
      className={`cursor-pointer text-base hover:text-white focus:outline-none focus:text-white font-semibold leading-none transition fill-current ${
        isActive ? "text-white pointer-events-none" : "text-gray-500"
      }
        `}
      rel={props.newTab ? "noopener" : undefined}
      target={props.newTab ? "_blank" : undefined}
      title={props.title}
    >
      {props.children}
    </Link>
  );
};

export default NavbarItem;
