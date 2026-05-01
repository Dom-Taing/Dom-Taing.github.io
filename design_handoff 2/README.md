# Handoff: Alex Chen — Portfolio Website (v2, Forest + Amber)

## Overview

This is a two-page personal portfolio website for a full stack developer. The design was iterated on from a previous version (v1, "Indigo + Gold") and is now in a **Forest + Amber** color palette with stronger green usage throughout. The files in this bundle are **high-fidelity HTML design references** — not production code. Your task is to recreate these designs in your target codebase (React, Next.js, etc.) using its established patterns and component library.

---

## ⚡ What Changed from v1 — Key Deltas

This section is the most important part of this handoff. The previous Claude Code implementation was based on the v1 design. Here is **every meaningful change** made in v2:

### 1. Color Palette — Full Swap to Forest + Amber

The entire palette shifted from indigo-blue to forest green as the dominant hue.

| Token | v1 (Indigo) | v2 (Forest) |
|---|---|---|
| `--hanada` (primary) | `#1b55a6` (indigo blue) | `#1d5c3a` (forest green) |
| `--yamabuki` (accent) | `#f5a623` (bright gold) | `#d4a020` (amber gold) |
| `--tokiwa` (secondary) | `#00714a` (teal green) | `#2a7a5a` (mid forest) |
| `--bg` | `#f7f4ec` | `#f4f2eb` |
| `--bg-warm` | `#ede9db` | `#e6e2d4` |
| `--ink` | `#141220` | `#131a14` |
| `--ink-mid` | `#49465e` | `#445048` |
| `--ink-soft` | `#8c89a2` | `#889088` |
| `--hero-bg` | `#0e0c1a` (near-black purple) | `#0c1410` (near-black green) |

### 2. Navigation

- **Background**: Changed from `rgba(14,12,26,.85)` (dark purple) → `rgba(12,20,14,.92)` (dark green)
- **Border**: Changed from `rgba(255,255,255,.06)` → `rgba(45,120,74,.18)` (visible green tint)
- **Logo dot color**: Changed from `--yamabuki` (gold) → `--tokiwa` (lighter green)
- **Contact CTA button**: Changed from gold fill (`--yamabuki` bg, dark text) → forest green fill (`--hanada` bg, white text) with a `--tokiwa` border. Hover: `--tokiwa`.

### 3. Progress Bar

- Changed from solid `--yamabuki` → `linear-gradient(to right, --hanada, --tokiwa)` (green-to-green gradient)

### 4. Hero Section

- **Decorative circle 3** (right side): Background changed from blue (`rgba(27,85,166,.07)`) → green (`rgba(29,92,58,.12)`). Border changed to `rgba(42,122,90,.25)`.
- **Accent line** (bottom of hero): Changed from `--yamabuki` only → `linear-gradient(to right, --hanada 0%, --tokiwa 40%, transparent 70%)` — a green-to-green fade.
- **Hero drop animation**: Staggered drop-in animation added to all hero text elements (eyebrow, name line 1, name line 2, role, actions). Each `.hero-drop` wrapper clips overflow; inner `.hero-drop-inner` animates from `translateY(-110%)` + `opacity:0` to resting state using `cubic-bezier(0.22, 1, 0.36, 1)` over `0.75s`. Delays: eyebrow `0.05s`, name line 1 `0.2s`, name line 2 `0.35s`, role `0.52s`, actions `0.65s`.

### 5. Section Labels (`.s-label`)

- Color changed from `--ink-soft` (muted grey) → `--tokiwa` (forest green). These appear before every section heading.

### 6. Section Number Watermarks (`.section-num`)

- Color changed from `rgba(27,85,166,.06)` (faint blue) → `rgba(29,92,58,.09)` (faint green)

### 7. About Section

- **Section border-top**: `rgba(27,85,166,.10)` → `rgba(29,92,58,.18)` (green, more visible)
- **Pull quote border**: Left border color changed from `--yamabuki` (gold) → `--hanada` (forest green)
- **Stat numbers** (6+, 40+, 12): Color changed from `--hanada` (was blue) → `--tokiwa` (mid-forest green)
- **Info item borders**: `rgba(27,85,166,.08)` → `rgba(29,92,58,.12)`
- **Quick links borders**: `rgba(27,85,166,.12)` → `rgba(29,92,58,.18)`

### 8. Experience Section

- **Border-top**: `rgba(27,85,166,.08)` → `rgba(29,92,58,.15)`
- **Active nav dot**: Changed from `--yamabuki` (gold) → `--hanada` (forest green)
- **Inactive nav dot**: `rgba(27,85,166,.2)` → `rgba(29,92,58,.25)`
- **Entry border-left**: Changed from `1px solid rgba(27,85,166,.10)` → `2px solid rgba(29,92,58,.2)` (thicker, green)
- **Exp tags**: Border `rgba(27,85,166,.15)` → `rgba(29,92,58,.2)`. Text color changed from `--ink-mid` (grey) → `--hanada` (forest green).

### 9. Projects Section (Homepage)

- **Section border-top**: Blue → `rgba(29,92,58,.15)`
- **"All Projects →" link**: Color changed from `--hanada` (was blue) → `--tokiwa`
- **Project links (`.plink`)**: Color changed from `--hanada` → `--tokiwa`
- **Tech tags (`.ptag`)**: Background changed from `rgba(27,85,166,.08)` → `rgba(29,92,58,.09)`
- **Accent bars on project cards**: `.acc-g` previously was `--yamabuki` (gold), now `--tokiwa` (green). `.acc-t` previously `--tokiwa`, now `--yamabuki`.

### 10. Footer

- **All Projects page only**: Added `border-top: 2px solid rgba(29,92,58,.3)` — a visible green top border. Homepage footer unchanged.
- **Font**: Changed from `Syne` (All Projects page v1) → `Shippori Mincho` (matching homepage)

### 11. All Projects Page — Full Redesign

The previous All Projects page used a completely different design system (Bebas Neue + Syne fonts, indigo palette). v2 fully aligns it with the homepage:

- **Fonts**: Bebas Neue + Syne → Shippori Mincho + DM Serif Display + DM Sans
- **Page header**: Replaced generic dark header with hero-matched dark green background (`--hero-bg`), dot-grid overlay, forest green ambient glow (radial gradient bottom-left), green accent line at bottom
- **Header eyebrow**: Added `--tokiwa` colored label with line prefix (matching `.s-label` pattern)
- **Header title**: Switched to Shippori Mincho 800 weight, `clamp(64px, 9vw, 128px)`, with "Projects." in `--yamabuki`
- **Header subtitle**: Now uses DM Serif Display italic
- **Drop-in animation**: Added to page header (same mechanism as homepage hero — 4 staggered elements)
- **Filter bar**: Border changed to `rgba(29,92,58,.15)`. Label color → `--tokiwa`. Active filter → `--hanada` green fill. Hover → green border/text.
- **Project cards**: 
  - Accent bar moved from left side (4px wide, full height) → top (full width, 3px tall)
  - Card type label → `--tokiwa`
  - Card number → Shippori Mincho, `rgba(29,92,58,.3)`
  - Card title → DM Serif Display (was Syne)
  - Tags background → `rgba(29,92,58,.09)`, text → `--hanada`
  - Links → `--tokiwa`, hover → `--yamabuki`
  - Featured badge → `--hanada` green fill, white text (was gold fill, dark text)
  - Tilt shadow → `rgba(29,92,58,.1)` (green tint, was blue)
- **Reveal animation**: Staggered with 60ms delay per card
- **"Back Home" link**: Styled with underline border, uppercase tracking
- **Progress bar**: Added (was missing in v1)
- **Nav**: Fully aligned with homepage nav (dark green bg, green border, green CTA button)

---

## Screens / Views

### 1. Portfolio.html — Homepage

Single-page with 5 sections + fixed nav + footer.

**Fixed Nav** (`height: 64px`)
- Background: `rgba(12,20,14,.92)` + `backdrop-filter: blur(16px)`
- Border-bottom: `1px solid rgba(45,120,74,.18)`
- Logo: Shippori Mincho 700, 18px, white. Dot accent: `--tokiwa` (`#2a7a5a`)
- Nav links: DM Sans 500, 12px, `letter-spacing: .12em`, uppercase, `rgba(255,255,255,.5)` → white on hover
- Contact CTA: `--hanada` bg (`#1d5c3a`), white text, `1px solid --tokiwa` border, border-radius 2px. Hover: `--tokiwa` bg.

**Hero** (`height: 65vh`, min 480px)
- Background: `#0c1410`
- Dot grid overlay: `radial-gradient` 1px dots at `rgba(255,255,255,.045)`, 32px grid
- Decorative circles (right side): 680px, 460px, 260px — concentric, right-anchored, centered vertically
- Content pinned to bottom-left: `padding: 0 56px 52px`
- Eyebrow: DM Sans 500, 11px, `letter-spacing: .22em`, uppercase, `--yamabuki`
- Name: Shippori Mincho 800, `clamp(56px, 8vw, 120px)`, `line-height: .95`, white. "Chen." in `--yamabuki`
- Role: DM Serif Display italic, `clamp(15px, 1.4vw, 19px)`, `rgba(255,255,255,.55)`. `<em>` tags: `rgba(255,255,255,.85)`, non-italic
- CTA buttons: Primary = `--yamabuki` fill, `--ink` text, 14px 36px padding, 700 weight, uppercase 12px. Outline = underline only, muted white.
- Scroll hint: vertical text + animated line, absolute bottom-right
- Bottom accent: 3px gradient line, `--hanada` → `--tokiwa` → transparent
- **Drop-in animation**: All text elements slide down from above. See animation details in delta section above.
- **Parallax**: On scroll, hero content translates `scrollY * 0.25px` downward and fades out by `scrollY / (innerHeight * 0.6)`

**About** (`padding: 100px 56px`)
- 2-column grid: `1fr 300px`, gap 80px
- Section number watermark: Shippori Mincho 800, 120px, `rgba(29,92,58,.09)`, absolute top-left
- Section label: 10px uppercase `--tokiwa` with 20px line prefix
- Heading: DM Serif Display, `clamp(34px, 3.8vw, 54px)`
- Pull quote: DM Serif Display italic 21px, `3px solid --hanada` left border, 20px padding-left
- Body: DM Sans 16px, `line-height: 1.85`, `--ink-mid`
- Stats row: 3 numbers in Shippori Mincho 800 52px `--tokiwa`, labels in 12px `--ink-soft`
- Skill tags: 3 groups (Frontend/Backend/Infra), `border-radius: 2px`, stagger-revealed on scroll
- Sidebar (300px): portrait placeholder, info rows with green borders, quick links

**Experience** (`padding: 100px 56px`)
- 2-column grid: `280px 1fr`
- Left: sticky nav list with dot indicators. Active dot: `--hanada` fill. Inactive: `rgba(29,92,58,.25)`
- Right: entries separated by `2px solid rgba(29,92,58,.2)` left border, 56px padding-left
- Active entry: `opacity: 1`. Inactive: `opacity: 0.4`, `transition: opacity .4s`
- Period label: `--yamabuki` uppercase 11px
- Role title: DM Serif Display 28px
- Tags: `1px solid rgba(29,92,58,.2)` border, `--hanada` text

**Featured Projects** (`padding: 100px 56px`, background `--bg-warm`)
- 2-column grid with first card spanning full width (`grid-column: span 2`)
- Wide card: 2-column inner grid with content + mockup placeholder
- Cards: `--bg` background → white on hover, 3D tilt on mousemove (`perspective: 900px`, max `rotateY: 10deg`, `rotateX: 8deg`)
- Left accent bar: 4px wide, full height. Colors: `--hanada` / `--tokiwa` / `--yamabuki`
- Tech tags: `rgba(29,92,58,.09)` bg, `--hanada` text
- Links: `--tokiwa` with underline, hover → `--yamabuki`

**Contact** (`padding: 100px 56px`, background `--hanada`)
- 2-column grid: `1fr 1fr`, gap 80px
- Dot grid overlay on dark green
- Left: label, large heading (DM Serif Display `clamp(34px, 4vw, 56px)` white), subtext, gold CTA button
- Right: list of contact links with `↗` arrows, `rgba(255,255,255,.1)` dividers
- Watermark: "HELLO." Shippori Mincho 800, `rgba(255,255,255,.05)`, absolute bottom-right

**Footer**
- Background: `--ink` (`#131a14`)
- Logo: Shippori Mincho 700 15px, `rgba(255,255,255,.35)`
- Three colored dots: `--hanada`, `--yamabuki`, `--tokiwa`

---

### 2. All Projects.html — Projects Grid Page

**Page Header** (replaces old generic dark header)
- Background: `--hero-bg` (`#0c1410`)
- Dot grid + forest green radial glow bottom-left (`rgba(29,92,58,.18)`)
- Padding: `140px 56px 72px`
- Eyebrow: `--tokiwa`, 10px uppercase, line prefix
- Title: Shippori Mincho 800, `clamp(64px, 9vw, 128px)`, "Projects." in `--yamabuki`
- Subtitle: DM Serif Display italic, `rgba(255,255,255,.45)`
- Back link: absolute top-right, underlined, uppercase 11px
- Drop-in animation: 4 elements, same mechanism as homepage
- Bottom accent line: 3px, `--hanada` → `--tokiwa` gradient

**Filter Bar** (sticky at `top: 64px`)
- Background: `--bg-warm`
- Border-bottom: `rgba(29,92,58,.15)`
- Label: `--tokiwa` 10px uppercase
- Buttons: 2px border-radius, `rgba(29,92,58,.2)` border default. Active: `--hanada` fill, white text.
- JS filter: toggles `.hidden` (`display: none`) on cards by `data-type` attribute

**Projects Grid**
- `padding: 56px 56px 100px`
- `grid-template-columns: repeat(3, 1fr)`, `gap: 3px`
- 9 cards total: 3 Featured (web, tool, web), 6 standard

**Project Card**
- Background: `--bg-warm` → white on hover
- Top accent bar: full width, 3px tall (not left side). Colors: `--hanada` / `--tokiwa` / `--yamabuki`
- Featured badge: absolute top-right, `--hanada` bg, white text, 2px border-radius
- Card type: `--tokiwa` 9px uppercase
- Number: Shippori Mincho, `rgba(29,92,58,.3)`
- Title: DM Serif Display 22px
- Description: DM Sans 13px, `line-height: 1.8`, `--ink-mid`
- Tags: `rgba(29,92,58,.09)` bg, `--hanada` text, 10px
- Links: `--tokiwa` with underline, hover `--yamabuki`
- 3D tilt: same as homepage cards
- Reveal: `IntersectionObserver`, staggered 60ms per card

---

## Design Tokens

```
--hanada:   #1d5c3a   /* Forest green — primary, CTAs, headings */
--yamabuki: #d4a020   /* Amber gold — accent, highlights */
--tokiwa:   #2a7a5a   /* Mid forest — secondary, labels, links */
--bg:       #f4f2eb   /* Warm off-white — main background */
--bg-warm:  #e6e2d4   /* Warmer off-white — cards, filter bar */
--ink:      #131a14   /* Near-black green — body text, footer */
--ink-mid:  #445048   /* Medium green-grey — secondary text */
--ink-soft: #889088   /* Muted green-grey — labels, placeholders */
--hero-bg:  #0c1410   /* Near-black — hero/header backgrounds */
```

## Typography

| Role | Family | Weight | Size |
|---|---|---|---|
| Display / Name | Shippori Mincho | 800 | `clamp(56px, 8vw, 120px)` |
| Section headings | DM Serif Display | 400 | `clamp(34px, 3.8vw, 54px)` |
| Pull quotes | DM Serif Display italic | 400 | 21px |
| Body | DM Sans | 300–500 | 14–16px |
| Labels / eyebrows | DM Sans | 500–600 | 9–12px, uppercase, tracked |
| Nav logo | Shippori Mincho | 700 | 18px |
| Stat numbers | Shippori Mincho | 800 | 52px |

Google Fonts import:
```
Shippori+Mincho:wght@400;500;700;800
DM+Serif+Display:ital@0;1
DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300
```

## Animations

### Hero Drop-In (both pages)
- Mechanism: `.hero-drop` wrapper sets `overflow: hidden`. Inner `.hero-drop-inner` starts at `translateY(-110%) opacity:0`, animates to resting via `@keyframes heroDropIn`.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (spring-like, overshoots slightly)
- Duration: `0.75s`
- Stagger delays per element (homepage): eyebrow `0.05s`, name-1 `0.2s`, name-2 `0.35s`, role `0.52s`, actions `0.65s`

### Scroll Reveal
- `IntersectionObserver` at `threshold: 0.10`
- Elements start `opacity:0, translateY(32px)` → `opacity:1, translateY(0)`
- Transition: `0.7s cubic-bezier(.22,1,.36,1)`
- Delay classes: `reveal-delay-1` (120ms), `reveal-delay-2` (220ms), `reveal-delay-3` (340ms)
- Skill tags: stagger 45ms each via inline `transition-delay`

### Scroll Pulse (hero scroll hint line)
- `@keyframes scroll-pulse`: opacity oscillates `0.25 → 0.7 → 0.25`, `2s ease-in-out infinite`

### Status Dot
- `@keyframes pulse-dot`: opacity `1 → 0.4 → 1`, `2s ease-in-out infinite`

### Hero Parallax (homepage only)
- On scroll: `heroContent.style.transform = translateY(scrollY * 0.25px)`
- Fades out: `opacity = 1 - scrollY / (innerHeight * 0.6)`
- Only active while `scrollY < innerHeight * 0.65`

### 3D Card Tilt
- `mousemove`: `perspective(900px) rotateY(x*10deg) rotateX(-y*8deg) translateZ(8px)`
- Shadow: `rgba(29,92,58,.1)` directional
- `mouseleave`: reset transform + shadow

## Spacing

- Page horizontal padding: `56px`
- Section vertical padding: `100px`
- Nav height: `64px`
- Grid gap (project cards): `3px`
- Card padding: `44px` (homepage) / `40px 36px 36px` (all projects)

## Interactions

- **Experience tabs**: Click nav item → toggle `.active` class on nav items + entries. Active entry `opacity:1`, others `opacity:0.4`.
- **Project filter**: Click filter button → toggle `.hidden` on cards by `data-type`.
- **Progress bar**: `scrollY / (scrollHeight - innerHeight) * 100%`, updated on scroll.
- **Tweaks panel** (homepage only): Palette switcher (4 options) that applies CSS custom property overrides to `:root`.

## Files in This Bundle

| File | Description |
|---|---|
| `Portfolio.html` | Homepage — hero, about, experience, projects, contact |
| `All Projects.html` | Projects grid page — 9 cards with filter |
| `README.md` | This document |

## Assets / External Dependencies

- **Google Fonts**: Shippori Mincho, DM Serif Display, DM Sans (loaded via CDN)
- **No icons**: All decorative elements are pure CSS
- **No images**: Portrait and mockup slots are CSS placeholder boxes — replace with real images
- **No JS libraries**: All JavaScript is vanilla

## Notes for Implementation

1. The portrait placeholder (`160×160`) and project mockup placeholder (`16:10 aspect ratio`) need real images.
2. The "HELLO." contact watermark text should be the developer's actual name or preferred phrase.
3. All `href="#"` links are placeholders — wire to real GitHub, LinkedIn, resume URLs.
4. The `mailto:alex@example.com` in the contact button should be updated.
5. The Tweaks palette switcher on the homepage is a design exploration tool — remove or keep as a user preference toggle in production.
6. `Project Detail.html` is referenced but not included in this handoff — it is a separate page to be designed/implemented separately.
