import { personal } from '@/data/portfolio'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-hanada overflow-hidden px-14 max-lg:px-8 max-mobile:px-5 py-[100px] max-lg:py-20 max-mobile:py-16 items-center grid grid-cols-2 max-lg:grid-cols-1 gap-20 max-lg:gap-12"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Decorative "HELLO." — hidden at tablet and below */}
      <div
        className="font-shippori font-extrabold text-white/[0.05] absolute right-12 bottom-[-10px] leading-none pointer-events-none select-none max-lg:hidden"
        style={{ fontSize: 'clamp(72px, 7vw, 108px)' }}
      >
        HELLO.
      </div>

      {/* Left */}
      <div className="relative z-10">
        <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-white/40 mb-4">
          <span className="w-5 h-px bg-current inline-block" />
          Contact
        </div>
        <h2
          className="font-serif text-white leading-[1.1] mb-5"
          style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
        >
          Let&apos;s build<br />something<br />together.
        </h2>
        <p className="text-[15px] text-white/55 leading-[1.75] mb-10 max-w-[380px]">
          Open to full-time roles, contract work, and interesting collaborations.
        </p>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2.5 bg-yamabuki text-ink px-9 py-4 font-bold text-[12px] tracking-[0.14em] uppercase rounded-sm hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-all"
        >
          Send a Message →
        </a>
      </div>

      {/* Right */}
      <div className="relative z-10">
        {[
          { label: personal.email,           href: `mailto:${personal.email}` },
          { label: 'GitHub — @Dom-Taing',    href: personal.github },
          { label: 'Resume / CV',            href: personal.resumeUrl },
        ].map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className={`flex items-center justify-between py-5 text-white/65 text-[14px] font-medium hover:text-yamabuki transition-colors border-b border-white/10 ${
              i === 0 ? 'border-t border-white/10' : ''
            }`}
          >
            <span>{link.label}</span>
            <span className="opacity-50 text-[18px]">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
