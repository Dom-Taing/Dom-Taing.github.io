'use client'

type Filter = 'all' | 'web' | 'other'

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web Apps', value: 'web' },
  { label: 'Other', value: 'other' },
]

export default function FilterBar({
  active,
  onChange,
}: {
  active: Filter
  onChange: (f: Filter) => void
}) {
  return (
    <div className="bg-bg-warm px-14 py-5 flex gap-2 items-center border-b border-[rgba(27,85,166,0.10)] sticky top-16 z-[100]">
      <span className="text-[10px] tracking-[0.18em] uppercase text-ink-soft mr-2">Filter</span>
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={`text-[11px] font-semibold tracking-[0.1em] uppercase px-[18px] py-[7px] rounded-sm border font-sans transition-all ${
            active === f.value
              ? 'bg-hanada text-white border-hanada'
              : 'bg-transparent text-ink-mid border-[rgba(27,85,166,0.18)] hover:border-hanada hover:text-hanada'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
