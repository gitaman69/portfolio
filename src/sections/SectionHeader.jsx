const SectionHeader = ({ index, eyebrow, title, sub }) => (
  <div className="section-header reveal">
    <p className="eyebrow">
      <span className="mono accent">{index}</span> {eyebrow}
    </p>
    <h2 className="section-title">{title}</h2>
    {sub && <p className="section-sub">{sub}</p>}
  </div>
);

export default SectionHeader;
