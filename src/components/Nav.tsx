'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '/projects',   label: 'Projects' },
  { href: '#contact',    label: 'Contact', isContact: true },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 680) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-14 max-lg:px-8 max-mobile:px-5 h-16 bg-[rgba(12,20,14,0.92)] backdrop-blur-md border-b border-[rgba(45,120,74,0.18)]">
        <a href="/" className="font-shippori font-bold text-[18px] text-white tracking-[0.04em] hover:opacity-80 transition-opacity">
          Dom<span className="text-tokiwa">.</span>
        </a>

        {/* Desktop nav links — hidden below 680px */}
        <ul className="hidden mobile:flex gap-10 list-none">
          <li><a href="#about"      className="text-[12px] font-medium tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors">About</a></li>
          <li><a href="#experience" className="text-[12px] font-medium tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors">Experience</a></li>
          <li><a href="/projects"   className="text-[12px] font-medium tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors">Projects</a></li>
          <li><a href="#contact"    className="text-[12px] font-semibold tracking-[0.12em] uppercase bg-hanada text-white border border-tokiwa px-[22px] py-2 rounded-sm hover:bg-tokiwa transition-colors">Contact</a></li>
        </ul>

        {/* Hamburger — visible below 680px */}
        <button
          className="flex mobile:hidden flex-col gap-[5px] p-2 -mr-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span
            className="block w-[22px] h-[2px] bg-white/70 origin-center"
            style={{
              transition: 'transform 0.25s ease',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-[22px] h-[2px] bg-white/70"
            style={{
              transition: 'opacity 0.25s ease',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-[22px] h-[2px] bg-white/70 origin-center"
            style={{
              transition: 'transform 0.25s ease',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className="flex mobile:hidden fixed inset-x-0 bottom-0 z-[190] flex-col items-center justify-center"
        style={{
          top: 64,
          background: 'rgba(12,20,14,0.97)',
          backdropFilter: 'blur(20px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        {NAV_LINKS.map(({ href, label, isContact }) => (
          <a
            key={href}
            href={href}
            onClick={close}
            className="w-full text-center py-5 border-b border-white/[0.05] font-shippori text-[28px] transition-colors"
            style={{ color: isContact ? 'var(--tokiwa)' : 'rgba(255,255,255,0.6)' }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  )
}
