"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn, PartyPopper, Eye } from "lucide-react"

interface GalleryItem {
  title: string
  alt: string
  src: string
  category: "Celebrations" | "Views" | "Ambiance" | "Lounge"
  badge?: string
}

const galleryItems: GalleryItem[] = [
  {
    title: "Rooftop Floral Red Rose Arch",
    alt: "Basha Cafe rooftop circular crimson rose arch with glowing neon Happy Birthday sign in Islamabad",
    src: "/images/events/rooftop-floral-arch.jpg",
    category: "Celebrations",
    badge: "New Setup",
  },
  {
    title: "Decorated Rooftop Swing Bench",
    alt: "Outdoor rooftop swing decorated with red and black balloons, rose vines, and neon birthday lights at Basha Cafe",
    src: "/images/events/decorated-rooftop-swing.jpg",
    category: "Celebrations",
    badge: "Trending",
  },
  {
    title: "Pergola Cabana & Rustic Table",
    alt: "Private outdoor wooden pergola cabana with natural live-edge timber table and balloon wreath at Basha Cafe E-11",
    src: "/images/events/pergola-cabana-setup.jpg",
    category: "Celebrations",
    badge: "VIP Setup",
  },
  {
    title: "Luxury Indoor Banquet Dining",
    alt: "Indoor VIP banquet dining table with deep red velvet cloth and ambient candle lamps at Basha Cafe Islamabad",
    src: "/images/events/vip-banquet-dining.jpg",
    category: "Celebrations",
    badge: "Private Hall",
  },
  {
    title: "Grand Rose Ring & Marquee Stage",
    alt: "Grand circular rose backdrop with illuminated HBD marquee letters and golden pedestal cake stands at Basha Cafe",
    src: "/images/events/neon-rose-ring-setup.jpg",
    category: "Celebrations",
    badge: "Showstopper",
  },
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
    category: "Lounge",
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
    category: "Lounge",
  },
  {
    title: "Scenic Terrace Garden",
    alt: "Floral terrace garden outdoor seating area with Margalla hill breeze at Basha Cafe",
    src: "/images/memories/terrace-flowers.jpg",
    category: "Ambiance",
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
  const [filter, setFilter] = useState<string>("All")

  const categories = [
    { label: "All Visuals", value: "All" },
    { label: "Celebrations & Birthdays", value: "Celebrations" },
    { label: "Rooftop Views", value: "Views" },
    { label: "Lounge & Ambiance", value: "Ambiance" },
  ]

  const filteredItems = filter === "All"
    ? galleryItems
    : filter === "Ambiance"
    ? galleryItems.filter((i) => i.category === "Ambiance" || i.category === "Lounge")
    : galleryItems.filter((i) => i.category === filter)

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">Visual Highlights</span>
          <h2 id="gallery-heading" className="text-4xl sm:text-5xl font-sans font-bold text-foreground mt-4 mb-6">
            The Basha <span className="text-primary italic">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            A glimpse into the real rooftop moments, breathtaking views, and luxury birthday setups crafted at Basha Cafe, Islamabad.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 border ${
                filter === cat.value
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105"
                  : "bg-card/70 text-muted-foreground border-primary/20 hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
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
                loading={index < 4 ? "eager" : "lazy"}
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Badge if available */}
              {item.badge && (
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                  {item.badge}
                </div>
              )}

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75 text-primary">
                <ZoomIn className="w-4 h-4" />
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
            className="relative w-full max-w-4xl max-h-[85vh] aspect-[3/4] sm:aspect-[4/3] overflow-hidden rounded-2xl border border-primary/30 shadow-2xl bg-black"
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
            <div className="absolute bottom-0 inset-x-0 bg-background/90 backdrop-blur-md p-4 text-center border-t border-primary/20">
              <p className="text-foreground font-medium text-lg font-serif">{activeImage.title}</p>
              <p className="text-muted-foreground text-xs sm:text-sm">{activeImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
