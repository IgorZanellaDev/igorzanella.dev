import React, { FunctionComponent, ReactNode } from "react";
import Animation from "components/core/Animation";

interface ProjectSectionProps {
  children?: ReactNode;
}

const ProjectSection: FunctionComponent<ProjectSectionProps> = (
  props: ProjectSectionProps
) => {
  return (
    <section className="mx-auto max-w-5xl">
      <Animation type={"fadeInUp"}>{props.children}</Animation>
    </section>
  );
};

export default ProjectSection;
