import React, { FunctionComponent } from "react";

interface TimelineObjectProps {
  date: string;
  description: string;
  title: string;
  type: "right" | "left";
}

const TimelineObject: FunctionComponent<TimelineObjectProps> = (
  props: TimelineObjectProps
) => {
  return (
    <div
      className={`mb-8 flex justify-between items-center w-full left-timeline ${
        props.type === "left" && "flex-row-reverse"
      }`}
    >
      <div className="order-1 w-5/12"></div>
      <div
        className={`order-1 w-5/12 px-1 py-4 ${
          props.type === "left" && "text-right"
        }`}
      >
        <p className="mb-3 text-base text-iz-blue-light">{props.date}</p>
        <h4 className="mb-3 font-bold text-lg md:text-2xl">{props.title}</h4>
        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default TimelineObject;
