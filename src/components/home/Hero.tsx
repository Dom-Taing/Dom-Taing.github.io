'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { personal } from '@/data/portfolio'

const dropIn = (delay: number) => ({
  initial: { y: '-110%', opacity: 0 },
  animate: { y: '0%', opacity: 1 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const, delay },
})

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
        <div className="absolute right-[200px] top-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full bg-[rgba(29,92,58,0.12)] border border-[rgba(42,122,90,0.25)]" />
        <div
          className="absolute left-0 bottom-0 w-full h-[3px]"
          style={{ background: 'linear-gradient(to right, var(--hanada) 0%, var(--tokiwa) 40%, transparent 70%)' }}
        />
      </div>

      {/* Parallax content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full px-14 pb-[52px]"
      >
        {/* Eyebrow */}
        <div className="overflow-hidden mb-4">
          <motion.div
            className="text-[11px] tracking-[0.22em] uppercase text-yamabuki font-medium"
            {...dropIn(0.05)}
          >
            {personal.title} &nbsp;·&nbsp; {personal.availability}
          </motion.div>
        </div>

        {/* Name line 1 */}
        <div className="overflow-hidden">
          <motion.div
            className="font-shippori font-extrabold text-white leading-[0.95]"
            style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}
            {...dropIn(0.2)}
          >
            {personal.name.split(' ')[0]}
          </motion.div>
        </div>

        {/* Name line 2 */}
        <div className="overflow-hidden mb-2.5">
          <motion.div
            className="font-shippori font-extrabold leading-[0.95]"
            style={{ fontSize: 'clamp(56px, 8vw, 120px)', color: 'var(--yamabuki)' }}
            {...dropIn(0.35)}
          >
            {personal.name.split(' ').slice(1).join(' ')}.
          </motion.div>
        </div>

        {/* Role */}
        <div className="overflow-hidden mb-7">
          <motion.p
            className="font-serif italic text-white/55"
            style={{ fontSize: 'clamp(15px, 1.4vw, 19px)' }}
            {...dropIn(0.52)}
          >
            {personal.tagline}
          </motion.p>
        </div>

        {/* CTAs */}
        <div className="overflow-hidden">
          <motion.div className="flex items-center gap-6" {...dropIn(0.65)}>
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
          </motion.div>
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
