import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import DuneDivider from './components/DuneDivider.jsx'
import Journey from './components/Journey.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Certs from './components/Certs.jsx'
import Lightbox from './components/Lightbox.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // theme: default follows system preference, toggle overrides for this visit
  const [theme, setTheme] = useState(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
  )
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  // reveals: same IntersectionObserver behavior as the original script
  useEffect(() => {
    const io = new IntersectionObserver(
      es =>
        es.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  // lightbox for certificates and photos
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: 'Full size view' })
  const openLightbox = (src, alt) =>
    setLightbox({ open: true, src, alt: alt || 'Full size view' })
  const closeLightbox = () =>
    setLightbox(lb => ({ ...lb, open: false }))

  useEffect(() => {
    document.body.style.overflow = lightbox.open ? 'hidden' : ''
  }, [lightbox.open])

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && lightbox.open) closeLightbox()
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [lightbox.open])

  return (
    <>
      <Nav onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <DuneDivider background="var(--bg-alt)" fill="var(--bg-alt2)"
        d="M0 118 C 220 96 460 126 700 106 C 940 90 1180 122 1440 100 L1440 130 L0 130 Z" />
      <Journey />
      <Skills />
      <DuneDivider background="var(--bg-alt2)" fill="var(--bg-alt)"
        d="M0 104 C 220 126 460 92 700 116 C 940 128 1180 96 1440 112 L1440 130 L0 130 Z" />
      <Projects />
      <Certs onOpen={openLightbox} />
      <Lightbox {...lightbox} onClose={closeLightbox} />
      <Contact />
      <Footer />
    </>
  )
}
