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

      {/* Concentric circles + accent line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full border border-white/[0.06]" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-white/[0.04]" />
        <div className="absolute right-[200px] top-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full bg-[rgba(27,85,166,0.07)] border border-[rgba(27,85,166,0.15)]" />
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
          className="w-px h-12"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)',
            animation: 'scroll-pulse 2s ease-in-out infinite',
          }}
        />
        <span>Scroll</span>
      </div>
    </section>
  )
}
