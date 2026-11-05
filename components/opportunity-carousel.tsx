"use client";

import Image from "next/image";
import { useRef } from "react";

type Opportunity = {
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

type OpportunityCarouselProps = {
  opportunities: Opportunity[];
};

export function OpportunityCarousel({ opportunities }: OpportunityCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function slide(direction: -1 | 1) {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild;

    if (!track || !(firstCard instanceof HTMLElement)) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (firstCard.offsetWidth + gap),
      behavior: "smooth",
    });
  }

  return (
    <div className="property-carousel" aria-label="Explore opportunities" role="region">
      <div className="property-carousel-controls">
        <button aria-label="Previous opportunity" className="carousel-arrow" onClick={() => slide(-1)} type="button">
          <span aria-hidden="true">&#8592;</span>
        </button>
        <button aria-label="Next opportunity" className="carousel-arrow" onClick={() => slide(1)} type="button">
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>
      <div className="property-carousel-track" ref={trackRef}>
        {opportunities.map((opportunity, index) => (
          <article className="property-card" key={opportunity.category}>
            <div className="property-image-wrap">
              <Image
                alt={opportunity.alt}
                className="property-image"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                src={opportunity.image}
                unoptimized
              />
              <span className="property-number">0{index + 1}</span>
            </div>
            <div className="property-copy">
              <p className="property-category">{opportunity.category}</p>
              <h3>{opportunity.title}</h3>
              <p>{opportunity.description}</p>
              <a className="property-location" href="#contact">Know More</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}