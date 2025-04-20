"use client";

import ThemeChooser from "@/components/menu/theme-chooser";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SOCIALS } from "@/constants/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { LuX } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileMenu: FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <>
      <Button className={"h-12 w-12 p-2 md:hidden"} variant={"outline"} onClick={toggleMenu}>
        <RxHamburgerMenu className={"!h-5 !w-5"} />
      </Button>
      {showMenu && (
        <div className={"fixed left-0 top-0 z-50 h-dvh w-dvw bg-background md:hidden"}>
          <Button
            className={"absolute right-4 top-4 h-12 w-12 p-2"}
            onClick={handleCloseMenu}
            variant={"ghost"}
            size={"icon"}
          >
            <LuX className={"!h-5 !w-5"} />
          </Button>
          <div className={"flex h-full w-full flex-col items-center justify-center gap-12"}>
            <ul className={"flex flex-col items-center gap-4"}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link className={"flex items-center gap-3 text-2xl"} href={link.link}>
                    <link.icon />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={"flex flex-col items-center gap-8"}>
              <ul className={"flex items-center gap-4"}>
                {SOCIALS.map((social) => (
                  <li key={social.link}>
                    <Link
                      className={"flex items-center gap-3 text-2xl"}
                      href={social.link}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      <social.icon />
                    </Link>
                  </li>
                ))}
              </ul>
              <ThemeChooser />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
