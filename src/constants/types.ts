export interface IProject {
  id: string;
  name: string;
  description: string;
  features: string;
  technologies: string[];
  routeName: string;
  cardHeight: string;
  previewImages: string[];
  bgImage: string;
  liveLink: string;
  githubLink: string;
  isBgRequired: boolean
}
