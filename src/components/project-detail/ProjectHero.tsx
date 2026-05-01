import type { Project } from '@/types'

export default function ProjectHero({ project }: { project: Project }) {
  const hasStats = (project.detail?.metrics.length ?? 0) > 0

  return (
    <div className="relative px-14 pb-20 pt-[130px] bg-hero-bg overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Right glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: -100, top: -100, width: 600, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29,92,58,0.15) 0%, transparent 70%)',
        }}
      />
      {/* Bottom accent line */}
      <div
        className="absolute left-0 bottom-0 w-full h-[3px] pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--hanada) 0%, var(--tokiwa) 40%, transparent 70%)' }}
      />

      {/* Back link */}
      <a
        href="/projects"
        className="relative z-10 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] uppercase text-white/35 hover:text-white/80 transition-colors border-b border-white/[0.12] pb-px mb-10"
      >
        ← All Projects
      </a>

      {/* Meta: type + year */}
      <div className="relative z-10 flex items-center gap-4 mb-5">
        <span className="flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-tokiwa font-semibold">
          <span className="w-5 h-px bg-current inline-block" />
          {project.type === 'web' ? 'Web App' : 'Other'}
        </span>
        {project.year && (
          <>
            <span className="w-px h-3 bg-white/15 inline-block" />
            <span className="text-[10px] tracking-[0.16em] uppercase text-white/25 font-medium">{project.year}</span>
          </>
        )}
      </div>

      {/* Title */}
      <h1
        className="relative z-10 font-shippori font-extrabold text-white leading-[0.94] tracking-[-0.01em] mb-6"
        style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}
      >
        {project.title}<span className="text-yamabuki">.</span>
      </h1>

      {/* Tagline */}
      <p
        className="relative z-10 font-serif italic text-white/50 max-w-[600px] leading-[1.5] mb-10"
        style={{ fontSize: 'clamp(16px, 1.5vw, 21px)' }}
      >
        {project.tagline ?? project.description}
      </p>

      {/* Stats row */}
      {hasStats && (
        <div className="relative z-10 flex flex-wrap gap-10 pt-8 border-t border-white/[0.08]">
          {project.detail!.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-shippori font-extrabold text-tokiwa leading-none mb-1" style={{ fontSize: 36 }}>
                {m.number}
              </div>
              <div className="text-[11px] text-white/30 tracking-[0.1em] uppercase">{m.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
