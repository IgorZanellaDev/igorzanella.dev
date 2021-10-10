import React, { FunctionComponent } from "react";
import Logo from "components/core/Logo";
import Icon from "components/core/Icon";
import NavbarItem from "./NavbarItem";
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from "constants/url";
import { MENU_LINKS } from "constants/navbar";

const Navbar: FunctionComponent = () => {
  return (
    <nav
      className="hidden md:grid grid-cols-3 w-full items-center pt-4 mb-12"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex flex-row items-center space-x-10">
        {MENU_LINKS.map((menuLink) => (
          <NavbarItem href={menuLink.link} key={menuLink.name}>
            {menuLink.name}
          </NavbarItem>
        ))}
      </div>
      <div className="flex justify-center items-center h-auto">
        <Logo withoutText />
      </div>
      <div className="flex justify-end items-center space-x-6">
        <NavbarItem href={GITHUB_URL}>
          <Icon size={24} type={"github"} />
        </NavbarItem>
        <NavbarItem href={LINKEDIN_URL}>
          <Icon size={24} type={"linkedin"} />
        </NavbarItem>
        <NavbarItem href={TWITTER_URL}>
          <Icon size={24} type={"twitter"} />
        </NavbarItem>
      </div>
    </nav>
  );
};

export default Navbar;
