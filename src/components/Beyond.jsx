import { useMemo } from 'react'

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
      <div className="beyond-head">
        <span className="eyebrow">Off the clock</span>
        <h2 className="beyond-title">where the words land</h2>
        <p className="beyond-lede">Music in my ears, a sketch in the margins, and everything worth keeping written down.</p>
      </div>
      <a className="album" href="https://violet47.substack.com" target="_blank" rel="noopener" aria-label="Read my writing on Substack">
        <div className="vinyl" aria-hidden="true"></div>
        <div className="album-cover">
          <div className="cover-canvas" aria-hidden="true"></div>
          <div className="cover-text"><strong>violet47</strong><span>essays · on substack</span></div>
        </div>
      </a>
      <p className="beyond-note">Spin the record to read.</p>
    </main>
  )
}
