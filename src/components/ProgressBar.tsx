'use client'

import { useEffect, useState } from 'react'

export default function ProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight
      setWidth(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-16 left-0 z-[300] h-[2px] pointer-events-none transition-[width] duration-[80ms] linear"
      style={{ width: `${width}%`, background: 'linear-gradient(to right, var(--hanada), var(--tokiwa))' }}
    />
  )
}
