"use client";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

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
