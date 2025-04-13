import GithubContributions from "@/components/github-contributions";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const About: FC = () => {
  return (
    <>
      <Header title={"About"} description={"Here is a few information about me."} />
      <Image
        className={"rounded-xl"}
        src={"/images/about/igor-zanella.jpg"}
        width={5760}
        height={3840}
        alt={"Igor Zanella"}
      />
      <span className={"mt-4 text-3xl font-semibold"}>
        Currently in Italy 🇮🇹
        <span className={"ml-2 text-sm text-muted-foreground"}>
          ({new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })})
        </span>
      </span>
      <p className={"leading-relaxed"}>
        You&apos;ve already seen my{" "}
        <Link href={"/projects"} className={"underline"}>
          projects
        </Link>{" "}
        and{" "}
        <Link href={"courses"} className={"underline"}>
          courses
        </Link>
        —so now, let me tell you a bit more about who I am. I&apos;m a{" "}
        <span className={"font-semibold"}>startupper</span> and{" "}
        <span className={"font-semibold"}>freelance developer</span> based in Treviso, Italy. I love building things
        that matter and turning ideas into real-world solutions.
      </p>
      <div className={"mt-4 flex w-full gap-2"}>
        <div className={"flex-1"}>
          <Image
            className={"rounded-xl"}
            src={"/images/about/bjj.jpg"}
            width={1232}
            height={1232}
            alt={"Igor Zanella BJJ"}
          />
        </div>
        <div className={"flex-1"}>
          <Image
            className={"rounded-xl"}
            src={"/images/about/snowboarding.jpg"}
            width={1947}
            height={1947}
            alt={"Igor Zanella Snowboarding"}
          />
        </div>
        <div className={"flex-1"}>
          <Image
            className={"rounded-xl"}
            src={"/images/about/karting.jpg"}
            width={1728}
            height={1728}
            alt={"Igor Zanella Karting"}
          />
        </div>
      </div>
      <h2 className={"mt-4 text-xl font-medium"}>Sports</h2>
      <p className={"leading-relaxed"}>
        I believe staying active is key to a healthy work-life balance, and I&apos;m passionate about a variety of
        sports.
        <br />
        🥋 <span className={"font-semibold"}>Brazilian Jiu Jitsu:</span> I&apos;m a brown belt and regularly compete in
        international tournaments.
        <br />
        🏔️ <span className={"font-semibold"}>Mountain Sports:</span> Living close to the Dolomites, I spend my winters
        snowboarding and summers hiking.
        <br />
        🏁 <span className={"font-semibold"}>Motorsports:</span> I&apos;m a huge fan of racing (check out my{" "}
        <Link href={"/projects/racing-line-motorsport"} className={"underline"}>
          Racing Line Motorsport
        </Link>{" "}
        project), and I occasionally go karting. One day, I&apos;d love to race real cars.
      </p>
      <h2 className={"mt-4 text-xl font-medium"}>Previous work experiences</h2>
      <p className={"leading-relaxed"}>
        Before going solo as a freelancer, I worked in several roles across tech—both as a{" "}
        <span className={"font-semibold"}>System Administrator</span> and a{" "}
        <span className={"font-semibold"}>Software Engineer</span>. I also spent a month in Białystok, Poland, working
        at a startup incubator (
        <a href={"https://bpnt.bialystok.pl/en"} target={"_blank"} rel={"noopener"} className={"underline"}>
          BPNT
        </a>
        ), which gave me valuable insight into the startup ecosystem.
      </p>
      <h2 className={"mt-4 text-xl font-medium"}>Education</h2>
      <p className={"leading-relaxed"}>
        I graduated from high school in Italy with a <span className={"font-semibold"}>93/100</span>, specializing in
        Computer Science and Telecommunications. While I chose not to pursue a university degree—so I could start
        working and funding my own projects—it&apos;s a decision I still reflect on. That said, I&apos;m proud of the
        journey so far and always eager to learn and grow.
      </p>
      <h2 className={"mt-4 text-xl font-medium"}>
        <a href={"https://github.com/igorzanelladev"} target={"_blank"} rel={"noopener"} className={"underline"}>
          Github
        </a>{" "}
        Contributions
      </h2>
      <GithubContributions className={"mt-2"} />
    </>
  );
};

export default About;
