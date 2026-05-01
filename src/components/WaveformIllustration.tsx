export default function WaveformIllustration({ className = '' }: { className?: string }) {
  const bars = [
    0.05, 0.08, 0.15, 0.22, 0.35, 0.52, 0.68, 0.82, 0.88, 0.75,
    0.80, 0.92, 0.85, 0.78, 0.90, 0.88, 0.72, 0.60, 0.75, 0.82,
    0.68, 0.48, 0.32, 0.18, 0.10, 0.06, 0.12, 0.28, 0.48, 0.70,
    0.85, 0.92, 0.88, 0.78, 0.90, 0.95, 0.82, 0.70, 0.58, 0.42,
    0.28, 0.16, 0.08, 0.05, 0.10, 0.25, 0.42, 0.60, 0.75, 0.85,
    0.90, 0.80, 0.68, 0.52, 0.38, 0.24, 0.14, 0.08, 0.04, 0.02,
  ]

  const W = 1400, H = 600
  const centerY = H / 2
  const maxHalf = 230
  const barW = 12
  const gap = 10
  const total = barW + gap
  const startX = (W - bars.length * total) / 2
  const accentIndices = new Set([8, 11, 14, 31, 35, 50])

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={`w-full h-full ${className}`} preserveAspectRatio="xMidYMid meet">
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1={0} y1={H * f} x2={W} y2={H * f} stroke="rgba(29,92,58,0.08)" strokeWidth="1" />
      ))}
      <line x1={0} y1={centerY} x2={W} y2={centerY} stroke="rgba(29,92,58,0.22)" strokeWidth="1" />
      {bars.map((h, i) => {
        const halfH = h * maxHalf
        const x = startX + i * total
        const isAccent = accentIndices.has(i)
        const fill = isAccent ? '#d4a020' : '#1d5c3a'
        const opacity = isAccent ? 0.85 : 0.5 + h * 0.45
        return (
          <g key={i}>
            <rect x={x} y={centerY - halfH} width={barW} height={halfH} fill={fill} opacity={opacity} rx={barW / 2} />
            <rect x={x} y={centerY} width={barW} height={halfH * 0.7} fill={fill} opacity={opacity * 0.45} rx={barW / 2} />
          </g>
        )
      })}
      <text x={W / 2} y={H - 32} textAnchor="middle" fontFamily="monospace" fontSize="11" letterSpacing="3" fill="rgba(255,255,255,0.18)">
        ASR · WHISPER → PIPER TTS · STANDARD ENGLISH OUTPUT
      </text>
    </svg>
  )
}
