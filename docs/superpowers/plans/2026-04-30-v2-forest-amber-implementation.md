# Implementation Plan: Design v2 Forest + Amber

Source: `design_handoff 2/README.md`

All changes are delta-only against the existing codebase. The CSS design tokens in `globals.css` are already correct for v2 — no token changes needed.

---

## Tasks

### 1. Nav.tsx — color + CTA update
File: `src/components/Nav.tsx`

- Background: `rgba(14,12,26,.85)` → `rgba(12,20,14,.92)`
- Border-bottom: `rgba(255,255,255,.06)` → `rgba(45,120,74,.18)`
- Logo dot: `text-yamabuki` → `text-tokiwa`
- Contact CTA: replace gold fill with `bg-hanada text-white border border-tokiwa hover:bg-tokiwa` (remove old `bg-yamabuki text-ink`)

---

### 2. ProgressBar.tsx — gradient fill
File: `src/components/ProgressBar.tsx`

- Replace `bg-yamabuki` with inline `background: linear-gradient(to right, var(--hanada), var(--tokiwa))`

---

### 3. Hero.tsx — circle, accent line, drop-in animation
File: `src/components/home/Hero.tsx`

- Circle 3 bg+border: `rgba(27,85,166,.07)` → `rgba(29,92,58,.12)`, border `rgba(42,122,90,.25)`
- Accent line gradient: `--yamabuki only` → `linear-gradient(to right, var(--hanada) 0%, var(--tokiwa) 40%, transparent 70%)`
- **Drop-in animation** (new): wrap each hero text block in a `overflow-hidden` div. Use Framer Motion `initial={{ y: '-110%', opacity: 0 }}` → `animate={{ y: 0, opacity: 1 }}` with `ease: [0.22, 1, 0.36, 1]`, `duration: 0.75`. Stagger delays: eyebrow `0.05s`, name line 1 `0.2s`, name line 2 `0.35s`, role `0.52s`, actions `0.65s`.

---

### 4. About.tsx — green color sweep
File: `src/components/home/About.tsx`

- Border-top: `rgba(27,85,166,.10)` → `rgba(29,92,58,.18)`
- Section number watermark: `rgba(27,85,166,.06)` → `rgba(29,92,58,.09)`
- Section label (`s-label`): `text-ink-soft` → `text-tokiwa`
- Pull quote left border: `border-yamabuki` → `border-hanada`
- Stat numbers: `text-hanada` → `text-tokiwa`
- Info row borders: `rgba(27,85,166,.08)` → `rgba(29,92,58,.12)`
- Quick link borders: `rgba(27,85,166,.12)` → `rgba(29,92,58,.18)`

---

### 5. Experience.tsx — green color sweep
File: `src/components/home/Experience.tsx`

- Border-top: `rgba(27,85,166,.08)` → `rgba(29,92,58,.15)`
- Section number watermark: `rgba(27,85,166,.06)` → `rgba(29,92,58,.09)`
- Section label: `text-ink-soft` → `text-tokiwa`
- Active nav dot: `bg-yamabuki` → `bg-hanada`
- Inactive nav dot: `rgba(27,85,166,.2)` → `rgba(29,92,58,.25)`
- Entry left border: `1px solid rgba(27,85,166,.10)` → `2px solid rgba(29,92,58,.2)`
- Exp tags border: `rgba(27,85,166,.15)` → `rgba(29,92,58,.2)`; text: `text-ink-mid` → `text-hanada`

---

### 6. FeaturedProjects.tsx — green color sweep + link colors
File: `src/components/home/FeaturedProjects.tsx`

- Border-top: `rgba(27,85,166,.08)` → `rgba(29,92,58,.15)`
- Section number watermark: `rgba(27,85,166,.06)` → `rgba(29,92,58,.09)`
- Section label: `text-ink-soft` → `text-tokiwa`
- "All Projects →" link: `text-hanada` → `text-tokiwa`
- Tech tags bg: `rgba(27,85,166,.08)` → `rgba(29,92,58,.09)`
- Project links (Case Study, GitHub, etc): `text-hanada` → `text-tokiwa`
- Tilt shadow: `rgba(27,85,166,.1)` → `rgba(29,92,58,.1)`
- Accent bar colors: update `accentColors` array so order is `['bg-hanada', 'bg-tokiwa', 'bg-yamabuki']`

---

### 7. projects/page.tsx — hero-style header + drop-in animation
File: `src/app/projects/page.tsx`

Replace the existing dark header with hero-matched design:
- Background: `--hero-bg` (already correct)
- Add forest green radial glow: `radial-gradient(ellipse 600px 400px at 0% 100%, rgba(29,92,58,.18), transparent)`
- Eyebrow label with `--tokiwa` + line prefix (matching `.s-label` pattern)
- Title: Shippori Mincho 800, `clamp(64px, 9vw, 128px)`, "Projects." in `--yamabuki`
- Subtitle: DM Serif Display italic, `rgba(255,255,255,.45)`
- Bottom accent line: 3px, `--hanada` → `--tokiwa` gradient
- Drop-in animation: same Framer Motion mechanism as Hero (4 elements: eyebrow, title, subtitle, back link)
- Back link: absolute top-right, underlined, uppercase 11px

---

### 8. FilterBar.tsx — green sweep
File: `src/components/projects/FilterBar.tsx`

- Border-bottom: `rgba(27,85,166,.10)` → `rgba(29,92,58,.15)`
- Label color: `text-ink-soft` → `text-tokiwa`
- Inactive button border: `rgba(27,85,166,.18)` → `rgba(29,92,58,.2)`
- Inactive hover: `hover:border-hanada hover:text-hanada` → `hover:border-tokiwa hover:text-tokiwa`

---

### 9. ProjectCard.tsx — top accent bar, green sweep, badge update
File: `src/components/projects/ProjectCard.tsx`

- Move accent bar from left side (4px wide, full height) → **top** (full width, 3px tall): `absolute top-0 left-0 w-full h-[3px]`
- Featured badge: `bg-yamabuki text-ink` → `bg-hanada text-white`
- Card type label: `text-ink-soft` → `text-tokiwa`, 9px
- Number: add `font-shippori`, color `rgba(29,92,58,.3)`
- Tags bg: `rgba(27,85,166,.08)` → `rgba(29,92,58,.09)`
- Links: `text-hanada` → `text-tokiwa`, hover → `text-yamabuki`
- Tilt shadow: `rgba(27,85,166,.1)` → `rgba(29,92,58,.1)`

---

### 10. Footer.tsx — All Projects page border
File: `src/components/Footer.tsx`

The footer itself is fine. The All Projects page needs a wrapper `border-t-2` in green. Since Footer is shared, add the border on the `<main>` wrapper in `projects/page.tsx` via a `border-t-2 border-[rgba(29,92,58,.3)]` on the Footer or pass a prop.

Simplest approach: in `projects/page.tsx`, render Footer with a wrapping div that has `border-t-2 border-[rgba(29,92,58,.3)]`, or accept a `borderTop` prop on Footer. Use a wrapper div since Footer is a shared component.

---

## Order of execution

1. Nav → ProgressBar → Hero (visible above fold first)
2. About → Experience → FeaturedProjects (homepage scroll)
3. projects/page.tsx → FilterBar → ProjectCard (all projects page)
4. Footer border (projects page only)

No database changes, no new dependencies, no routing changes.
