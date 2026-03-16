"use client";

import { FC, useEffect, useState } from "react";

const format = () =>
  new Date().toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Rome",
  });

const CurrentHour: FC = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, []);

  if (time === null) return null;

  return <p className={"text-muted-foreground"}>{time}</p>;
};

export default CurrentHour;
