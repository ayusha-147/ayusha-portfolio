import { useEffect, useMemo, useRef, useState } from 'react'
import coverArt from '../assets/red-and-wolf.jpg'

const CLIP_SECONDS = 10
const SONG_URL = import.meta.env.BASE_URL + 'song.mp3'

const NOTES = [
  { ch: '♪', left: '30%', bottom: '30%', delay: '0s', dur: '9s', size: '17px' },
  { ch: '♫', left: '40%', bottom: '24%', delay: '2.5s', dur: '11s', size: '14px' },
  { ch: '♪', left: '52%', bottom: '32%', delay: '5s', dur: '10s', size: '19px' },
  { ch: '♩', left: '61%', bottom: '26%', delay: '1.2s', dur: '12s', size: '13px' },
  { ch: '♫', left: '69%', bottom: '31%', delay: '6.8s', dur: '9.5s', size: '16px' },
  { ch: '♪', left: '46%', bottom: '20%', delay: '8.2s', dur: '10.5s', size: '15px' },
]

export default function Beyond() {
  const stars = useMemo(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return Array.from({ length: 60 }, () => {
      const size = Math.random() * 1.8 + 1
      const style = {
        left: Math.random() * 100 + '%',
        top: Math.random() * 75 + '%',
        width: size + 'px',
        height: size + 'px',
      }
      if (!reduce) {
        style.animationDelay = Math.random() * 4 + 's'
        style.animationDuration = 3 + Math.random() * 4 + 's'
      }
      return style
    })
  }, [])

  const [zoomed, setZoomed] = useState(false)

  // vinyl audio: 10 second looping taste; falls back to Substack if no song file
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [hasSong, setHasSong] = useState(true)

  const toggleSong = () => {
    const a = audioRef.current
    if (!hasSong || !a) {
      open('https://violet47.substack.com', '_blank', 'noopener')
      return
    }
    if (playing) {
      a.pause()
      setPlaying(false)
    } else {
      a.currentTime = 0
      a.play().then(() => setPlaying(true)).catch(() => setHasSong(false))
    }
  }

  const onTime = () => {
    const a = audioRef.current
    if (a && a.currentTime >= CLIP_SECONDS) a.currentTime = 0
  }

  useEffect(() => {
    return () => {
      if (audioRef.current) audioRef.current.pause()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = zoomed ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [zoomed])

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && zoomed) setZoomed(false)
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [zoomed])

  return (
    <main className="beyond">
      <div className="sky beyond-sky" aria-hidden="true">
        {stars.map((style, i) => (
          <span className="star" key={i} style={style} />
        ))}
      </div>
      <div className="beyond-notes" aria-hidden="true">
        {NOTES.map((n, i) => (
          <span key={i} style={{ left: n.left, bottom: n.bottom, animationDelay: n.delay, animationDuration: n.dur, fontSize: n.size }}>{n.ch}</span>
        ))}
      </div>
      <a className="beyond-balloon-link" href="#/" aria-label="Float back to the portfolio">
        <svg className="beyond-balloon" viewBox="0 0 60 90" aria-hidden="true">
          <path d="M30 4c-14 0-24 10-24 24 0 16 16 26 20 34h8c4-8 20-18 20-34 0-14-10-24-24-24z" />
          <path d="M26 66h8l-2 10h-4z" opacity=".7" />
          <rect x="25" y="78" width="10" height="8" rx="2" />
        </svg>
        <span className="balloon-hint">float home</span>
      </a>
      <div className="beyond-head">
        <span className="eyebrow">Off the clock</span>
        <h2 className="beyond-title">where the words land</h2>
        <p className="beyond-lede">By day I break software. By night the findings get filed somewhere softer.</p>
      </div>
      <div className="album">
        <audio ref={audioRef} src={SONG_URL} preload="metadata" onTimeUpdate={onTime} onError={() => setHasSong(false)} loop />
        <button
          className={playing ? 'vinyl-link playing' : 'vinyl-link'}
          onClick={toggleSong}
          aria-label={hasSong ? (playing ? 'Pause the record' : 'Play a ten second taste') : 'Read my writings on Substack'}
        >
          <div className="vinyl" aria-hidden="true"></div>
        </button>
        <div className="album-cover">
          <button className="cover-canvas" onClick={() => setZoomed(true)} aria-label="View the album art full size">
            <img src={coverArt} alt="Watercolor illustration of a girl in a red cloak meeting a towering wolf in a misty forest" loading="lazy" />
          </button>
          <a className="cover-text" href="https://violet47.substack.com" target="_blank" rel="noopener">
            <strong>violet47</strong><span>writings · on substack</span>
          </a>
        </div>
      </div>
      <p className="beyond-note">Play the record for a taste &middot; the sleeve takes you to substack &middot; tap the cover to look closer</p>
      <div
        className={zoomed ? 'lightbox open' : 'lightbox'}
        role="dialog"
        aria-label="Full size album art"
        onClick={() => setZoomed(false)}
      >
        <img src={coverArt} alt="Watercolor illustration of a girl in a red cloak meeting a towering wolf in a misty forest, full size" />
      </div>
    </main>
  )
}
