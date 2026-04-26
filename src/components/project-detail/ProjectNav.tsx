import Link from 'next/link'
import { projects } from '@/data/portfolio'
import type { Project } from '@/types'

export default function ProjectNav({ current }: { current: Project }) {
  const idx = projects.findIndex((p) => p.slug === current.slug)
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx < projects.length - 1 ? projects[idx + 1] : null

  return (
    <div className="bg-ink grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
      {prev ? (
        <Link href={`/projects/${prev.slug}`} className="px-14 py-12 border-r border-white/[0.06] group hover:bg-white/[0.02] transition-colors">
          <div className="text-[10px] tracking-[0.18em] uppercase text-white/30 mb-2">← Previous</div>
          <div className="font-serif text-[22px] text-white/70 group-hover:text-white transition-colors">{prev.title}</div>
        </Link>
      ) : <div />}
      {next ? (
        <Link href={`/projects/${next.slug}`} className="px-14 py-12 text-right group hover:bg-white/[0.02] transition-colors">
          <div className="text-[10px] tracking-[0.18em] uppercase text-white/30 mb-2">Next →</div>
          <div className="font-serif text-[22px] text-white/70 group-hover:text-white transition-colors">{next.title}</div>
        </Link>
      ) : <div />}
    </div>
  )
}
