'use client'

import { motion } from 'framer-motion'
import { personal, stats, skills } from '@/data/portfolio'

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

const categoryColor: Record<string, string> = {
  Frontend: 'bg-[rgba(27,85,166,0.08)] text-hanada',
  Backend:  'bg-[rgba(0,113,74,0.08)] text-tokiwa',
  Infra:    'bg-[rgba(212,160,32,0.12)] text-[#9a6800]',
  Other:    'bg-[rgba(27,85,166,0.08)] text-ink-soft',
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-14 py-[100px] border-t border-[rgba(29,92,58,0.18)]"
      style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '80px', alignItems: 'start' }}
    >
      {/* Section number */}
      <span className="font-shippori font-extrabold text-[120px] leading-none text-[rgba(29,92,58,0.09)] absolute top-[-20px] left-10 pointer-events-none select-none">
        01
      </span>

      {/* Main content */}
      <div>
        <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-tokiwa mb-3.5">
          <span className="w-5 h-px bg-current inline-block" />
          About Me
        </div>

        <motion.h2
          className="font-serif text-ink mb-14"
          style={{ fontSize: 'clamp(34px, 3.8vw, 54px)', lineHeight: 1.1 }}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          Precision in<br />every layer.
        </motion.h2>

        <motion.blockquote
          className="font-serif italic text-[21px] text-ink leading-[1.5] border-l-[3px] border-hanada pl-5 mb-10"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.12 }}
        >
          &ldquo;The best software is invisible &mdash; it just works, beautifully.&rdquo;
        </motion.blockquote>

        <motion.p
          className="text-[16px] leading-[1.85] text-ink-mid mb-7"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.22 }}
        >
          I&apos;m a <strong className="text-ink font-semibold">full stack developer</strong> with experience building production web applications. I care deeply about both the architecture that powers an application and the interface people interact with.
        </motion.p>

        <motion.div
          className="flex gap-10 mb-10"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.34 }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-shippori font-extrabold text-[52px] text-tokiwa leading-none">{s.number}</div>
              <div className="text-[12px] text-ink-soft tracking-[0.06em] mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.34 }}
        >
          {skills.map((group) => (
            <div key={group.category} className="mb-5">
              <div className="text-[10px] tracking-[0.15em] uppercase text-ink-soft mb-2">{group.category}</div>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
              >
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={reveal}
                    className={`text-[12px] font-medium px-3 py-[5px] rounded-sm ${categoryColor[group.category] ?? categoryColor.Other}`}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Sidebar */}
      <motion.div
        className="flex flex-col pt-20"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Portrait placeholder */}
        <div className="relative w-40 h-40 bg-bg-warm border border-dashed border-[rgba(29,92,58,0.20)] rounded-md mb-6 overflow-hidden flex items-center justify-center flex-shrink-0">
          <div
            className="absolute inset-0"
            style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(29,92,58,0.04) 18px, rgba(29,92,58,0.04) 19px)' }}
          />
          <span className="relative z-10 text-[10px] font-mono text-ink-soft text-center leading-[1.6]">[ portrait ]<br />160&times;160</span>
        </div>

        {/* Info rows */}
        {[
          { label: 'Status', value: personal.availability, dot: true },
          { label: 'Location', value: personal.location },
          { label: 'Timezone', value: personal.timezone },
          { label: 'Open to', value: 'Full-time · Contract · Remote' },
        ].map((row, i) => (
          <div
            key={row.label}
            className={`py-3.5 flex flex-col gap-[3px] border-b border-[rgba(29,92,58,0.12)] ${i === 0 ? 'border-t border-[rgba(29,92,58,0.12)]' : ''}`}
          >
            <div className="text-[9px] tracking-[0.2em] uppercase text-ink-soft">{row.label}</div>
            <div className="text-[14px] text-ink font-medium flex items-center">
              {row.dot && (
                <span
                  className="inline-block w-[7px] h-[7px] rounded-full bg-tokiwa mr-1.5 flex-shrink-0"
                  style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
                />
              )}
              {row.value}
            </div>
          </div>
        ))}

        {/* Quick links */}
        <div className="flex flex-col gap-2.5 mt-5">
          {[
            { label: 'GitHub', href: personal.github },
            { label: 'LinkedIn', href: personal.linkedin },
            { label: 'Resume', href: personal.resumeUrl },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-semibold tracking-[0.1em] uppercase text-hanada flex items-center justify-between border-b border-[rgba(29,92,58,0.18)] pb-2.5 hover:text-yamabuki transition-colors"
            >
              <span>{link.label}</span><span>&#8599;</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
