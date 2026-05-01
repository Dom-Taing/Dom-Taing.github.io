import type { Personal, Stat, SkillGroup, ExperienceEntry, Project } from '@/types'

export const personal: Personal = {
  name: 'Dom Taing',
  title: 'Full Stack Developer',
  tagline: 'I build fast, beautiful web applications — end to end.',
  location: 'Seattle, Washington',
  timezone: 'PST (UTC−8)',
  availability: 'Open to opportunities',
  email: 'chonodom@gmail.com',
  github: 'https://github.com/Dom-Taing',
  linkedin: 'https://www.linkedin.com/in/keochonodom-taing/',
  resumeUrl: 'https://www.linkedin.com/in/keochonodom-taing/',
}

export const stats: Stat[] = [
  { number: '3+', label: 'Years exp.' },
  { number: '20+', label: 'Projects shipped' },
  { number: '10+', label: 'Open source repos' },
]

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'Infra',
    items: ['Docker', 'AWS', 'GitHub Actions', 'Vercel'],
  },
]

export const experience: ExperienceEntry[] = [
  {
    company: 'Walmart',
    role: 'Software Engineer III · Contract',
    period: 'Mar 2023 — Present',
    description: 'Contributed to Walmart Creator, a platform serving 800K+ creators and 50K+ storefronts. Led full-stack development across three core systems: Storefront publishing (co-led an architecture redesign that cut publish time from 30 minutes to instant), Affiliate Links (built the generation API across storefronts, collections, and shoppable posts — optimized response time from 300ms to near-zero), and the Marty AI Chatbot (designed system architecture, built the MFE-based UI with Webpack Module Federation, and implemented LangChain agents for creator Q&A).',
    tags: ['Next.js', 'Node.js', 'Directus', 'LangChain', 'Module Federation', 'REST APIs'],
  },
]

export const projects: Project[] = [
  {
    slug: 'clinic-server',
    title: 'Clinic Server',
    description: 'A full-featured backend server for clinic management. REST API with appointment scheduling, patient records, and billing.',
    type: 'web',
    featured: true,
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Dom-Taing/clinic-server' },
    ],
  },
  {
    slug: 'portfolio-v2',
    title: 'Portfolio V2',
    description: 'This portfolio — built with Next.js 16, Tailwind CSS v4, and Framer Motion. Japanese Forest + Amber design.',
    type: 'web',
    featured: false,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Dom-Taing/PortfolioV2' },
    ],
  },
]
