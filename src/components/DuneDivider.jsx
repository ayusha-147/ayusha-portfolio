export default function DuneDivider({ background, fill, d }) {
  return (
    <div className="dune-divider" aria-hidden="true" style={{ background }}>
      <svg viewBox="0 0 1440 130" preserveAspectRatio="none">
        <path d="M0 58 C 160 28 340 74 540 48 C 760 24 940 70 1140 42 C 1280 26 1380 56 1440 40 L1440 130 L0 130 Z" fill="var(--dune1)" opacity=".35" />
        <path d="M0 92 C 200 62 400 104 620 78 C 840 56 1020 102 1220 76 C 1330 62 1400 92 1440 74 L1440 130 L0 130 Z" fill="var(--dune2)" opacity=".65" />
        <path d={d} fill={fill} />
      </svg>
    </div>
  )
}
