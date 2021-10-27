import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import Animation from "components/core/Animation";

interface ProjectProps {
  id: string;
  description: string;
  inverted?: boolean;
  imageWidth: number;
  imageHeight: number;
  title: string;
  role: string;
}

const Project: FunctionComponent<ProjectProps> = (props: ProjectProps) => {
  return (
    <div
      className={`flex py-8 flex-col ${
        props.inverted ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <Animation
        type={"fadeInUp"}
        className="flex w-full lg:w-3/5 relative lg:p-10"
      >
        <Link href={`/projects/${props.id}`}>
          <a className="overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl">
            <Image
              src={`/projects/previews/${props.id}.jpg`}
              width={props.imageWidth}
              height={props.imageHeight}
              className="overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl"
              placeholder="blur"
              blurDataURL={`/projects/previews/${props.id}.jpg`}
              alt={props.title}
            />
          </a>
        </Link>
      </Animation>
      <Animation
        type={"fadeInUp"}
        className="flex flex-col text-white justify-center mt-2 lg:mt-0 flex-1"
      >
        <p className="text-base font-semibold text-iz-blue-light tracking-wide uppercase">
          {props.role}
        </p>
        <Link href={`/projects/${props.id}`}>
          <a>
            <h3 className="text-3xl lg:text-5xl font-bold transition hover:border-b-8 border-white">
              {props.title}
            </h3>
          </a>
        </Link>
        <p className="mt-2 text-xl text-gray-500 flex flex-wrap max-w-lg">
          {props.description}
        </p>
      </Animation>
    </div>
  );
};

export default Project;
