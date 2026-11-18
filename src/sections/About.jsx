import { FiCpu, FiDatabase, FiSmartphone, FiSearch } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { about } from "../data";

const FOCUS = [
  { icon: <FiCpu />, title: "Conversational AI", text: "Voice & text agents backed by LLMs, serving real users on government portals." },
  { icon: <FiSearch />, title: "Search & RAG", text: "Hybrid keyword + semantic retrieval on Elasticsearch, tuned for accuracy and latency." },
  { icon: <FiDatabase />, title: "Full-stack systems", text: "Node, Express, Python, Postgres — APIs and data pipelines that stay up." },
  { icon: <FiSmartphone />, title: "Product & mobile", text: "React and React Native apps shipped end to end, all the way to the Play Store." },
];

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <SectionHeader index="01" eyebrow="About" title="Engineer who ships AI to production" />
      <div className="about__grid">
        <div className="about__text reveal">
          {about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="focus-grid">
          {FOCUS.map((f) => (
            <div className="card focus reveal" key={f.title}>
              <div className="focus__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
