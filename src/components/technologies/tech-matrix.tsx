"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Technology } from "@/types/technology";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const TechMatrix: FC<{
  rows: Technology[][];
}> = ({ rows }) => {
  const { theme, systemTheme } = useTheme();

  return (
    <div className={"relative flex w-full flex-col overflow-hidden"}>
      {rows.map((row, rowIndex) => (
        <Marquee pauseOnHover key={rowIndex} reverse={rowIndex % 2 === 1}>
          {row.map((tech) => (
            <Link
              className={
                "flex items-center gap-2 rounded-2xl bg-muted px-3 py-1 transition-colors hover:bg-muted-foreground/10"
              }
              key={tech.name}
              href={tech.link}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <Image
                className={"h-5 w-5"}
                src={`/tech-icons/${tech.icon}${tech.themeChange !== undefined ? (theme === "system" ? (systemTheme === "dark" ? "-dark" : "-light") : theme === "dark" ? "-dark" : "-light") : ""}.svg`}
                alt={tech.name}
                width={24}
                height={24}
              />
              <span className={"font-medium"}>{tech.name}</span>
            </Link>
          ))}
        </Marquee>
      ))}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
  );
};

export default TechMatrix;
