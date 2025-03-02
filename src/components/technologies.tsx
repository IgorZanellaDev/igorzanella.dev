"use client";

import { Marquee } from "@/components/magicui/marquee";
import { chunkArray } from "@/utils/array";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Technology {
  name: string;
  icon: string;
  link: string;
  themeChange?: boolean;
}

const FRONTEND_TECHNOLOGIES: Technology[] = [
  { name: "Typescript", icon: "ts", link: "https://www.typescriptlang.org/" },
  { name: "React", icon: "react", link: "https://react.dev/" },
  { name: "React Native", icon: "react", link: "https://reactnative.dev/" },
  { name: "NextJS", icon: "nextjs", link: "https://nextjs.org/" },
  { name: "Vite", icon: "vite", link: "https://vite.dev/" },
  { name: "Tanstack Query", icon: "tanstack", link: "https://tanstack.com/query/latest" },
  { name: "TailwindCSS", icon: "tailwind", link: "https://tailwindcss.com/" },
  { name: "Styled Components", icon: "styled-components", link: "https://styled-components.com/" },
  { name: "shadcn/ui", icon: "shadcn", themeChange: true, link: "https://ui.shadcn.com/" },
  { name: "Socket.io", icon: "socket-io", themeChange: true, link: "https://socket.io/" },
  { name: "Recoil", icon: "recoil", link: "https://recoiljs.org/" },
  { name: "i18next", icon: "i18next", link: "https://www.i18next.com/" },
  { name: "npm", icon: "npm", link: "https://www.npmjs.com/" },
  { name: "yarn", icon: "yarn", link: "https://yarnpkg.com/" },
];

const BACKEND_TECHNOLOGIES: Technology[] = [
  { name: "NodeJS", icon: "nodejs", link: "https://nodejs.org/" },
  { name: "NestJS", icon: "nestjs", link: "https://nestjs.com/" },
  { name: "PHP", icon: "php", link: "https://www.php.net/" },
  { name: "Symfony", icon: "symfony", themeChange: true, link: "https://symfony.com/" },
  { name: "PostgreSQL", icon: "postgresql", link: "https://www.postgresql.org/" },
  { name: "MySQL", icon: "mysql", link: "https://www.mysql.com/" },
  { name: "MongoDB", icon: "mongodb", link: "https://www.mongodb.com/" },
  { name: "Redis", icon: "redis", link: "https://redis.io/" },
  { name: "Contentful", icon: "contentful", link: "https://www.contentful.com/" },
  { name: "Wordpress", icon: "wordpress", link: "https://wordpress.org/" },
  { name: "OneSignal", icon: "onesignal", link: "https://onesignal.com/" },
  { name: "Stripe", icon: "stripe", link: "https://stripe.com/" },
  { name: "Python", icon: "python", link: "https://www.python.org/" },
];

const INFRASTRUCTURE_TECHNOLOGIES: Technology[] = [
  { name: "Docker", icon: "docker", link: "https://www.docker.com/" },
  { name: "Linux", icon: "linux", link: "https://www.kernel.org/" },
  { name: "OpenAI", icon: "openai", themeChange: true, link: "https://openai.com/" },
  { name: "AWS", icon: "aws", link: "https://aws.amazon.com/" },
  { name: "Nginx", icon: "nginx", link: "https://nginx.org/" },
  { name: "Azure", icon: "azure", link: "https://azure.microsoft.com/" },
  { name: "Terraform", icon: "terraform", link: "https://www.terraform.io/" },
  { name: "CircleCI", icon: "circleci", themeChange: true, link: "https://circleci.com/" },
  { name: "Vercel", icon: "vercel", themeChange: true, link: "https://vercel.com/" },
  { name: "Supabase", icon: "supabase", link: "https://supabase.com/" },
  { name: "GitHub Actions", icon: "github", themeChange: true, link: "https://github.com/features/actions" },
  { name: "Pinecone", icon: "pinecone", themeChange: true, link: "https://www.pinecone.io/" },
  { name: "Cloudflare", icon: "cloudflare", link: "https://www.cloudflare.com/" },
  { name: "Grafana", icon: "grafana", link: "https://grafana.com/" },
  { name: "Prometheus", icon: "prometheus", link: "https://prometheus.io/" },
  { name: "Elasticsearch", icon: "elastic", link: "https://www.elastic.co/elasticsearch/" },
  { name: "Qualys", icon: "qualys", link: "https://www.qualys.com/" },
];

const TechMatrix: FC<{
  rows: Technology[][];
}> = ({ rows }) => {
  const { theme, systemTheme } = useTheme();

  console.log(theme);

  return (
    <div className={"relative flex w-full flex-col overflow-hidden"}>
      {rows.map((row, rowIndex) => (
        <Marquee pauseOnHover key={rowIndex} reverse={rowIndex % 2 === 1}>
          {row.map((tech) => (
            <Link
              className={
                "flex items-center gap-2 rounded-2xl bg-muted px-3 py-1 transition-colors hover:bg-muted-foreground/10"
              }
              key={tech.name}
              href={tech.link}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <Image
                className={"h-5 w-5"}
                src={`/tech-icons/${tech.icon}${tech.themeChange !== undefined ? (theme === "system" ? (systemTheme === "dark" ? "-dark" : "-light") : theme === "dark" ? "-dark" : "-light") : ""}.svg`}
                alt={tech.name}
                width={24}
                height={24}
              />
              <span className={"font-medium"}>{tech.name}</span>
            </Link>
          ))}
        </Marquee>
      ))}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
  );
};

const Technologies: FC = () => {
  const frontendRows = chunkArray(FRONTEND_TECHNOLOGIES, 8);
  const backendRows = chunkArray(BACKEND_TECHNOLOGIES, 7);
  const infrastructureRows = chunkArray(INFRASTRUCTURE_TECHNOLOGIES, 9);

  return (
    <div className={"flex flex-col overflow-hidden"}>
      <h2 className={"text-2xl font-semibold"}>Tech skills</h2>
      <h3 className={"text-lg font-medium text-muted-foreground"}>Frontend</h3>
      <TechMatrix rows={frontendRows} />
      <h3 className={"mt-4 text-lg font-medium text-muted-foreground"}>Backend</h3>
      <TechMatrix rows={backendRows} />
      <h3 className={"mt-4 text-lg font-medium text-muted-foreground"}>Infrastructure</h3>
      <TechMatrix rows={infrastructureRows} />
    </div>
  );
};

export default Technologies;
