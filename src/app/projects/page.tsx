import ProjectGrid from '@/components/projects/ProjectGrid'

export const metadata = { title: 'Projects — Dom Taing' }

export default function ProjectsPage() {
  return (
    <main className="bg-bg pt-16">
      {/* Page header */}
      <div className="relative px-14 pb-[72px] pt-[140px] bg-ink overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <a
          href="/"
          className="absolute top-[84px] right-14 z-10 text-[12px] font-semibold tracking-[0.12em] uppercase text-white/40 hover:text-white transition-colors flex items-center gap-2"
        >
          ← Back
        </a>
        <h1
          className="relative z-10 font-shippori font-bold text-white leading-[0.92] tracking-[0.02em]"
          style={{ fontSize: 'clamp(80px, 10vw, 140px)' }}
        >
          All <span className="text-yamabuki">Projects</span>
        </h1>
        <p className="relative z-10 text-[15px] text-white/40 mt-5">
          A full list of things I've built — web apps, tools, experiments, and more.
        </p>
      </div>

      <ProjectGrid />
    </main>
  )
}
