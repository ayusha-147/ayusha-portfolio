export default function Lightbox({ open, src, alt, onClose }) {
  return (
    <div
      className={open ? 'lightbox open' : 'lightbox'}
      id="lightbox"
      role="dialog"
      aria-label="Full size image view"
      onClick={onClose}
    >
      <img src={src} alt={alt} id="lightboxImg" />
    </div>
  )
}
