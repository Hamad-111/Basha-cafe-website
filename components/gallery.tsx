"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

interface GalleryItem {
  title: string
  alt: string
  src: string
  category: string
}

const galleryItems: GalleryItem[] = [
  {
    title: "Rooftop Night Glow",
    alt: "Basha Cafe E-11 rooftop nighttime ambiance and glowing lounge lights in Islamabad",
    src: "/images/memories/rooftop-night.jpg",
    category: "Ambiance",
  },
  {
    title: "Live Music Dining",
    alt: "Live acoustic musical performance and table dining at Basha Cafe Islamabad",
    src: "/images/memories/live-music-table.jpg",
    category: "Vibes",
  },
  {
    title: "Birthday & VIP Celebrations",
    alt: "Luxury birthday party celebration setup with custom decor at Basha Cafe rooftop",
    src: "/images/memories/birthday-setup.jpg",
    category: "Celebrations",
  },
  {
    title: "Celebration Delights",
    alt: "Celebration dessert cake and VIP party gathering at Basha Cafe",
    src: "/images/memories/celebration-cake.jpg",
    category: "Celebrations",
  },
  {
    title: "Iconic City Views",
    alt: "Panoramic rooftop skyline view over Islamabad from Basha Cafe Casa Bella Hotel",
    src: "/images/memories/rooftop-view-text.jpg",
    category: "Views",
  },
  {
    title: "Musical Nights & Vibes",
    alt: "Acoustic instruments and live musical performance setup at Basha Cafe lounge",
    src: "/images/memories/music-closeup.jpg",
    category: "Vibes",
  },
  {
    title: "Scenic Terrace Garden",
    alt: "Floral terrace garden outdoor seating area with Margalla hill breeze at Basha Cafe",
    src: "/images/memories/terrace-flowers.jpg",
    category: "Ambiance",
  },
  {
    title: "Lounge Bar Culture",
    alt: "Atmospheric themed lounge bar counter and mocktail station at Basha Cafe Islamabad",
    src: "/images/memories/bar-masks.jpg",
    category: "Lounge",
  },
  {
    title: "Margalla Tower Outlook",
    alt: "Overlook of the scenic skyline and tower from Basha Cafe rooftop in Islamabad",
    src: "/images/memories/tower-view.jpg",
    category: "Views",
  },
]

export function Gallery() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null)

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">Visual Journey</span>
          <h2 id="gallery-heading" className="text-4xl sm:text-5xl font-sans font-bold text-foreground mt-4 mb-6">
            The Basha <span className="text-primary italic">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Immerse yourself in Islamabad&apos;s most vibrant rooftop moments. From sunset views over the Margalla hills to late-night shisha and live music.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <figure
              key={item.src}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-primary/20 shadow-lg hover:border-primary/50 transition-all duration-500 cursor-pointer"
              onClick={() => setActiveImage(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading={index < 3 ? "eager" : "lazy"}
              />

              {/* Gradient Shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/70 backdrop-blur-sm border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75 text-primary">
                <ZoomIn className="w-5 h-5" />
              </div>

              {/* Overlay Caption */}
              <figcaption className="absolute bottom-4 left-4 right-4 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <span className="text-white text-base sm:text-lg font-serif font-medium tracking-wide">
                  {item.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-background/95 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 p-3 bg-card border border-primary/40 rounded-full text-foreground hover:text-primary hover:border-primary transition-colors focus:outline-none"
            aria-label="Close image modal"
          >
            <X size={24} />
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[85vh] aspect-[16/10] overflow-hidden rounded-2xl border border-primary/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <div className="absolute bottom-0 inset-x-0 bg-background/80 backdrop-blur-sm p-4 text-center border-t border-primary/20">
              <p className="text-foreground font-medium text-lg">{activeImage.title}</p>
              <p className="text-muted-foreground text-sm">{activeImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
