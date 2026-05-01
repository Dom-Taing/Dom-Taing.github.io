import Link from 'next/link'
import { projects } from '@/data/portfolio'
import type { Project } from '@/types'

export default function ProjectNav({ current }: { current: Project }) {
  const idx = projects.findIndex((p) => p.slug === current.slug)
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx < projects.length - 1 ? projects[idx + 1] : null

  return (
    <div
      className="bg-ink border-t-2 border-[rgba(29,92,58,0.3)] relative overflow-hidden"
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="relative z-10 px-14 py-16 border-r border-white/[0.06] group hover:bg-white/[0.02] transition-colors"
        >
          <div className="flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-white/30 mb-4">
            <span className="w-5 h-px bg-current inline-block" />
            Previous Project
          </div>
          <div className="font-serif text-[28px] text-white/60 group-hover:text-white transition-colors leading-[1.15]">
            {prev.title}
          </div>
          <div className="text-[13px] text-white/30 mt-2 line-clamp-2">{prev.description}</div>
          <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-hanada border border-tokiwa px-5 py-2.5 rounded-sm group-hover:bg-hanada group-hover:text-white transition-colors">
            View Project →
          </div>
        </Link>
      ) : <div />}

      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="relative z-10 px-14 py-16 text-right group hover:bg-white/[0.02] transition-colors"
        >
          <div className="flex items-center justify-end gap-2 text-[10px] tracking-[0.22em] uppercase text-white/30 mb-4">
            Next Project
            <span className="w-5 h-px bg-current inline-block" />
          </div>
          <div className="font-serif text-[28px] text-white/60 group-hover:text-white transition-colors leading-[1.15]">
            {next.title}
          </div>
          <div className="text-[13px] text-white/30 mt-2 line-clamp-2">{next.description}</div>
          <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-hanada border border-tokiwa px-5 py-2.5 rounded-sm group-hover:bg-hanada group-hover:text-white transition-colors">
            View Project →
          </div>
        </Link>
      ) : <div />}
    </div>
  )
}
