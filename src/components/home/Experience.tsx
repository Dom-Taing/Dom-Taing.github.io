'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { experience } from '@/data/portfolio'

// The entry whose top has passed this line (fraction of viewport height) wins.
const FOCUS_LINE = 0.38
// Fixed nav is 64px tall; leave a little breathing room above a clicked entry.
const SCROLL_OFFSET = 64 + 28

export default function Experience() {
  const [active, setActive] = useState(0)
  const entryRefs = useRef<(HTMLDivElement | null)[]>([])
  // While the page is animating toward a clicked entry, scroll must not fight the click.
  const locked = useRef(false)
  const unlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const releaseAfterScrollSettles = useCallback(() => {
    if (unlockTimer.current) clearTimeout(unlockTimer.current)
    unlockTimer.current = setTimeout(() => { locked.current = false }, 140)
  }, [])

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      if (locked.current) return

      const line = window.innerHeight * FOCUS_LINE
      let next = 0
      entryRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= line) next = i
      })
      setActive((prev) => (prev === next ? prev : next))
    }

    const onScroll = () => {
      if (locked.current) releaseAfterScrollSettles()
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
      if (unlockTimer.current) clearTimeout(unlockTimer.current)
    }
  }, [releaseAfterScrollSettles])

  const goTo = (i: number) => {
    setActive(i)
    const el = entryRefs.current[i]
    if (!el) return
    locked.current = true
    releaseAfterScrollSettles()
    window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top - SCROLL_OFFSET })
  }

  return (
    <section id="experience" className="relative overflow-hidden px-14 max-lg:px-8 max-mobile:px-5 py-[100px] max-lg:py-20 max-mobile:py-16 bg-bg border-t border-[rgba(29,92,58,0.15)]">
      <span className="font-shippori font-extrabold text-[120px] leading-none text-[rgba(29,92,58,0.09)] absolute top-[-20px] left-10 pointer-events-none select-none max-mobile:hidden">
        02
      </span>

      <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-tokiwa mb-3.5">
        <span className="w-5 h-px bg-current inline-block" />
        Experience
      </div>

      <motion.h2
        className="font-serif text-ink mb-14"
        style={{ fontSize: 'clamp(34px, 3.8vw, 54px)', lineHeight: 1.1 }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        Where I&apos;ve worked.
      </motion.h2>

      <div className="grid grid-cols-1 mobile:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        {/* Sidebar nav — hidden on mobile */}
        <div className="hidden mobile:block">
          <div className="sticky top-20">
            {experience.map((exp, i) => (
              <button
                key={exp.company}
                onClick={() => goTo(i)}
                aria-current={active === i}
                className={`flex items-center gap-3.5 w-full text-left py-3.5 border-b border-[rgba(29,92,58,0.12)] transition-colors ${
                  active === i ? 'text-hanada' : 'text-ink-soft hover:text-hanada'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-200 ${
                    active === i ? 'bg-hanada' : 'bg-[rgba(29,92,58,0.25)]'
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
        <div className="border-t-2 border-[rgba(29,92,58,0.2)] pt-8 mobile:border-t-0 mobile:border-l-2 mobile:pt-0 mobile:pl-9 lg:pl-14">
          {experience.map((exp, i) => (
            <div
              key={exp.company}
              ref={(el) => { entryRefs.current[i] = el }}
              className={`transition-opacity duration-[400ms] ${
                active === i ? 'opacity-100' : 'opacity-100 mobile:opacity-40'
              } pb-10 border-b border-[rgba(29,92,58,0.12)] last:border-b-0 last:pb-0 mobile:pb-[72px] mobile:border-b-0`}
            >
              <div className="text-[11px] tracking-[0.14em] uppercase text-yamabuki font-semibold mb-1.5">{exp.period}</div>
              <div className="text-[13px] text-ink-soft mb-5">{exp.company}</div>
              <div className="font-serif text-[28px] max-mobile:text-[22px] text-ink mb-3.5 leading-[1.2]">{exp.role}</div>
              <p className="text-[15px] leading-[1.8] text-ink-mid mb-5">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="text-[11px] px-2.5 py-1 rounded-sm border border-[rgba(29,92,58,0.2)] text-hanada tracking-[0.05em]">
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
