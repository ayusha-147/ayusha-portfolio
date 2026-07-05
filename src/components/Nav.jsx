import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#journey', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Work' },
  { href: '#certs', label: 'Credentials' },
]

export default function Nav({ onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 40)
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'nav scrolled' : 'nav'} id="nav">
      <a className="brand" href="#top">AYUSHA</a>
      <ul className="links">
        {NAV_LINKS.map(link => (
          <li key={link.href}><a href={link.href}>{link.label}</a></li>
        ))}
      </ul>
      <div className="nav-right">
        <button className="theme-toggle" id="themeToggle" aria-label="Toggle light and dark theme" onClick={onToggleTheme}>
          <svg className="icon-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.2" /><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" /></svg>
          <svg className="icon-moon" viewBox="0 0 24 24"><path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7z" /></svg>
        </button>
        <a className="hire" href="#contact">Work with me</a>
      </div>
    </nav>
  )
}
