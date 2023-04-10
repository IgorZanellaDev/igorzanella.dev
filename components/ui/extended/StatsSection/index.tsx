import React, { FunctionComponent } from "react";
import Animation from "components/core/Animation";
import StatsCard from "components/ui/extended/StatsSection/StatsCard";
import { GithubStatsApi } from "types/github";

interface StatsSectionProps {
  stats?: GithubStatsApi;
}

const StatsSection: FunctionComponent<StatsSectionProps> = ({ stats }) => {
  const thisYear = new Date().getFullYear();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-md text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <Animation type={"fadeInUp"}>
          <p className="text-base font-semibold tracking-wider text-iz-blue-light uppercase">
            On GitHub since {stats?.first_year}
          </p>
        </Animation>
        <Animation type={"fadeInUp"}>
          <h2 className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            {thisYear} GitHub Stats 📈
          </h2>
        </Animation>
        <Animation type={"fadeInUp"}>
          <p className="mt-4 max-w-prose mx-auto text-xl text-gray-400">
            These are my up to date GitHub stats of the last year. They are
            updating themselves dynamically.
          </p>
        </Animation>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
            <StatsCard
              title={"Contributions"}
              value={stats?.total_contributions}
            />
            <StatsCard
              title={"Repositories"}
              value={stats?.total_repositories}
            />
            <StatsCard title={"Starred repos"} value={stats?.starred_repos} />
            <StatsCard title={"Top repo"} textValue={stats?.top_repo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
