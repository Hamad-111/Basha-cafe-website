"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, Heart, Gift, PartyPopper, Calendar, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EventSetup {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  features: string[]
  badge: string
}

const eventSetups: EventSetup[] = [
  {
    id: "floral-arch",
    title: "Rooftop Floral Red Rose Arch",
    subtitle: "Open-Air Neon & Fairy Light Sanctuary",
    description:
      "Perched on the breezy rooftop terrace of Casa Bella Hotel, this signature setup features a circular arch of lush crimson roses, warm fairy lights, and an illuminated 'Happy Birthday' neon backdrop with luxury sofa seating under Islamabad's night sky.",
    image: "/images/events/rooftop-floral-arch.jpg",
    features: ["Handcrafted Crimson Rose Arch", "Custom Neon Birthday Script", "Plush Lounge Chairs & Table", "Open-Air Margalla Night View"],
    badge: "Most Popular",
  },
  {
    id: "rooftop-swing",
    title: "Enchanted Rooftop Swing Lounge",
    subtitle: "Festive Balloon Arch & Floral Canopy",
    description:
      "Celebrate milestone moments on our cushioned outdoor hanging swing bench framed with a cascade of red & black balloons, romantic rose garlands, and glowing neon ambiance. The ultimate photo-op for memories that last forever.",
    image: "/images/events/decorated-rooftop-swing.jpg",
    features: ["Cushioned Double Swing Bench", "Balloon Garland Styling", "Warm Canopy Spotlight Beams", "Instagram-Worthy Photo Zone"],
    badge: "Trending",
  },
  {
    id: "pergola-cabana",
    title: "Private Pergola Cabana & Rustic Table",
    subtitle: "Exclusive VIP Outdoor Gazebo",
    description:
      "An exclusive private wooden pergola setting paired with a natural live-edge solid timber table, floral balloon wreath, and the signature neon swing. Perfect for intimate friend circles, family dinners, and surprise parties.",
    image: "/images/events/pergola-cabana-setup.jpg",
    features: ["Natural Live-Edge Wood Table", "Private Gazebo Pergola", "Decorative Floral Wreaths", "Intimate Group Seating (6-10)"],
    badge: "VIP Exclusive",
  },
  {
    id: "vip-banquet",
    title: "Luxury Indoor Banquet Dining",
    subtitle: "Candlelit Red Velvet Table Experience",
    description:
      "Step into our climate-controlled indoor VIP hall featuring an expansive banquet dining table draped in rich crimson velvet, wireless brass ambient lamps, taper candles, and the illuminated floral stage backdrop for a royal feast.",
    image: "/images/events/vip-banquet-dining.jpg",
    features: ["Crushed Velvet Banquet Table", "Modern Cordless Brass Table Lamps", "Private Indoor Hall Setting", "Multi-Course Dining & Shisha"],
    badge: "Fine Dining",
  },
  {
    id: "neon-rose-ring",
    title: "Grand Crimson Rose Ring & Marquee Stage",
    subtitle: "Illuminated 'HBD' & Candlelight Stage",
    description:
      "A show-stopping celebration centerpiece boasting an oversized circular rose ring, glowing neon calligraphy, pedestal cake displays, and illuminated 'HBD' marquee letters that cast a warm, celebratory glow across your private evening.",
    image: "/images/events/neon-rose-ring-setup.jpg",
    features: ["Giant 360° Crimson Rose Ring", "Illuminated 'HBD' Marquee Letters", "Golden Pedestal Cake Stands", "Romantic Pillar & Taper Candles"],
    badge: "Showstopper",
  },
]

export function EventsShowcase() {
  const [selectedSetup, setSelectedSetup] = useState<EventSetup>(eventSetups[0])

  return (
    <section id="celebrations" className="py-24 bg-card relative overflow-hidden" aria-labelledby="celebrations-heading">
      {/* Ambient Crimson & Gold Glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm mb-4">
            <PartyPopper className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
              #1 Trending Celebration &amp; Rooftop Cafe in Islamabad
            </span>
          </div>

          <h2 id="celebrations-heading" className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-foreground mt-2 mb-6">
            Birthday &amp; VIP <span className="text-primary italic">Celebrations</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />

          <p className="text-lg text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
            Make your special day viral and unforgettable at <strong className="text-foreground font-semibold">The Basha Cafe</strong>. From glowing rooftop rose neon arches to private candlelit velvet banquet halls, explore our real celebration setups tailored to perfection.
          </p>
        </div>

        {/* Featured Showcase Display */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-background/60 border border-primary/20 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md mb-12">
          {/* Main Visual Presentation */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[3/4] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-primary/30 shadow-2xl group">
              <Image
                src={selectedSetup.image}
                alt={`${selectedSetup.title} - Basha Cafe rooftop celebration setup in Islamabad`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{selectedSetup.badge}</span>
              </div>

              {/* Bottom Info on Mobile */}
              <div className="absolute bottom-4 left-4 right-4 sm:hidden">
                <p className="text-white font-serif font-medium text-xl drop-shadow-md">{selectedSetup.title}</p>
                <p className="text-primary text-xs tracking-wider uppercase">{selectedSetup.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Setup Details & Booking CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-2">
                {selectedSetup.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
                {selectedSetup.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                {selectedSetup.description}
              </p>

              {/* Inclusions */}
              <div className="space-y-2.5 mb-8">
                <p className="text-xs uppercase font-bold tracking-wider text-foreground/80 mb-2">
                  Setup Highlights &amp; Inclusions:
                </p>
                {selectedSetup.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5 text-sm text-foreground/90">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Booking Actions */}
            <div className="pt-4 border-t border-primary/10 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-sm tracking-wider uppercase font-semibold shadow-lg shadow-primary/20 flex-1"
              >
                <Link href="#reservations" className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Reserve This Setup</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary py-6 text-sm tracking-wider uppercase font-semibold bg-background/50"
              >
                <a
                  href={`https://wa.me/923244684895?text=Hi%20Basha%20Cafe,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(selectedSetup.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  <span>WhatsApp Booking</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Interactive Thumbnail Carousel Strip */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-xs sm:text-sm font-semibold text-foreground/90 uppercase tracking-widest">
              Select Setup To View:
            </p>
            <span className="text-xs text-muted-foreground">Click any card to preview full details</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {eventSetups.map((setup) => {
              const isSelected = selectedSetup.id === setup.id
              return (
                <button
                  key={setup.id}
                  type="button"
                  onClick={() => setSelectedSetup(setup)}
                  className={`group relative text-left rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isSelected
                      ? "border-primary ring-2 ring-primary/40 shadow-xl scale-[1.02] bg-primary/10"
                      : "border-primary/20 hover:border-primary/50 bg-card/60 opacity-80 hover:opacity-100"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={setup.image}
                      alt={setup.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-ping" />
                    )}
                  </div>
                  <div className="p-3">
                    <p className={`text-xs font-serif font-bold truncate ${isSelected ? "text-primary" : "text-foreground"}`}>
                      {setup.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground truncate">{setup.subtitle}</p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Inclusions Feature Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-card/40 border border-primary/15 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20 text-primary">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-lg text-foreground mb-1">Custom Styling</h4>
            <p className="text-xs text-muted-foreground">Tailored balloon themes, fresh rose petals, fairy lights &amp; glowing neon calligraphy.</p>
          </div>

          <div className="p-6 rounded-2xl bg-card/40 border border-primary/15 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20 text-primary">
              <Gift className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-lg text-foreground mb-1">Cake &amp; Sparklers</h4>
            <p className="text-xs text-muted-foreground">Cake table staging, custom lighting, sparkler entry &amp; birthday music fanfare.</p>
          </div>

          <div className="p-6 rounded-2xl bg-card/40 border border-primary/15 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20 text-primary">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-lg text-foreground mb-1">Romantic Privacy</h4>
            <p className="text-xs text-muted-foreground">Dedicated corner lounges &amp; private cabanas with uninterrupted Margalla views.</p>
          </div>

          <div className="p-6 rounded-2xl bg-card/40 border border-primary/15 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20 text-primary">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-lg text-foreground mb-1">Late Night Vibes</h4>
            <p className="text-xs text-muted-foreground">Celebrate until 4:00 AM daily with multi-cuisine platters and premium sheesha.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
