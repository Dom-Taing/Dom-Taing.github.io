import type { Stat } from '@/types'

export default function Metrics({ metrics }: { metrics: Stat[] }) {
  return (
    <div className="bg-hanada px-14 py-[80px] grid" style={{ gridTemplateColumns: `repeat(${metrics.length}, 1fr)` }}>
      {metrics.map((m) => (
        <div key={m.label} className="text-center">
          <div className="font-shippori font-extrabold text-white leading-none mb-2" style={{ fontSize: '64px' }}>
            {m.number}
          </div>
          <div className="text-[13px] text-white/55 tracking-[0.06em]">{m.label}</div>
        </div>
      ))}
    </div>
  )
}
