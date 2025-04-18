import { ReactNode } from "react";

export enum ProjectStatus {
  Working = "working",
  Active = "active",
  Closed = "closed",
}

export interface Project {
  title: string;
  description: string;
  id: string;
  imageSize: { width: number; height: number };
  status: ProjectStatus;
  main?: boolean;
  technologiesChunkSize?: number;
  technologies?: string[];
  content?: ReactNode;
  url?: string;
}
