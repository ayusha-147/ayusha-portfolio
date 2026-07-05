const STOPS = [
  {
    when: 'Dec 2025 – Feb 2026',
    title: (
      <>Quality Assurance Training <span style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.12em', color: 'var(--pass)', verticalAlign: 'middle' }}>✓ CERTIFIED</span></>
    ),
    where: 'Leapfrog Connect · Kathmandu',
    points: [
      'Structured training in software testing and QA workflows within Agile environments',
      'Test plan preparation, test case design, execution, and defect tracking in JIRA',
      'API testing with Postman and UI automation fundamentals with Cypress',
      'Hands-on grounding in SDLC, STLC, and the full bug life cycle',
    ],
  },
  {
    when: 'Jun 2025 – Jan 2026',
    title: 'Project Support Trainee',
    where: 'Digischool Global',
    points: [
      'Facilitated school workshops introducing AI, IoT, and digital learning tools',
      'Practiced explaining technical concepts to non-technical audiences, the same clarity that makes a defect report actionable',
    ],
  },
  {
    when: 'Jan 2025 – Aug 2025',
    title: <>Marketing, Outreach &amp; Social Media</>,
    where: 'UbuCon Asia 2025 · GNOME Nepal',
    points: [
      'Helped plan and organize an international open-source conference in Kathmandu',
      'Coordination, communication, and community outreach within a distributed team',
    ],
  },
  {
    when: 'Feb 2022 – Present',
    title: <>B.Sc. Computer Science &amp; IT</>,
    where: 'Padmakanya Multiple Campus, Tribhuvan University',
    points: [
      'Foundation in programming, databases, and software engineering that sharpens how I test',
    ],
  },
]

export default function Journey() {
  return (
    <section className="section journey" id="journey">
      <div className="inner">
        <span className="eyebrow reveal">02 · Experience</span>
        <h2 className="reveal">The route so far</h2>
        <div className="timeline">
          {STOPS.map((stop, i) => (
            <div className="stop reveal" key={i}>
              <span className="when">{stop.when}</span>
              <h3>{stop.title}</h3>
              <p className="where">{stop.where}</p>
              <ul>
                {stop.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
