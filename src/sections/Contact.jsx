import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck } from "react-icons/fi";
import { profile } from "../data";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact card reveal">
          <p className="eyebrow"><span className="mono accent">06</span> Contact</p>
          <h2 className="contact__title">
            Let's build something <span className="gradient-text">useful</span>.
          </h2>
          <p className="section-sub">
            Open to conversations about AI products, search, and full-stack engineering. My inbox is always open.
          </p>
          <div className="contact__actions">
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              <FiMail /> Say hello
            </a>
            <button type="button" className="btn btn--ghost" onClick={copy}>
              {copied ? <FiCheck /> : <FiCopy />} {copied ? "Copied!" : profile.email}
            </button>
          </div>
          <div className="contact__social">
            <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub /> gitaman69</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> aman-bhakar</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
