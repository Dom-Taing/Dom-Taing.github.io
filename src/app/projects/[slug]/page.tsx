import { notFound } from 'next/navigation'
import { projects } from '@/data/portfolio'
import ProjectHero from '@/components/project-detail/ProjectHero'
import HeroImage from '@/components/project-detail/HeroImage'
import ProjectContent from '@/components/project-detail/ProjectContent'
import Metrics from '@/components/project-detail/Metrics'
import TechStack from '@/components/project-detail/TechStack'
import ProjectSidebar from '@/components/project-detail/ProjectSidebar'
import ProjectNav from '@/components/project-detail/ProjectNav'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  return { title: project ? `${project.title} — Dom Taing` : 'Project' }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const heroScreenshot = project.detail?.screenshots?.[0]
  const hasMetrics = (project.detail?.metrics.length ?? 0) > 0

  return (
    <main className="bg-bg">
      <div className="pt-16">
        <ProjectHero project={project} />
        <HeroImage src={heroScreenshot} video={project.heroVideo} youTube={project.heroYouTube} illustration={project.heroIllustration} contain={project.detail?.screenshotStyle === 'contain'} />

        {/* Content + sidebar */}
        <div className="px-14 max-lg:px-8 max-mobile:px-5 py-20 max-lg:py-14 max-mobile:py-11 items-start grid grid-cols-[1fr_300px] max-lg:grid-cols-1 gap-20 max-lg:gap-0">
          <div>
            <ProjectContent project={project} />
            {hasMetrics && <Metrics metrics={project.detail!.metrics} />}
            <TechStack project={project} />
          </div>
          <ProjectSidebar project={project} />
        </div>

        <ProjectNav current={project} />
      </div>
    </main>
  )
}
