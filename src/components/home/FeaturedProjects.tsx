'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/portfolio'
import type { Project } from '@/types'

const accentColors = ['bg-hanada', 'bg-tokiwa', 'bg-yamabuki']

function ProjectCard({
  project,
  index,
  wide = false,
}: {
  project: Project
  index: number
  wide?: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const r = card.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateZ(8px)`
    card.style.boxShadow = `${-x * 18}px ${-y * 18}px 36px rgba(29,92,58,0.1)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = ''
    card.style.boxShadow = ''
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      className={`relative bg-bg hover:bg-white transition-colors p-11 overflow-hidden cursor-default [transform-style:preserve-3d] will-change-transform ${
        wide ? 'col-span-2' : ''
      }`}
      style={wide ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' } : {}}
    >
      {/* Left accent bar */}
      <div className={`absolute top-0 left-0 w-1 h-full ${accentColors[index % accentColors.length]}`} />

      <div>
        <div className="text-[11px] tracking-[0.16em] uppercase text-ink-soft mb-[18px] font-medium">
          {String(index + 1).padStart(2, '0')}{wide ? ' — Featured' : ''}
        </div>
        <h3 className={`font-serif text-ink mb-3 leading-[1.2] ${wide ? 'text-[34px]' : 'text-[26px]'}`}>
          {project.title}
        </h3>
        <p className="text-[14px] leading-[1.8] text-ink-mid mb-[22px]">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-7">
          {project.tech.map((t) => (
            <span key={t} className="text-[11px] px-2.5 py-1 rounded-sm bg-[rgba(29,92,58,0.09)] text-hanada font-medium tracking-[0.05em]">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-5">
          {project.detail && (
            <Link
              href={`/projects/${project.slug}`}
              className="text-[11px] font-semibold tracking-[0.14em] uppercase text-tokiwa border-b border-current pb-px hover:text-yamabuki hover:border-yamabuki transition-colors"
            >
              Case Study
            </Link>
          )}
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold tracking-[0.14em] uppercase text-tokiwa border-b border-current pb-px hover:text-yamabuki hover:border-yamabuki transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {wide && (
        <div className="aspect-[16/10] bg-bg-warm border border-dashed border-[rgba(29,92,58,0.18)] flex items-center justify-center relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: 'repeating-linear-gradient(-45deg, transparent, transparent 16px, rgba(29,92,58,0.04) 16px, rgba(29,92,58,0.04) 17px)' }}
          />
          <span className="relative z-10 text-[11px] font-mono text-ink-soft text-center leading-[1.6]">[ screenshot ]<br />16:10</span>
        </div>
      )}
    </motion.div>
  )
}

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const displayProjects = featuredProjects.length > 0 ? featuredProjects.slice(0, 3) : projects.slice(0, 3)
  const [first, ...rest] = displayProjects

  return (
    <section id="projects" className="relative bg-bg-warm px-14 py-[100px] border-t border-[rgba(29,92,58,0.15)] overflow-hidden">
      <span className="font-shippori font-extrabold text-[120px] leading-none text-[rgba(29,92,58,0.09)] absolute top-[-20px] left-10 pointer-events-none select-none">
        03
      </span>

      <div className="flex items-end justify-between mb-14">
        <div>
          <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-tokiwa mb-3.5">
            <span className="w-5 h-px bg-current inline-block" />
            Featured Projects
          </div>
          <motion.h2
            className="font-serif text-ink"
            style={{ fontSize: 'clamp(34px, 3.8vw, 54px)', lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Selected work.
          </motion.h2>
        </div>
        <Link
          href="/projects"
          className="text-[12px] font-semibold tracking-[0.12em] uppercase text-tokiwa border-b border-current pb-0.5 mb-1.5 hover:text-yamabuki hover:border-yamabuki transition-colors whitespace-nowrap"
        >
          All Projects →
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }}>
        {first && <ProjectCard project={first} index={0} wide />}
        {rest.slice(0, 2).map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i + 1} />
        ))}
      </div>
    </section>
  )
}
