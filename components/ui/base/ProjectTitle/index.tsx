import React, { FunctionComponent } from "react";
import Image from "next/image";
import TechnologyElement from "components/ui/extended/HeaderSection/TechnologyStack/Technology";
import { exportTechnologies } from "utils/technology";
import LinkIcon from "components/ui/base/ProjectTitle/LinkIcon";
import Animation from "components/core/Animation";

interface ProjectTitleProps {
  category: string;
  id: string;
  links: {
    web?: string;
    github?: string;
    instagram?: string;
    facebook?: string;
    telegram?: string;
    twitter?: string;
    linkedin?: string;
  };
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
      <div className="flex flex-col lg:flex-row mx-auto py-6 space-y-6 lg:space-y-0 lg:space-x-8">
        <Animation type={"fadeInUp"} className="w-full lg:w-1/2">
          <p className="text-base font-semibold text-iz-blue-light tracking-wide uppercase">
            {props.subtitle}
          </p>
          <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {props.name}
          </h1>
          <p className="mt-2 text-xl sm:text-xl lg:text-3xl font-semibold tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-b from-iz-yellow-light to-iz-yellow-dark">
            {props.category}
          </p>
          <div className="flex mt-6 space-x-2 md:space-x-4 lg:space-x-5">
            {props.links.web && (
              <LinkIcon icon={"globe"} href={props.links.web} />
            )}
            {props.links.github && (
              <LinkIcon icon={"github"} href={props.links.github} />
            )}
            {props.links.instagram && (
              <LinkIcon icon={"instagram"} href={props.links.instagram} />
            )}
            {props.links.facebook && (
              <LinkIcon icon={"facebook"} href={props.links.facebook} />
            )}
            {props.links.telegram && (
              <LinkIcon icon={"telegram"} href={props.links.telegram} />
            )}
            {props.links.twitter && (
              <LinkIcon icon={"twitter"} href={props.links.twitter} />
            )}
            {props.links.linkedin && (
              <LinkIcon icon={"linkedin"} href={props.links.linkedin} />
            )}
          </div>
          <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-white sm:tracking-tight lg:text-4xl">
            Technologies
          </h2>
          <div className="flex items-center flex-row flex-wrap md:-mx-4 mt-2">
            {exportTechnologies(props.technologies).map((technology, i) => (
              <TechnologyElement
                technology={technology}
                index={i}
                key={technology.name}
              />
            ))}
          </div>
        </Animation>
        <Animation
          type={"fadeInRight"}
          className="w-full h-64 sm:h-96 lg:h-auto lg:w-1/2 relative overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl"
        >
          <Image
            src={`/projects/${props.id}/main.jpg`}
            layout="fill"
            className="overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl object-cover"
            placeholder="blur"
            blurDataURL={`/projects/${props.id}/main.jpg`}
          />
        </Animation>
      </div>
    </section>
  );
};

export default ProjectTitle;
