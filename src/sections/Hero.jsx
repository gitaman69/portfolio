import Typewriter from "typewriter-effect";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import avatar from "../Assets/ReadyPlayerMe-Avatar-modified.png";
import { profile, stats } from "../data";
import { useCountUp } from "../hooks";

const Stat = ({ value, suffix, label }) => {
  const [ref, n] = useCountUp(value);
  return (
    <div className="stat" ref={ref}>
      <div className="stat__value">
        {n.toLocaleString("en-IN")}
        <span className="accent">{suffix}</span>
      </div>
      <div className="stat__label">{label}</div>
    </div>
  );
};

const Hero = () => (
  <section id="home" className="hero">
    <div className="container hero__grid">
      <div className="hero__copy">
        <p className="hero__status reveal">
          <span className="pulse" aria-hidden="true" />
          {profile.role}
        </p>

        <h1 className="hero__title reveal">
          Hi, I'm <span className="gradient-text">{profile.name}</span>
        </h1>

        <div className="hero__typed reveal" aria-label={profile.roles.join(", ")}>
          <span className="mono muted">&gt;&nbsp;</span>
          <Typewriter
            options={{ strings: profile.roles, autoStart: true, loop: true, delay: 55, deleteSpeed: 30 }}
          />
        </div>

        <p className="hero__intro reveal">{profile.intro}</p>

        <div className="hero__actions reveal">
          <a href="#projects" className="btn btn--primary">
            View my work <FiArrowRight />
          </a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
        </div>

        <div className="hero__meta reveal">
          <span><FiMapPin /> {profile.location}</span>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
        </div>
      </div>

      <div className="hero__visual reveal">
        <div className="avatar">
          <div className="avatar__ring" aria-hidden="true" />
          <img src={avatar} alt={`${profile.name} avatar`} className="avatar__img" />
          <div className="chip chip--float chip--a"><span className="dot dot--green" /> RAG · Elasticsearch</div>
          <div className="chip chip--float chip--b"><span className="dot dot--blue" /> React Native</div>
          <div className="chip chip--float chip--c"><span className="dot dot--amber" /> LLM Agents</div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="stats reveal">
        {stats.map((s) => <Stat key={s.label} {...s} />)}
      </div>
    </div>
  </section>
);

export default Hero;
