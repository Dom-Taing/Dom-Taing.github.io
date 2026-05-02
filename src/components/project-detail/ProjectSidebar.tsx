import type { Project } from '@/types'

function SidebarRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="py-5 border-b border-[rgba(29,92,58,0.12)]">
      <div className="text-[9px] tracking-[0.2em] uppercase text-ink-soft mb-2">{label}</div>
      <div className="text-[14px] text-ink font-medium leading-[1.5]">{children}</div>
    </div>
  )
}

export default function ProjectSidebar({ project }: { project: Project }) {
  return (
    <aside className="sticky top-20 max-lg:static max-lg:mt-14 max-lg:pt-10 max-lg:border-t max-lg:border-[rgba(29,92,58,0.12)]">
      {/* Metadata rows — 2-col grid at tablet */}
      <div className="flex flex-col border-t border-[rgba(29,92,58,0.12)] max-lg:grid max-lg:grid-cols-2 max-lg:border-t-0">
        {project.detail?.role && (
          <SidebarRow label="Role">{project.detail.role}</SidebarRow>
        )}
        {project.detail?.timeline && (
          <SidebarRow label="Timeline">{project.detail.timeline}</SidebarRow>
        )}
        {project.year && !project.detail?.timeline && (
          <SidebarRow label="Year">{project.year}</SidebarRow>
        )}
        {project.detail?.team && (
          <SidebarRow label="Team">
            <span className="whitespace-pre-line">{project.detail.team}</span>
          </SidebarRow>
        )}
        <SidebarRow label="Type">
          {project.type === 'web' ? 'Web App' : 'Other'}
        </SidebarRow>
        <div className="py-5 border-b border-[rgba(29,92,58,0.12)]">
          <div className="text-[9px] tracking-[0.2em] uppercase text-ink-soft mb-3">Stack</div>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-[rgba(29,92,58,0.09)] text-hanada">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {project.links.length > 0 && (
        <div className="mt-6 flex flex-col max-lg:flex-row max-lg:flex-wrap max-lg:gap-2 max-mobile:flex-col">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-[12px] font-semibold tracking-[0.1em] uppercase text-hanada border-b border-[rgba(29,92,58,0.18)] py-3 hover:text-yamabuki transition-colors first:border-t first:border-[rgba(29,92,58,0.18)] max-lg:border max-lg:rounded-sm max-lg:px-4 max-lg:first:border max-lg:py-2 max-mobile:border-b max-mobile:border-t-0 max-mobile:first:border-t max-mobile:rounded-none max-mobile:px-0 max-mobile:py-3"
            >
              <span>{link.label}</span>
              <span>↗</span>
            </a>
          ))}
        </div>
      )}
    </aside>
  )
}
