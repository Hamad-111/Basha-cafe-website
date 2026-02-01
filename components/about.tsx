"use client"

import Image from "next/image"
import { Sparkles, Utensils, Sofa } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Premium Shisha",
    description: "Carefully curated selection of the finest hookah flavors from around the world.",
  },
  {
    icon: Utensils,
    title: "Exquisite Cuisine",
    description: "Freshly prepared dishes that blend traditional recipes with modern culinary artistry.",
  },
  {
    icon: Sofa,
    title: "Luxury Ambiance",
    description: "Elegant seating and atmospheric décor designed for your ultimate comfort and relaxation.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Our Story</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mt-4 mb-6">
            About <span className="text-primary">Basha Cafe</span>
          </h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/about-hero.jpg"
                alt="Basha Cafe Islamabad"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-xl text-foreground font-sans leading-relaxed">
              Welcome to Basha Cafe, a premium sanctuary for those who appreciate the finer things.
            </p>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
              We combine world-class hookah flavors with a gourmet menu in an atmosphere of understated luxury.
            </p>

            {/* Features */}
            <div className="space-y-6 pt-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
