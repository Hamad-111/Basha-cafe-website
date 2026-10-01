"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, MapPin, Clock, Flame, Star, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Priority LCP */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="The Basha Cafe Islamabad - Top trending rooftop cafe, restaurant and sheesha lounge in E-11"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-28 pb-20">
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div className="overflow-hidden">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/40 text-primary text-xs tracking-[0.3em] uppercase font-bold animate-in fade-in slide-in-from-bottom-4 duration-1000 shadow-lg shadow-primary/10">
              <Flame className="w-3.5 h-3.5 fill-primary text-primary animate-pulse" />
              Islamabad&apos;s #1 Trending Rooftop Cafe &amp; Sheesha Lounge
            </span>
          </div>

          {/* Authoritative Single H1 targeting Top Trending Cafe */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold text-white leading-[1.08] tracking-tight">
            The Basha <span className="text-primary italic">Cafe</span>
            <span className="sr-only"> - Top Trending Cafe, Restaurant &amp; Sheesha Lounge in Islamabad</span>
          </h1>

          {/* Keyword-Rich Trending Description */}
          <p className="text-lg md:text-xl text-white/95 font-sans font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            The top trending rooftop cafe in E-11, Islamabad. Discover why guests love our world-class Russian hookah flavors, gourmet multi-cuisine dining, aesthetic birthday celebration setups, and energetic late-night lounge vibes until 4:00 AM.
          </p>

          {/* Quick Location & Timings highlight */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-foreground/90 pt-2">
            <span className="flex items-center gap-1.5 bg-background/60 backdrop-blur-md border border-primary/20 px-3.5 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              Rooftop Casa Bella Hotel, E-11 Islamabad
            </span>
            <span className="flex items-center gap-1.5 bg-background/60 backdrop-blur-md border border-primary/20 px-3.5 py-1.5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-primary" />
              Open Daily 12:00 PM – 4:00 AM
            </span>
            <span className="flex items-center gap-1.5 bg-background/60 backdrop-blur-md border border-primary/20 px-3.5 py-1.5 rounded-full text-primary font-semibold">
              <Star className="w-3.5 h-3.5 fill-primary" />
              4.9 Star Rated Cafe
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm tracking-wider uppercase font-semibold min-w-[180px] shadow-lg shadow-primary/25"
          >
            <Link href="#menu" id="cta-hero-menu">Explore Menu</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/60 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-sm tracking-wider uppercase font-semibold min-w-[180px] bg-background/40 backdrop-blur-md"
          >
            <Link href="#celebrations" id="cta-hero-celebrations">VIP Celebrations</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-sm tracking-wider uppercase font-semibold min-w-[180px] bg-background/40 backdrop-blur-md"
          >
            <Link href="#reservations" id="cta-hero-reserve">Book Table</Link>
          </Button>
        </div>

        {/* Trending Highlights Strip */}
        <div className="mt-14 pt-8 border-t border-primary/15 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="p-3 rounded-xl bg-background/40 backdrop-blur-sm border border-primary/10">
            <span className="text-xl sm:text-2xl font-serif font-bold text-primary block">#1 Trending</span>
            <span className="text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider">Rooftop Cafe Islamabad</span>
          </div>
          <div className="p-3 rounded-xl bg-background/40 backdrop-blur-sm border border-primary/10">
            <span className="text-xl sm:text-2xl font-serif font-bold text-primary block">4.9 ★★★★★</span>
            <span className="text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider">190+ Google Reviews</span>
          </div>
          <div className="p-3 rounded-xl bg-background/40 backdrop-blur-sm border border-primary/10">
            <span className="text-xl sm:text-2xl font-serif font-bold text-primary block">Until 4:00 AM</span>
            <span className="text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider">Late Night Vibes</span>
          </div>
          <div className="p-3 rounded-xl bg-background/40 backdrop-blur-sm border border-primary/10">
            <span className="text-xl sm:text-2xl font-serif font-bold text-primary block">50+ Blends</span>
            <span className="text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider">Russian &amp; Craft Hookah</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link href="#about" aria-label="Scroll to learn more about Basha Cafe">
          <ChevronDown className="w-8 h-8 text-primary/70" />
        </Link>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-primary/30 hidden lg:block pointer-events-none" />
      <div className="absolute top-24 right-8 w-20 h-20 border-r-2 border-t-2 border-primary/30 hidden lg:block pointer-events-none" />
      <div className="absolute bottom-24 left-8 w-20 h-20 border-l-2 border-b-2 border-primary/30 hidden lg:block pointer-events-none" />
      <div className="absolute bottom-24 right-8 w-20 h-20 border-r-2 border-b-2 border-primary/30 hidden lg:block pointer-events-none" />
    </header>
  )
}
