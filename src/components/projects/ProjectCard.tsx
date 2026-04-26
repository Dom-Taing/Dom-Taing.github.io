'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Project } from '@/types'

const accentColors = ['bg-hanada', 'bg-yamabuki', 'bg-tokiwa', 'bg-hanada', 'bg-tokiwa', 'bg-yamabuki']

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const r = card.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateZ(8px)`
    card.style.boxShadow = `${-x * 18}px ${-y * 18}px 36px rgba(27,85,166,0.1)`
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
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.1 }}
      className="relative bg-bg-warm hover:bg-white transition-colors p-9 overflow-hidden cursor-default [transform-style:preserve-3d]"
    >
      {project.featured && (
        <div className="absolute top-4 right-4 bg-yamabuki text-ink text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-sm">
          Featured
        </div>
      )}

      <div className={`absolute top-0 left-0 w-1 h-full ${accentColors[index % accentColors.length]}`} />

      <div className="text-[11px] tracking-[0.16em] uppercase text-ink-soft mb-[18px] font-medium">
        {String(index + 1).padStart(2, '0')}
      </div>
      <h3 className="font-serif text-[24px] text-ink mb-3 leading-[1.2]">{project.title}</h3>
      <p className="text-[13px] leading-[1.8] text-ink-mid mb-5">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="text-[11px] px-2.5 py-1 rounded-sm bg-[rgba(27,85,166,0.08)] text-hanada font-medium tracking-[0.05em]">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-5">
        {project.detail && (
          <Link href={`/projects/${project.slug}`}
            className="text-[11px] font-semibold tracking-[0.14em] uppercase text-hanada border-b border-current pb-px hover:text-yamabuki hover:border-yamabuki transition-colors">
            Case Study
          </Link>
        )}
        {project.links.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
            className="text-[11px] font-semibold tracking-[0.14em] uppercase text-hanada border-b border-current pb-px hover:text-yamabuki hover:border-yamabuki transition-colors">
            {link.label}
          </a>
        ))}
      </div>
    </motion.div>
  )
}
