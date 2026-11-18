import SectionHeader from "./SectionHeader";
import { skills } from "../data";

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <SectionHeader index="04" eyebrow="Skills" title="My toolkit" />
      <div className="skills-grid">
        {skills.map((s) => (
          <div className={`card skill-group reveal ${s.group === "AI / ML" ? "skill-group--wide" : ""}`} key={s.group}>
            <h3 className="skill-group__title">{s.group}</h3>
            <div className="tags">
              {s.items.map((i) => <span className="tag tag--lg" key={i}>{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
