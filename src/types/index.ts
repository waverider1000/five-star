export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface TrustItem {
  icon: string;
  text: string;
  highlight: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface BlogArticle {
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  featured?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
