export enum TechnologyLevel {
  Strong,
  Medium,
  Familiar,
}

export interface Technology {
  title: string;
  level: TechnologyLevel;
}

export interface Job {
  title: string;
  link: string;
  years: string;
  position?: string;
  subtitle?: string;
  logo?: string;
  bullets?: string[];
  technologies?: Technology[];
}
