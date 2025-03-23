"use client";

import TechMatrix from "@/components/technologies/tech-matrix";
import { PROJECTS } from "@/constants/projects";
import { TECHNOLOGIES_BY_ID } from "@/constants/technologies";
import { TechnologyId } from "@/types/technology";
import { chunkArray } from "@/utils/array";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { FC } from "react";

const Project: FC = () => {
  const { project } = useParams();

  const projectData = PROJECTS.find((p) => p.id === project);

  if (!projectData) {
    return notFound();
  }

  const technologies = projectData.technologies?.map((technology) => TECHNOLOGIES_BY_ID[technology as TechnologyId]);
  const technologiesArrays =
    technologies &&
    (projectData.technologiesChunkSize ? chunkArray(technologies, projectData.technologiesChunkSize) : [technologies]);

  return (
    <>
      <h2 className={"text-3xl font-semibold"}>{projectData.title}</h2>
      <p className={"text-lg font-medium text-muted-foreground"}>{projectData.description}</p>
      <Image
        className={"mt-8 rounded-xl"}
        src={`/images/projects/${projectData.id}/main.jpg`}
        alt={projectData.title}
        width={projectData.imageSize.width}
        height={projectData.imageSize.height}
      />
      <h3 className={"mb-1 mt-6 text-xl font-medium"}>Technologies</h3>
      {technologiesArrays && <TechMatrix rows={technologiesArrays} />}
      <div
        className={
          "[&>h3]:mb-1 [&>h3]:mt-6 [&>h3]:text-xl [&>h3]:font-medium [&>img]:my-2 [&>img]:w-full [&>img]:rounded-xl [&>p>a]:underline [&>p]:leading-relaxed"
        }
      >
        {projectData.content}
      </div>
    </>
  );
};

export default Project;
