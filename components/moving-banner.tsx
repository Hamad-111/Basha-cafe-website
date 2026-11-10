"use client"

import React, { useState } from "react"
import { Sparkles, X } from "lucide-react"

interface MovingBannerProps {
  text?: string
  dismissible?: boolean
}

export function MovingBanner({
  text = "SANA TABEYAT KESI HA AB",
  dismissible = true,
}: MovingBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  // 10 repeated units ensure seamless infinite scrolling without gaps on all screen sizes (including ultra-wide 4K)
  const repeats = Array.from({ length: 10 }, (_, i) => i)

  return (
    <div
      role="region"
      aria-label="Announcement Banner"
      className="relative w-full overflow-hidden bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-zinc-950 py-3 sm:py-4 md:py-5 border-b-2 border-amber-600 shadow-2xl z-50 select-none"
    >
      <div className="flex items-center">
        {/* Infinite Marquee Track */}
        <div className="animate-marquee flex items-center whitespace-nowrap cursor-default">
          {repeats.map((i) => (
            <div key={`banner-a-${i}`} className="flex items-center space-x-6 sm:space-x-10 mx-5 sm:mx-8">
              <span className="flex items-center gap-2 sm:gap-3 font-black tracking-wider text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase drop-shadow-sm text-zinc-950">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 fill-zinc-950 text-zinc-950 animate-pulse shrink-0" />
                {text}
              </span>
              <span className="text-zinc-950/70 font-black text-xl sm:text-3xl md:text-4xl">✦</span>
            </div>
          ))}

          {/* Duplicate set to guarantee seamless continuous scroll */}
          {repeats.map((i) => (
            <div key={`banner-b-${i}`} className="flex items-center space-x-6 sm:space-x-10 mx-5 sm:mx-8">
              <span className="flex items-center gap-2 sm:gap-3 font-black tracking-wider text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase drop-shadow-sm text-zinc-950">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 fill-zinc-950 text-zinc-950 animate-pulse shrink-0" />
                {text}
              </span>
              <span className="text-zinc-950/70 font-black text-xl sm:text-3xl md:text-4xl">✦</span>
            </div>
          ))}
        </div>

        {/* Optional dismiss button */}
        {dismissible && (
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close banner"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/15 hover:bg-black/30 text-zinc-950 transition-colors z-20 backdrop-blur-sm"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>
    </div>
  )
}

