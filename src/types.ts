export interface IProject {
  title: string;
  description: string;
}

export interface IWork {
  logo: string,
  company: string,
  position: string,
  startDate: string,
  endDate: string,
  summary: string,
  tags: Array<string>,
  projects: Array<IProject>,
}

export interface IAward {
  title: string,
  logo: string,
  awarder: string,
  date: string,
}

export interface IProfile {
  url: string,
  logo: string,
  display: string,
}
