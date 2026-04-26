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

      <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-ink-soft mb-3.5">
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

      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr' }}>
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
                  className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-200 ${
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
