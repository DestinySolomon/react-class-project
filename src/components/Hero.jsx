import { developer } from "../data/portfolio";
import heroImage from "../assets/man.jpg";

export default function Hero() {
  function scrollToProjects(e) {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToContact(e) {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <p className="hero__label">
          <span className="hero__label-line" />
          Front-End Developer · Lagos, Nigeria
        </p>

        <h1 className="hero__name">
          {developer.name.split(" ").map((word, i) => (
            <span key={i} className="hero__name-word">
              {word}
            </span>
          ))}
        </h1>

        <p className="hero__tagline">{developer.tagline}</p>

        <div className="hero__actions">
          <a
            href="#projects"
            className="btn btn--primary"
            onClick={scrollToProjects}
          >
            View Work
          </a>
          <a
            href="#contact"
            className="btn btn--ghost"
            onClick={scrollToContact}
          >
            Get In Touch
          </a>
        </div>



        <div className="hero__media">
          <img
            src={heroImage}
            alt="Portrait of developer"
            className="hero__image"
          />
        </div>

        <div className="hero__scroll-hint">
          <span className="hero__scroll-line" />


          <span className="hero__scroll-label">scroll</span>

          
        </div>
      </div>

      {/* Large background name — purely decorative */}
      <span className="hero__bg-text" aria-hidden="true">
        {developer.name.split(" ")[0]}
      </span>
    </section>
  );
}
