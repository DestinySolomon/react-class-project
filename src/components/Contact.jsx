import { useState } from "react";
import { developer } from "../data/portfolio";

export default function Contact() {
  // Each field is its own piece of state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  // Single handler for all inputs — reads e.target.name to know which field
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // On submit — simulate sending (replace with real API call in production)
  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    // Simulate a network request with setTimeout
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="section__label">Contact</p>
        <h2 className="section__heading">Let's work together.</h2>

        <div className="contact__grid">
          {/* Left — copy */}
          <div className="contact__left">
            <p className="contact__intro">
              I'm currently available for freelance projects and full-time
              roles. If you have something in mind, let's talk.
            </p>

            <div className="contact__details">
              <a href={`mailto:${developer.email}`} className="contact__detail">
                <span className="contact__detail-label">Email</span>
                <span className="contact__detail-value">{developer.email}</span>
              </a>
              <a href={developer.github} target="_blank" rel="noopener noreferrer" className="contact__detail">
                <span className="contact__detail-label">GitHub</span>
                <span className="contact__detail-value">github.com/alexmorgan</span>
              </a>
              <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" className="contact__detail">
                <span className="contact__detail-label">LinkedIn</span>
                <span className="contact__detail-value">linkedin.com/in/alexmorgan</span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact__right">
            {status === "sent" ? (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <p>Message sent. I'll be in touch shortly.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form__row">
                  <div className="form__field">
                    <label className="form__label" htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form__input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form__field">
                    <label className="form__label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form__input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form__field">
                  <label className="form__label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form__input form__textarea"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}