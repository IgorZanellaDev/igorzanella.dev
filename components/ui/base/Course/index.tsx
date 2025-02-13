import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import Animation from "components/core/Animation";

interface CourseProps {
  id: string;
  description: string;
  inverted?: boolean;
  imageWidth: number;
  imageHeight: number;
  language: string;
  link: string;
  title: string;
}

const Course: FunctionComponent<CourseProps> = (props: CourseProps) => {
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
        <a href={props.link} className="overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl" target="_blank" rel="noopener">
          <Image
            src={`/courses/previews/${props.id}.jpg`}
            width={props.imageWidth}
            height={props.imageHeight}
            className="overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl"
            placeholder="blur"
            blurDataURL={`/courses/previews/${props.id}.jpg`}
            alt={props.title}
          />
        </a>
      </Animation>
      <Animation
        type={"fadeInUp"}
        className="flex flex-col text-white justify-center mt-2 lg:mt-0 flex-1"
      >
        <p className="text-base font-semibold text-iz-blue-light tracking-wide uppercase">
          {props.language}
        </p>
        <a href={props.link} target="_blank" rel="noopener">
          <h3 className="text-3xl lg:text-5xl font-bold transition hover:border-b-8 border-white">
            {props.title}
          </h3>
        </a>
        <p className="mt-2 text-xl text-gray-500 flex flex-wrap max-w-lg">
          {props.description}
        </p>
      </Animation>
    </div>
  );
};

export default Course;
