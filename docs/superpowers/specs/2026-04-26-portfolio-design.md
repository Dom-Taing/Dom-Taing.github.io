# Portfolio Redesign — Design Spec
**Date:** 2026-04-26  
**Status:** Approved

---

## Overview

Full rebuild of a personal portfolio for a full stack developer (Dom Taing). The existing CRA + React 16 codebase is deleted and replaced with a Next.js 14 App Router project. The visual design comes from a Claude.ai design handoff (`design_handoff/`) using a Forest + Amber Japanese-inspired palette. Content is driven by a single data file. Build is session-based to manage token budget.

---

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS with custom design tokens |
| Fonts | Shippori Mincho, DM Serif Display, DM Sans via `next/font/google` |
| Animation | Framer Motion (scroll reveals, parallax, tab transitions) + CSS-only 3D card tilt |
| Content | `src/data/portfolio.ts` — single typed data file, no CMS |
| Routing | App Router: `/`, `/projects`, `/projects/[slug]` |
| Deployment | Vercel |

---

## Design Tokens

Mapped as named Tailwind colors in `tailwind.config.ts`:

```
hanada:   #1d5c3a   deep forest green — primary, links, headers
yamabuki: #d4a020   warm amber gold — CTAs, accents, highlights
tokiwa:   #2a7a5a   mid evergreen — secondary accent
bg:       #f4f2eb   warm off-white — page background
bg-warm:  #e6e2d4   alternate section background
ink:      #131a14   near-black with green tint — primary text
ink-mid:  #445048   body text
ink-soft: #889088   labels, captions
hero-bg:  #0c1410   very dark green-black — hero background
```

CSS custom properties are also declared on `:root` for any non-Tailwind usage (e.g. inline JS-driven styles for the 3D tilt).

---

## Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display | Shippori Mincho | 700, 800 | Hero name, section numbers, stats, logo, footer |
| Heading | DM Serif Display | 400, italic | Section headings, role titles, pull quotes |
| Body | DM Sans | 300–600 | All body text, labels, nav, buttons |

Font size scale uses `clamp()` for responsive display sizes, matching the design handoff exactly.

---

## Pages & Routes

### Session 1 — Scaffold (prerequisite for all pages)
- Delete all CRA source files
- `npx create-next-app@latest` with TypeScript, Tailwind, App Router, src/ directory
- Configure `tailwind.config.ts` with all design tokens and font families
- Load fonts via `next/font/google` in root layout
- Create `src/data/portfolio.ts` with typed content (Dom's real info — placeholder until user fills in)
- Build `<Nav>` and `<Footer>` shared components
- Set up global CSS (`:root` custom properties, base resets, scroll-behavior)

### Session 2 — Home Page (`/`)

Sections in order:

**Nav** (fixed, 64px)
- Dark background with backdrop blur
- Logo: "Dom." with yamabuki accent dot
- Links: About, Experience, Projects — uppercase, 12px
- Contact CTA button: yamabuki bg

**Hero** (65vh, min 480px)
- Background: `hero-bg`
- CSS geometric overlay: dot grid + 3 concentric thin-border circles (right side) + yamabuki gradient line at bottom
- Content anchored bottom-left
- Eyebrow: "Full Stack Developer · Available for work" in yamabuki
- Name: Shippori Mincho, clamp(56px–120px), white, accent color on last name
- Role: DM Serif Display italic, rgba white
- CTAs: Primary (yamabuki, "View Work") + Ghost link ("Get in Touch →")
- Scroll hint: vertical text + animated line, bottom-right
- **Parallax:** Framer Motion `useScroll` + `useTransform` — content translates Y × 0.25 and fades out by 65vh

**About** (2-col grid: content | 300px sidebar)
- Section number "01" absolute, 120px, 6% opacity
- Pull quote with yamabuki left border
- Stats row: years exp, projects shipped, repos
- Skill tags grouped by Frontend / Backend / Infra with category color coding
- Sidebar: portrait placeholder (160×160), status/location/timezone/open-to info rows, quick links (GitHub, LinkedIn, Resume)
- Scroll reveal via Framer Motion `whileInView`

**Experience** (2-col grid: 280px sidebar | entries)
- Sticky sidebar nav with company list, active dot turns yamabuki
- Entries panel: active entry at full opacity, others at 0.4
- Tab switching driven by React state (replaces the HTML `setExp()` function)
- Scroll reveal on section entry

**Featured Projects** (bg-warm)
- Header: "Selected work." + "All Projects →" link
- Grid: first card spans full width (2-col internally with mockup), two standard cards below
- Each card: left accent bar (4px, color-coded), project number, title, description, tech tags, links
- **3D tilt:** CSS + inline style on `mousemove` — `perspective(900px) rotateY rotateX translateZ` + directional shadow. Resets on `mouseleave`. Pure JS, no library.
- Hover: card bg lightens to white

**Contact** (hanada bg)
- 2-col: left (heading, subtext, email CTA) | right (stacked social/contact links)
- Dot grid overlay
- Large decorative "HELLO." text, absolute bottom-right, ~5% white opacity

**Footer**
- Dark (ink bg), flex space-between
- Logo | copyright | three color dots (hanada, yamabuki, tokiwa)

**Reading progress bar**
- Fixed 2px bar top: 64px, yamabuki color
- Width driven by `window.scrollY / (scrollHeight - innerHeight) * 100%`

### Session 3 — All Projects Page (`/projects`)

- Dark page header with dot grid, large display heading, subtitle, back link
- Sticky filter bar (top: 64px): All / Web Apps / Other — filter by `project.type` field
- 3-col project grid, gap 3px, same card pattern as home
- Featured badge on highlighted projects
- Same 3D tilt interaction
- Framer Motion scroll reveals

### Session 4 — Project Detail Page (`/projects/[slug]`)

- Dynamic route — slug matches `project.slug` in data file
- Project hero: 2-col (title/description/meta left, meta card right)
- Screenshot area: 16:9 main mockup + 3 thumbnail row (placeholder images until real screenshots added)
- Impact metrics: 4-col grid on hanada bg, large Shippori Mincho numbers
- Body content: Problem / Approach sections, pull quote
- Tech architecture: 3-col cards (Frontend / Backend / Infra)
- Prev/Next project navigation (dark bg)

---

## Content Data Structure (`src/data/portfolio.ts`)

```ts
// Personal info
export const personal = {
  name: string,
  title: string,
  tagline: string,
  location: string,
  timezone: string,
  availability: string,
  email: string,
  github: string,
  linkedin: string,
  resumeUrl: string,
}

// About stats
export const stats = Array<{ number: string, label: string }>

// Skills grouped by category
export const skills = Array<{
  category: 'Frontend' | 'Backend' | 'Infra' | 'Other',
  items: string[]
}>

// Work experience
export const experience = Array<{
  company: string,
  role: string,
  period: string,
  description: string,
  tags: string[]
}>

// Projects
export const projects = Array<{
  slug: string,
  title: string,
  description: string,
  type: 'web' | 'other',
  featured: boolean,
  tech: string[],
  links: Array<{ label: string, url: string }>,
  // Optional detail page fields
  detail?: {
    problem: string,
    approach: string,
    metrics: Array<{ number: string, label: string }>,
    stack: Array<{ layer: string, items: string[] }>,
    screenshots: string[],
  }
}>
```

---

## Interactions & Animations

| Interaction | Implementation |
|---|---|
| Scroll reveals | Framer Motion `whileInView` with `opacity: 0 → 1`, `y: 32 → 0`, staggered children |
| Hero parallax | Framer Motion `useScroll` + `useTransform` — Y translate + opacity fade |
| 3D card tilt | `mousemove` event → inline `transform` + `boxShadow`. `mouseleave` resets. No library. |
| Experience tabs | React `useState(activeIndex)` — matched entry at opacity 1, others at 0.4 with CSS transition |
| Project filter | React `useState(activeFilter)` — filter `projects` array by `type` field |
| Reading progress | `useEffect` scroll listener → `useState(width)` → inline style on fixed bar |
| Status dot pulse | CSS `@keyframes` only |
| Skill tag stagger | Framer Motion `staggerChildren: 0.045` on container |

---

## Build Sequence

| Session | Deliverable | Prerequisite |
|---|---|---|
| 1 | Next.js scaffold, Tailwind config, fonts, Nav, Footer, data file | None |
| 2 | Home page (`/`) — all sections | Session 1 |
| 3 | All Projects page (`/projects`) | Session 1 |
| 4 | Project Detail page (`/projects/[slug]`) | Sessions 1 + 3 |

Sessions 3 and 4 can happen in either order after Session 1. Session 2 is highest priority.

---

## Design Reference Files

All in `design_handoff/`:
- `Portfolio.html` — Home page
- `All Projects.html` — Projects grid page  
- `Project Detail.html` — Case study page
- `README.md` — Full spec with pixel-accurate measurements, interactions, and design tokens

Implement pixel-accurately to the design handoff. The README is the source of truth for spacing, font sizes, colors, and animation parameters.

---

## Out of Scope (for now)

- Dark mode toggle
- Blog section
- CMS integration
- Contact form (email link only)
- Real project screenshots (placeholders used until provided)
- Mobile / responsive layout (desktop-first, responsive pass can be a follow-up session)
