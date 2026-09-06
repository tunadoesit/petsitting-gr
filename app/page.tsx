"use client";

import { useState } from "react";
import CarePlan from "./CarePlan";

const services = [
  {
    title: "Dog Sitting",
    description: "Companionship, walks, feeding and personalised care while you&apos;re away."
  },
  {
    title: "Cat Sitting",
    description: "In-home care, feeding, litter care and lots of love and attention."
  },
  {
    title: "Exotic Animal Care",
    description: "Specialised care for birds, reptiles and other exotic pets."
  },
  {
    title: "Home Visits",
    description: "Scheduled check-ins, feeding, medications* and companionship."
  },
  {
    title: "Overnight / Extended Care",
    description: "Longer stays tailored to your pet's needs."
  },
  {
    title: "Initial Consultation",
    description: "Let's get to know your pet and their routine before care begins."
  }
];

export default function HomePage() {
  const [reviews, setReviews] = useState<Array<{
    id: string;
    name: string;
    petName: string;
    animalType: string;
    rating: number;
    review: string;
    approved: boolean;
  }>>([]);

  const approvedReviews = reviews.filter(r => r.approved);
  const currentYear = new Date().getFullYear();

  return (
    <main className="page-shell">
      <header className="topbar container" id="top">
        <a href="/" className="brand-mark" aria-label="Kypseli Pet Sitting home">
          <span className="brand-name">Kypseli</span>
          <span className="brand-subtitle">PET SITTING</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
        </nav>

      </header>

      <section className="hero container">
        <div className="hero-copy">
          <h1>Mel Sommers</h1>
          <p className="hero-subtitle">Veterinary Technician with a degree in Zoology from the University of St Andrews.</p>
          <p className="lead">
            Professional, personalised care for dogs, cats and exotic animals across Athens.
          </p>
          <div className="cta-row">
            <a href="#services" className="button button-secondary">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/melissanthi-dog.jpg" alt="Mel Sommers with dog" />
        </div>
      </section>

      <section className="reviews section-spacing" id="reviews">
        <div className="container">
          <p className="section-label">REVIEWS</p>
          <h2>Trusted by pets. Recommended by their humans.</h2>

          {approvedReviews.length > 0 ? (
            <div className="reviews-grid">
              {approvedReviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-rating">
                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                  </div>
                  <p className="review-text">{review.review}</p>
                  <div className="review-meta">
                    <strong>{review.name}</strong>
                    <span>{review.petName} · {review.animalType}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="reviews-empty-state">
              <p><strong>Have we looked after your pet?</strong></p>
              <p>If Mel has cared for your animal, we&apos;d love to hear about your experience.</p>
            </div>
          )}

        </div>
      </section>

      <section className="services section-spacing" id="services">
        <div className="container">
          <h2>Services</h2>
          <div className="service-list" aria-label="Available pet care services">
            {services.map((service) => (
              <div key={service.title} className="service-item">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <p className="services-footnote">*Medications administered according to owner/veterinary instructions and agreed care requirements.</p>
        </div>
      </section>

      <CarePlan />

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
              <p className="contact-link">Coming soon!</p>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Navigation</h3>
            <nav className="footer-nav" aria-label="Footer navigation">
              <a href="/about">About</a>
              <a href="#services">Services</a>
              <a href="#reviews">Reviews</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Kypseli Pet Sitting. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
