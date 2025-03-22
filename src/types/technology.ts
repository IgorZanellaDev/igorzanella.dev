export enum TechnologyType {
  Frontend = "frontend",
  Backend = "backend",
  Infrastructure = "infrastructure",
}

export interface Technology {
  id: string;
  icon: string;
  name: string;
  link: string;
  themeChange?: boolean;
  type: TechnologyType;
}
