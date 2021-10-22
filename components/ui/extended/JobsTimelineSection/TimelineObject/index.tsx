import Link from "next/link";
import React, { FunctionComponent } from "react";

interface TimelineObjectProps {
  date: string;
  description: string;
  title: string;
  type: "right" | "left";
  link: string;
}

const TimelineObject: FunctionComponent<TimelineObjectProps> = (
  props: TimelineObjectProps
) => {
  return (
    <div
      className={`mb-4 md:mb-8 flex justify-between items-center w-full left-timeline ${
        props.type === "left" && "flex-row-reverse"
      }`}
    >
      <div className="order-1 w-5/12"></div>
      <div
        className={`order-1 w-5/12 px-1 py-4 space-y-1 ${
          props.type === "left" && "text-right"
        }`}
      >
        <p className="text-base md:text-lg text-iz-blue-light">{props.date}</p>
        <Link href={props.link}>
          <a rel="noopener" target="_blank">
            <h4 className="font-bold text-2xl md:text-3xl hover:underline">
              {props.title}
            </h4>
          </a>
        </Link>
        <p className="text-base md:text-lg leading-snug text-iz-yellow-light text-opacity-100 font-semibold">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default TimelineObject;
