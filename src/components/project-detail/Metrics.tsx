import type { Stat } from '@/types'

export default function Metrics({ metrics }: { metrics: Stat[] }) {
  const desktopCols =
    metrics.length === 1 ? 'mobile:grid-cols-1' :
    metrics.length === 2 ? 'mobile:grid-cols-2' :
    'mobile:grid-cols-2 lg:grid-cols-3'

  return (
    <section className="mt-16 pt-14 border-t border-[rgba(29,92,58,0.12)]">
      <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-tokiwa mb-7">
        <span className="w-5 h-px bg-current inline-block" />
        Impact
      </div>
      <h2 className="font-serif text-ink mb-7 leading-[1.15]" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>
        What we shipped.
      </h2>
      <div className={`grid gap-[3px] grid-cols-1 ${desktopCols}`}>
        {metrics.map((m) => (
          <div key={m.label} className="bg-bg-warm p-8 max-mobile:px-5 max-mobile:py-6 relative overflow-hidden">
            <div
              className="absolute bottom-0 right-0 w-20 h-20 rounded-full pointer-events-none"
              style={{ background: 'rgba(29,92,58,0.06)', transform: 'translate(20px, 20px)' }}
            />
            <div className="font-shippori font-extrabold text-tokiwa leading-none mb-2 text-[48px] max-mobile:text-[36px]">
              {m.number}
            </div>
            <div className="text-[13px] text-ink-mid leading-[1.5]">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
