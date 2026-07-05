import certUbucon from '../assets/cert-ubucon.jpg'
import certQaTraining from '../assets/cert-qa-training.jpg'
import qaCohort from '../assets/qa-cohort.jpg'

const CERTS = [
  {
    cardClass: 'cert-card reveal',
    img: certUbucon,
    ariaLabel: 'View UbuCon Asia 2025 certificate full size',
    alt: 'Certificate of Appreciation issued to Ayusha Pradhananga for helping organize UbuCon Asia 2025',
    title: 'UbuCon Asia 2025 Organizing Team',
    issuers: [
      <>Certificate of Appreciation · Ubuntu Nepal, GNOME Nepal &amp; UbuCon Asia Committee · Issued Dec 24, 2025</>,
      "Recognized as a team member who helped organize UbuCon Asia 2025 at St. Xavier's College, Kathmandu (Aug 30–31).",
    ],
    verified: true,
    certId: 'ID 553370f2-ad1e-47ec-a5f7-d63e6a7df9ac',
  },
  {
    cardClass: 'cert-card reveal',
    img: certQaTraining,
    ariaLabel: 'View Leapfrog Connect Quality Assurance training certificate full size',
    alt: 'Certificate of Training presented to Ayusha Pradhananga for completing Quality Assurance training conducted by Leapfrog Connect',
    title: 'Quality Assurance Training',
    issuers: [
      'Certificate of Training · Leapfrog Connect · Dec 30, 2025 – Feb 18, 2026',
      'Structured program covering manual testing, test design, JIRA defect workflows, API testing with Postman, and automation fundamentals with Cypress.',
    ],
    verified: true,
    certId: null,
  },
  {
    cardClass: 'cert-card reveal cohort-card',
    img: qaCohort,
    ariaLabel: 'View QA training cohort photo full size',
    alt: 'QA training cohort group photo at Leapfrog Connect, Draper Startup House, Kathmandu',
    title: 'The QA Cohort',
    issuers: [
      'With fellow trainees at Leapfrog Connect, Draper Startup House, Kathmandu, where the training happened, hands-on and in person.',
    ],
    verified: false,
    certId: null,
  },
]

export default function Certs({ onOpen }) {
  return (
    <section className="section certs" id="certs">
      <div className="inner">
        <span className="eyebrow reveal">05 · Credentials</span>
        <h2 className="reveal">Verified certifications</h2>
        <div className="cert-grid">
          {CERTS.map((cert, i) => (
            <article className={cert.cardClass} key={i}>
              <button
                className="cert-thumb"
                data-full={cert.img}
                aria-label={cert.ariaLabel}
                onClick={() => onOpen(cert.img, cert.ariaLabel)}
              >
                <img src={cert.img} alt={cert.alt} loading="lazy" />
              </button>
              <div className="cert-body">
                <h3>{cert.title}</h3>
                {cert.issuers.map((issuer, j) => (
                  <p className="issuer" key={j}>{issuer}</p>
                ))}
                {cert.verified && (
                  <div className="cert-meta">
                    <span className="verified"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>VERIFIED</span>
                    {cert.certId && <span className="cert-id">{cert.certId}</span>}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
