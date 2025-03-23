"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { LuBookText, LuHouse, LuUser, LuVideo } from "react-icons/lu";

const NAV_LINKS = [
  {
    label: "Home",
    link: "/",
    icon: LuHouse,
  },
  {
    label: "Projects",
    link: "/projects",
    icon: LuBookText,
  },
  {
    label: "Courses",
    link: "/courses",
    icon: LuVideo,
  },
  {
    label: "About",
    link: "/about",
    icon: LuUser,
  },
];

const Nav: FC = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={"flex flex-col gap-1"}>
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Button
              asChild
              className={cn("w-full justify-start", pathname !== link.link && "ml-[1px]")}
              variant={pathname === link.link ? "outline" : "ghost"}
            >
              <Link href={link.link}>
                <link.icon />
                {link.label}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
