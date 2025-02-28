"use client";

import { Button } from "@/components/ui/button";
import { BookText, Compass, House, User, Video } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const NAV_LINKS = [
  {
    label: "Home",
    link: "/",
    icon: House,
  },
  {
    label: "Projects",
    link: "/projects",
    icon: BookText,
  },
  {
    label: "Guides",
    link: "/guides",
    icon: Compass,
  },
  {
    label: "Courses",
    link: "/courses",
    icon: Video,
  },
  {
    label: "About",
    link: "/about",
    icon: User,
  },
];

const Nav: FC = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={"flex flex-col gap-1"}>
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Button asChild className={"w-full justify-start"} variant={pathname === link.link ? "outline" : "ghost"}>
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
