const REPORTS = [
  {
    code: 'LMS-01 · BUILD + QA',
    status: 'ONGOING QA',
    statusClass: 'status wip',
    scope: 'Learning platform · Courses · Assessments · Enrollment',
    title: 'Learning Management System',
    body: 'Ongoing professional project where I work both sides of the build: shaping requirements and user workflows, building frontend screens, and configuring course content, then running continuous QA passes across lesson upload, quiz and grading flows, and role-based enrollment. Client details kept confidential.',
    deliv: ['Workflow Specs', 'Frontend UI', 'Test Cases', 'Regression Cycles'],
  },
  {
    code: 'TR-01 · MANUAL QA',
    status: 'PASS',
    scope: 'Employee management · Onboarding · Leave · Payroll',
    title: 'Employee Management System',
    body: 'Validated core employee workflows before release. Reviewed requirements, prepared a complete test plan, and designed 40+ structured test cases with requirement traceability, then executed manual and exploratory passes. Defects logged in JIRA with severity, priority, and full reproduction steps.',
    deliv: ['Test Plan', '40+ Test Cases', 'Defect Report', 'JIRA'],
  },
  {
    code: 'TR-02 · QA AUDIT',
    status: 'PASS',
    scope: 'Web application · Functional · UI/UX · Performance',
    title: <>Website Testing &amp; QA Audit</>,
    body: 'End-to-end audit of a live web application: functional testing, UI/UX review, and basic performance checks. Executed documented test cases and delivered a summary report with prioritized findings.',
    deliv: ['Test Plan', 'Executed Cases', 'Summary Report'],
  },
  {
    code: 'TR-03 · AUTOMATION',
    status: 'PASS',
    scope: 'UI · API · Performance',
    title: 'Automation Practice Suite',
    body: 'Built automation fundamentals through structured exercises: UI test execution with Cypress, API validation of responses and status codes with Postman, and performance testing concepts with JMeter.',
    deliv: ['Cypress', 'Postman', 'JMeter'],
  },
]

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="inner">
        <span className="eyebrow reveal">04 · Featured work</span>
        <h2 className="reveal">Test reports from the field</h2>
        <p className="lede reveal">Each project run like a real QA cycle: scoped, executed, and signed off with documentation a developer can act on without follow-up questions.</p>
        <div className="report-grid">
          {REPORTS.map((r, i) => (
            <article className="report reveal" key={i}>
              <div className="report-head"><span>{r.code}</span><span className={r.statusClass || 'status pass'}>{r.status}</span></div>
              <div className="report-body">
                <span className="scope">{r.scope}</span>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
                <div className="deliv">
                  {r.deliv.map((d, j) => (
                    <span key={j}>{d}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
