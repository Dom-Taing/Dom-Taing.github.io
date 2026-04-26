# Design Handoff: Personal Portfolio — Full Stack Developer

## Overview
A personal portfolio website for a full stack developer. Three pages: a home/landing page, an all-projects listing, and a per-project case study page. The design uses a Forest + Amber Japanese-inspired color palette, serif display typography, and includes scroll-triggered animations, a reading progress bar, and 3D CSS card tilt interactions on project cards.

## About the Design Files
The HTML files in this bundle are **high-fidelity design references** — prototypes showing the intended look, layout, and interaction behavior. They are **not production code to copy directly**. Your task is to **recreate these designs in your existing codebase** (or the most appropriate framework for your project) using its established patterns, component libraries, and tooling.

Open the HTML files directly in a browser to experience the live design, including animations and hover states.

## Fidelity
**High-fidelity.** Colors, typography, spacing, hover states, and animations are all final and intentional. Implement pixel-accurately.

---

## Pages & Screens

### 1. Home — `Portfolio.html`

**Purpose:** Primary landing page. Introduces the developer, shows experience, featured projects, and contact info.

**Sections (top to bottom):**

#### Navigation (fixed)
- Fixed top bar, full width, height: 64px
- Background: `rgba(12,20,16, 0.88)` + `backdrop-filter: blur(16px)`
- Border-bottom: `1px solid rgba(255,255,255,.06)`
- Left: Logo — font Shippori Mincho, 18px, 700 weight, white. Accent dot in `--yamabuki`
- Right: Nav links (About, Experience, Projects) — 12px, 500 weight, uppercase, letter-spacing 0.12em, color `rgba(255,255,255,.5)`. Hover → white.
- "Contact" link styled as CTA button: background `--yamabuki`, color `--ink`, 8px 22px padding, border-radius 2px, 600 weight

#### Hero Section
- Height: **65vh**, min-height 480px
- Background: `--hero-bg` (`#0c1410`)
- CSS geometric overlay: subtle dot grid (`radial-gradient` 1px dots, 32px grid, 4.5% white opacity) + 3 concentric thin-border circles positioned right-center + gold gradient line at bottom edge
- Content anchored to **bottom-left**: padding 0 56px 52px
- Eyebrow: 11px, uppercase, letter-spacing 0.22em, color `--yamabuki`, weight 500
- Name: font **Shippori Mincho**, `clamp(56px, 8vw, 120px)`, weight 800, white, line-height 0.95
- Accent (last word/line): color `--yamabuki`
- Role line: font **DM Serif Display**, italic, `clamp(15px, 1.4vw, 19px)`, `rgba(255,255,255,.55)`, margin-bottom 28px
- CTAs: Primary button (--yamabuki bg, --ink text, 14px 36px padding, 700 weight, 12px font, uppercase, 0.14em spacing, border-radius 2px) + Ghost link (underlined, rgba white 55%, 12px, uppercase)
- Scroll hint: vertical text + animated line, bottom-right, writing-mode vertical-rl
- **Parallax**: on scroll, hero content translates Y × 0.25 and fades out by 65vh scroll distance

#### Palette Strip
Removed — not shown in the live site.

#### About (`#about`)
- Padding: 100px 56px
- Layout: **CSS Grid**, `grid-template-columns: 1fr 300px`, gap 80px
- Section number "01" — Shippori Mincho, 120px, weight 800, absolute positioned, opacity ~6% in primary color
- Section label: 10px, uppercase, letter-spacing 0.22em, `--ink-soft`, with 20px line prefix
- Heading: **DM Serif Display**, `clamp(34px, 3.8vw, 54px)`, line-height 1.1
- Pull quote: DM Serif Display italic, 21px, left border 3px `--yamabuki`, padding-left 20px
- Body text: 16px, line-height 1.85, color `--ink-mid`
- Stats row: flex, gap 40px. Stat number: Shippori Mincho, 52px, weight 800, `--hanada`. Stat label: 12px, `--ink-soft`
- Skill tags grouped by Frontend / Backend / Infra. Each group label: 10px uppercase. Tags: 12px, 500 weight, 5px 12px padding, border-radius 2px, colored by category (blue/green/gold tints)
- **Right column — Info Sidebar:**
  - Portrait placeholder: 160×160px, square, bg `--bg-warm`, dashed border, border-radius 3px
  - Info rows: label (9px, uppercase, `--ink-soft`) + value (14px, 500 weight). Rows: Status (with pulsing green dot animation), Location, Timezone, Open To
  - Quick links: GitHub, LinkedIn, Resume — 12px, 600 weight, uppercase, `--hanada`, with right arrow, hover → `--yamabuki`
  - All rows separated by `1px solid rgba(--hanada, .08)` borders

#### Experience (`#experience`)
- Padding: 100px 56px, background: `--bg`
- Layout: `grid-template-columns: 280px 1fr`
- **Left sidebar** (sticky at top: 80px): clickable nav items for each company. Active item: `--hanada` color, dot turns `--yamabuki`. Inactive: `--ink-soft`
- **Right entries**: each entry fades (opacity 0.4 → 1) based on active state
  - Period: 11px, uppercase, letter-spacing 0.14em, `--yamabuki`, weight 600
  - Company: 13px, `--ink-soft`
  - Role: **DM Serif Display**, 28px, `--ink`
  - Description: 15px, line-height 1.8, `--ink-mid`
  - Tags: 11px, border `1px solid rgba(--hanada,.15)`, color `--ink-mid`
- Tab switching is JS-driven (click sidebar item → swap active class)

#### Featured Projects (`#projects`)
- Background: `--bg-warm`, padding 100px 56px
- Header: flex space-between with heading + "All Projects →" link
- **Grid**: `grid-template-columns: 1fr 1fr`, gap 3px
  - First card spans full width (`grid-column: span 2`), internally a 2-col grid with text left, mockup right
  - Remaining 2 cards: standard single column
- Each card: bg `--bg`, padding 44px, left accent bar (4px, full height, colored by project)
- **3D tilt on mousemove**: `perspective(900px) rotateY(Xdeg) rotateX(Ydeg) translateZ(8px)` + directional box-shadow. Resets on mouseleave.
- Card hover: bg lightens to `#fff`
- Project number: 11px, uppercase, `--ink-soft`
- Title: **DM Serif Display**, 26px (32px for wide card)
- Description: 14px, line-height 1.8, `--ink-mid`
- Tech tags: 11px, `rgba(--hanada,.08)` bg, `--hanada` color
- Links: 11px, 600 weight, uppercase, `--hanada`, underlined. Hover → `--yamabuki`

#### Contact (`#contact`)
- Background: `--hanada`, padding 100px 56px
- Layout: `grid-template-columns: 1fr 1fr`, gap 80px
- Dot grid overlay (CSS background-image)
- Large decorative text "HELLO." — Shippori Mincho 800, absolute bottom-right, ~5% white opacity
- Left: label, heading (DM Serif Display, `clamp(34px,4vw,56px)`, white), subtext, CTA button (`--yamabuki` bg)
- Right: stacked links with top/bottom borders, arrow icons, hover → `--yamabuki`

#### Footer
- Background: `--ink`, padding 28px 56px
- Flex space-between: logo (Shippori Mincho, 700, 35% white) | copyright | three color dots

---

### 2. All Projects — `All Projects.html`

**Purpose:** Full grid of all projects with category filtering.

- **Page header**: dark (`--ink`) with dot grid, large Shippori Mincho heading, subtitle, back link
- **Filter bar**: sticky (top: 64px), bg `--bg-warm`. Buttons: All / Web Apps / Dev Tools / Experiments. Active: `--hanada` bg + white text. JS filters cards by `data-type` attribute.
- **Grid**: `grid-template-columns: repeat(3, 1fr)`, gap 3px, padding 56px
- Cards: same pattern as home projects but slightly smaller (padding 36px). Featured badge: `--yamabuki` bg, absolute top-right.
- Same 3D tilt interaction on hover
- JS reveal animations (IntersectionObserver, fade + translateY)

---

### 3. Project Detail — `Project Detail.html`

**Purpose:** Full case study for a single project.

**Sections:**
- **Project Hero**: dark bg, 2-col grid (title/description left, meta card right). Shippori Mincho display title. Meta card: role, timeline, stack tags, key stat
- **Screenshot area**: large 16:9 main mockup + 3 thumbnail row
- **Impact Metrics**: 4-col grid on `--hanada` bg. Metric numbers: Shippori Mincho 64px, white. Labels: 13px, rgba white 55%
- **Body Content**: 2-col grid with Problem / Approach sections, pull quote with left border
- **Tech Architecture**: 3-col card grid, each with top accent bar (different color per layer: Frontend/Backend/Infra)
- **Project Nav**: dark bg, 2-col prev/next links

---

## Interactions & Animations

### Scroll Reveals
All content sections use `IntersectionObserver` (threshold 0.10). Elements start at `opacity: 0; transform: translateY(32px)` and transition to visible with `cubic-bezier(.22,1,.36,1)` at 0.7s. Skill tags stagger with 45ms delay increments.

### Reading Progress Bar
Fixed 2px bar at `top: 64px` (below nav), color `--yamabuki`. Width updates on scroll: `scrollY / (scrollHeight - innerHeight) * 100%`.

### Hero Parallax
Hero content translates Y at 0.25× scroll rate and fades out. Only active while `scrollY < 65vh`.

### 3D Card Tilt
On `mousemove` over project cards:
```js
const x = (e.clientX - rect.left) / rect.width - 0.5;
const y = (e.clientY - rect.top) / rect.height - 0.5;
card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateZ(8px)`;
card.style.boxShadow = `${-x * 18}px ${-y * 18}px 36px rgba(primary,.1)`;
```
Resets to default on `mouseleave`.

### Experience Tabs
Click sidebar item → adds `active` class to matching entry (opacity 1) and removes from others (opacity 0.4). Dot color transitions to `--yamabuki`.

### Status Dot Animation
`@keyframes pulse-dot` — opacity oscillates 1 → 0.4 → 1 over 2s ease-in-out.

---

## Design Tokens

```css
/* Forest + Amber Palette */
--hanada:   #1d5c3a;   /* Deep forest green — primary, headers, links */
--yamabuki: #d4a020;   /* Warm amber gold — accents, CTAs, highlights */
--tokiwa:   #2a7a5a;   /* Mid evergreen — secondary accent */
--bg:       #f4f2eb;   /* Warm off-white — page background */
--bg-warm:  #e6e2d4;   /* Slightly warmer off-white — alternate sections */
--ink:      #131a14;   /* Near-black with green tint — primary text */
--ink-mid:  #445048;   /* Mid grey-green — body text */
--ink-soft: #889088;   /* Soft grey-green — labels, captions */
--hero-bg:  #0c1410;   /* Very dark green-black — hero background */

/* Typography */
--ff-display: 'Shippori Mincho', serif;   /* Hero name, section numbers, stats */
--ff-serif:   'DM Serif Display', serif;  /* Section headings, roles, pull quotes */
--ff-sans:    'DM Sans', sans-serif;      /* Body text, labels, UI elements */

/* Spacing */
--section-pad: 100px 56px;
--nav-height: 64px;

/* Borders */
--border-subtle: 1px solid rgba(29,92,58,.10);
--border-accent: 3px solid var(--yamabuki);

/* Border radius */
--radius-sm: 2px;   /* Buttons, tags */
--radius-md: 3px;   /* Cards, portrait */

/* Transitions */
--ease-out-expo: cubic-bezier(.22,1,.36,1);
--duration-reveal: 0.7s;
```

---

## Google Fonts
Load these from Google Fonts (all used in the design):
```
Shippori Mincho: weights 400, 500, 700, 800
DM Serif Display: regular + italic
DM Sans: weights 300, 400, 500, 600 + italic
```

---

## Assets & Placeholders
The following placeholder areas exist in the design — replace with real assets:
- **Portrait photo**: 160×160px square, border-radius 3px (About sidebar)
- **Project screenshots**: 16:9 ratio for featured card mockup; 16:10 for smaller cards
- **Project detail main screenshot**: 16:9
- **Project detail thumbnails**: 3× 16:10

---

## Files in This Package
| File | Description |
|---|---|
| `Portfolio.html` | Home page — hero, about, experience, featured projects, contact |
| `All Projects.html` | Full project grid with category filter |
| `Project Detail.html` | Single project case study (Finance Dashboard as example) |

Open each file directly in a browser to see the live design. All styles are inline — no external CSS dependencies beyond Google Fonts.

---

## Notes for Claude Code

- The `setExp(idx, el)` function drives the experience tab switcher — replicate this interaction in your framework's state system
- Palette switching (4 presets) is wired in the Tweaks panel — the **Forest + Amber** palette is the chosen default, locked into CSS variables
- The page navigation between the three HTML files uses relative links — wire these to your router
- All project data (titles, descriptions, tech stack, links) is placeholder — replace with real project data from your content source
- The `about-sidebar` right column contains placeholder availability/location info — make these editable or driven by a config object
