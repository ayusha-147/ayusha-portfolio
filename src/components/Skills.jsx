const SKILL_CARDS = [
  {
    title: 'Testing',
    note: 'The heart of the work: disciplined, repeatable, documented.',
    chips: ['Manual Testing', 'Exploratory', 'Regression', 'Test Case Design', 'Test Plans', 'Bug Reporting'],
  },
  {
    title: <>Tools &amp; Process</>,
    note: 'Tracking, reporting, and collaborating with dev teams.',
    chips: ['JIRA', 'GitHub', 'Test Documentation', 'Agile / Scrum', 'SDLC · STLC'],
  },
  {
    title: <>Automation &amp; API</>,
    note: 'Hands-on through QA training and practice projects.',
    chips: ['Cypress', 'Postman', 'JMeter', 'AI-assisted QA'],
  },
  {
    title: 'Development',
    note: 'Technical foundation that sharpens how I test.',
    chips: ['JavaScript', 'Python', 'SQL', <>HTML &amp; CSS</>, 'Git'],
  },
]

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="inner">
        <span className="eyebrow reveal">03 · Skills</span>
        <h2 className="reveal">What I bring to a team</h2>
        <div className="skill-grid">
          {SKILL_CARDS.map((card, i) => (
            <div className="skill-card reveal" key={i}>
              <h3>{card.title}</h3>
              <p className="note">{card.note}</p>
              <div className="chips">
                {card.chips.map((chip, j) => (
                  <span className="chip" key={j}>{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
