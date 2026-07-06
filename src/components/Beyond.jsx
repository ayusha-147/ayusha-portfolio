export default function Beyond() {
  return (
    <main className="beyond">
      <a className="beyond-back" href="#/">&larr; Back to the dunes</a>
      <svg className="beyond-balloon" viewBox="0 0 60 90" aria-hidden="true">
        <path d="M30 4c-14 0-24 10-24 24 0 16 16 26 20 34h8c4-8 20-18 20-34 0-14-10-24-24-24z" />
        <path d="M26 66h8l-2 10h-4z" opacity=".7" />
        <rect x="25" y="78" width="10" height="8" rx="2" />
      </svg>
      <div className="beyond-head">
        <span className="eyebrow">Off the clock</span>
        <h2 className="beyond-title">hobbies, pressed on vinyl</h2>
        <p className="beyond-lede">The balloon lands at a little record shelf. Two albums that never leave the turntable:</p>
      </div>
      <div className="album-row">
        <article className="album">
          <div className="vinyl" aria-hidden="true"></div>
          <div className="album-cover">
            <div className="cover-canvas canvas-music" aria-hidden="true"></div>
            <div className="cover-text"><strong>on repeat</strong><span>music · always listening</span></div>
          </div>
        </article>
        <article className="album">
          <div className="vinyl" aria-hidden="true"></div>
          <div className="album-cover">
            <div className="cover-canvas canvas-art" aria-hidden="true"></div>
            <div className="cover-text"><strong>in colors</strong><span>art · made &amp; admired</span></div>
          </div>
        </article>
      </div>
      <p className="beyond-note">Can't play a single note, but the queue is curated with care. And there's always a sketch half-finished somewhere.</p>
    </main>
  )
}
