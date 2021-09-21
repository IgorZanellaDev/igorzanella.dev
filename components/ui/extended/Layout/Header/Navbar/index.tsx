import React, { FunctionComponent } from "react";
import Logo from "../../../../../core/Logo";
import Icon from "../../../../base/Icon";
import NavbarItem from "./NavbarItem";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from "../../../../../../constants/url";

const Navbar: FunctionComponent = () => {
  return (
    <nav
      className="hidden md:flex justify-between items-center pt-4 mb-12"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex flex-row items-center space-x-10">
        <NavbarItem href={"/"}>Home</NavbarItem>
        <NavbarItem href={"/projects"}>Projects</NavbarItem>
        <NavbarItem href={"/about"}>About</NavbarItem>
      </div>
      <div className="flex h-auto">
        <Logo withoutText />
      </div>
      <div className="flex justify-center items-center space-x-6">
        <NavbarItem href={GITHUB_URL}>
          <Icon size={32} type={"github"} />
        </NavbarItem>
        <NavbarItem href={LINKEDIN_URL}>
          <Icon size={32} type={"linkedin"} />
        </NavbarItem>
        <NavbarItem href={TWITTER_URL}>
          <Icon size={32} type={"twitter"} />
        </NavbarItem>
      </div>
    </nav>
  );
};

export default Navbar;
