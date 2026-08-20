export type SkillCategory = 'Frontend' | 'Backend' | 'AI/ML' | 'Hardware' | 'Infra' | 'Other'

export interface Stat {
  number: string
  label: string
}

export interface SkillGroup {
  category: SkillCategory
  items: string[]
}

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  description: string
  tags: string[]
}

export interface ProjectLink {
  label: string
  url: string
}

export interface ProjectDetail {
  problem: string
  approach?: string
  pullQuote?: string
  role?: string
  team?: string
  timeline?: string
  metrics: Stat[]
  stack: Array<{ layer: string; items: string[] }>
  screenshots: string[]
  screenshotStyle?: 'cover' | 'contain'
}

export interface Project {
  slug: string
  title: string
  tagline?: string
  year?: string
  description: string
  type: 'web' | 'other'
  featured: boolean
  hidden?: boolean
  heroVideo?: string
  heroYouTube?: string
  heroIllustration?: 'waveform'
  tech: string[]
  links: ProjectLink[]
  detail?: ProjectDetail
}

export interface Personal {
  name: string
  title: string
  tagline: string
  location: string
  timezone: string
  availability: string
  email: string
  github: string
  resumeUrl: string
}
