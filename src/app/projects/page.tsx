'use client'

import { motion } from 'framer-motion'
import ProjectGrid from '@/components/projects/ProjectGrid'

const dropIn = (delay: number) => ({
  initial: { y: '-110%', opacity: 0 },
  animate: { y: '0%', opacity: 1 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const, delay },
})

export default function ProjectsPage() {
  return (
    <main className="bg-bg pt-16">
      {/* Page header */}
      <div className="relative px-14 pb-[72px] pt-[140px] bg-hero-bg overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Forest green radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 600px 400px at 0% 100%, rgba(29,92,58,0.18), transparent)' }}
        />
        {/* Bottom accent line */}
        <div
          className="absolute left-0 bottom-0 w-full h-[3px] pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--hanada) 0%, var(--tokiwa) 40%, transparent 70%)' }}
        />

        {/* Back link */}
        <a
          href="/"
          className="absolute top-[84px] right-14 z-10 text-[11px] font-semibold tracking-[0.12em] uppercase text-white/40 hover:text-white transition-colors border-b border-white/20 pb-px"
        >
          ← Back Home
        </a>

        {/* Eyebrow */}
        <div className="overflow-hidden mb-4 relative z-10">
          <motion.div
            className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-tokiwa"
            {...dropIn(0.05)}
          >
            <span className="w-5 h-px bg-current inline-block" />
            Work
          </motion.div>
        </div>

        {/* Title */}
        <div className="overflow-hidden relative z-10">
          <motion.h1
            className="font-shippori font-extrabold text-white leading-[0.92] tracking-[0.02em]"
            style={{ fontSize: 'clamp(64px, 9vw, 128px)' }}
            {...dropIn(0.2)}
          >
            All <span className="text-yamabuki">Projects.</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden relative z-10 mt-5">
          <motion.p
            className="font-serif italic text-white/45"
            style={{ fontSize: 'clamp(15px, 1.4vw, 19px)' }}
            {...dropIn(0.35)}
          >
            A full list of things I&apos;ve built — web apps, tools, experiments, and more.
          </motion.p>
        </div>
      </div>

      <ProjectGrid />
      <div className="border-t-2 border-[rgba(29,92,58,0.3)]" />
    </main>
  )
}
