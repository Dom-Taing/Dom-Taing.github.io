export default function ProjectContent({ problem, approach }: { problem: string; approach: string }) {
  return (
    <section className="px-14 py-[100px] grid gap-20 border-t border-[rgba(27,85,166,0.08)]" style={{ gridTemplateColumns: '1fr 1fr' }}>
      {[
        { title: 'The Problem', body: problem },
        { title: 'The Approach', body: approach },
      ].map((section) => (
        <div key={section.title}>
          <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-ink-soft mb-4 before:content-[''] before:w-5 before:h-px before:bg-current">
            {section.title}
          </div>
          <p className="text-[15px] leading-[1.85] text-ink-mid">{section.body}</p>
        </div>
      ))}
    </section>
  )
}
