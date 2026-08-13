const services = [
  "Home Visits",
  "Dog Walking",
  "Overnight Pet Sitting",
  "Cat Care",
  "Exotic Animal Care",
  "Medication & Special Care"
];

const testimonials = [
  {
    quote: "Placeholder for real client testimonial",
    name: "Client Name",
    petName: "Pet Name",
    featured: true
  },
  {
    quote: "Placeholder for real client testimonial",
    name: "Client Name",
    petName: "Pet Name",
    featured: false
  },
  {
    quote: "Placeholder for real client testimonial",
    name: "Client Name",
    petName: "Pet Name",
    featured: false
  },
  {
    quote: "Placeholder for real client testimonial",
    name: "Client Name",
    petName: "Pet Name",
    featured: false
  }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar container" id="top">
        <a href="#top" className="brand-mark" aria-label="Kypseli Pet Sitting home">
          <span className="brand-icon">K</span>
          <span>Kypseli Pet Sitting</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#feedback">Client Feedback</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="button button-primary">
          Book a Meet &amp; Greet
        </a>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <h1>Professional pet care, backed by veterinary expertise.</h1>
          <p className="lead">
            With Veterinary Technician training, a degree in Zoology, and years of hands-on experience caring for dogs, cats and exotic animals across Athens.
          </p>
          <div className="cta-row">
            <a href="#contact" className="button button-primary">
              Book a Meet &amp; Greet
            </a>
            <a href="#services" className="button button-secondary">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/melissanthi-dog.png" alt="Melissanthi with dog" />
        </div>
      </section>

      <section className="credentials-strip" id="credentials">
        <div className="container">
          <div className="credentials-content">
            <div className="credential-item">
              <span className="credential-label">Veterinary Technician</span>
            </div>
            <div className="credential-divider" />
            <div className="credential-item">
              <span className="credential-label">BSc Zoology</span>
            </div>
            <div className="credential-divider" />
            <div className="credential-item">
              <span className="credential-label">Years of hands-on care</span>
            </div>
            <div className="credential-divider" />
            <div className="credential-item">
              <span className="credential-label">Dogs · Cats · Exotic Animals</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about section-spacing" id="about">
        <div className="container about-inner">
          <div className="about-image">
            <img src="/images/melissanthi-vet.jpg" alt="Melissanthi" />
          </div>
          <div className="about-copy">
            <h2>Veterinary training meets hands-on care</h2>
            <p>
              Melissanthi brings a unique combination of professional expertise and genuine care to every pet she meets. Her training as a Veterinary Technician and degree in Zoology give her deep insight into animal health and behavior, while her years of hands-on experience across Athens have taught her what every individual pet needs to feel safe and loved.
            </p>
            <p>
              Whether it&apos;s a daily walk, a home visit, or overnight care, she provides attentive, calm, and knowledgeable support for dogs, cats, and exotic animals.
            </p>
          </div>
        </div>
      </section>

      <section className="services section-spacing" id="services">
        <div className="container">
          <h2>Services</h2>
          <div className="service-list" aria-label="Available pet care services">
            {services.map((service) => (
              <div key={service} className="service-item">
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reasons container section-spacing">
      </section>

      <section className="testimonials section-spacing" id="feedback">
        <div className="container">
          <h2>Trusted by pets. Recommended by their humans.</h2>
          <p className="testimonials-intro">Real client feedback coming soon.</p>

          <div className="testimonial-layout">
            {testimonials.map((item, index) => (
              <figure
                key={`${item.name}-${index}`}
                className={`testimonial-item ${item.featured ? "featured" : ""}`}
              >
                <blockquote>{item.quote}</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.petName}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="booking section-spacing" id="contact">
        <div className="container booking-inner">
          <div className="booking-copy">
            <h2>Let&apos;s meet first.</h2>
            <p>
              A Meet & Greet is the best way to start. We&apos;ll meet, discuss your pet&apos;s routines and needs, and make sure they feel comfortable with me before we get started.
            </p>
            <div className="contact-methods">
              <a href="https://wa.me/306912345678" target="_blank" rel="noreferrer" className="button button-primary">
                Book a Meet &amp; Greet
              </a>
              <a href="https://wa.me/306912345678" target="_blank" rel="noreferrer" className="button button-secondary">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <a href="#top" className="brand-mark footer-brand">
              <span className="brand-icon">K</span>
              <span>Kypseli Pet Sitting</span>
            </a>
            <p>Athens, Greece</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#feedback">Client Feedback</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="socials" aria-label="Social links">
            <a href="https://wa.me/306912345678" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:hello@kypselipetsitting.com">Email</a>
            <a href="#" aria-label="Instagram placeholder">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
