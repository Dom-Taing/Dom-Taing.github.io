'use client'

import { useState } from 'react'
import { projects } from '@/data/portfolio'
import FilterBar from './FilterBar'
import ProjectCard from './ProjectCard'

type Filter = 'all' | 'web' | 'other'

export default function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>('all')

  const active = projects.filter((p) => !p.hidden)
  const visible = filter === 'all' ? active : active.filter((p) => p.type === filter)

  return (
    <>
      <FilterBar active={filter} onChange={setFilter} />
      <div className="px-14 py-14 pb-20 grid gap-[3px]" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {visible.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </>
  )
}
