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
      <div className="px-14 max-lg:px-8 max-mobile:px-5 py-14 max-mobile:py-7 pb-20 max-mobile:pb-[72px] grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-3 gap-[3px]">
        {visible.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </>
  )
}
