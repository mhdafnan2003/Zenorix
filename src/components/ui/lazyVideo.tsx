import { useEffect, useRef } from 'react'

type Props = { src: string; poster?: string; label?: string }

// Loads and plays the video only while it is near the viewport.
const LazyVideo = ({ src, poster, label }: Props) => {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.getAttribute('src')) video.src = src
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [src])

  return <video ref={ref} poster={poster} muted loop playsInline preload="none" aria-label={label} />
}

export default LazyVideo
