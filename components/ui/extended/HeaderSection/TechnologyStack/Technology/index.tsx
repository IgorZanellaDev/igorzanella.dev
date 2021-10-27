import React, { FunctionComponent } from "react";
import { Technology } from "types/technology";

interface TechnologyElementProps {
  technology: Technology;
  index: number;
}

const TechnologyElement: FunctionComponent<TechnologyElementProps> = (
  props: TechnologyElementProps
) => {
  return (
    <div
      className="flex items-center justify-start px-2 md:px-4 py-1 md:py-2 m-1 md:m-2 bg-gray-800 rounded  animate__animated animate__fadeInUp"
      style={{ animationDelay: 50 * props.index + "ms" }}
    >
      <img
        className="flex h-6 mr-2 md:mr-4"
        src={`/icons/${props.technology.id}.svg`}
        alt={props.technology.name}
      />
      <span className="text-xs md:text-base leading-none text-white">
        {props.technology.name}
      </span>
    </div>
  );
};

export default TechnologyElement;
