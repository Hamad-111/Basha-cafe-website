"use client"

import Image from "next/image"
import { Sparkles, Utensils, Sofa, Award, Flame, Star } from "lucide-react"

const features = [
  {
    icon: Flame,
    title: "Premium Shisha & Hookah",
    description: "Carefully curated collection of Russian, German, and Middle Eastern shisha blends crafted with natural coconut coals for velvety, long-lasting flavor.",
  },
  {
    icon: Utensils,
    title: "Exquisite Multi-Cuisine",
    description: "Savor gourmet Middle Eastern BBQ platters, Italian pasta dishes, juicy artisan smash burgers, and decadent desserts made fresh by top chefs.",
  },
  {
    icon: Sofa,
    title: "Luxury Rooftop Ambiance",
    description: "Perched atop Casa Bella Hotel in E-11, Islamabad with Margalla hill breezes, panoramic city nightscapes, and chic velvet lounge seating.",
  },
  {
    icon: Star,
    title: "Late-Night Destination",
    description: "Open until 4:00 AM daily. The go-to late-night sanctuary in Islamabad for friends, date nights, and celebration gatherings.",
  },
  {
    icon: Sparkles,
    title: "VIP Events & Birthday Celebrations",
    description: "Customized party setups, balloon styling, candlelit dining, and private lounge reservations tailored to celebrate your special moments.",
  },
  {
    icon: Award,
    title: "5-Star Hospitality",
    description: "Dedicated table attendants, attentive service, and an uncompromising standard of warmth that treats every guest like royalty.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden" aria-labelledby="about-heading">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-bold">Our Heritage &amp; Vision</span>
          <h2 id="about-heading" className="text-4xl sm:text-5xl font-sans font-bold text-foreground mt-4 mb-6">
            About <span className="text-primary italic">Basha Cafe</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-2xl text-foreground font-sans font-light leading-relaxed max-w-3xl mx-auto">
              Welcome to <strong className="font-semibold text-primary">Basha Cafe</strong>, Islamabad&apos;s leading rooftop restaurant and premier sheesha lounge.
            </p>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-3xl mx-auto">
              Situated in the bustling heart of E-11 Islamabad, Basha Cafe was founded to redefine the city&apos;s cafe culture. We bring together world-class hookah flavors, artisanal coffee, gourmet cuisine, and live entertainment in an atmospheric setting overlooking the Margalla Hills. Whether you are searching for the best sheesha in Islamabad or looking to celebrate a birthday under starry skies, Basha Cafe delivers an unforgettable experience.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 text-left">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col p-6 bg-card border border-primary/10 rounded-2xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 shadow-md group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-sans font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-24 border-t border-primary/10 pt-16">
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-bold">Leadership &amp; Passion</span>
            <h3 className="text-3xl sm:text-4xl font-serif font-light text-foreground mt-4 mb-6">
              The Visionaries Behind <span className="text-primary">Basha Cafe</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Owner Card */}
            <article className="group relative bg-card border border-primary/20 rounded-2xl overflow-hidden shadow-xl hover:border-primary/40 transition-all duration-300">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/owner.jpg"
                  alt="Haziq Khan - Founder and Owner of Basha Cafe Islamabad"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <div className="p-8 relative">
                <span className="text-primary text-xs font-bold tracking-widest uppercase">Founder &amp; Owner</span>
                <h4 className="text-2xl font-serif font-medium text-foreground mt-2 mb-3">Haziq Khan</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The visionary driving the philosophy of Basha Cafe, committed to providing a luxurious sanctuary, unparalleled hospitality, and memorable celebrations for Islamabad&apos;s youth and community.
                </p>
              </div>
            </article>

            {/* Manager Card */}
            <article className="group relative bg-card border border-primary/20 rounded-2xl overflow-hidden shadow-xl hover:border-primary/40 transition-all duration-300">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/manager.jpg"
                  alt="Zaid Khan - General Manager of Basha Cafe Islamabad"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <div className="p-8 relative">
                <span className="text-primary text-xs font-bold tracking-widest uppercase">General Manager</span>
                <h4 className="text-2xl font-serif font-medium text-foreground mt-2 mb-3">Zaid Khan</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Leading daily operations, premium service standards, and culinary execution to ensure every visitor experiences peak hospitality from welcome to farewell.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
