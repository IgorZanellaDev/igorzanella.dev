"use client";

import { useTheme } from "next-themes";
import { FC } from "react";
import GitHubCalendar from "react-github-calendar";

const GithubContributions: FC = () => {
  const { theme, systemTheme } = useTheme();

  return (
    <div>
      <h2 className={"mb-3 text-2xl font-semibold"}>GitHub Contributions</h2>
      <GitHubCalendar
        colorScheme={
          theme === "system" ? (systemTheme === "dark" ? "dark" : "light") : theme === "dark" ? "dark" : "light"
        }
        username={"igorzanelladev"}
      />
    </div>
  );
};

export default GithubContributions;
