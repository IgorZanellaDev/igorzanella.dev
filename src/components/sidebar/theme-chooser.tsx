"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { FC, ReactNode, useEffect, useState } from "react";
import { LuMonitor, LuMoon, LuSun } from "react-icons/lu";

const useThemeSwitcher = (): [string | undefined, (theme: string) => void] => {
  const [mode, setMode] = useState<string>();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMode(theme);
  }, [theme]);

  return [mode, setTheme];
};

const ThemeButton: FC<{ children: ReactNode; theme: string }> = ({ children, theme }) => {
  const [currentTheme, setTheme] = useThemeSwitcher();

  return (
    <Button
      className={cn("w-full", currentTheme !== theme && "border border-transparent")}
      onClick={() => setTheme(theme)}
      variant={currentTheme === theme ? "outline" : "ghost"}
    >
      {children}
    </Button>
  );
};

const ThemeChooser: FC = () => {
  return (
    <div className={"flex gap-1 p-2"}>
      <ThemeButton theme={"system"}>
        <LuMonitor />
      </ThemeButton>
      <ThemeButton theme={"light"}>
        <LuSun />
      </ThemeButton>
      <ThemeButton theme={"dark"}>
        <LuMoon />
      </ThemeButton>
    </div>
  );
};

export default ThemeChooser;
