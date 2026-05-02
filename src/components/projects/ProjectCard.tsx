'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import type { Project } from '@/types'

const accentColors = ['bg-hanada', 'bg-tokiwa', 'bg-yamabuki', 'bg-hanada', 'bg-tokiwa', 'bg-yamabuki']

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const outerRef = useRef<HTMLDivElement>(null)
  const tiltRef = useRef<HTMLDivElement>(null)
  const rectRef = useRef<DOMRect | null>(null)
  const router = useRouter()

  const handleMouseEnter = () => {
    rectRef.current = outerRef.current?.getBoundingClientRect() ?? null
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const tilt = tiltRef.current
    const r = rectRef.current
    if (!tilt || !r) return
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    tilt.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateZ(8px)`
    tilt.style.boxShadow = `${-x * 18}px ${-y * 18}px 36px rgba(29,92,58,0.1)`
  }

  const handleMouseLeave = () => {
    const tilt = tiltRef.current
    if (!tilt) return
    tilt.style.transform = ''
    tilt.style.boxShadow = ''
    rectRef.current = null
  }

  return (
    <motion.div
      ref={outerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.06 }}
      onClick={() => router.push(`/projects/${project.slug}`)}
      className="cursor-pointer [transform-style:preserve-3d]"
    >
      <div ref={tiltRef} className="relative bg-bg-warm hover:bg-white transition-colors px-9 pt-10 pb-9 max-mobile:px-6 max-mobile:py-7 max-xs:px-[18px] max-xs:py-[22px] overflow-hidden [transform-style:preserve-3d]">
        {/* Top accent bar */}
        <div className={`absolute top-0 left-0 w-full h-[3px] ${accentColors[index % accentColors.length]}`} />

        {project.featured && (
          <div className="absolute top-4 right-4 bg-hanada text-white text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-sm">
            Featured
          </div>
        )}

        <div className="text-[9px] tracking-[0.18em] uppercase text-tokiwa mb-1 font-medium">
          {project.type === 'web' ? 'Web App' : 'Other'}
        </div>
        <div className="font-shippori text-[rgba(29,92,58,0.3)] text-[13px] font-medium mb-3">
          {String(index + 1).padStart(2, '0')}
        </div>
        <h3 className="font-serif text-[22px] text-ink mb-3 leading-[1.2]">{project.title}</h3>
        <p className="text-[13px] leading-[1.8] text-ink-mid mb-5">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] px-2.5 py-1 rounded-sm bg-[rgba(29,92,58,0.09)] text-hanada font-medium tracking-[0.05em]">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-5">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-tokiwa border-b border-current pb-px hover:text-yamabuki hover:border-yamabuki transition-colors">
            View Details
          </span>
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[11px] font-semibold tracking-[0.14em] uppercase text-tokiwa border-b border-current pb-px hover:text-yamabuki hover:border-yamabuki transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
