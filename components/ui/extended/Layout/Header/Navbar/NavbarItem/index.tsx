import React, { FunctionComponent } from "react";
import Link from "next/link";
import { LinkProps } from "next/dist/client/link";
import { useRouter } from "next/router";

interface NavbarItemProps {
  newTab?: boolean;
  title?: string;
}

type Props = React.PropsWithChildren<LinkProps> & NavbarItemProps;

const NavbarItem: FunctionComponent<Props> = ({
  children,
  href,
  newTab,
  title,
  ...rest
}) => {
  const isActive = href === useRouter().pathname;

  return (
    <Link
      {...rest}
      href={href}
      className={`cursor-pointer text-base hover:text-white focus:outline-none focus:text-white font-semibold leading-none transition fill-current ${
        isActive ? "text-white pointer-events-none" : "text-gray-500"
      }
        `}
      rel={newTab ? "noopener" : undefined}
      target={newTab ? "_blank" : undefined}
      title={title}
    >
      {children}
    </Link>
  );
};

export default NavbarItem;
