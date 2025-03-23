export enum TechnologyType {
  Frontend = "frontend",
  Backend = "backend",
  Infrastructure = "infrastructure",
}

export enum TechnologyId {
  Typescript = "ts",
  React = "react",
  ReactNative = "react-native",
  Nextjs = "nextjs",
  Vite = "vite",
  Tanstack = "tanstack",
  Tailwind = "tailwind",
  StyledComponents = "styled-components",
  Shadcn = "shadcn",
  SocketIo = "socket-io",
  Recoil = "recoil",
  Jotai = "jotai",
  I18next = "i18next",
  Npm = "npm",
  Yarn = "yarn",

  Nodejs = "nodejs",
  Nestjs = "nestjs",
  Php = "php",
  Symfony = "symfony",
  Postgresql = "postgresql",
  Mysql = "mysql",
  Mongodb = "mongodb",
  Redis = "redis",
  Contentful = "contentful",
  Wordpress = "wordpress",
  Onesignal = "onesignal",
  Stripe = "stripe",
  Python = "python",

  Docker = "docker",
  Linux = "linux",
  Openai = "openai",
  Aws = "aws",
  Nginx = "nginx",
  Azure = "azure",
  Terraform = "terraform",
  Circleci = "circleci",
  Vercel = "vercel",
  Supabase = "supabase",
  GithubActions = "github-actions",
  Pinecone = "pinecone",
  Cloudflare = "cloudflare",
  Grafana = "grafana",
  Prometheus = "prometheus",
  Elastic = "elastic",
  Qualys = "qualys",
  Nimbus = "nimbus",
  Besu = "besu",
}

export interface Technology {
  id: string;
  icon: string;
  name: string;
  link: string;
  themeChange?: boolean;
  type: TechnologyType;
}
