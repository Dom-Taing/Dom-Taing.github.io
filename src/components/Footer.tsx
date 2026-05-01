export default function Footer() {
  return (
    <footer className="bg-ink px-14 py-7 flex justify-between items-center">
      <a href="/" className="font-shippori font-bold text-[15px] text-white/35 hover:text-white/60 transition-colors">Dom Taing</a>
      <div className="text-[12px] text-white/20 tracking-[0.06em]">© 2026 — Built with care.</div>
      <div className="flex gap-1.5">
        <div className="w-[9px] h-[9px] rounded-full bg-hanada" />
        <div className="w-[9px] h-[9px] rounded-full bg-yamabuki" />
        <div className="w-[9px] h-[9px] rounded-full bg-tokiwa" />
      </div>
    </footer>
  )
}
