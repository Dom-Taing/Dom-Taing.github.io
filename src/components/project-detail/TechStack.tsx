const layerAccent: Record<string, string> = {
  Frontend: 'bg-hanada',
  Backend: 'bg-tokiwa',
  Infra: 'bg-yamabuki',
}

export default function TechStack({ stack }: { stack: Array<{ layer: string; items: string[] }> }) {
  return (
    <section className="px-14 py-[80px] bg-bg-warm border-t border-hanada/[0.08]">
      <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-ink-soft mb-10 before:content-[''] before:w-5 before:h-px before:bg-current">
        Tech Stack
      </div>
      <div className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${stack.length}, 1fr)` }}>
        {stack.map((layer) => (
          <div key={layer.layer} className="bg-bg p-8 relative overflow-hidden">
            <div className={`absolute top-0 left-0 right-0 h-1 ${layerAccent[layer.layer] ?? 'bg-hanada'}`} />
            <div className="text-[11px] tracking-[0.16em] uppercase text-ink-soft font-semibold mb-4">{layer.layer}</div>
            <div className="flex flex-wrap gap-2">
              {layer.items.map((item) => (
                <span key={item} className="text-[12px] px-2.5 py-1 bg-hanada/[0.08] text-hanada rounded-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
