"use client"

import React, { useState } from "react"
import { Sparkles, X } from "lucide-react"

interface MovingBannerProps {
  text?: string
  subtext?: string
  dismissible?: boolean
}

export function MovingBanner({
  text = "HI AREEB",
  subtext = "Welcome to The Basha Cafe",
  dismissible = true,
}: MovingBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  // 6 repeated units ensure a seamless looping transition across all screen widths
  const repeats = Array.from({ length: 6 }, (_, i) => i)

  return (
    <div
      role="region"
      aria-label="Moving Announcement Banner"
      className="relative w-full overflow-hidden bg-gradient-to-r from-zinc-950 via-primary/25 to-zinc-950 border-b border-primary/30 text-foreground py-2 text-xs sm:text-sm select-none shadow-sm backdrop-blur-md"
    >
      <div className="flex items-center">
        {/* Infinite Marquee Track */}
        <div className="animate-marquee flex items-center whitespace-nowrap cursor-default">
          {repeats.map((i) => (
            <div key={`banner-a-${i}`} className="flex items-center space-x-6 mx-5">
              <span className="flex items-center gap-1.5 font-extrabold tracking-widest text-primary drop-shadow-[0_0_8px_rgba(197,160,89,0.5)] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                {text}
              </span>
              <span className="text-primary/40">•</span>
              <span className="font-medium tracking-wide text-foreground/80">
                {subtext}
              </span>
              <span className="text-primary/40">•</span>
              <span className="font-semibold text-primary/90 tracking-wider uppercase text-[11px]">
                Islamabad&apos;s #1 Trending Rooftop
              </span>
            </div>
          ))}

          {/* Duplicate set to guarantee seamless continuous scroll */}
          {repeats.map((i) => (
            <div key={`banner-b-${i}`} className="flex items-center space-x-6 mx-5">
              <span className="flex items-center gap-1.5 font-extrabold tracking-widest text-primary drop-shadow-[0_0_8px_rgba(197,160,89,0.5)] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                {text}
              </span>
              <span className="text-primary/40">•</span>
              <span className="font-medium tracking-wide text-foreground/80">
                {subtext}
              </span>
              <span className="text-primary/40">•</span>
              <span className="font-semibold text-primary/90 tracking-wider uppercase text-[11px]">
                Islamabad&apos;s #1 Trending Rooftop
              </span>
            </div>
          ))}
        </div>

        {/* Optional dismiss button */}
        {dismissible && (
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close banner"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full text-foreground/60 hover:text-foreground hover:bg-white/10 transition-colors z-10"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  )
}

