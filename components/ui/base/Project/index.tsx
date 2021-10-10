import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  id: string;
  description: string;
  inverted?: boolean;
  imageWidth: number;
  imageHeight: number;
  title: string;
  type: string;
}

const Project: FunctionComponent<ProjectProps> = (props: ProjectProps) => {
  return (
    <div
      className={
        "flex py-8 flex-col " +
        (props.inverted ? "lg:flex-row-reverse" : "lg:flex-row")
      }
    >
      <div className="flex w-full lg:w-3/5 relative lg:p-10">
        <Link href={`/projects/${props.id}`}>
          <a>
            <Image
              src={`/projects/previews/${props.id}.jpg`}
              width={props.imageWidth}
              height={props.imageHeight}
              className="rounded-2xl overflow-hidden"
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-col text-white justify-center mt-2 lg:mt-0">
        <p className="text-base font-semibold text-iz-blue-light tracking-wide uppercase">
          {props.type}
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
      </div>
    </div>
  );
};

export default Project;
