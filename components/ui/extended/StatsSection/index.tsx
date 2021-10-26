import React, { FunctionComponent } from "react";
import { dehydrate, QueryClient } from "react-query";
import {
  getGithubStats,
  GITHUB_STATS_KEY,
  useGithubStats,
} from "network/useGithubStats";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Animation from "components/core/Animation";

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(GITHUB_STATS_KEY, getGithubStats);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

interface StatsCardProps {
  title: string;
  value?: number;
  textValue?: string;
}

const StatsCard: FunctionComponent<StatsCardProps> = (
  props: StatsCardProps
) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <Animation type={"fadeInUp"} className="pt-6">
      <div className="flow-root bg-gray-800 rounded-lg px-6 pb-8">
        <h3 className="mt-6 text-4xl font-bold text-white tracking-tight">
          {props.title}
        </h3>
        {props.value && (
          <p
            ref={ref}
            className="mt-3 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-iz-yellow-light to-iz-yellow-dark"
          >
            <CountUp
              start={0}
              end={inView ? props.value : 0}
              duration={3}
              useEasing
            />
          </p>
        )}
        {props.textValue && (
          <p className="mt-3 text-4xl leading-snug font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-iz-yellow-light to-iz-yellow-dark">
            {props.textValue}
          </p>
        )}
      </div>
    </Animation>
  );
};

const StatsSection: FunctionComponent = () => {
  const { data: stats } = useGithubStats();

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
