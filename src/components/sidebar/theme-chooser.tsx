"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button
            className={cn("w-full", currentTheme !== theme && "border border-transparent")}
            onClick={() => setTheme(theme)}
            variant={currentTheme === theme ? "outline" : "ghost"}
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{theme.charAt(0).toUpperCase() + theme.slice(1)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const ThemeChooser: FC = () => {
  return (
    <div className={"flex gap-1"}>
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
