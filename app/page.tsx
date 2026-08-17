"use client";

import { useState } from "react";

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

  const [formData, setFormData] = useState({
    name: "",
    petName: "",
    animalType: "",
    rating: 5,
    review: ""
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = {
      id: Date.now().toString(),
      ...formData,
      approved: false
    };
    setReviews([...reviews, newReview]);
    setFormData({ name: "", petName: "", animalType: "", rating: 5, review: "" });
    alert("Thank you! Your review will appear after approval.");
  };

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
          <a href="#booking">Book</a>
        </nav>

        <a href="#booking" className="button button-primary">
          Book a Consultation
        </a>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <h1>Melissanthi Kontoleon</h1>
          <p className="hero-subtitle">Veterinary Technician with a degree in Zoology from the University of St Andrews.</p>
          <p className="lead">
            Professional, personalised care for dogs, cats and exotic animals across Athens.
          </p>
          <div className="cta-row">
            <a href="#booking" className="button button-primary">
              Book a Consultation
            </a>
            <a href="#services" className="button button-secondary">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/melissanthi-dog.jpg" alt="Melissanthi with dog" />
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
              <p>If Melissanthi has cared for your animal, we&apos;d love to hear about your experience.</p>
            </div>
          )}

          <div className="leave-review-cta">
            <button 
              onClick={() => {
                const form = document.querySelector('.review-form') as HTMLElement;
                form?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="button button-secondary"
            >
              Leave a Review
            </button>
          </div>

          <form onSubmit={handleReviewSubmit} className="review-form">
            <h3>Leave a Review</h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="petName">Pet Name</label>
                <input
                  id="petName"
                  type="text"
                  value={formData.petName}
                  onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                  required
                  placeholder="Your pet's name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="animalType">Animal Type</label>
                <select
                  id="animalType"
                  value={formData.animalType}
                  onChange={(e) => setFormData({ ...formData, animalType: e.target.value })}
                  required
                >
                  <option value="">Select type</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Exotic">Exotic</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <select
                  id="rating"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                >
                  <option value="5">5 stars</option>
                  <option value="4">4 stars</option>
                  <option value="3">3 stars</option>
                  <option value="2">2 stars</option>
                  <option value="1">1 star</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="review">Review</label>
              <textarea
                id="review"
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                required
                placeholder="Tell us about your experience..."
                rows={5}
              />
            </div>

            <button type="submit" className="button button-primary">
              Submit Review
            </button>
          </form>
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
              <a href="#services">Services</a>
              <a href="#reviews">Reviews</a>
              <a href="#booking">Book a Consultation</a>
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
