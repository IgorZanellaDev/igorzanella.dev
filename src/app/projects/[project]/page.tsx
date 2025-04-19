import Header from "@/components/header";
import TechMatrix from "@/components/technologies/tech-matrix";
import { PROJECTS, PROJECTS_STATUS_SETTINGS } from "@/constants/projects";
import { TECHNOLOGIES_BY_ID } from "@/constants/technologies";
import { cn } from "@/lib/utils";
import { TechnologyId } from "@/types/technology";
import { chunkArray } from "@/utils/array";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react";

export const generateMetadata = async ({ params }: { params: { project: string } }) => {
  const projectData = PROJECTS.find((p) => p.id === params.project);

  if (!projectData) {
    return notFound();
  }

  return {
    title: projectData.title,
    description: projectData.metaDescription,
    alternates: {
      canonical: `/projects/${projectData.id}`,
    },
    openGraph: {
      images: [
        {
          url: `/images/projects/${projectData.id}/main.jpg`,
          width: projectData.imageSize.width,
          height: projectData.imageSize.height,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [
        {
          url: `/images/projects/${projectData.id}/main.jpg`,
          width: projectData.imageSize.width,
          height: projectData.imageSize.height,
        },
      ],
    },
  };
};

const Project: FC<{ params: Promise<{ project: string }> }> = async ({ params }) => {
  const { project } = await params;

  const projectData = PROJECTS.find((p) => p.id === project);

  if (!projectData) {
    return notFound();
  }

  const { icon: Icon, color } = PROJECTS_STATUS_SETTINGS[projectData.status];
  const technologies = projectData.technologies?.map((technology) => TECHNOLOGIES_BY_ID[technology as TechnologyId]);
  const technologiesArrays =
    technologies &&
    (projectData.technologiesChunkSize ? chunkArray(technologies, projectData.technologiesChunkSize) : [technologies]);

  return (
    <>
      <Header title={projectData.title} description={projectData.description} />
      <div className={"relative"}>
        <div className={cn("absolute right-2 top-2 flex items-center gap-1 rounded-lg px-2 py-1 text-white", color)}>
          <Icon className={"h-4 w-4"} />
          <span className={"text-sm font-medium leading-none"}>{projectData.status}</span>
        </div>
        <a href={projectData.url} target={"_blank"} rel={"noopener noreferrer"}>
          <Image
            className={"rounded-xl"}
            src={`/images/projects/${projectData.id}/main.jpg`}
            alt={projectData.title}
            width={projectData.imageSize.width}
            height={projectData.imageSize.height}
          />
        </a>
      </div>
      <h2 className={"mb-1 mt-6 text-xl font-medium"}>Technologies</h2>
      {technologiesArrays && <TechMatrix rows={technologiesArrays} />}
      <div
        className={
          "[&>h2]:mb-1 [&>h2]:mt-6 [&>h2]:text-xl [&>h2]:font-medium [&>img]:my-2 [&>img]:w-full [&>img]:rounded-xl [&>p>a]:underline [&>p>button]:underline [&>p]:leading-relaxed"
        }
      >
        {projectData.content}
      </div>
    </>
  );
};

export default Project;
