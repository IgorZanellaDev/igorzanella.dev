"use client";

import { FC } from "react";

const CurrentHour: FC = () => {
  return (
    <p className={"text-muted-foreground"}>
      {new Date().toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Rome",
      })}
    </p>
  );
};

export default CurrentHour;
