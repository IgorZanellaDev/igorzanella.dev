export enum TechnologyCategory {
  Frontend = "frontend",
  Backend = "backend",
  Devops = "devops",
  Other = "other",
}

export interface Technology {
  icon: string;
  name: string;
  category: TechnologyCategory;
}
