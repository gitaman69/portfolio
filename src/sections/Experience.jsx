import SectionHeader from "./SectionHeader";
import { experience } from "../data";

const Experience = () => (
  <section id="experience" className="section">
    <div className="container">
      <SectionHeader
        index="02"
        eyebrow="Experience"
        title="Where I've been building"
        sub="Production AI and search infrastructure at Sarv."
      />
      <ol className="timeline">
        {experience.map((job) => (
          <li className={`timeline__item reveal ${job.current ? "is-current" : ""}`} key={job.title}>
            <span className="timeline__dot" aria-hidden="true" />
            <div className="card job">
              <div className="job__head">
                <div>
                  <h3 className="job__title">{job.title}</h3>
                  <p className="job__company">
                    {job.company} <span className="muted">· {job.location}</span>
                  </p>
                </div>
                <span className={`badge ${job.current ? "badge--live" : ""}`}>{job.period}</span>
              </div>
              <ul className="job__points">
                {job.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
              <div className="tags">
                {job.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
