import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={show ? 'to-top show' : 'to-top'}
      aria-label="Back to top"
      onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
    </button>
  )
}
