import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { OpportunityCarousel } from "@/components/opportunity-carousel";

const opportunities = [
  {
    category: "Lucknow",
    title: "Luxury Villas & Commercial",
    description: "A residential property example, shared for visual inspiration.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    alt: "Contemporary home framed by a landscaped garden",
  },
  {
    category: "Dholera",
    title: "Plots & Commercial",
    description: "A land opportunity example. Location and details to be confirmed.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
    alt: "Open green countryside beneath a wide sky",
  },
  {
    category: "Ayodhya",
    title: "Land & Studio Apartments",
    description: "A commercial property example, not a live listing.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern commercial buildings viewed from below",
  },
  {
    category: "Dubai",
    title: "Residential & Commercial",
    description: "An international property example, shared for visual inspiration.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
    alt: "Dubai skyline with modern towers at dusk",
  },
  {
    category: "Uttarakhand",
    title: "Commercial & Plots",
    description: "An Uttarakhand property example, shared for visual inspiration.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
    alt: "Mountain landscape in Uttarakhand",
  },
];

const categories = ["Residential", "Plots & Land", "Commercial", "India & Dubai"];

export default function HomePage() {
  return (
    <main id="main-content">
      <section aria-labelledby="hero-title" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span /> REAL ESTATE CONSULTANT</p>
          <h1 id="hero-title">Beyond Properties. <em>Towards Possibilities.</em></h1>
          <p className="hero-description">Discover properties selected for your lifestyle and investment goals.</p>
          <a className="button button-primary" href="#opportunities">Explore opportunities <span aria-hidden="true">&#8594;</span></a>
          <p className="hero-note">Thoughtful choices. Personal guidance.</p>
        </div>
        <div className="hero-image-wrap">
          <Image
            alt="Sunlit modern home opening onto a quiet outdoor terrace"
            className="hero-image"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 54vw"
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=88"
            unoptimized
          />
          <span className="image-caption">Illustrative imagery</span>
        </div>
      </section>

      <section aria-label="Property categories" className="category-strip section-wrap">
        {categories.map((category, index) => (
          <div className="category-item" key={category}>
            <span className="category-number">0{index + 1}</span>
            <span>{category}</span>
          </div>
        ))}
      </section>

      <section aria-labelledby="opportunities-title" className="opportunities section-wrap" id="opportunities">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A STARTING POINT</p>
            <h2 id="opportunities-title">Explore opportunities</h2>
          </div>
        </div>
        <OpportunityCarousel opportunities={opportunities} />
      </section>

      <section aria-labelledby="trust-title" className="trust-section">
        <div className="trust-inner section-wrap">
          <p className="eyebrow">MEET THE FOUNDER</p>
          <h2 id="trust-title">Guiding you to <em>thoughtful investments.</em></h2>
          <p>Sushmita Bisht is a corporate professional with 9 years of experience and founder of Brick By Bisht. Her approach is to help individuals navigate real estate opportunities with greater quality and confidence. </p><p>Whether you're a first-time buyer or an experienced investor, Sushmita takes the time to understand your goals before discussing suitable opportunities.</p>
          <a className="text-link" href="#contact">Book a Free Consultation <span aria-hidden="true">&#8599;</span></a>
          <Image
            alt="Sushmita Bisht, founder of Brick By Bisht"
            className="trust-founder-image"
            height={512}
            src="/FounderBBB.webp"
            width={512}
          />
        </div>
      </section>

      <section aria-labelledby="contact-title" className="contact-section section-wrap" id="contact">
        <div className="contact-intro">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2 id="contact-title">Let’s find your next step.</h2>
          <p>Tell us a little about what you’re looking for.</p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}