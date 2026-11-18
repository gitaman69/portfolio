import { FiArrowUpRight, FiGithub, FiCheck, FiZap, FiFileText, FiMapPin, FiBarChart2, FiPackage } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { featuredProjects, otherProjects } from "../data";

/** Lightweight illustrative mockups so the cards don't depend on screenshots. */
const Mockup = ({ kind }) =>
  kind === "electric" ? (
    <div className="mock mock--electric" aria-hidden="true">
      <div className="mock__phone">
        <div className="mock__map">
          <span className="pin pin--1"><FiZap /></span>
          <span className="pin pin--2"><FiZap /></span>
          <span className="pin pin--3"><FiZap /></span>
          <span className="pin pin--me"><FiMapPin /></span>
          <svg className="mock__route" viewBox="0 0 200 260" preserveAspectRatio="none">
            <path d="M60 220 C 90 170, 40 130, 110 100 S 150 40, 140 30" />
          </svg>
        </div>
        <div className="mock__sheet">
          <div className="mock__sheet-title">Fast charger · 2.4 km</div>
          <div className="mock__sheet-row"><span>60 kW CCS2</span><span className="ok">Available</span></div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mock mock--bill" aria-hidden="true">
      <div className="mock__window">
        <div className="mock__bar"><i /><i /><i /></div>
        <div className="mock__body">
          <div className="mock__kpis">
            <div><FiFileText /><b>₹48.2K</b><small>Sales</small></div>
            <div><FiPackage /><b>312</b><small>Stock</small></div>
            <div><FiBarChart2 /><b>+18%</b><small>Growth</small></div>
          </div>
          <div className="mock__chart">
            {[40, 65, 50, 80, 60, 92, 74].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
          </div>
        </div>
      </div>
    </div>
  );

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <SectionHeader
        index="03"
        eyebrow="Projects"
        title="Things I've built"
        sub="Products I designed, built and shipped on my own."
      />

      <div className="featured">
        {featuredProjects.map((p, i) => (
          <article className={`card project reveal ${i % 2 ? "project--flip" : ""}`} key={p.name}>
            <div className={`project__visual project__visual--${p.accent}`}>
              <Mockup kind={p.accent} />
            </div>
            <div className="project__body">
              <div className="project__meta">
                <span className="badge badge--live">{p.badge}</span>
                <span className="muted mono small">{p.period}</span>
              </div>
              <h3 className="project__name">{p.name}</h3>
              <p className="project__tagline">{p.tagline}</p>
              <p className="project__desc">{p.description}</p>
              <ul className="project__highlights">
                {p.highlights.map((h) => (
                  <li key={h}><FiCheck className="accent" /> {h}</li>
                ))}
              </ul>
              <div className="tags">
                {p.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="project__links">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn ${l.primary ? "btn--primary" : "btn--ghost"} btn--sm`}
                  >
                    {l.label === "Google Play" ? <FaGooglePlay /> : l.label === "GitHub" ? <FiGithub /> : null}
                    {l.label}
                    <FiArrowUpRight />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <h3 className="subhead reveal">More projects</h3>
      <div className="mini-grid">
        {otherProjects.map((p) => (
          <article className="card mini reveal" key={p.name}>
            <div className="mini__top">
              <h4>{p.name}</h4>
              <div className="mini__links">
                <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`}><FiGithub /></a>
                <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.name} live demo`}><FiArrowUpRight /></a>
              </div>
            </div>
            <p>{p.description}</p>
            <div className="tags tags--small">
              {p.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
