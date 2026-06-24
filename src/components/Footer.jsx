import { developer } from "../data/portfolio";
import logo from "../assets/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">
          <img src={logo} alt="Portfolio logo" className="footer__logo-img" />
        </span>

        <p className="footer__copy">
          © {year} {developer.name}. Built with React.
        </p>

        <div className="footer__links">
          <a
            href={developer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            GitHub
          </a>
          <a
            href={developer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>
          <a href={`mailto:${developer.email}`} className="footer__link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
