"use client";

const milestones = [
  {
    title: "Zoology — University of St Andrews, Scotland",
    description: "Academic background in animal biology and behaviour."
  },
  {
    title: "Veterinary Technician",
    description: "Hands-on clinical experience in veterinary clinics and animal hospitals."
  },
  {
    title: "ANIMA Wildlife Rehabilitation",
    description: "Volunteer experience with ANIMA, Greece's wildlife care and rehabilitation centre, supporting the care and recovery of wild animals."
  },
  {
    title: "Wildlife, Research & Exotic Animals",
    description: "Experience across wildlife rehabilitation, research and animal-care environments."
  },
  {
    title: "2+ Years Pet Sitting in Athens",
    description: "Built through word of mouth, recommendations and returning clients."
  },
  {
    title: "Always Learning",
    description: "Currently continuing professional development in Veterinary Anaesthesia & Analgesia at the University of Edinburgh."
  }
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <header className="topbar container">
        <a href="/" className="brand-mark" aria-label="Kypseli Pet Sitting home">
          <span className="brand-name">Kypseli</span>
          <span className="brand-subtitle">PET SITTING</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/#services">Services</a>
          <a href="/#reviews">Reviews</a>
          <a href="/#booking">Book</a>
        </nav>

        <a href="/#booking" className="button button-primary">
          Book a Consultation
        </a>
      </header>

      <section className="about-hero container">
        <div className="about-hero-copy">
          <h1>Hi, I&apos;m Melissanthi.</h1>
          <h2>Animals have shaped almost every chapter of my life.</h2>
        </div>
        <div className="about-hero-image">
          <img src="/images/melissanthi-vet.JPG" alt="Melissanthi" />
        </div>
      </section>

      <section className="about-content section-spacing">
        <div className="container">
          <div className="content-block">
            <p>
              My journey started at the <strong>University of St Andrews in Scotland, UK, where I studied Zoology</strong>. Since then, I&apos;ve worked across <strong>veterinary clinics, animal hospitals, wildlife rehabilitation and research environments</strong>, caring for everything from family pets to wildlife and exotic animals.
            </p>

            <p>
              I later trained and worked as a <strong>Veterinary Technician</strong>, gaining hands-on experience in patient care, diagnostics, blood collection and inpatient monitoring.
            </p>

            <p className="highlight-paragraph">
              But one of the most important things I&apos;ve learned is simple:
            </p>

            <h3>Every animal is different.</h3>

            <p>
              Some want to be your best friend immediately. Others need time and space. My job is to understand their routine, personality and needs so they can feel safe and comfortable while their humans are away.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="content-block">
            <h2>From veterinary care to pet sitting in Athens</h2>

            <p>
              After moving to Athens, I began pet sitting alongside my veterinary work. What started through recommendations grew into a wonderful network of pets and humans across the city.
            </p>

            <p>
              For more than <strong>two years</strong>, I&apos;ve been trusted to care for dogs, cats and exotic animals, with many becoming familiar faces I get to see again and again.
            </p>
          </div>
        </div>
      </section>

      <section className="milestones section-spacing">
        <div className="container">
          <h2>Professional background</h2>
          <div className="milestones-list">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-item">
                <h4>{milestone.title}</h4>
                <p>{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-ending section-spacing">
        <div className="container">
          <div className="content-block">
            <h2>Trusted by lovely pets. Recommended by their humans.</h2>
            <p>
              For me, great pet sitting is more than feeding and walks. It&apos;s getting to know your pet, noticing the little things and making sure they feel completely at home while you&apos;re away.
            </p>
            <div className="author-signature">
              <strong>Melissanthi Kontoleon</strong>
              <span>Pet Sitter · Veterinary Technician · Zoology Graduate</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="booking">
        <div className="container footer-content">
          <div className="footer-section">
            <a href="/" className="brand-mark footer-brand">
              <span className="brand-name">Kypseli</span>
              <span className="brand-subtitle">PET SITTING</span>
            </a>
            <p className="footer-description">Professional pet care in Athens.</p>
            <p className="footer-description">Based in Kypseli, caring for pets across Central Athens.</p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <div className="contact-item">
              <p className="contact-label">WhatsApp / Viber</p>
              <a href="https://wa.me/306980770839" target="_blank" rel="noreferrer" className="contact-link">
                +30 698 077 0839
              </a>
            </div>
            <div className="contact-item">
              <p className="contact-label">Email</p>
              <a href="mailto:sommers.mel@gmail.com" className="contact-link">
                sommers.mel@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Navigation</h3>
            <nav className="footer-nav" aria-label="Footer navigation">
              <a href="/about">About</a>
              <a href="/#services">Services</a>
              <a href="/#reviews">Reviews</a>
              <a href="/#booking">Book a Consultation</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Kypseli Pet Sitting. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
