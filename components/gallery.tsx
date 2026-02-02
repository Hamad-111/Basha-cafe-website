"use client"
import Image from "next/image"

const galleryCategories = [
  { alt: "Night Atmosphere", src: "/images/memories/rooftop-night.jpg" },
  { alt: "Live Music", src: "/images/memories/live-music-table.jpg" },
  { alt: "Birthday Celebrations", src: "/images/memories/birthday-setup.jpg" },
  { alt: "Friends & Cake", src: "/images/memories/celebration-cake.jpg" },
  { alt: "Iconic Views", src: "/images/memories/rooftop-view-text.jpg" },
  { alt: "Music Vibes", src: "/images/memories/music-closeup.jpg" },
  { alt: "Scenic Terrace", src: "/images/memories/terrace-flowers.jpg" },
  { alt: "Fun at the Bar", src: "/images/memories/bar-masks.jpg" },
  { alt: "Tower View", src: "/images/memories/tower-view.jpg" },
  { alt: "The Lounge Experience", src: "/images/hero-bg.jpg" },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Gallery</span>
          <h2 className="text-4xl sm:text-5xl font-sans font-bold text-foreground mt-4 mb-6">
            The <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-px bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the elegance, flavors, and atmosphere of Basha Cafe.
            (Gallery coming soon with new visuals)
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryCategories.map((category) => (
            <div
              key={category.alt}
              className="relative aspect-video bg-card border border-primary/20 overflow-hidden group transition-all hover:border-primary/40"
            >
              {category.src ? (
                <>
                  <Image
                    src={category.src}
                    alt={category.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-card">
                  <p className="text-muted-foreground text-xs italic">Experience captured in essence</p>
                </div>
              )}

              <div className="absolute bottom-4 left-4 z-10 transition-transform duration-300 group-hover:translate-x-2">
                <span className="text-primary text-sm tracking-[0.2em] font-medium uppercase border-l-2 border-primary pl-3">
                  {category.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
