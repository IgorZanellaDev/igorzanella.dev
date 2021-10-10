import React, { FunctionComponent, ReactNode } from "react";

interface ProjectSectionProps {
  children?: ReactNode;
}

const ProjectSection: FunctionComponent<ProjectSectionProps> = (
  props: ProjectSectionProps
) => {
  return <section className="mx-auto max-w-5xl">{props.children}</section>;
};

export default ProjectSection;
