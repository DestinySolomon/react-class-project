import { testimonials } from "../data/portfolio";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <p className="section__label">Testimonials</p>
        <h2 className="section__heading">What people say.</h2>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              {/* Large opening quote mark — decorative */}
              <span className="testimonial-card__quote" aria-hidden="true">"</span>

              <p className="testimonial-card__text">{t.text}</p>

              <div className="testimonial-card__author">
                {/* Avatar — initials circle */}
                <div className="testimonial-card__avatar">{t.avatar}</div>
                <div className="testimonial-card__meta">
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}