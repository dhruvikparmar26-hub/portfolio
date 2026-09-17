export interface Project {
  number: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  stack: string[];
  description: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  architectureType: 'realtime' | 'agent-orchestration' | 'vision-attention';
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  duration: string;
  score: string;
  minor?: string;
  badge?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface AchievementItem {
  metric: string;
  label: string;
  detail: string;
  subtext?: string;
}
