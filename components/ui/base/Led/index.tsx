import React, { FunctionComponent } from "react";

type LedColor = "red" | "green";

interface LedProps {
  className?: string;
  color: LedColor;
}

const getBoxShadowWithColor = (color: string): string => {
  return `#000 0px 0px 1px 0px, ${color} -2px -4px 12px 2px inset, 0px 0px 10px 0px ${color}`;
};

const getBoxShadow = (color: LedColor): string => {
  switch (color) {
    case "green":
      return getBoxShadowWithColor("#7fff00");
    case "red":
      return getBoxShadowWithColor("#ff073a");
  }
};

const Led: FunctionComponent<LedProps> = (props: LedProps) => {
  return (
    <div
      className={`w-4 h-4 rounded-full bg-white ${props.className}`}
      style={{
        boxShadow: getBoxShadow(props.color),
      }}
    />
  );
};

export default Led;
