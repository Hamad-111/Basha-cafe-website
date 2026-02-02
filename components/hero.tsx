"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Basha Cafe luxurious lounge interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="space-y-8 max-w-4xl">
          <div className="overflow-hidden">
            <span className="inline-block text-primary text-sm tracking-[0.4em] uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Best in Town
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-white leading-[1.1] tracking-tight">
            Basha <span className="text-primary italic">Cafe</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 font-sans font-light tracking-wide max-w-2xl leading-relaxed">
            Premium shisha, exquisite dining, and a sophisticated lounge culture.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm tracking-wider uppercase font-medium min-w-[180px]"
          >
            <Link href="#menu">View Menu</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-sm tracking-wider uppercase font-medium min-w-[180px] bg-transparent"
          >
            <Link href="#reservations">Book a Table</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link href="#about" aria-label="Scroll to about section">
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </Link>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-primary/30 hidden lg:block" />
      <div className="absolute top-24 right-8 w-20 h-20 border-r-2 border-t-2 border-primary/30 hidden lg:block" />
      <div className="absolute bottom-24 left-8 w-20 h-20 border-l-2 border-b-2 border-primary/30 hidden lg:block" />
      <div className="absolute bottom-24 right-8 w-20 h-20 border-r-2 border-b-2 border-primary/30 hidden lg:block" />
    </section>
  )
}
