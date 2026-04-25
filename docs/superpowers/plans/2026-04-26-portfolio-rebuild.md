# Portfolio Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio from scratch as a Next.js 14 + Tailwind CSS site matching the Claude.ai design handoff in `design_handoff/`, split across 4 independent sessions.

**Architecture:** Next.js 14 App Router with a single `src/data/portfolio.ts` content file. Shared components (Nav, Footer) live in `src/components/`. Each page is a Server Component that imports data and renders client components where interactivity is needed. Framer Motion handles scroll animations and parallax; CSS-only 3D tilt on project cards.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, `next/font/google`

**Design reference:** `design_handoff/README.md` is the pixel-accurate spec. `design_handoff/Portfolio.html`, `All Projects.html`, and `Project Detail.html` are live HTML prototypes — open them in a browser to verify against during implementation.

---

## File Structure

```
/                           ← repo root
├── design_handoff/         ← read-only design references, do not modify
├── docs/                   ← specs and plans
├── src/
│   ├── app/
│   │   ├── layout.tsx          root layout: fonts, Nav, Footer, ProgressBar
│   │   ├── page.tsx            home page (Hero, About, Experience, FeaturedProjects, Contact)
│   │   ├── globals.css         base resets, :root CSS custom properties, scroll-behavior
│   │   └── projects/
│   │       ├── page.tsx        all projects page (PageHeader, FilterBar, ProjectGrid)
│   │       └── [slug]/
│   │           └── page.tsx    project detail page
│   ├── components/
│   │   ├── Nav.tsx             fixed nav bar (client component for scroll state)
│   │   ├── Footer.tsx          site footer
│   │   ├── ProgressBar.tsx     fixed reading progress bar (client component)
│   │   ├── home/
│   │   │   ├── Hero.tsx        hero section with parallax (client component)
│   │   │   ├── About.tsx       about section with skill tags (client component for reveals)
│   │   │   ├── Experience.tsx  experience tabs (client component)
│   │   │   ├── FeaturedProjects.tsx  project cards with 3D tilt (client component)
│   │   │   └── Contact.tsx     contact section
│   │   ├── projects/
│   │   │   ├── FilterBar.tsx   category filter buttons (client component)
│   │   │   ├── ProjectCard.tsx reusable project card with 3D tilt (client component)
│   │   │   └── ProjectGrid.tsx filtered grid wrapper (client component)
│   │   └── project-detail/
│   │       ├── ProjectHero.tsx
│   │       ├── Metrics.tsx
│   │       ├── ProjectContent.tsx
│   │       ├── TechStack.tsx
│   │       └── ProjectNav.tsx
│   ├── data/
│   │   └── portfolio.ts    all content: personal info, experience, projects
│   └── types/
│       └── index.ts        shared TypeScript types
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Session 1: Scaffold

Deliverable: A running Next.js app with design tokens, fonts, Nav, Footer, and the data file. `npm run dev` shows a blank page with the correct nav and footer styled to spec.

---

### Task 1: Delete old CRA code and init Next.js

**Files:**
- Delete: `src/` (entire directory)
- Delete: `public/` (entire directory)
- Keep: `design_handoff/`, `docs/`, `.git/`, `.gitignore`, `README.md`

- [ ] **Step 1: Remove old source**

```bash
rm -rf src public
```

- [ ] **Step 2: Init Next.js 14 with all options**

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

When prompted, accept all defaults. This creates `src/app/`, `tailwind.config.ts`, `next.config.ts`, `tsconfig.json`.

- [ ] **Step 3: Install Framer Motion**

```bash
npm install framer-motion
```

- [ ] **Step 4: Verify dev server starts**

```bash
npm run dev
```

Open `http://localhost:3000`. Should show the default Next.js welcome page. Ctrl+C to stop.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: init Next.js 14 with Tailwind and Framer Motion"
```

---

### Task 2: Configure Tailwind with design tokens

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Replace tailwind.config.ts with full token config**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hanada:   '#1d5c3a',
        yamabuki: '#d4a020',
        tokiwa:   '#2a7a5a',
        bg:       '#f4f2eb',
        'bg-warm':'#e6e2d4',
        ink:      '#131a14',
        'ink-mid':'#445048',
        'ink-soft':'#889088',
        'hero-bg':'#0c1410',
      },
      fontFamily: {
        shippori: ['var(--font-shippori)', 'serif'],
        serif:    ['var(--font-dm-serif)', 'serif'],
        sans:     ['var(--font-dm-sans)', 'sans-serif'],
      },
      borderRadius: {
        sm: '2px',
        md: '3px',
      },
    },
  },
  plugins: [],
}
export default config
```

- [ ] **Step 2: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat: add Japanese palette and font families to Tailwind config"
```

---

### Task 3: Set up fonts and global CSS

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --hanada:    #1d5c3a;
  --yamabuki:  #d4a020;
  --tokiwa:    #2a7a5a;
  --bg:        #f4f2eb;
  --bg-warm:   #e6e2d4;
  --ink:       #131a14;
  --ink-mid:   #445048;
  --ink-soft:  #889088;
  --hero-bg:   #0c1410;
  --nav-height: 64px;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--ink);
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}
```

- [ ] **Step 2: Replace layout.tsx with font loading and base structure**

```tsx
import type { Metadata } from 'next'
import { Shippori_Mincho, DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ProgressBar from '@/components/ProgressBar'

const shippori = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-shippori',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Dom Taing — Full Stack Developer',
  description: 'Portfolio of Dom Taing, full stack developer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${shippori.variable} ${dmSerif.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        <ProgressBar />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 3: Commit (Nav, Footer, ProgressBar stubs needed first — see Task 4)**

Hold — commit after Task 4.

---

### Task 4: Create Nav, Footer, and ProgressBar stubs

These are stubs — full implementation is in Session 2. They need to exist so layout.tsx compiles.

**Files:**
- Create: `src/components/Nav.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/components/ProgressBar.tsx`

- [ ] **Step 1: Create Nav.tsx stub**

```tsx
'use client'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-14 h-16 bg-[rgba(14,12,26,0.85)] backdrop-blur-md border-b border-white/[0.06]">
      <div className="font-shippori font-bold text-[18px] text-white tracking-[0.04em]">
        Dom<span className="text-yamabuki">.</span>
      </div>
      <ul className="flex gap-10 list-none">
        <li><a href="#about" className="text-[12px] font-medium tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors">About</a></li>
        <li><a href="#experience" className="text-[12px] font-medium tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors">Experience</a></li>
        <li><a href="/projects" className="text-[12px] font-medium tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors">Projects</a></li>
        <li><a href="#contact" className="text-[12px] font-semibold tracking-[0.12em] uppercase bg-yamabuki text-ink px-[22px] py-2 rounded-sm hover:bg-[#b8881a] transition-colors">Contact</a></li>
      </ul>
    </nav>
  )
}
```

- [ ] **Step 2: Create Footer.tsx stub**

```tsx
export default function Footer() {
  return (
    <footer className="bg-ink px-14 py-7 flex justify-between items-center">
      <div className="font-shippori font-bold text-[15px] text-white/35">Dom Taing</div>
      <div className="text-[12px] text-white/20 tracking-[0.06em]">© 2026 — Built with care.</div>
      <div className="flex gap-1.5">
        <div className="w-[9px] h-[9px] rounded-full bg-hanada" />
        <div className="w-[9px] h-[9px] rounded-full bg-yamabuki" />
        <div className="w-[9px] h-[9px] rounded-full bg-tokiwa" />
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Create ProgressBar.tsx stub**

```tsx
'use client'

import { useEffect, useState } from 'react'

export default function ProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight
      setWidth(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-16 left-0 z-[300] h-[2px] bg-yamabuki pointer-events-none transition-[width] duration-[80ms] linear"
      style={{ width: `${width}%` }}
    />
  )
}
```

- [ ] **Step 4: Create a minimal home page so the app renders**

Replace `src/app/page.tsx`:

```tsx
export default function HomePage() {
  return (
    <main className="pt-16 bg-bg min-h-screen">
      <p className="p-20 text-ink-soft">Home page — coming in Session 2</p>
    </main>
  )
}
```

- [ ] **Step 5: Verify dev server**

```bash
npm run dev
```

Open `http://localhost:3000`. You should see:
- Dark nav bar with "Dom." logo (yamabuki dot) and nav links
- Amber progress bar below nav (visible on scroll)
- Dark footer with color dots at the bottom

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: scaffold Nav, Footer, ProgressBar and root layout with fonts"
```

---

### Task 5: Create TypeScript types and data file

**Files:**
- Create: `src/types/index.ts`
- Create: `src/data/portfolio.ts`

- [ ] **Step 1: Create src/types/index.ts**

```ts
export type SkillCategory = 'Frontend' | 'Backend' | 'Infra' | 'Other'

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
  approach: string
  metrics: Stat[]
  stack: Array<{ layer: string; items: string[] }>
  screenshots: string[]
}

export interface Project {
  slug: string
  title: string
  description: string
  type: 'web' | 'other'
  featured: boolean
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
  linkedin: string
  resumeUrl: string
}
```

- [ ] **Step 2: Create src/data/portfolio.ts**

```ts
import type { Personal, Stat, SkillGroup, ExperienceEntry, Project } from '@/types'

export const personal: Personal = {
  name: 'Dom Taing',
  title: 'Full Stack Developer',
  tagline: 'I build fast, beautiful web applications — end to end.',
  location: 'Your City, Country',       // TODO: fill in
  timezone: 'Your timezone',            // TODO: fill in
  availability: 'Open to opportunities',
  email: 'chonodom@gmail.com',
  github: 'https://github.com/Dom-Taing',
  linkedin: 'https://linkedin.com/in/', // TODO: fill in
  resumeUrl: '#',                       // TODO: link to resume
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
    description: 'This portfolio — built with Next.js 14, Tailwind CSS, and Framer Motion. Japanese-inspired design.',
    type: 'web',
    featured: false,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Dom-Taing/PortfolioV2' },
    ],
  },
  // Add more projects here — type: 'other' for non-web projects
]
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npm run build
```

Expected: Build succeeds with no type errors.

- [ ] **Step 4: Commit**

```bash
git add src/types src/data
git commit -m "feat: add TypeScript types and portfolio data file"
```

---

## Session 2: Home Page

Deliverable: The full home page at `/` — Hero, About, Experience, Featured Projects, and Contact — pixel-accurate to `design_handoff/Portfolio.html`.

**Before starting:** Open `design_handoff/Portfolio.html` in a browser and keep it open for visual reference throughout this session.

---

### Task 6: Hero Section

**Files:**
- Create: `src/components/home/Hero.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Hero.tsx**

```tsx
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { personal } from '@/data/portfolio'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 0.65], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-[65vh] min-h-[480px] bg-hero-bg flex items-end overflow-hidden"
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Concentric circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full border border-white/[0.06]" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-white/[0.04]" />
        <div className="absolute right-[200px] top-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full bg-[rgba(27,85,166,0.07)] border border-[rgba(27,85,166,0.15)]" />
        {/* Gold accent line */}
        <div
          className="absolute left-0 bottom-0 w-full h-[3px]"
          style={{ background: 'linear-gradient(to right, var(--yamabuki) 0%, transparent 60%)' }}
        />
      </div>

      {/* Parallax content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full px-14 pb-[52px]"
      >
        <div className="text-[11px] tracking-[0.22em] uppercase text-yamabuki font-medium mb-4">
          {personal.title} &nbsp;·&nbsp; {personal.availability}
        </div>
        <h1
          className="font-shippori font-extrabold text-white leading-[0.95] mb-2.5"
          style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}
        >
          {personal.name.split(' ')[0]}<br />
          <span className="text-yamabuki">{personal.name.split(' ').slice(1).join(' ')}.</span>
        </h1>
        <p
          className="font-serif italic text-white/55 mb-7"
          style={{ fontSize: 'clamp(15px, 1.4vw, 19px)' }}
        >
          {personal.tagline}
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="bg-yamabuki text-ink px-9 py-3.5 font-bold text-[12px] tracking-[0.14em] uppercase rounded-sm hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(212,160,32,0.35)] transition-all"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="text-white/55 text-[12px] font-medium tracking-[0.12em] uppercase border-b border-white/25 pb-0.5 hover:text-white hover:border-white transition-colors"
          >
            Get in Touch →
          </a>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute right-14 bottom-[52px] z-10 flex flex-col items-center gap-2.5 text-white/25 text-[10px] tracking-[0.18em] uppercase [writing-mode:vertical-rl]">
        <div
          className="w-px h-12 animate-[scroll-pulse_2s_ease-in-out_infinite]"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)' }}
        />
        <span>Scroll</span>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add scroll-pulse keyframe to globals.css**

Append to `src/app/globals.css`:

```css
@keyframes scroll-pulse {
  0%, 100% { opacity: 0.25; }
  50%       { opacity: 0.7; }
}
```

- [ ] **Step 3: Update page.tsx to include Hero**

```tsx
import Hero from '@/components/home/Hero'

export default function HomePage() {
  return (
    <main className="bg-bg">
      <Hero />
    </main>
  )
}
```

- [ ] **Step 4: Visual check**

```bash
npm run dev
```

Open `http://localhost:3000`. Verify against `design_handoff/Portfolio.html`:
- Dark hero fills 65vh
- Dot grid and concentric circles visible on right
- Name large, last name in amber
- Scroll down — hero content parallaxes and fades out

- [ ] **Step 5: Commit**

```bash
git add src/components/home/Hero.tsx src/app/page.tsx src/app/globals.css
git commit -m "feat: add Hero section with parallax"
```

---

### Task 7: About Section

**Files:**
- Create: `src/components/home/About.tsx`

- [ ] **Step 1: Create About.tsx**

```tsx
'use client'

import { motion } from 'framer-motion'
import { personal, stats, skills } from '@/data/portfolio'

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const categoryColor: Record<string, string> = {
  Frontend: 'bg-[rgba(27,85,166,0.08)] text-hanada',
  Backend:  'bg-[rgba(0,113,74,0.08)] text-tokiwa',
  Infra:    'bg-[rgba(212,160,32,0.12)] text-[#9a6800]',
  Other:    'bg-[rgba(27,85,166,0.08)] text-ink-soft',
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden grid px-14 py-[100px] border-t border-hanada/10"
      style={{ gridTemplateColumns: '1fr 300px', gap: '80px' }}
    >
      {/* Section number */}
      <span className="font-shippori font-extrabold text-[120px] leading-none text-hanada/[0.06] absolute top-[-20px] left-10 pointer-events-none select-none">
        01
      </span>

      {/* Main content */}
      <div>
        <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-ink-soft mb-3.5 before:content-[''] before:w-5 before:h-px before:bg-current">
          About Me
        </div>

        <motion.h2
          className="font-serif mb-14 text-ink"
          style={{ fontSize: 'clamp(34px, 3.8vw, 54px)', lineHeight: 1.1 }}
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        >
          Precision in<br />every layer.
        </motion.h2>

        <motion.blockquote
          className="font-serif italic text-[21px] text-ink leading-[1.5] border-l-[3px] border-yamabuki pl-5 mb-10"
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.12 }}
        >
          "The best software is invisible — it just works, beautifully."
        </motion.blockquote>

        <motion.p
          className="text-[16px] leading-[1.85] text-ink-mid mb-7"
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.22 }}
        >
          I'm a <strong className="text-ink font-semibold">full stack developer</strong> with experience building production web applications. I care deeply about both the architecture that powers an application and the interface people interact with.
        </motion.p>

        <motion.div
          className="flex gap-10 mb-10"
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.34 }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-shippori font-extrabold text-[52px] text-hanada leading-none">{s.number}</div>
              <div className="text-[12px] text-ink-soft tracking-[0.06em] mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.34 }}
        >
          {skills.map((group) => (
            <div key={group.category} className="mb-5">
              <div className="text-[10px] tracking-[0.15em] uppercase text-ink-soft mb-2">{group.category}</div>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
              >
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={reveal}
                    className={`text-[12px] font-medium px-3 py-[5px] rounded-sm ${categoryColor[group.category] ?? categoryColor.Other}`}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Sidebar */}
      <motion.div
        className="flex flex-col"
        variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      >
        {/* Portrait placeholder */}
        <div className="relative w-40 h-40 bg-bg-warm border border-dashed border-hanada/20 rounded-md mb-6 overflow-hidden flex items-center justify-center">
          <div
            className="absolute inset-0"
            style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(27,85,166,0.04) 18px, rgba(27,85,166,0.04) 19px)' }}
          />
          <span className="relative z-10 text-[10px] font-mono text-ink-soft text-center leading-[1.6]">[ portrait ]<br />160×160</span>
        </div>

        {[
          { label: 'Status', value: personal.availability, dot: true },
          { label: 'Location', value: personal.location },
          { label: 'Timezone', value: personal.timezone },
          { label: 'Open to', value: 'Full-time · Contract · Remote' },
        ].map((row, i) => (
          <div
            key={row.label}
            className={`py-3.5 flex flex-col gap-[3px] border-b border-hanada/[0.08] ${i === 0 ? 'border-t border-hanada/[0.08]' : ''}`}
          >
            <div className="text-[9px] tracking-[0.2em] uppercase text-ink-soft">{row.label}</div>
            <div className="text-[14px] text-ink font-medium">
              {row.dot && (
                <span className="inline-block w-[7px] h-[7px] rounded-full bg-tokiwa mr-1.5 animate-[pulse-dot_2s_ease-in-out_infinite]" />
              )}
              {row.value}
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-2.5 mt-5">
          {[
            { label: 'GitHub', href: personal.github },
            { label: 'LinkedIn', href: personal.linkedin },
            { label: 'Resume', href: personal.resumeUrl },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-semibold tracking-[0.1em] uppercase text-hanada flex items-center justify-between border-b border-hanada/[0.12] pb-2.5 hover:text-yamabuki transition-colors"
            >
              <span>{link.label}</span><span>↗</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Add pulse-dot keyframe to globals.css**

Append to `src/app/globals.css`:

```css
@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}
```

- [ ] **Step 3: Add About to page.tsx**

```tsx
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'

export default function HomePage() {
  return (
    <main className="bg-bg">
      <Hero />
      <About />
    </main>
  )
}
```

- [ ] **Step 4: Visual check**

Verify against `design_handoff/Portfolio.html` About section:
- 2-col grid layout, section number "01" faint in background
- Pull quote with amber left border
- Stats row with large Shippori numbers
- Skill tags color-coded by category
- Sidebar with portrait placeholder and info rows

- [ ] **Step 5: Commit**

```bash
git add src/components/home/About.tsx src/app/page.tsx src/app/globals.css
git commit -m "feat: add About section with skill tags and info sidebar"
```

---

### Task 8: Experience Section

**Files:**
- Create: `src/components/home/Experience.tsx`

- [ ] **Step 1: Create Experience.tsx**

```tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { experience } from '@/data/portfolio'

export default function Experience() {
  const [active, setActive] = useState(0)

  return (
    <section id="experience" className="relative overflow-hidden px-14 py-[100px] bg-bg border-t border-hanada/[0.08]">
      <span className="font-shippori font-extrabold text-[120px] leading-none text-hanada/[0.06] absolute top-[-20px] left-10 pointer-events-none select-none">
        02
      </span>

      <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-ink-soft mb-3.5 before:content-[''] before:w-5 before:h-px before:bg-current">
        Experience
      </div>

      <motion.h2
        className="font-serif mb-14 text-ink"
        style={{ fontSize: 'clamp(34px, 3.8vw, 54px)', lineHeight: 1.1 }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        Where I've worked.
      </motion.h2>

      <div className="grid" style={{ gridTemplateColumns: '280px 1fr' }}>
        {/* Sidebar nav */}
        <div>
          <div className="sticky top-20">
            {experience.map((exp, i) => (
              <button
                key={exp.company}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3.5 w-full text-left py-3.5 border-b border-hanada/[0.08] transition-colors ${
                  active === i ? 'text-hanada' : 'text-ink-soft hover:text-hanada'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${
                    active === i ? 'bg-yamabuki' : 'bg-hanada/20'
                  }`}
                />
                <div>
                  <div className="text-[13px] font-semibold">{exp.company}</div>
                  <div className="text-[11px] text-ink-soft mt-0.5">{exp.period}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Entries */}
        <div className="pl-14 border-l border-hanada/10">
          {experience.map((exp, i) => (
            <div
              key={exp.company}
              className="pb-[72px] transition-opacity duration-[400ms]"
              style={{ opacity: active === i ? 1 : 0.4 }}
            >
              <div className="text-[11px] tracking-[0.14em] uppercase text-yamabuki font-semibold mb-1.5">{exp.period}</div>
              <div className="text-[13px] text-ink-soft mb-5">{exp.company}</div>
              <div className="font-serif text-[28px] text-ink mb-3.5 leading-[1.2]">{exp.role}</div>
              <p className="text-[15px] leading-[1.8] text-ink-mid mb-5">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="text-[11px] px-2.5 py-1 rounded-sm border border-hanada/15 text-ink-mid tracking-[0.05em]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Experience to page.tsx**

```tsx
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Experience from '@/components/home/Experience'

export default function HomePage() {
  return (
    <main className="bg-bg">
      <Hero />
      <About />
      <Experience />
    </main>
  )
}
```

- [ ] **Step 3: Visual check**

Verify against design handoff Experience section:
- 2-col layout, sticky sidebar with company list
- Click a sidebar item — entry transitions to full opacity, dot turns amber
- Other entries dim to 0.4 opacity

- [ ] **Step 4: Commit**

```bash
git add src/components/home/Experience.tsx src/app/page.tsx
git commit -m "feat: add Experience section with tab switching"
```

---

### Task 9: Featured Projects Section

**Files:**
- Create: `src/components/home/FeaturedProjects.tsx`

- [ ] **Step 1: Create FeaturedProjects.tsx**

```tsx
'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/portfolio'

const accentColors = ['bg-hanada', 'bg-yamabuki', 'bg-tokiwa']

function ProjectCard({
  project,
  index,
  wide = false,
}: {
  project: (typeof projects)[0]
  index: number
  wide?: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const r = card.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateZ(8px)`
    card.style.boxShadow = `${-x * 18}px ${-y * 18}px 36px rgba(27,85,166,0.1)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = ''
    card.style.boxShadow = ''
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      className={`relative bg-bg hover:bg-white transition-colors p-11 overflow-hidden cursor-default [transform-style:preserve-3d] ${wide ? 'col-span-2 grid gap-12 items-center' : ''}`}
      style={wide ? { gridTemplateColumns: '1fr 1fr' } : {}}
    >
      <div className={`absolute top-0 left-0 w-1 h-full ${accentColors[index % accentColors.length]}`} />

      <div>
        <div className="text-[11px] tracking-[0.16em] uppercase text-ink-soft mb-[18px] font-medium">
          {String(index + 1).padStart(2, '0')}{wide ? ' — Featured' : ''}
        </div>
        <h3 className={`font-serif text-ink mb-3 leading-[1.2] ${wide ? 'text-[34px]' : 'text-[26px]'}`}>
          {project.title}
        </h3>
        <p className="text-[14px] leading-[1.8] text-ink-mid mb-[22px]">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-7">
          {project.tech.map((t) => (
            <span key={t} className="text-[11px] px-2.5 py-1 rounded-sm bg-hanada/[0.08] text-hanada font-medium tracking-[0.05em]">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-5">
          {project.detail && (
            <Link href={`/projects/${project.slug}`} className="text-[11px] font-semibold tracking-[0.14em] uppercase text-hanada border-b border-current pb-px hover:text-yamabuki hover:border-yamabuki transition-colors">
              Case Study
            </Link>
          )}
          {project.links.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
              className="text-[11px] font-semibold tracking-[0.14em] uppercase text-hanada border-b border-current pb-px hover:text-yamabuki hover:border-yamabuki transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {wide && (
        <div
          className="aspect-[16/10] bg-bg-warm border border-dashed border-hanada/[0.18] flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(-45deg, transparent, transparent 16px, rgba(27,85,166,0.04) 16px, rgba(27,85,166,0.04) 17px)' }} />
          <span className="relative z-10 text-[11px] font-mono text-ink-soft text-center leading-[1.6]">[ screenshot ]<br />16:10</span>
        </div>
      )}
    </motion.div>
  )
}

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)
  const [first, ...rest] = featured

  return (
    <section id="projects" className="relative bg-bg-warm px-14 py-[100px] border-t border-hanada/[0.08] overflow-hidden">
      <span className="font-shippori font-extrabold text-[120px] leading-none text-hanada/[0.06] absolute top-[-20px] left-10 pointer-events-none select-none">
        03
      </span>

      <div className="flex items-end justify-between mb-14">
        <div>
          <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-ink-soft mb-3.5 before:content-[''] before:w-5 before:h-px before:bg-current">
            Featured Projects
          </div>
          <motion.h2
            className="font-serif text-ink"
            style={{ fontSize: 'clamp(34px, 3.8vw, 54px)', lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Selected work.
          </motion.h2>
        </div>
        <Link
          href="/projects"
          className="text-[12px] font-semibold tracking-[0.12em] uppercase text-hanada border-b border-current pb-0.5 mb-1.5 hover:text-yamabuki hover:border-yamabuki transition-colors whitespace-nowrap"
        >
          All Projects →
        </Link>
      </div>

      <div className="grid gap-[3px]" style={{ gridTemplateColumns: '1fr 1fr' }}>
        {first && <ProjectCard project={first} index={0} wide />}
        {rest.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i + 1} />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add FeaturedProjects to page.tsx**

```tsx
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Experience from '@/components/home/Experience'
import FeaturedProjects from '@/components/home/FeaturedProjects'

export default function HomePage() {
  return (
    <main className="bg-bg">
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
    </main>
  )
}
```

- [ ] **Step 3: Visual check**

Verify against design handoff:
- First project card spans full width with mockup placeholder on right
- Two smaller cards below
- Hover a card — 3D tilt effect with directional shadow
- Left accent bar on each card matches color coding

- [ ] **Step 4: Commit**

```bash
git add src/components/home/FeaturedProjects.tsx src/app/page.tsx
git commit -m "feat: add Featured Projects section with 3D card tilt"
```

---

### Task 10: Contact Section and finalize Home page

**Files:**
- Create: `src/components/home/Contact.tsx`
- Finalize: `src/app/page.tsx`

- [ ] **Step 1: Create Contact.tsx**

```tsx
import { personal } from '@/data/portfolio'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-hanada overflow-hidden grid px-14 py-[100px] items-center"
      style={{ gridTemplateColumns: '1fr 1fr', gap: '80px' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Decorative text */}
      <div
        className="font-shippori font-extrabold text-white/[0.05] absolute right-12 bottom-[-10px] leading-none pointer-events-none select-none"
        style={{ fontSize: 'clamp(72px, 7vw, 108px)' }}
      >
        HELLO.
      </div>

      {/* Left */}
      <div className="relative z-10">
        <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-white/40 mb-4 before:content-[''] before:w-5 before:h-px before:bg-current">
          Contact
        </div>
        <h2
          className="font-serif text-white leading-[1.1] mb-5"
          style={{ fontSize: 'clamp(34px, 4vw, 56px)' }}
        >
          Let's build<br />something<br />together.
        </h2>
        <p className="text-[15px] text-white/55 leading-[1.75] mb-10 max-w-[380px]">
          Open to full-time roles, contract work, and interesting collaborations.
        </p>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2.5 bg-yamabuki text-ink px-9 py-4 font-bold text-[12px] tracking-[0.14em] uppercase rounded-sm hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-all"
        >
          Send a Message →
        </a>
      </div>

      {/* Right */}
      <div className="relative z-10">
        {[
          { label: personal.email, href: `mailto:${personal.email}` },
          { label: `GitHub — @Dom-Taing`, href: personal.github },
          { label: 'LinkedIn', href: personal.linkedin },
          { label: 'Resume / CV', href: personal.resumeUrl },
        ].map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className={`flex items-center justify-between py-5 text-white/65 text-[14px] font-medium hover:text-yamabuki transition-colors border-b border-white/10 ${i === 0 ? 'border-t border-white/10' : ''}`}
          >
            <span>{link.label}</span>
            <span className="opacity-50 text-[18px]">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Finalize page.tsx with all sections**

```tsx
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Experience from '@/components/home/Experience'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Contact from '@/components/home/Contact'

export default function HomePage() {
  return (
    <main className="bg-bg">
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Contact />
    </main>
  )
}
```

- [ ] **Step 3: Full home page visual check**

Scroll through the entire home page and verify each section against `design_handoff/Portfolio.html`. Check:
- Nav sticks to top, progress bar tracks scroll
- Hero parallax on scroll
- All section numbers present (01, 02, 03)
- Contact section has dark green background, "HELLO." ghost text
- Footer appears below Contact

- [ ] **Step 4: Build check**

```bash
npm run build
```

Expected: Build succeeds with no TypeScript errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/home/Contact.tsx src/app/page.tsx
git commit -m "feat: complete home page with Contact section"
```

---

## Session 3: All Projects Page

Deliverable: `/projects` page with filter bar and full project grid, matching `design_handoff/All Projects.html`.

**Before starting:** Open `design_handoff/All Projects.html` in a browser for reference.

---

### Task 11: ProjectCard component

**Files:**
- Create: `src/components/projects/ProjectCard.tsx`

- [ ] **Step 1: Create ProjectCard.tsx**

```tsx
'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Project } from '@/types'

const accentColors = ['bg-hanada', 'bg-yamabuki', 'bg-tokiwa', 'bg-hanada', 'bg-tokiwa', 'bg-yamabuki']

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const r = card.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateZ(8px)`
    card.style.boxShadow = `${-x * 18}px ${-y * 18}px 36px rgba(27,85,166,0.1)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = ''
    card.style.boxShadow = ''
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.1 }}
      className="relative bg-bg-warm hover:bg-white transition-colors p-9 overflow-hidden cursor-default [transform-style:preserve-3d]"
    >
      {project.featured && (
        <div className="absolute top-4 right-4 bg-yamabuki text-ink text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-sm">
          Featured
        </div>
      )}

      <div className={`absolute top-0 left-0 w-1 h-full ${accentColors[index % accentColors.length]}`} />

      <div className="text-[11px] tracking-[0.16em] uppercase text-ink-soft mb-[18px] font-medium">
        {String(index + 1).padStart(2, '0')}
      </div>
      <h3 className="font-serif text-[24px] text-ink mb-3 leading-[1.2]">{project.title}</h3>
      <p className="text-[13px] leading-[1.8] text-ink-mid mb-5">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="text-[11px] px-2.5 py-1 rounded-sm bg-hanada/[0.08] text-hanada font-medium tracking-[0.05em]">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-5">
        {project.detail && (
          <Link href={`/projects/${project.slug}`}
            className="text-[11px] font-semibold tracking-[0.14em] uppercase text-hanada border-b border-current pb-px hover:text-yamabuki hover:border-yamabuki transition-colors">
            Case Study
          </Link>
        )}
        {project.links.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
            className="text-[11px] font-semibold tracking-[0.14em] uppercase text-hanada border-b border-current pb-px hover:text-yamabuki hover:border-yamabuki transition-colors">
            {link.label}
          </a>
        ))}
      </div>
    </motion.div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/projects/ProjectCard.tsx
git commit -m "feat: add reusable ProjectCard with 3D tilt"
```

---

### Task 12: FilterBar and ProjectGrid components

**Files:**
- Create: `src/components/projects/FilterBar.tsx`
- Create: `src/components/projects/ProjectGrid.tsx`

- [ ] **Step 1: Create FilterBar.tsx**

```tsx
'use client'

type Filter = 'all' | 'web' | 'other'

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web Apps', value: 'web' },
  { label: 'Other', value: 'other' },
]

export default function FilterBar({
  active,
  onChange,
}: {
  active: Filter
  onChange: (f: Filter) => void
}) {
  return (
    <div className="bg-bg-warm px-14 py-5 flex gap-2 items-center border-b border-hanada/10 sticky top-16 z-[100]">
      <span className="text-[10px] tracking-[0.18em] uppercase text-ink-soft mr-2">Filter</span>
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={`text-[11px] font-semibold tracking-[0.1em] uppercase px-[18px] py-[7px] rounded-sm border font-sans transition-all ${
            active === f.value
              ? 'bg-hanada text-white border-hanada'
              : 'bg-transparent text-ink-mid border-hanada/[0.18] hover:border-hanada hover:text-hanada'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
```

- [ ] **Step 2: Create ProjectGrid.tsx**

```tsx
'use client'

import { useState } from 'react'
import { projects } from '@/data/portfolio'
import FilterBar from './FilterBar'
import ProjectCard from './ProjectCard'

type Filter = 'all' | 'web' | 'other'

export default function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>('all')

  const visible = filter === 'all' ? projects : projects.filter((p) => p.type === filter)

  return (
    <>
      <FilterBar active={filter} onChange={setFilter} />
      <div className="px-14 py-14 pb-20 grid gap-[3px]" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {visible.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/projects/FilterBar.tsx src/components/projects/ProjectGrid.tsx
git commit -m "feat: add FilterBar and ProjectGrid with category filtering"
```

---

### Task 13: All Projects page

**Files:**
- Create: `src/app/projects/page.tsx`

- [ ] **Step 1: Create src/app/projects/page.tsx**

```tsx
import ProjectGrid from '@/components/projects/ProjectGrid'

export const metadata = { title: 'Projects — Dom Taing' }

export default function ProjectsPage() {
  return (
    <main className="bg-bg pt-16">
      {/* Page header */}
      <div className="relative px-14 pb-[72px] pt-[140px] bg-ink overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <a
          href="/"
          className="absolute top-[84px] right-14 z-10 text-[12px] font-semibold tracking-[0.12em] uppercase text-white/40 hover:text-white transition-colors flex items-center gap-2"
        >
          ← Back
        </a>
        <h1
          className="relative z-10 font-shippori font-bold text-white leading-[0.92] tracking-[0.02em]"
          style={{ fontSize: 'clamp(80px, 10vw, 140px)' }}
        >
          All <span className="text-yamabuki">Projects</span>
        </h1>
        <p className="relative z-10 text-[15px] text-white/40 mt-5">
          A full list of things I've built — web apps, tools, experiments, and more.
        </p>
      </div>

      <ProjectGrid />
    </main>
  )
}
```

- [ ] **Step 2: Visual check**

Navigate to `http://localhost:3000/projects`. Verify against `design_handoff/All Projects.html`:
- Dark page header with large display heading
- Sticky filter bar below header
- 3-col project grid
- Click "Web Apps" / "Other" — grid filters correctly
- Click "All" — all projects show again

- [ ] **Step 3: Build check**

```bash
npm run build
```

Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/projects/page.tsx
git commit -m "feat: add All Projects page with header and filter grid"
```

---

## Session 4: Project Detail Page

Deliverable: `/projects/[slug]` dynamic route rendering a full case study, matching `design_handoff/Project Detail.html`. Only projects with a `detail` field in `portfolio.ts` will have meaningful content here.

**Before starting:** Open `design_handoff/Project Detail.html` in a browser for reference.

---

### Task 14: Project detail sub-components

**Files:**
- Create: `src/components/project-detail/ProjectHero.tsx`
- Create: `src/components/project-detail/Metrics.tsx`
- Create: `src/components/project-detail/ProjectContent.tsx`
- Create: `src/components/project-detail/TechStack.tsx`
- Create: `src/components/project-detail/ProjectNav.tsx`

- [ ] **Step 1: Create ProjectHero.tsx**

```tsx
import type { Project } from '@/types'

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <div
      className="relative px-14 py-[120px] bg-hero-bg overflow-hidden grid items-start gap-20"
      style={{ gridTemplateColumns: '1fr 340px' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative z-10">
        <a href="/projects" className="text-[11px] tracking-[0.18em] uppercase text-white/35 hover:text-white/70 transition-colors mb-8 inline-block">
          ← All Projects
        </a>
        <h1
          className="font-shippori font-extrabold text-white leading-[0.95] mb-6"
          style={{ fontSize: 'clamp(48px, 6vw, 88px)' }}
        >
          {project.title}
        </h1>
        <p className="text-[16px] text-white/55 leading-[1.8] max-w-[520px]">{project.description}</p>
      </div>
      <div className="relative z-10 bg-white/[0.04] border border-white/[0.08] rounded-md p-8 mt-8">
        <div className="text-[10px] tracking-[0.18em] uppercase text-white/30 mb-5">Project Info</div>
        <div className="flex flex-col gap-0">
          {[
            { label: 'Type', value: project.type === 'web' ? 'Web Application' : 'Other' },
            { label: 'Stack', value: project.tech.join(', ') },
          ].map((row) => (
            <div key={row.label} className="py-3 border-b border-white/[0.06]">
              <div className="text-[10px] uppercase tracking-[0.15em] text-white/30 mb-1">{row.label}</div>
              <div className="text-[13px] text-white/70">{row.value}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold tracking-[0.12em] uppercase bg-yamabuki text-ink px-4 py-2 rounded-sm hover:bg-[#b8881a] transition-colors"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create Metrics.tsx**

```tsx
import type { Stat } from '@/types'

export default function Metrics({ metrics }: { metrics: Stat[] }) {
  return (
    <div className="bg-hanada px-14 py-[80px] grid" style={{ gridTemplateColumns: `repeat(${metrics.length}, 1fr)` }}>
      {metrics.map((m) => (
        <div key={m.label} className="text-center">
          <div className="font-shippori font-extrabold text-white leading-none mb-2" style={{ fontSize: '64px' }}>
            {m.number}
          </div>
          <div className="text-[13px] text-white/55 tracking-[0.06em]">{m.label}</div>
        </div>
      ))}
    </div>
  )
}
```

- [ ] **Step 3: Create ProjectContent.tsx**

```tsx
export default function ProjectContent({ problem, approach }: { problem: string; approach: string }) {
  return (
    <section className="px-14 py-[100px] grid gap-20 border-t border-hanada/[0.08]" style={{ gridTemplateColumns: '1fr 1fr' }}>
      {[
        { title: 'The Problem', body: problem },
        { title: 'The Approach', body: approach },
      ].map((section) => (
        <div key={section.title}>
          <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-ink-soft mb-4 before:content-[''] before:w-5 before:h-px before:bg-current">
            {section.title}
          </div>
          <p className="text-[15px] leading-[1.85] text-ink-mid">{section.body}</p>
        </div>
      ))}
    </section>
  )
}
```

- [ ] **Step 4: Create TechStack.tsx**

```tsx
const layerAccent: Record<string, string> = {
  Frontend: 'bg-hanada',
  Backend: 'bg-tokiwa',
  Infra: 'bg-yamabuki',
}

export default function TechStack({ stack }: { stack: Array<{ layer: string; items: string[] }> }) {
  return (
    <section className="px-14 py-[80px] bg-bg-warm border-t border-hanada/[0.08]">
      <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-ink-soft mb-10 before:content-[''] before:w-5 before:h-px before:bg-current">
        Tech Stack
      </div>
      <div className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${stack.length}, 1fr)` }}>
        {stack.map((layer) => (
          <div key={layer.layer} className="bg-bg p-8 relative overflow-hidden">
            <div className={`absolute top-0 left-0 right-0 h-1 ${layerAccent[layer.layer] ?? 'bg-hanada'}`} />
            <div className="text-[11px] tracking-[0.16em] uppercase text-ink-soft font-semibold mb-4">{layer.layer}</div>
            <div className="flex flex-wrap gap-2">
              {layer.items.map((item) => (
                <span key={item} className="text-[12px] px-2.5 py-1 bg-hanada/[0.08] text-hanada rounded-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Create ProjectNav.tsx**

```tsx
import Link from 'next/link'
import { projects } from '@/data/portfolio'
import type { Project } from '@/types'

export default function ProjectNav({ current }: { current: Project }) {
  const idx = projects.findIndex((p) => p.slug === current.slug)
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx < projects.length - 1 ? projects[idx + 1] : null

  return (
    <div className="bg-ink grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
      {prev ? (
        <Link href={`/projects/${prev.slug}`} className="px-14 py-12 border-r border-white/[0.06] group hover:bg-white/[0.02] transition-colors">
          <div className="text-[10px] tracking-[0.18em] uppercase text-white/30 mb-2">← Previous</div>
          <div className="font-serif text-[22px] text-white/70 group-hover:text-white transition-colors">{prev.title}</div>
        </Link>
      ) : <div />}
      {next ? (
        <Link href={`/projects/${next.slug}`} className="px-14 py-12 text-right group hover:bg-white/[0.02] transition-colors">
          <div className="text-[10px] tracking-[0.18em] uppercase text-white/30 mb-2">Next →</div>
          <div className="font-serif text-[22px] text-white/70 group-hover:text-white transition-colors">{next.title}</div>
        </Link>
      ) : <div />}
    </div>
  )
}
```

- [ ] **Step 6: Commit**

```bash
git add src/components/project-detail/
git commit -m "feat: add project detail sub-components"
```

---

### Task 15: Project detail dynamic route

**Files:**
- Create: `src/app/projects/[slug]/page.tsx`

- [ ] **Step 1: Create src/app/projects/[slug]/page.tsx**

```tsx
import { notFound } from 'next/navigation'
import { projects } from '@/data/portfolio'
import ProjectHero from '@/components/project-detail/ProjectHero'
import Metrics from '@/components/project-detail/Metrics'
import ProjectContent from '@/components/project-detail/ProjectContent'
import TechStack from '@/components/project-detail/TechStack'
import ProjectNav from '@/components/project-detail/ProjectNav'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  return { title: project ? `${project.title} — Dom Taing` : 'Project' }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <main className="bg-bg pt-16">
      <ProjectHero project={project} />

      {project.detail && (
        <>
          {project.detail.metrics.length > 0 && (
            <Metrics metrics={project.detail.metrics} />
          )}
          <ProjectContent
            problem={project.detail.problem}
            approach={project.detail.approach}
          />
          {project.detail.stack.length > 0 && (
            <TechStack stack={project.detail.stack} />
          )}
        </>
      )}

      <ProjectNav current={project} />
    </main>
  )
}
```

- [ ] **Step 2: Visual check**

Navigate to `http://localhost:3000/projects/clinic-server` (or any slug from your data file).
- Project hero renders with title and meta card
- If `detail` is defined, metrics, content, and tech stack render
- Prev/Next navigation at bottom links to adjacent projects
- 404 page shown for unknown slug

- [ ] **Step 3: Build check**

```bash
npm run build
```

Expected: All routes pre-rendered. No TypeScript or build errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/projects/
git commit -m "feat: add Project Detail dynamic route with case study layout"
```

---

### Task 16: Final QA and Vercel deployment

- [ ] **Step 1: Full visual pass**

Open each page and compare against the design handoff HTMLs:
- `http://localhost:3000` vs `design_handoff/Portfolio.html`
- `http://localhost:3000/projects` vs `design_handoff/All Projects.html`
- `http://localhost:3000/projects/<slug>` vs `design_handoff/Project Detail.html`

- [ ] **Step 2: Check all TODOs in portfolio.ts**

Open `src/data/portfolio.ts` and fill in any remaining `// TODO` fields (location, timezone, LinkedIn URL, resume URL).

- [ ] **Step 3: Production build**

```bash
npm run build
npm run start
```

Open `http://localhost:3000` in production mode and verify everything works.

- [ ] **Step 4: Deploy to Vercel**

```bash
npx vercel --prod
```

Follow the prompts (link to your Vercel account, accept defaults). Vercel will give you a live URL.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: fill in personal data and deploy to Vercel"
```

---

## Summary

| Session | Tasks | Deliverable |
|---|---|---|
| 1 — Scaffold | 1–5 | Running Next.js app with Nav, Footer, fonts, tokens, data file |
| 2 — Home | 6–10 | Complete home page at `/` |
| 3 — All Projects | 11–13 | `/projects` with filter grid |
| 4 — Project Detail | 14–16 | `/projects/[slug]` case study + Vercel deploy |
