"use client";

import TechMatrix from "@/components/technologies/tech-matrix";
import { TECHNOLOGIES_BY_TYPE } from "@/constants/technologies";
import { TechnologyType } from "@/types/technology";
import { chunkArray } from "@/utils/array";
import { FC } from "react";

const Technologies: FC = () => {
  const frontendRows = chunkArray(TECHNOLOGIES_BY_TYPE[TechnologyType.Frontend], 10);
  const backendRows = chunkArray(TECHNOLOGIES_BY_TYPE[TechnologyType.Backend], 7);
  const infrastructureRows = chunkArray(TECHNOLOGIES_BY_TYPE[TechnologyType.Infrastructure], 10);

  return (
    <div className={"flex flex-col overflow-hidden"}>
      <h2 className={"text-2xl font-semibold"}>Tech skills</h2>
      <h3 className={"text-lg font-medium text-muted-foreground"}>Frontend</h3>
      <TechMatrix rows={frontendRows} />
      <h3 className={"mt-4 text-lg font-medium text-muted-foreground"}>Backend</h3>
      <TechMatrix rows={backendRows} />
      <h3 className={"mt-4 text-lg font-medium text-muted-foreground"}>Infrastructure</h3>
      <TechMatrix rows={infrastructureRows} />
    </div>
  );
};

export default Technologies;
