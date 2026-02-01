"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    text: "The atmosphere at Basha Cafe is unmatched. Every visit feels like a special occasion. The hookah flavors are exceptional!",
    rating: 5,
  },
  {
    name: "Ahmed K.",
    text: "Best Middle Eastern food in town, hands down. The mixed grill platter is a must-try. Perfect for date nights.",
    rating: 5,
  },
  {
    name: "Michael R.",
    text: "From the moment you walk in, you feel like royalty. The service is impeccable and the ambiance is simply stunning.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mt-4 mb-6">
            What Our <span className="text-primary">Guests</span> Say
          </h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card border border-primary/20 p-8 relative group hover:border-primary/40 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                {`"${testimonial.text}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="text-primary font-medium text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="text-foreground font-medium">{testimonial.name}</span>
              </div>

              {/* Corner accents */}
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-primary/0 group-hover:border-primary/30 transition-all duration-300" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-primary/0 group-hover:border-primary/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
