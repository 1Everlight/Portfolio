export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  titleKey: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  descriptionKey?: string;
  descriptionFr?: string;
  descriptionEn?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}
