import React, { FunctionComponent } from "react";
import Image from "next/image";
import TechnologyElement from "components/ui/extended/HeaderSection/TechnologyStack/Technology";
import { exportTechnologies } from "utils/technology";

interface ProjectTitleProps {
  category: string;
  id: string;
  name: string;
  subtitle: string;
  imageWidth: number;
  imageHeight: number;
  technologies: string[];
}

const ProjectTitle: FunctionComponent<ProjectTitleProps> = (
  props: ProjectTitleProps
) => {
  return (
    <section className="mb-8">
      <div className="flex mx-auto py-6">
        <div className="w-1/2 mr-3">
          <p className="text-base font-semibold text-iz-blue-light tracking-wide uppercase">
            {props.subtitle}
          </p>
          <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {props.name}
          </h1>
          <p className="mt-2 text-3xl font-semibold tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-b from-iz-yellow-light to-iz-yellow-dark">
            {props.category}
          </p>
          <h2 className="mt-8 text-3xl font-semibold text-white sm:text-5xl sm:tracking-tight lg:text-4xl">
            Technologies
          </h2>
          <div className="flex justify-center lg:justify-start items-center flex-row flex-wrap -mx-4 mt-2">
            {exportTechnologies(props.technologies).map((technology, i) => (
              <TechnologyElement
                technology={technology}
                index={i}
                key={technology.name}
              />
            ))}
          </div>
        </div>
        <div className="w-1/2 relative ml-3">
          <Image
            src={`/projects/${props.id}/main.jpg`}
            layout="fill"
            className="overflow-hidden rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectTitle;
