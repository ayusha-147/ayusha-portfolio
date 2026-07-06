import { useEffect, useMemo, useRef } from 'react'

export default function Hero() {
  // stars: same generation logic as the original script, rendered once
  const stars = useMemo(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return Array.from({ length: 48 }, () => {
      const size = Math.random() * 1.6 + 1
      const style = {
        left: Math.random() * 100 + '%',
        top: Math.random() * 52 + '%',
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

  // gentle scroll parallax: sky drifts, content floats up and fades
  const skyRef = useRef(null)
  const contentRef = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const y = window.scrollY
        if (y <= window.innerHeight) {
          skyRef.current.style.transform = `translateY(${y * 0.18}px)`
          contentRef.current.style.transform = `translateY(${y * 0.1}px)`
          contentRef.current.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.85)))
        }
      })
    }
    addEventListener('scroll', onScroll, { passive: true })
    return () => {
      removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <header className="hero" id="top">
      <div className="sky" id="sky" aria-hidden="true" ref={skyRef}>
        {stars.map((style, i) => (
          <span className="star" key={i} style={style} />
        ))}
      </div>

      <a className="balloon-link" href="#/beyond" aria-label="Take the balloon up, see what I do off the clock" title="Take a ride?">
        <svg className="balloon" viewBox="0 0 60 90" aria-hidden="true">
          <path d="M30 4c-14 0-24 10-24 24 0 16 16 26 20 34h8c4-8 20-18 20-34 0-14-10-24-24-24z" />
          <path d="M26 66h8l-2 10h-4z" opacity=".7" />
          <rect x="25" y="78" width="10" height="8" rx="2" />
        </svg>
      </a>

      <div className="hero-content" ref={contentRef}>
        <span className="eyebrow">QA · Manual Testing · API · Automation</span>
        <h1>Ayusha<br />Pradhananga</h1>
        <p className="tag">Quality Assurance Engineer. I find what could go wrong before your users do, through structured test design, disciplined execution, and defect reports developers can act on immediately.</p>
        <div className="cta-row">
          <a className="btn solid" href="#projects">View my work</a>
          <a className="btn ghost" href="#contact">Work with me</a>
        </div>
      </div>

      <div className="dunes" aria-hidden="true">
        <svg viewBox="0 0 1440 260" preserveAspectRatio="none">
          <path className="d1" d="M0 190 C 240 120 420 210 720 165 C 1020 120 1200 200 1440 150 L1440 260 L0 260 Z" />
          <path className="d2" d="M0 220 C 300 160 560 240 860 200 C 1120 166 1300 230 1440 195 L1440 260 L0 260 Z" />
          <path className="d3" d="M0 245 C 360 195 680 262 1000 228 C 1220 206 1360 248 1440 232 L1440 260 L0 260 Z" />
        </svg>
      </div>
    </header>
  )
}
