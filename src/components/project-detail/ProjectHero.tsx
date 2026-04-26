import type { Project } from '@/types'

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <div
      className="relative px-14 py-[120px] bg-hero-bg overflow-hidden grid items-start gap-20"
      style={{ gridTemplateColumns: '1fr 340px' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative z-10">
        <a href="/projects" className="text-[11px] tracking-[0.18em] uppercase text-white/35 hover:text-white/70 transition-colors mb-8 inline-block">
          ← All Projects
        </a>
        <h1
          className="font-shippori font-extrabold text-white leading-[0.95] mb-6"
          style={{ fontSize: 'clamp(48px, 6vw, 88px)' }}
        >
          {project.title}
        </h1>
        <p className="text-[16px] text-white/55 leading-[1.8] max-w-[520px]">{project.description}</p>
      </div>
      <div className="relative z-10 bg-white/[0.04] border border-white/[0.08] rounded-md p-8 mt-8">
        <div className="text-[10px] tracking-[0.18em] uppercase text-white/30 mb-5">Project Info</div>
        <div className="flex flex-col gap-0">
          {[
            { label: 'Type', value: project.type === 'web' ? 'Web Application' : 'Other' },
            { label: 'Stack', value: project.tech.join(', ') },
          ].map((row) => (
            <div key={row.label} className="py-3 border-b border-white/[0.06]">
              <div className="text-[10px] uppercase tracking-[0.15em] text-white/30 mb-1">{row.label}</div>
              <div className="text-[13px] text-white/70">{row.value}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold tracking-[0.12em] uppercase bg-yamabuki text-ink px-4 py-2 rounded-sm hover:bg-[#b8881a] transition-colors"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
