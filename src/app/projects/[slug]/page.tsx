import { notFound } from 'next/navigation'
import { projects } from '@/data/portfolio'
import ProjectHero from '@/components/project-detail/ProjectHero'
import Metrics from '@/components/project-detail/Metrics'
import ProjectContent from '@/components/project-detail/ProjectContent'
import TechStack from '@/components/project-detail/TechStack'
import ProjectNav from '@/components/project-detail/ProjectNav'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  return { title: project ? `${project.title} — Dom Taing` : 'Project' }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <main className="bg-bg pt-16">
      <ProjectHero project={project} />

      {project.detail && (
        <>
          {project.detail.metrics.length > 0 && (
            <Metrics metrics={project.detail.metrics} />
          )}
          <ProjectContent
            problem={project.detail.problem}
            approach={project.detail.approach}
          />
          {project.detail.stack.length > 0 && (
            <TechStack stack={project.detail.stack} />
          )}
        </>
      )}

      <ProjectNav current={project} />
    </main>
  )
}
