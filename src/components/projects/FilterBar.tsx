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
    <div className="bg-bg-warm px-14 max-lg:px-8 max-mobile:px-5 py-5 max-mobile:py-[14px] flex gap-2 items-center border-b border-[rgba(29,92,58,0.15)] sticky top-16 z-[100] max-mobile:overflow-x-auto max-mobile:flex-nowrap max-mobile:[scrollbar-width:none] max-mobile:[&::-webkit-scrollbar]:hidden">
      <span className="text-[10px] tracking-[0.18em] uppercase text-tokiwa mr-2 flex-shrink-0">Filter</span>
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={`text-[11px] font-semibold tracking-[0.1em] uppercase px-[18px] py-[7px] rounded-sm border font-sans transition-all flex-shrink-0 ${
            active === f.value
              ? 'bg-hanada text-white border-hanada'
              : 'bg-transparent text-ink-mid border-[rgba(29,92,58,0.2)] hover:border-tokiwa hover:text-tokiwa'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
