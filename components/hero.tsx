"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, MapPin, Clock } from "lucide-react"

export function Hero() {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Priority LCP */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Basha Cafe luxury rooftop restaurant and sheesha lounge in E-11 Islamabad"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 pb-16">
        <div className="space-y-6 max-w-4xl">
          {/* Eyebrow badge */}
          <div className="overflow-hidden">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs tracking-[0.3em] uppercase font-semibold animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Islamabad&apos;s #1 Rooftop & Sheesha Lounge
            </span>
          </div>

          {/* Authoritative Single H1 */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold text-white leading-[1.08] tracking-tight">
            Basha <span className="text-primary italic">Cafe</span>
            <span className="sr-only"> - Best Restaurant & Sheesha Cafe in Islamabad</span>
          </h1>

          {/* Keyword-Rich Description */}
          <p className="text-lg md:text-xl text-white/90 font-sans font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            The ultimate rooftop destination in E-11, Islamabad. Indulge in world-class hookah flavors, exquisite continental &amp; Middle Eastern cuisine, and vibrant late-night vibes.
          </p>

          {/* Quick Location & Timings highlight */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-foreground/80 pt-2">
            <span className="flex items-center gap-1.5 bg-background/50 backdrop-blur-sm border border-primary/20 px-3 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              Rooftop Casa Bella Hotel, E-11 Islamabad
            </span>
            <span className="flex items-center gap-1.5 bg-background/50 backdrop-blur-sm border border-primary/20 px-3 py-1.5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-primary" />
              Open Daily 12:00 PM – 4:00 AM
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm tracking-wider uppercase font-medium min-w-[180px] shadow-lg shadow-primary/20"
          >
            <Link href="#menu" id="cta-hero-menu">Explore Menu</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/60 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-sm tracking-wider uppercase font-medium min-w-[180px] bg-background/40 backdrop-blur-sm"
          >
            <Link href="#reservations" id="cta-hero-reserve">Book a Table</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
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
