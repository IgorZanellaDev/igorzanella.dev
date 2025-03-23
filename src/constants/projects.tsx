import { Project, ProjectStatus } from "@/types/project";
import { TechnologyId } from "@/types/technology";
import Image from "next/image";

export const PROJECTS: Project[] = [
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
        <h3>What is Customerly?</h3>
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
        <h3>Web application</h3>
        <p>
          The web app is the main project we manage in the team. It&apos;s the app Customerly&apos;s clients use to
          manage their customers&apos; conversations, creating Chatflows, managing their Help Center and more.
        </p>
        <Image src={"/images/projects/customerly/inboxes.jpg"} width={5058} height={3267} alt={"Chatflows"} />
        <p>
          It&apos;s based on React, built on Vite and Typescript. We used different technologies like WebSockets and
          many more to give the best experience to the users.
        </p>
        <h3>Messenger</h3>
        <p>
          The Messenger is one of the main features of Customerly. It is the main interface for the customers to
          interact with the company.
          <br />
          It&apos;s been accessed more than 100M times every month. It&apos;s based on React and I developed the last
          version from scratch in 2024.
        </p>
        <h3>Help Center</h3>
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
        <h3>Mobile App</h3>
        <p>
          The mobile app is built on React Native and Expo. It&apos;s a simple app that allows customers to interact
          with their clients answering conversations and more. I didn&apos;t develop the app, but I reviewed the code.
        </p>
        <h3>AI</h3>
        <p>
          The AI is the main feature of Customerly. The customers can create Chatflows to automate their conversations
          with their clients. We manage it with multiple LLMs in our backend.
        </p>
        <Image src={"/images/projects/customerly/chatflows.jpg"} width={5058} height={3267} alt={"Chatflows"} />
        <p>
          Our customers can also gather conversations data in automatic way using AI and use it to do different actions
          like for example calling custom APIs.
        </p>
        <h3>Backend</h3>
        <p>
          The backend is built on PHP and most of APIs are managed with Symfony. We also use Redis to cache data and for
          internal purposes. I don&apos;t work usually with the backend, but sometimes I do some changes to the code.
        </p>
        <h3>Infrastructure</h3>
        <p>
          The infrastructure is managed with Terraform, hosted mostly on AWS. I usually take care of it when we need to
          deploy something new or when we need to migrate to a new service.
        </p>
        <h3>What I do</h3>
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
    status: ProjectStatus.Working,
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
        <h3>What is ComputerPortatile?</h3>
        <p>
          A lot of friends often ask me which model of laptop should they buy, I help them searching on Amazon, but the
          laptops I advice are usually the same.
          <br />
          For this reason I created{" "}
          <a href={"https://computerportatile.com"} target={"_blank"} rel={"noopener"}>
            ComputerPortatile
          </a>
          , which is an Italian website, with the lists of the top laptops on Amazon.it.
        </p>
        <h3>Amazon Affiliate Program</h3>
        <p>
          The links to Amazon are affiliate links, so if you buy a laptop through my website I get a small commission. I
          was already part of Amazon Affiilate Program some years ago with BestOnDesk, so I decided to reenter the
          program with ComputerPortatile.
        </p>
        <h3>How it started and how it changed</h3>
        <p>
          I started the project in 2022 with the simple idea to write articles in it and update them some times.
          <br />
          The problem is that I don&apos;t have much time to update articles often, so in 2023 I had an idea on the AI
          wave: I could use AI not only to write the articles for me, but it can also help me to find the best laptops
          on Amazon.it.
        </p>
        <h3>Frontend technologies</h3>
        <p>
          The frontend is built on NextJS with Styled Components and Typescript. The CI/CD is managed with Vercel which
          also hosts the website for free.
          <br />
          Frontend code is not open source because I&apos;m trying some SEO tricks to rank better on Google and I
          don&apos;t want to share them currently.
        </p>
        <h3>AmaForge</h3>
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
    status: ProjectStatus.Working,
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
        <h3>What is BJJ Radar?</h3>
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
        <h3>Frontend</h3>
        <p>
          The frontend is built on NextJS with Shadcn and Jotai. The CI/CD is managed with Vercel which also hosts the
          website for free.
        </p>
        <h3>Backend</h3>
        <p>
          There is no backend for this project. The data is get during build time on the CI/CD flow and they are updated
          every week.
        </p>
        <h3>Monetization</h3>
        <p>
          Currently the website is free. I currently don&apos;t need to monetize it, in the future probably I could add
          some custom banners or affiliate links from BJJ brands.
        </p>
      </>
    ),
  },
  {
    title: "Ethereum Validator",
    description: "A server for staking Ethereum",
    id: "ethereum-validator",
    imageSize: { width: 1920, height: 1080 },
    status: ProjectStatus.Working,
    technologies: [
      TechnologyId.Linux,
      TechnologyId.Nimbus,
      TechnologyId.Besu,
      TechnologyId.Prometheus,
      TechnologyId.Grafana,
    ],
  },
  {
    title: "IgorZanellaDev",
    description: "Website for a developer",
    id: "izdev",
    imageSize: { width: 1920, height: 1080 },
    status: ProjectStatus.Working,
  },
  {
    title: "BestOnDesk",
    description: "A website for a best on desk shop",
    id: "bestondesk",
    imageSize: { width: 1920, height: 1080 },
    status: ProjectStatus.Closed,
  },
  {
    title: "Racing Line Motorsport",
    description: "A website for a racing line motorsport shop",
    id: "racing-line-motorsport",
    imageSize: { width: 1920, height: 1080 },
    status: ProjectStatus.Closed,
  },
];
