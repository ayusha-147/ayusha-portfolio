const FACTS = [
  { k: 'Role', v: 'Junior QA Engineer, manual first with automation growing' },
  { k: 'Education', v: 'B.Sc. CSIT, Padmakanya Multiple Campus, Tribhuvan University' },
  { k: 'Base', v: <>Kathmandu, Nepal · open to remote &amp; freelance work</> },
  { k: 'Community', v: 'Open-source contributor · UbuCon Asia 2025 · GNOME Nepal' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="inner">
        <div className="about-grid">
          <div className="reveal">
            <span className="eyebrow">01 · About</span>
            <h2>Testing is exploration</h2>
            <p>My instinct is to question assumptions. While everyone else focuses on what <strong>should</strong> happen, I map out what <strong>could</strong> go wrong, and document it clearly enough that it actually gets fixed.</p>
            <p>I work the QA process end-to-end: analyzing requirements, designing structured test cases, executing manual and exploratory passes, and logging defects with full reproducibility: severity, priority, steps, expected versus actual behavior.</p>
            <p>Through Leapfrog Connect's QA Foundations program I've applied this on real platforms, including API testing with Postman and UI automation with Cypress. As a computer science student, I also understand how software is built, so I know where the likely failure points are before I open the application.</p>
          </div>
          <div className="fact-list reveal">
            {FACTS.map(f => (
              <div className="fact" key={f.k}>
                <span className="k">{f.k}</span>
                <span className="v">{f.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
