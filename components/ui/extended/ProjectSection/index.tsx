import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectSectionProps {
  id: string;
  description: string;
  inverted?: boolean;
  imageWidth: number;
  imageHeight: number;
  title: string;
  type: string;
}

const ProjectSection: FunctionComponent<ProjectSectionProps> = (
  props: ProjectSectionProps
) => {
  return (
    <section
      className={
        "flex py-8 " + (props.inverted ? "flex-row-reverse" : "flex-row")
      }
    >
      <div className="flex w-3/5 relative p-10">
        <Link href={"/projects/" + props.id}>
          <a>
            <Image
              src={"/projects/previews/" + props.id + ".jpg"}
              width={props.imageWidth}
              height={props.imageHeight}
              className="rounded-2xl overflow-hidden"
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-col text-white justify-center">
        <p className="text-base font-semibold text-iz-blue-light tracking-wide uppercase">
          {props.type}
        </p>
        <Link href={"/projects/" + props.id}>
          <a>
            <h3 className="text-3xl lg:text-5xl font-bold transition hover:border-b-8 border-white">
              {props.title}
            </h3>
          </a>
        </Link>
        <p className="mt-2 text-xl text-gray-500 flex flex-wrap max-w-lg">
          {props.description}
        </p>
      </div>
    </section>
  );
};

export default ProjectSection;
