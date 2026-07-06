import { useMemo } from 'react'

const TRACKS = [
  { n: '01', name: 'stray thoughts, kept' },
  { n: '02', name: 'notes from the QA trenches' },
  { n: '03', name: 'letters I won’t send' },
  { n: '04', name: 'everything else, eventually' },
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

  return (
    <main className="beyond">
      <div className="sky beyond-sky" aria-hidden="true">
        {stars.map((style, i) => (
          <span className="star" key={i} style={style} />
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
      <a className="album" href="https://violet47.substack.com" target="_blank" rel="noopener" aria-label="Read my writing on Substack">
        <div className="vinyl" aria-hidden="true"></div>
        <div className="album-cover">
          <div className="cover-head"><strong>violet47</strong><span>a side project in words</span></div>
          <ol className="tracklist">
            {TRACKS.map(t => (
              <li key={t.n}><span>{t.n}</span>{t.name}</li>
            ))}
          </ol>
          <div className="cover-foot"><span>SIDE A</span><span>33&#8531; RPM &middot; &#8734; MIN</span></div>
        </div>
      </a>
      <p className="beyond-note">Spin the record to read &middot; side A is always live</p>
    </main>
  )
}
