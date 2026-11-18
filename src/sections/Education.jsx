import { FiAward, FiArrowUpRight } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import SectionHeader from "./SectionHeader";
import { education, achievements } from "../data";

const Education = () => (
  <section id="education" className="section">
    <div className="container">
      <SectionHeader index="05" eyebrow="Education & achievements" title="Background" />
      <div className="edu__grid">
        <div className="card reveal">
          <h3 className="card__title"><LuGraduationCap /> Education</h3>
          <ul className="edu__list">
            {education.map((e) => (
              <li key={e.degree}>
                <div>
                  <p className="edu__degree">{e.degree}</p>
                  <p className="muted small">{e.school}</p>
                </div>
                <div className="edu__right">
                  <span className="mono small">{e.year}</span>
                  <span className="muted small">{e.score}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card reveal">
          <h3 className="card__title"><FiAward /> Achievements & more</h3>
          <ul className="ach__list">
            {achievements.map((a) => (
              <li key={a.title}>
                <p className="edu__degree">
                  {a.href ? (
                    <a href={a.href} target="_blank" rel="noreferrer">
                      {a.title} <FiArrowUpRight />
                    </a>
                  ) : (
                    a.title
                  )}
                </p>
                <p className="muted small">{a.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
