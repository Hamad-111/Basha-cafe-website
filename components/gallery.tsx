"use client"

import Image from "next/image"

const galleryImages = [
  { src: "/images/event-birthday-1.jpg", alt: "Special Events & Celebrations", span: "col-span-2 row-span-2" },
  { src: "/images/food-family-deal.jpg", alt: "Family Feasts", span: "col-span-1 row-span-1" },
  { src: "/images/music-night.jpg", alt: "Live Music Nights", span: "col-span-1 row-span-1" },
  { src: "/images/exterior-night.jpg", alt: "Iconic Location", span: "col-span-1 row-span-2" },
  { src: "/images/event-birthday-2.jpg", alt: "Memorable Moments", span: "col-span-1 row-span-1" },
  { src: "/images/premium-hookah.jpg", alt: "Premium Shisha", span: "col-span-1 row-span-1" },
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
            Step into the world of Basha Cafe through our gallery. Experience the elegance,
            the flavors, and the atmosphere that awaits you.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden group ${image.span}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <span className="text-primary text-sm tracking-wider uppercase border border-primary/50 px-3 py-1 bg-background/50 backdrop-blur-sm">
                  {image.alt}
                </span>
              </div>
              {/* Gold corner accents on hover */}
              <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
