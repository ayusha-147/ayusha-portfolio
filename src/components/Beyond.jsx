import { useMemo } from 'react'

export default function Beyond() {
  const stars = useMemo(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return Array.from({ length: 70 }, () => {
      const size = Math.random() * 1.8 + 1
      const style = {
        left: Math.random() * 100 + '%',
        top: Math.random() * 82 + '%',
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

  return (
    <main className="beyond">
      <a className="beyond-back" href="#/">&larr; Back to the dunes</a>
      <div className="sky beyond-sky" aria-hidden="true">
        {stars.map((style, i) => (
          <span className="star" key={i} style={style} />
        ))}
      </div>
      <svg className="beyond-balloon" viewBox="0 0 60 90" aria-hidden="true">
        <path d="M30 4c-14 0-24 10-24 24 0 16 16 26 20 34h8c4-8 20-18 20-34 0-14-10-24-24-24z" />
        <path d="M26 66h8l-2 10h-4z" opacity=".7" />
        <rect x="25" y="78" width="10" height="8" rx="2" />
      </svg>
      <div className="beyond-content">
        <span className="eyebrow">Off the clock</span>
        <h2>Above the dunes</h2>
        <p className="beyond-lede">The balloon ride was worth it. A few things I drift toward when I'm not hunting bugs:</p>
        <ul className="hobby-list">
          <li>
            <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 4.5v15Z" /><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" /></svg>
            <span>Reading, and <a href="https://violet47.substack.com" target="_blank" rel="noopener">writing thoughts down</a> before they escape</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
            Music, from playing around with melodies to all-day playlists
          </li>
        </ul>
      </div>
      <div className="beyond-dunes" aria-hidden="true">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d="M0 120 C 240 70 480 140 720 105 C 980 70 1200 130 1440 95 L1440 200 L0 200 Z" fill="#171432" opacity=".8" />
          <path d="M0 155 C 300 110 620 175 940 140 C 1180 118 1330 160 1440 142 L1440 200 L0 200 Z" fill="#0d0b24" />
        </svg>
      </div>
    </main>
  )
}
