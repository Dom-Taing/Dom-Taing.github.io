import type { Project } from '@/types'

function SLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-tokiwa mb-3.5">
      <span className="w-5 h-px bg-current inline-block" />
      {children}
    </div>
  )
}

export default function ProjectContent({ project }: { project: Project }) {
  const overview = project.detail?.problem ?? project.description
  const approach = project.detail?.approach
  const pullQuote = project.detail?.pullQuote
  const screenshots = project.detail?.screenshots ?? []
  const screenshotStyle = project.detail?.screenshotStyle ?? 'cover'

  return (
    <div>
      {/* Overview */}
      <section className="mb-16">
        <SLabel>Overview</SLabel>
        <h2 className="font-serif text-ink mb-7 leading-[1.15]" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>
          About the project.
        </h2>
        <p className="text-[16px] leading-[1.85] text-ink-mid">{overview}</p>

        {pullQuote && (
          <blockquote className="font-serif italic text-[20px] leading-[1.55] text-ink border-l-[3px] border-hanada pl-6 mt-10">
            &ldquo;{pullQuote}&rdquo;
          </blockquote>
        )}
      </section>

      {/* Challenge / Approach */}
      {approach && (
        <section className="mt-16 pt-14 border-t border-[rgba(29,92,58,0.12)]">
          <SLabel>Process</SLabel>
          <h2 className="font-serif text-ink mb-7 leading-[1.15]" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>
            Challenge &amp; approach.
          </h2>
          <div className="grid gap-[3px]" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="bg-bg-warm p-8 relative">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-yamabuki" />
              <div className="text-[9px] tracking-[0.22em] uppercase font-bold text-yamabuki mb-4">Challenge</div>
              <p className="text-[14px] leading-[1.8] text-ink-mid">{overview}</p>
            </div>
            <div className="bg-bg-warm p-8 relative">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-hanada" />
              <div className="text-[9px] tracking-[0.22em] uppercase font-bold text-tokiwa mb-4">Approach</div>
              <p className="text-[14px] leading-[1.8] text-ink-mid">{approach}</p>
            </div>
          </div>
        </section>
      )}

      {/* Screenshot grid */}
      {screenshots.length > 0 && (
        <section className="mt-16 pt-14 border-t border-[rgba(29,92,58,0.12)]">
          <SLabel>Design</SLabel>
          <h2 className="font-serif text-ink mb-7 leading-[1.15]" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>
            Key screens.
          </h2>
          <div className="grid gap-[3px]" style={{ gridTemplateColumns: screenshots.length === 1 ? '1fr' : '1fr 1fr' }}>
            {screenshots.map((src, i) => (
              <div
                key={i}
                className={`w-full bg-bg-warm flex items-center justify-center ${screenshotStyle === 'contain' ? 'p-8' : ''}`}
                style={{ aspectRatio: '16/9' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  className={`max-w-full max-h-full ${screenshotStyle === 'contain' ? 'object-contain' : 'w-full h-full object-cover'}`}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
