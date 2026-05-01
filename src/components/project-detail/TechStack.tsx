import type { Project } from '@/types'

const layerAccentClass: Record<string, string> = {
  Frontend: 'bg-hanada',
  Backend: 'bg-tokiwa',
  Infra: 'bg-yamabuki',
  Hardware: 'bg-yamabuki',
  AI: 'bg-tokiwa',
}

export default function TechStack({ project }: { project: Project }) {
  const hasDetailedStack = (project.detail?.stack.length ?? 0) > 0

  return (
    <section className="mt-16 pt-14 border-t border-[rgba(29,92,58,0.12)]">
      <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-tokiwa mb-7">
        <span className="w-5 h-px bg-current inline-block" />
        Stack
      </div>
      <h2 className="font-serif text-ink mb-7 leading-[1.15]" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>
        Technologies used.
      </h2>

      {hasDetailedStack ? (
        <div className="flex flex-wrap gap-[3px]">
          {project.detail!.stack.map((layer) => (
            <div key={layer.layer} className="bg-bg-warm p-6 relative min-w-[120px]">
              <div className={`absolute top-0 left-0 right-0 h-[3px] ${layerAccentClass[layer.layer] ?? 'bg-hanada'}`} />
              <div className="text-[9px] tracking-[0.18em] uppercase text-tokiwa font-semibold mb-1.5">{layer.layer}</div>
              <div className="text-[14px] font-semibold text-ink mb-1">{layer.items[0]}</div>
              {layer.items.slice(1).map((item) => (
                <div key={item} className="text-[11px] text-ink-soft">{item}</div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-[12px] font-medium px-3 py-1.5 rounded-sm bg-[rgba(29,92,58,0.09)] text-hanada">
              {t}
            </span>
          ))}
        </div>
      )}
    </section>
  )
}
