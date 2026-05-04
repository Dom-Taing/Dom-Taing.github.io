# Dom Taing — Portfolio V2

Personal developer portfolio built with Next.js 16, Tailwind CSS v4, and Framer Motion. Statically exported and deployed to GitHub Pages.

**Live site:** [dom-taing.github.io](https://dom-taing.github.io)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Language | TypeScript |
| Fonts | Shippori Mincho · DM Serif Display · DM Sans (Google Fonts) |
| Deploy | GitHub Pages via GitHub Actions |

---

## Prerequisites

Make sure the following are installed before you begin.

### Node.js

This project requires **Node.js 18 or higher** (Node 20 LTS recommended).

Check your version:

```bash
node --version
```

If you need to install or upgrade Node.js, the recommended way is via [nvm](https://github.com/nvm-sh/nvm):

```bash
# Install nvm (if you don't have it)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Restart your terminal, then install and use Node 20
nvm install 20
nvm use 20
```

Alternatively, download directly from [nodejs.org](https://nodejs.org).

### npm

npm ships with Node.js. Confirm it's available:

```bash
npm --version
```

npm 9 or higher is recommended. Upgrade if needed:

```bash
npm install -g npm@latest
```

### Git

```bash
git --version
```

If Git is not installed, download it from [git-scm.com](https://git-scm.com).

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Dom-Taing/PortfolioV2.git
cd PortfolioV2
```

### 2. Install dependencies

```bash
npm install
```

This installs all dependencies listed in `package.json`, including Next.js, Tailwind CSS v4, Framer Motion, and the TypeScript toolchain.

> **Note:** The project has both a `package-lock.json` and a `pnpm-lock.yaml` present. Use `npm install` (not `pnpm install`) to keep the lock files consistent unless you intentionally switch package managers.

---

## Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads automatically as you edit source files.

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server on port 3000 |
| `npm run build` | Build the site and export static files to `/out` |
| `npm run start` | Serve the production build locally (requires `npm run build` first) |
| `npm run lint` | Run ESLint across the codebase |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — Nav, Footer, fonts
│   ├── page.tsx            # Home page (Hero, About, Experience, Projects, Contact)
│   ├── globals.css         # Tailwind theme, CSS custom properties, keyframes
│   └── projects/
│       ├── page.tsx        # All Projects listing page
│       └── [slug]/
│           └── page.tsx    # Project detail / case study page
├── components/
│   ├── Nav.tsx             # Fixed navigation bar with mobile hamburger menu
│   ├── Footer.tsx
│   ├── ProgressBar.tsx     # Scroll progress indicator
│   ├── home/               # Home page section components
│   ├── projects/           # All Projects page components (grid, filter, card)
│   └── project-detail/     # Project detail page components
├── data/
│   └── portfolio.ts        # All content — personal info, experience, projects
└── types/
    └── index.ts            # Shared TypeScript types
public/                     # Static assets (images, videos, resume PDF)
```

### Adding or editing content

All site content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). To update:

- **Personal info / links / email** — edit the `personal` object at the top of the file
- **Work experience** — edit the `experience` array
- **Projects** — edit the `projects` array; set `hidden: true` on a project to exclude it from the listing and navigation
- **Skills / stats** — edit the `skills` and `stats` arrays

### Adding project images

Place image files in `public/` (e.g., `public/my-project/screenshot.png`) and reference them in `portfolio.ts` as `/my-project/screenshot.png`.

---

## Building for Production

The site uses Next.js static export (`output: "export"`), which generates a fully static site in the `/out` directory.

```bash
npm run build
```

After the build completes, the `/out` directory contains plain HTML, CSS, and JS files that can be served from any static host.

To preview the production build locally:

```bash
npm run start
```

---

## Deployment (GitHub Pages)

Deployment is automated via GitHub Actions. Every push to the `main` branch triggers the workflow at `.github/workflows/`:

1. Checks out the code
2. Installs dependencies with `npm ci`
3. Runs `npm run build` to produce the `/out` static export
4. Uploads `/out` as a GitHub Pages artifact and deploys it

No manual deployment steps are needed — merge to `main` and the site updates automatically within ~1–2 minutes.

To trigger a deploy without a code change, go to **Actions → Deploy to GitHub Pages → Run workflow** on GitHub.

---

## Responsive Breakpoints

The site is designed for three breakpoints defined in `globals.css`:

| Name | Width | Tailwind prefix |
|---|---|---|
| Desktop | > 1024px | (default) |
| Tablet | ≤ 1024px | `max-lg:` |
| Mobile | ≤ 680px | `max-mobile:` |
| Small mobile | ≤ 380px | `max-xs:` |

The project uses **mobile-first** column overrides (`grid-cols-1` base, scale up with `mobile:` and `lg:` prefixes) and **max-width** overrides for spacing and visibility.

---

## License

MIT
