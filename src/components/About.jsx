import { developer, about } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          {/* Left — section label + heading */}
          <div className="about__left">
            <p className="section__label">About</p>
            <h2 className="section__heading">
              Building for the web,<br />on purpose.
            </h2>

            {/* Stats row */}
            <div className="about__stats">
              
              <div className="about__stat">
                <span className="about__stat-num">4+</span>
                <span className="about__stat-label">Years experience</span>
              </div>

              <div className="about__stat">
                <span className="about__stat-num">30+</span>
                <span className="about__stat-label">Projects shipped</span>
              </div>

              <div className="about__stat">
                <span className="about__stat-num">12+</span>
                <span className="about__stat-label">Happy clients</span>
              </div>

            </div>
          </div>

          {/* Right — bio paragraphs */}
          <div className="about__right">
            {about.bio.map((para, i) => (
              <p key={i} className="about__para">{para}</p>
            ))}

            <a
              href={`mailto:${developer.email}`}
              className="about__cta"
            >
              {developer.email} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}