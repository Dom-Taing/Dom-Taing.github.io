import WaveformIllustration from '@/components/WaveformIllustration'

export default function HeroImage({
  src, video, youTube, illustration, contain,
}: {
  src?: string
  video?: string
  youTube?: string
  illustration?: 'waveform'
  contain?: boolean
}) {
  if (youTube) {
    return (
      <div className="w-full border-b border-[rgba(29,92,58,0.1)] bg-ink [aspect-ratio:21/9] max-mobile:[aspect-ratio:16/9]">
        <iframe
          src={`https://www.youtube.com/embed/${youTube}`}
          className="w-full h-full"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Project video"
        />
      </div>
    )
  }

  if (illustration === 'waveform') {
    return (
      <div className="w-full border-b border-[rgba(29,92,58,0.1)] [aspect-ratio:21/9] max-mobile:[aspect-ratio:16/9]" style={{ background: '#0b1410' }}>
        <WaveformIllustration />
      </div>
    )
  }

  if (video) {
    return (
      <div className="w-full border-b border-[rgba(29,92,58,0.1)] bg-ink [aspect-ratio:21/9] max-mobile:[aspect-ratio:16/9]">
        <video src={video} className="w-full h-full object-cover" controls playsInline />
      </div>
    )
  }

  if (src) {
    return (
      <div
        className={`w-full border-b border-[rgba(29,92,58,0.1)] bg-bg-warm flex items-center justify-center [aspect-ratio:21/9] max-mobile:[aspect-ratio:16/9] ${contain ? 'p-10' : ''}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" className={`${contain ? 'max-w-full max-h-full object-contain' : 'w-full h-full object-cover'}`} />
      </div>
    )
  }

  return (
    <div className="w-full bg-bg-warm border-b border-[rgba(29,92,58,0.1)] relative flex items-center justify-center [aspect-ratio:21/9] max-mobile:[aspect-ratio:16/9]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(29,92,58,0.04) 28px, rgba(29,92,58,0.04) 29px)',
        }}
      />
      <span className="relative z-10 text-[12px] font-mono text-ink-soft text-center leading-loose">
        [ hero screenshot / mockup ]<br />2100 × 900
      </span>
    </div>
  )
}
