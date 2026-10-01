"use client"

import { Star, Quote, CheckCircle2 } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    location: "Islamabad, F-7",
    text: "The rooftop atmosphere at Basha Cafe is unmatched in Islamabad. Every visit feels like a luxury escape. The Russian shisha flavors are super smooth and long-lasting, and the staff is so welcoming!",
    rating: 5,
    highlight: "Best Sheesha Experience",
  },
  {
    name: "Ahmed K.",
    location: "Islamabad, E-11",
    text: "Hands down the best food and sheesha lounge in town. We tried the mixed grill platter and beef burger—delicious quality. Perfect breezy rooftop for date nights and catching up with friends.",
    rating: 5,
    highlight: "Incredible Food & Vibe",
  },
  {
    name: "Michael R.",
    location: "Diplomatic Enclave",
    text: "From the moment you walk into the rooftop of Casa Bella, you feel like royalty. The service is attentive, the Margalla hill view is breathtaking, and the vibes until 4 AM are unbeatable.",
    rating: 5,
    highlight: "Top Tier Hospitality",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-card/60 relative overflow-hidden" aria-labelledby="reviews-heading">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-background mb-4">
            <div className="flex gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-primary text-xs font-bold uppercase tracking-wider">
              4.9 / 5 Rating (190+ Reviews)
            </span>
          </div>
          <h2 id="reviews-heading" className="text-4xl sm:text-5xl font-sans font-bold text-foreground mt-2 mb-6">
            Guest <span className="text-primary italic">Reviews</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Read authentic reviews from guests who love <strong className="text-foreground font-semibold">The Basha Cafe</strong> for our trending rooftop ambiance, gourmet dining, and top sheesha experience in Islamabad.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="bg-card border border-primary/20 p-8 rounded-2xl relative group hover:border-primary/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/15 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                  <span className="text-xs font-bold text-primary ml-2 uppercase tracking-wide">
                    {testimonial.highlight}
                  </span>
                </div>

                {/* Text */}
                <p className="text-foreground/90 text-sm sm:text-base leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 font-bold text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-foreground font-semibold text-sm">{testimonial.name}</span>
                    <span title="Verified Guest" className="inline-flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" aria-label="Verified Guest" />
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">{testimonial.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
