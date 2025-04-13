"use client";

import { useTheme } from "next-themes";
import { FC } from "react";
import GitHubCalendar from "react-github-calendar";

interface GithubContributionsProps {
  className?: string;
}

const GithubContributions: FC<GithubContributionsProps> = ({ className }) => {
  const { theme, systemTheme } = useTheme();

  return (
    <div className={className}>
      <GitHubCalendar
        blockSize={10}
        blockMargin={3}
        colorScheme={
          theme === "system" ? (systemTheme === "dark" ? "dark" : "light") : theme === "dark" ? "dark" : "light"
        }
        weekStart={1}
        username={"igorzanelladev"}
      />
    </div>
  );
};

export default GithubContributions;
