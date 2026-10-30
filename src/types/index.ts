export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  problem?: string;
  description: string;
  value?: string;
  capabilities: string[];
  icon: string;
}

export interface BusinessProblemItem {
  id: string;
  number: string;
  title: string;
  description: string;
  impact?: string;
  solution?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  projectUrl: string;
  challenge: string;
  approach: string;
  experience: string;
  technologies: string[];
  scope: string;
  keyFeatures: string[];
  architectureDetails: {
    clientLayer: string;
    processingLayer: string;
    dataStore: string;
  };
  previewColor: string;
  statusBadge: string;
  imageUrl: string;
  imageAlt: string;
}

export interface TechItem {
  name: string;
  role: string;
  featured?: boolean;
}

export interface TechCategory {
  id: string;
  category: string;
  description: string;
  items: TechItem[];
}

export interface ProcessStage {
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  focus: string;
}

export interface ContactInquiry {
  name: string;
  email: string;
  company?: string;
  service: string;
  timeline?: string;
  message: string;
}
