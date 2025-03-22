"use client";

import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { FC } from "react";

const Project: FC = () => {
  const { project } = useParams();

  const projectData = PROJECTS.find((p) => p.id === project);

  if (!projectData) {
    return notFound();
  }

  return (
    <>
      <h2 className={"text-3xl font-semibold"}>{projectData.title}</h2>
      <h3 className={"text-lg font-medium text-muted-foreground"}>{projectData.description}</h3>
      <Image
        className={"mt-8 rounded-xl"}
        src={`/images/projects/${projectData.id}/main.jpg`}
        alt={projectData.title}
        width={projectData.imageSize.width}
        height={projectData.imageSize.height}
      />
    </>
  );
};

export default Project;
