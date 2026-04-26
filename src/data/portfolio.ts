import type { Personal, Stat, SkillGroup, ExperienceEntry, Project } from '@/types'

export const personal: Personal = {
  name: 'Dom Taing',
  title: 'Full Stack Developer',
  tagline: 'I build fast, beautiful web applications — end to end.',
  location: 'Your City, Country',
  timezone: 'Your timezone',
  availability: 'Open to opportunities',
  email: 'chonodom@gmail.com',
  github: 'https://github.com/Dom-Taing',
  linkedin: 'https://linkedin.com/in/',
  resumeUrl: '#',
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
    company: 'Valora Infotech',
    role: 'Node.js Backend Developer',
    period: 'Oct 2020 — Dec 2022',
    description: 'Built and maintained admin panel backend and a gambling application. Worked with WebSocket, payment gateway integration, and gaming systems. Stack was primarily PERN and MERN. 80% backend, 20% DevOps.',
    tags: ['Node.js', 'PostgreSQL', 'MongoDB', 'WebSocket', 'Express'],
  },
  {
    company: 'NightOwls',
    role: 'Full Stack Developer (Freelance)',
    period: 'Sep 2020 — Oct 2020',
    description: 'Client-facing development on LAMP stack. 40% backend, 30% database schema design, 30% hosting and traffic management.',
    tags: ['PHP', 'MySQL', 'Apache', 'Linux'],
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
