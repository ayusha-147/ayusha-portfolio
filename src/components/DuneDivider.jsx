export default function DuneDivider({ background, fill, d }) {
  return (
    <div className="dune-divider" aria-hidden="true" style={{ background }}>
      <svg viewBox="0 0 1440 96" preserveAspectRatio="none">
        <path d={d} fill={fill} />
      </svg>
    </div>
  )
}
