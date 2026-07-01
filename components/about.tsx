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

        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-2xl text-foreground font-sans font-light leading-relaxed max-w-3xl mx-auto">
              Welcome to Basha Cafe, a premium sanctuary for those who appreciate the finer things.
            </p>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto">
              We combine world-class hookah flavors with a gourmet menu in an atmosphere of understated luxury.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-8 bg-card border border-primary/10 rounded-2xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 shadow-md group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-sans font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-24 border-t border-primary/10 pt-16">
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase">Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-foreground mt-4 mb-6">
              The Minds Behind <span className="text-primary">Basha Cafe</span>
            </h2>
            <div className="w-24 h-px bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Owner Card */}
            <div className="group relative bg-card border border-primary/20 rounded-2xl overflow-hidden shadow-xl hover:border-primary/40 transition-all duration-300">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/owner.jpg"
                  alt="Haziq Khan - Founder & Owner"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <div className="p-8 relative">
                <span className="text-primary text-xs font-bold tracking-widest uppercase">Founder & Owner</span>
                <h3 className="text-2xl font-serif font-medium text-foreground mt-2 mb-3">Haziq Khan</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The visionary driving the philosophy of Basha Cafe, committed to providing a luxurious haven and unforgettable experiences for our community.
                </p>
              </div>
            </div>

            {/* Manager Card */}
            <div className="group relative bg-card border border-primary/20 rounded-2xl overflow-hidden shadow-xl hover:border-primary/40 transition-all duration-300">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/manager.jpg"
                  alt="Zaid Khan - General Manager"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <div className="p-8 relative">
                <span className="text-primary text-xs font-bold tracking-widest uppercase">General Manager</span>
                <h3 className="text-2xl font-serif font-medium text-foreground mt-2 mb-3">Zaid Khan</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Leading daily operations, service standards, and culinary execution to ensure every visitor experiences peak hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
