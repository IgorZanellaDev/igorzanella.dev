import { ReactNode } from "react";

export enum ProjectStatus {
  Working = "working",
  Active = "active",
  Closed = "closed",
}

export type Project = {
  title: string;
  description: string;
  metaDescription: string;
  id: string;
  imageSize: { width: number; height: number };
  status: ProjectStatus;
  main?: boolean;
  technologiesChunkSize?: number;
  technologies?: string[];
  url?: string;
  content: ReactNode;
};
