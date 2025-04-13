import { Project, ProjectStatus } from "@/types/project";
import { TechnologyId } from "@/types/technology";
import Image from "next/image";
import { IconType } from "react-icons";
import { LuSettings, LuX, LuZap } from "react-icons/lu";

export const PROJECTS_STATUS_SETTINGS: Record<ProjectStatus, { icon: IconType; color: string }> = {
  [ProjectStatus.Working]: { icon: LuSettings, color: "bg-green-500" },
  [ProjectStatus.Active]: { icon: LuZap, color: "bg-blue-500" },
  [ProjectStatus.Closed]: { icon: LuX, color: "bg-red-500" },
};

export const PROJECTS: (showCustomerlyMessage?: (message: string) => void) => Project[] = (showCustomerlyMessage) => [
  {
    title: "Customerly",
    description: "The Customer Operating System for SaaS",
    id: "customerly",
    imageSize: { width: 1200, height: 630 },
    status: ProjectStatus.Working,
    main: true,
    technologiesChunkSize: 11,
    technologies: [
      TechnologyId.React,
      TechnologyId.ReactNative,
      TechnologyId.Nextjs,
      TechnologyId.Typescript,
      TechnologyId.Vite,
      TechnologyId.Tanstack,
      TechnologyId.Tailwind,
      TechnologyId.StyledComponents,
      TechnologyId.SocketIo,
      TechnologyId.Recoil,
      TechnologyId.Jotai,
      TechnologyId.I18next,
      TechnologyId.Yarn,

      TechnologyId.Php,
      TechnologyId.Symfony,
      TechnologyId.Mysql,
      TechnologyId.Redis,
      TechnologyId.Onesignal,
      TechnologyId.Stripe,
      TechnologyId.Python,

      TechnologyId.Docker,
      TechnologyId.Linux,
      TechnologyId.Openai,
      TechnologyId.Aws,
      TechnologyId.Nginx,
      TechnologyId.Azure,
      TechnologyId.Terraform,
      TechnologyId.Circleci,
      TechnologyId.Pinecone,
      TechnologyId.Grafana,
      TechnologyId.Prometheus,
      TechnologyId.Elastic,
    ],
    content: (
      <>
        <h2>What is Customerly?</h2>
        <p>
          <a href={"https://www.customerly.io"} target={"_blank"} rel={"noopener"}>
            Customerly
          </a>{" "}
          is the first-in-class AI customer service platform designed to help businesses automate customer support,
          enhance engagement, and drive retention. Powered by advanced AI Agents, Customerly seamlessly switches from AI
          Assistant to Mission Mode, resolving customer inquiries instantly while intelligently escalating complex cases
          to human agents.
          <br />
          <br />
          Unlike traditional chatbots, Customerly is an AI-first solution that enables businesses to create fully
          customizable workflows, reducing response times and improving customer satisfaction. It also includes NPS &
          CSAT surveys, email marketing automation, and customer success tools, making it a comprehensive solution for
          SaaS companies looking to scale support operations efficiently.
        </p>
        <h2>Web application</h2>
        <p>
          The web app is the main project we manage in the team. It&apos;s the app Customerly&apos;s clients use to
          manage their customers&apos; conversations, creating Chatflows, managing their Help Center and more.
        </p>
        <Image src={"/images/projects/customerly/inboxes.jpg"} width={5058} height={3267} alt={"Chatflows"} />
        <p>
          It&apos;s based on React, built on Vite and Typescript. We used different technologies like WebSockets and
          many more to give the best experience to the users.
        </p>
        <h2>Messenger</h2>
        <p>
          The Messenger is one of the main features of Customerly. It is the main interface for the customers to
          interact with the company.
          <br />
          It&apos;s been accessed more than 100M times every month. It&apos;s based on React and I developed the last
          version from scratch in 2024.
        </p>
        <h2>Help Center</h2>
        <p>
          The Help Center is a feature that allows customers to search for answers to their questions. It&apos;s built
          on NextJS with ISR to give the best performance. As shown in the image below, when we released it (in 2023) we
          were performing better than our competitors on GTMetrix.
        </p>
        <Image
          src={"/images/projects/customerly/help-center.jpg"}
          width={2048}
          height={1138}
          alt={"Help Center Performances"}
        />
        <h2>Mobile App</h2>
        <p>
          The mobile app is built on React Native and Expo. It&apos;s a simple app that allows customers to interact
          with their clients answering conversations and more. I didn&apos;t develop the app, but I reviewed the code.
        </p>
        <h2>AI</h2>
        <p>
          The AI is the main feature of Customerly. The customers can create Chatflows to automate their conversations
          with their clients. We manage it with multiple LLMs in our backend.
        </p>
        <Image src={"/images/projects/customerly/chatflows.jpg"} width={5058} height={3267} alt={"Chatflows"} />
        <p>
          Our customers can also gather conversations data in automatic way using AI and use it to do different actions
          like for example calling custom APIs.
        </p>
        <h2>Backend</h2>
        <p>
          The backend is built on PHP and most of APIs are managed with Symfony. We also use Redis to cache data and for
          internal purposes. I don&apos;t work usually with the backend, but sometimes I do some changes to the code.
        </p>
        <h2>Infrastructure</h2>
        <p>
          The infrastructure is managed with Terraform, hosted mostly on AWS. I usually take care of it when we need to
          deploy something new or when we need to migrate to a new service.
        </p>
        <h2>What I do</h2>
        <p>
          I work on many parts of the project. Mainly on the frontend and infrastructure. I also do some changes to the
          backend and AI code when needed. I&apos;m also a partner of the company.
        </p>
      </>
    ),
  },
  {
    title: "ComputerPortatile",
    description: "Affiliate marketing website",
    id: "computerportatile",
    imageSize: { width: 1920, height: 1080 },
    status: ProjectStatus.Active,
    technologiesChunkSize: 6,
    technologies: [
      TechnologyId.React,
      TechnologyId.Nextjs,
      TechnologyId.Typescript,
      TechnologyId.StyledComponents,
      TechnologyId.Yarn,

      TechnologyId.Nodejs,
      TechnologyId.Nestjs,
      TechnologyId.Postgresql,

      TechnologyId.Openai,
      TechnologyId.Vercel,
      TechnologyId.Supabase,
    ],
    content: (
      <>
        <h2>What is ComputerPortatile?</h2>
        <p>
          Many friends often ask me which laptop model they should buy, I help them searching on Amazon, but the laptops
          I advice are usually the same.
          <br />
          For this reason I created{" "}
          <a href={"https://computerportatile.com"} target={"_blank"} rel={"noopener"}>
            ComputerPortatile
          </a>
          , which is an Italian website, with the lists of the top laptops on Amazon.it.
        </p>
        <h2>Amazon Affiliate Program</h2>
        <p>
          The links to Amazon are affiliate links, so if you buy a laptop through my website I get a small commission. I
          was already part of Amazon Affiliate Program some years ago with BestOnDesk, so I decided to reenter the
          program with ComputerPortatile.
        </p>
        <h2>How it started and how it changed</h2>
        <p>
          I started the project in 2022 with the simple idea to write articles in it and update them some times.
          <br />
          The problem is that I don&apos;t have much time to frequently update articles, so in 2023 I had an idea on the
          AI wave: I could use AI not only to write the articles for me, but it can also help me to find the best
          laptops on Amazon.it.
        </p>
        <h2>Frontend technologies</h2>
        <p>
          The frontend is built on NextJS with Styled Components and Typescript. The CI/CD is managed with Vercel which
          also hosts the website for free.
          <br />
          Frontend code is not open source because I&apos;m trying some SEO tricks to rank better on Google and I
          don&apos;t want to share them currently.
        </p>
        <h2>AmaForge</h2>
        <p>
          I created a tool on NestJS which uses Amazon APIs to get the last products and I made different prompts for
          choosing the best laptops. After the laptops are chosen, another prompt is used to write the article, based on
          the parameters I set in the DB (title, subtitles, keywords, number of words, etc.).
          <br />
          This tool works with a cron job set in NestJS to update products and articles every week.
          <br />
          AmaForge is not open source, because it would be simple to copy the code and use it by competitors.
        </p>
      </>
    ),
  },
  {
    title: "BJJ Radar",
    description: "BJJ competitions aggregator",
    id: "bjjradar",
    imageSize: { width: 1200, height: 630 },
    status: ProjectStatus.Active,
    technologies: [
      TechnologyId.React,
      TechnologyId.Nextjs,
      TechnologyId.Typescript,
      TechnologyId.Tailwind,
      TechnologyId.Shadcn,
      TechnologyId.Jotai,
      TechnologyId.Vercel,
      TechnologyId.Yarn,
    ],
    content: (
      <>
        <h2>What is BJJ Radar?</h2>
        <p>
          I&apos;m a BJJ competitor and in this environment it&apos;s difficult to keep track of all the competitions
          and events because there are a lot of federations.
          <br />
          So I decided to create{" "}
          <a href={"https://bjj-radar.com"} target={"_blank"} rel={"noopener"}>
            BJJ Radar
          </a>
          , a website that aggregates all the competitions and events from all the federations.
        </p>
        <h2>Frontend</h2>
        <p>
          The frontend is built on NextJS with Shadcn and Jotai. The CI/CD is managed with Vercel which also hosts the
          website for free.
        </p>
        <h2>Backend</h2>
        <p>
          There is no backend for this project. The data is get during build time on the CI/CD flow and they are updated
          every week.
        </p>
        <h2>Monetization</h2>
        <p>
          Currently the website is free. I currently don&apos;t need to monetize it, in the future probably I could add
          some custom banners or affiliate links from BJJ brands.
        </p>
      </>
    ),
  },
  {
    title: "Ethereum Validator",
    description: "Ethereum staking validator server",
    id: "ethereum-validator",
    imageSize: { width: 1920, height: 1080 },
    status: ProjectStatus.Active,
    technologies: [
      TechnologyId.Linux,
      TechnologyId.Nimbus,
      TechnologyId.Besu,
      TechnologyId.Prometheus,
      TechnologyId.Grafana,
    ],
    content: (
      <>
        <h2>What is an Ethereum Validator server?</h2>
        <p>
          An Ethereum Validator server is a server that participates in the Ethereum blockchain consensus. It is
          responsible for validating transactions and blocks, and adding them to the blockchain. It&apos;s a server that
          runs 24/7 to ensure the network is secure and decentralized. Running the validator server rewards the owner
          with ETH from the network fees.
        </p>
        <h2>What are the hardware requirements?</h2>
        <p>
          The server needs to be up 24/7 to be a validator. It needs to have a good amount of RAM to be able to run the
          validator software. It also needs a good amount of storage to store the blockchain data (2-3TB), high network
          uptime and infrastructure stability.
        </p>
        <h2>What&apos;s the budget needed to run a validator server?</h2>
        <p>
          To start a validator server you need to deposit 32 ETH (check the price on{" "}
          <a href={"https://coinmarketcap.com/currencies/ethereum/"} target={"_blank"} rel={"noopener"}>
            CoinMarketCap
          </a>
          ). In the past the rewards couldn&apos;t be withdrawn, but after some updates it started to be possible. If
          you want to withdraw the starting deposit you need to terminate the validator.
        </p>
        <h2>Client Diversity</h2>
        <p>
          In the world of decentralization, there are many clients that can be used to run a validator. If the majority
          of validators use the same client, the network is less decentralized and in case of a bug of the validator
          client, the network could be compromised.
          <br />
          So, I started this server for a client in 2020 using{" "}
          <a href={"https://geth.ethereum.org/"} target={"_blank"} rel={"noopener"}>
            Geth
          </a>{" "}
          and{" "}
          <a href={"https://prysmaticlabs.com/"} target={"_blank"} rel={"noopener"}>
            Prysm
          </a>
          , but then after trying different clients, I and the client decided to switch to{" "}
          <a href={"https://nimbus.team/"} target={"_blank"} rel={"noopener"}>
            Nimbus
          </a>{" "}
          and{" "}
          <a href={"https://besu.hyperledger.org/"} target={"_blank"} rel={"noopener"}>
            Besu
          </a>
          , which are less used but still secure and stable as you can see on{" "}
          <a href={"https://clientdiversity.org/"}>Client Diversity</a> website.
        </p>
        <h2>Monitoring</h2>
        <p>
          There are different ways to monitor a validator server. Starting from online dashboards, like{" "}
          <a href={"https://beaconcha.in/"} target={"_blank"} rel={"noopener"}>
            Beaconcha.in
          </a>
          , but it&apos;s also important to monitor the server itself.
          <br />
          For this reason I installed{" "}
          <a href={"https://prometheus.io/"} target={"_blank"} rel={"noopener"}>
            Prometheus
          </a>{" "}
          and{" "}
          <a href={"https://grafana.com/"} target={"_blank"} rel={"noopener"}>
            Grafana
          </a>{" "}
          to monitor the server (example below).
        </p>
        <Image
          src={"/images/projects/ethereum-validator/grafana.jpg"}
          width={1917}
          height={961}
          alt={"Grafana dashboard"}
        />
        <h2>Do you want to run a validator server?</h2>
        <p>
          If you want to run a ETH validator server or you search for someone who maintains yours, you can{" "}
          <button
            onClick={() =>
              showCustomerlyMessage?.(
                "Hi Igor! I would like to have more information for an Ethereum validator server.",
              )
            }
          >
            contact me.
          </button>
        </p>
      </>
    ),
  },
  {
    title: "IgorZanellaDev",
    description: "This website",
    id: "izdev",
    imageSize: { width: 1920, height: 1080 },
    status: ProjectStatus.Active,
    technologies: [
      TechnologyId.React,
      TechnologyId.Nextjs,
      TechnologyId.Typescript,
      TechnologyId.Tailwind,
      TechnologyId.Shadcn,
      TechnologyId.Vercel,
      TechnologyId.Yarn,
    ],
    content: (
      <>
        <h2>This website</h2>
        <p>
          As every developer, I need a website to show my projects and share my knowledge, so I have this website that I
          try to update often with new projects and articles.
        </p>
        <h2>Technologies</h2>
        <p>
          The website is built on NextJS, with TailwindCSS and components based on Shadcn. The CI/CD is managed with
          Vercel which also hosts the website for free.
        </p>
        <h2>Open source</h2>
        <p>
          The website is open source, you can find it on{" "}
          <a href={"https://github.com/IgorZanellaDev/igorzanella.devs"} target={"_blank"} rel={"noopener"}>
            GitHub
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "BestOnDesk",
    description: "A website for a best on desk shop",
    id: "bestondesk",
    imageSize: { width: 1920, height: 1080 },
    status: ProjectStatus.Closed,
    technologies: [
      TechnologyId.React,
      TechnologyId.Gatsby,
      TechnologyId.Typescript,
      TechnologyId.StyledComponents,
      TechnologyId.Graphql,
      TechnologyId.Aws,
      TechnologyId.Terraform,
    ],
    content: (
      <>
        <h2>What was BestOnDesk?</h2>
        <p>
          BestOnDesk was an Italian blog, created for the office workers, to give the best advices about products, but
          also articles on motivation, personal growth and personal finance. The idea came from a friend of mine, Marco
          Campagnolo, who wrotes the article, while I was working on the code side.
        </p>
        <h2>Website</h2>
        <p>
          The website was first built with Wordpress, but after we grew in terms of traffic, we decided to revamp the UI
          and the code, so we switched to Gatsby in March 2021. I decided to keep Wordpress as CMS for the articles,
          because we had more than 400 articles at that time and it was easier to manage them with Wordpress. So, Gatsby
          was loading articles from Wordpress during build using GraphQL.
        </p>
        <Image src={"/images/projects/bestondesk/website.jpg"} width={1920} height={1080} alt={"BestOnDesk"} />
        <h2>Infrastructure</h2>
        <p>
          Firstly we were hosting the Wordpress website on a free EC2 on AWS on an OpenLiteSpeed server, which had a
          good cache system with LiteSpeed Cache plugin.
          <br />
          After we switched to Gatsby, we decided to host the website on S3, behind a Cloudfront distribution, still on
          AWS but with infrastructure wrote on Terraform.
        </p>
        <h2>Collaborations</h2>
        <p>
          We collaborated with some startups like 4Books and we were affiliate of Amazon, Fiverr, BigCommerce, GearBest,
          SkyScanneer and some other companies.
        </p>
        <h2>Telegram channel</h2>
        <p>
          We also had a channel for Amazon deals, managed by a bot, which was scanning Amazon multiple times per day to
          find the best deals for our users. The deals were real, because I created a script which checked the price
          based on the previous prices in time, checking the discount with a logarithmic expression.
        </p>
        <h2>Why we closed the project</h2>
        <p>
          After 3 years of activity, we decided to close the project because in the last months the earnings went down
          and we didn&apos;t have enough time to keep the articles updated anymore.
        </p>
      </>
    ),
  },
  {
    title: "Racing Line Motorsport",
    description: "A website for a racing line motorsport shop",
    id: "racing-line-motorsport",
    imageSize: { width: 1920, height: 1080 },
    status: ProjectStatus.Closed,
    technologies: [
      TechnologyId.React,
      TechnologyId.Gatsby,
      TechnologyId.Typescript,
      TechnologyId.Bootstrap,
      TechnologyId.Redux,
      TechnologyId.I18next,
      TechnologyId.Yarn,
      TechnologyId.Nodejs,
      TechnologyId.Mongodb,
      TechnologyId.Aws,
    ],
    content: (
      <>
        <h2>What was Racing Line Motorsport?</h2>
        <p>
          Racing Line Motorsport was a sim racing team, founded by me and other passionate sim racers. The team competed
          in the most important championships on Assetto Corsa Competizione, like the{" "}
          <a href={"https://www.gt-world-challenge-europe.com/"} target={"_blank"} rel={"noopener"}>
            GT World Challenge Endurance
          </a>
          , where the team managed to get a top 10 in 2020 and a{" "}
          <a
            href={
              "https://www.gt-world-challenge-europe.com/news/2199/esports-fda-esports-clinches-endurance-series-title-as-racing-line-motorsport-dominates-at-barcelona"
            }
            target={"_blank"}
            rel={"noopener"}
          >
            2nd place in the championship in the 2021 season
          </a>
          , behind the Ferrari Driver Academy Esports team, in front of famous official teams like BMW and Aston Martin,
          also sponsored by RedBull.
          <br />
          <br />
          The team also won numerous other races and championships and was considered one of the best sim racing teams
          in the world.
        </p>
        <Image
          src={"/images/projects/racing-line-motorsport/audi-spa.jpg"}
          width={1920}
          height={1080}
          alt={"Racing Line Motorsport"}
        />
        <h2>Online platform</h2>
        <p>
          We created a platform for different reasons, first of all to have a website to show our team and services
          (like professional coaching), but also to have a platform to organize races.
        </p>
        <Image
          src={"/images/projects/racing-line-motorsport/website.jpg"}
          width={1440}
          height={786}
          alt={"Racing Line Motorsport"}
        />
        <p>
          As a team we raced almost always, but sometimes we organized some races with other pro teams, so we needed to
          have a platform for standings and organization (subscribing to the races, etc.).
          <br />I managed to create the frontend part on React with the CRA framework for the internal app, using
          Bootstrap for styling. The backend part was managed by another developer, crafted with NodeJS and MongoDB, run
          on Serverless functions in AWS.
        </p>
        <h2>News section</h2>
        <Image
          src={"/images/projects/racing-line-motorsport/news.jpg"}
          width={1440}
          height={786}
          alt={"Racing Line Motorsport"}
        />
        <p>
          On our online platform we created a part for news, created on Gatsby with Contentful as CMS. The news were
          about team results and races.
        </p>
        <h2>Race/training servers</h2>
        <p>
          For training, but also for races, we had some gaming servers running with Windows on EC2 in AWS. We also used
          a software to manage them without getting inside the servers using RDS.
        </p>
        <Image
          src={"/images/projects/racing-line-motorsport/bentley-silverstone.jpg"}
          width={1920}
          height={1080}
          alt={"Racing Line Motorsport"}
        />
        <h2>My YouTube channel</h2>
        <p>
          I started being known in the sim racing community, and different people were asking advices to me. So, after I
          got some similar questions, in 2020 I decided to open a YouTube channel which was{" "}
          <a href={"https://www.youtube.com/@IgorZanella"} target={"_blank"} rel={"noopener"}>
            Igor Zanella
          </a>{" "}
          to answer to the questions.
          <br />I shared a lot of technical and non-technical content, like tips, tricks, reviews, tutorials, etc., but
          I also created some content on real car racing because I knew a lot of drivers through the sim racing
          experience.
          <br />I had more than 2k subscribers, more than 200k views and different videos with tens of thousands of
          views.
        </p>
        <h2>Why team has been closed</h2>
        <p>
          The sim racing at professional level requires a lot of time, after Covid-19 pandemic the team members had less
          time to dedicate to the team, I became a freelancer and, at the same time, some of the top drivers, in
          agreement with the team, switched to Mercedes AMG official sim racing team. At the time we didn&apos;t have
          big sponsors, so we couldn&apos;t afford to keep the team running.
          <br />
          The team started to have less results at the top championships and other members who wanted to continue in the
          racing world switched to other teams.
        </p>
      </>
    ),
  },
];
