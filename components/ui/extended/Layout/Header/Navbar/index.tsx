import React, { FunctionComponent } from "react";
import Logo from "components/core/Logo";
import Icon from "components/core/Icon";
import NavbarItem from "components/ui/extended/Layout/Header/Navbar/NavbarItem";
import { MENU_LINKS, SOCIAL_LINKS } from "constants/navbar";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar: FunctionComponent = () => {
  const isHomeActive = useRouter().pathname === "/";

  return (
    <nav
      className="grid grid-cols-1 md:grid-cols-3 w-full items-center pt-4 mb-6 md:mb-12"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex flex-row items-center space-x-10 justify-center mt-4 md:mt-0 md:justify-start order-2 md:order-1">
        {MENU_LINKS.map((menuLink) => (
          <NavbarItem href={menuLink.link} key={menuLink.name}>
            {menuLink.name}
          </NavbarItem>
        ))}
      </div>
      <Link href={"/"}>
        <a
          className={`flex justify-center items-center h-auto order-1 md:order-2 ${
            isHomeActive && "pointer-events-none"
          }`}
        >
          <Logo withoutText />
        </a>
      </Link>
      <div className="flex justify-center md:justify-end mt-6 md:mt-0 items-center space-x-6 order-3">
        {SOCIAL_LINKS.map((social) => (
          <NavbarItem href={social.link} key={social.name} newTab>
            <Icon size={24} type={social.icon} />
          </NavbarItem>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
