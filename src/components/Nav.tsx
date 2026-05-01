'use client'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-14 h-16 bg-[rgba(12,20,14,0.92)] backdrop-blur-md border-b border-[rgba(45,120,74,0.18)]">
      <div className="font-shippori font-bold text-[18px] text-white tracking-[0.04em]">
        Dom<span className="text-tokiwa">.</span>
      </div>
      <ul className="flex gap-10 list-none">
        <li><a href="#about" className="text-[12px] font-medium tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors">About</a></li>
        <li><a href="#experience" className="text-[12px] font-medium tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors">Experience</a></li>
        <li><a href="/projects" className="text-[12px] font-medium tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors">Projects</a></li>
        <li><a href="#contact" className="text-[12px] font-semibold tracking-[0.12em] uppercase bg-hanada text-white border border-tokiwa px-[22px] py-2 rounded-sm hover:bg-tokiwa transition-colors">Contact</a></li>
      </ul>
    </nav>
  )
}
