import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { profile } from "../data";

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <p className="muted small">
        © {new Date().getFullYear()} {profile.name}. Designed & built with React.
      </p>
      <div className="footer__links">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
        <a href="#home" aria-label="Back to top" className="footer__top"><FiArrowUp /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
