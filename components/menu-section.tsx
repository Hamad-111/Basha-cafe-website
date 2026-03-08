"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Download } from "lucide-react"

export function MenuSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const menuImages: { src: string; delay: string }[] = [
    // { src: "/menu-1.jpeg", delay: "0" },
    // { src: "/menu-2.jpeg", delay: "100" },
    // { src: "/menu-3.jpeg", delay: "200" },
    // { src: "/menu-4.jpeg", delay: "300" }
  ];

  return (
    <section id="menu" className="py-24 bg-card relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-[0.4em] uppercase">The Experience</span>
          <h2 className="text-5xl sm:text-6xl font-sans font-bold text-foreground mt-4 mb-6">
            Exclusive <span className="text-primary italic">Menu</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Discover a culinary journey crafted perfectly to satisfy your cravings.
            (Digital menu coming soon)
          </p>
        </div>

        {/* Coming Soon Placeholder */}
        {menuImages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-primary/20 rounded-2xl bg-card transition-all hover:bg-card/80">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <span className="text-2xl">✨</span>
            </div>
            <p className="text-2xl font-sans font-medium text-foreground mb-2">Menu Coming Soon</p>
            <p className="text-muted-foreground text-center max-w-sm px-6">
              We're currently updating our digital menu with our latest seasonal offerings.
            </p>
          </div>
        )}

        {/* Dynamic Image Presentation (Row Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {menuImages.map((image, index) => (
            <div
              key={image.src}
              className="relative w-full overflow-hidden rounded-xl border border-primary/20 shadow-lg group cursor-pointer"
              style={{ animationDelay: `${image.delay}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative w-full" style={{ paddingTop: '141.4%' /* A4/Menu aspect ratio approx */ }}>
                <Image
                  src={image.src}
                  alt={`Basha Cafe Menu Page ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index < 4}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="text-white font-medium tracking-wider uppercase border border-white/50 px-4 py-2 rounded backdrop-blur-sm shadow-sm">View</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-background/95 backdrop-blur-md">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 p-2 sm:p-3 bg-card border border-primary/30 rounded-full text-foreground hover:text-primary hover:border-primary transition-colors focus:outline-none"
            title="Close"
          >
            <X size={24} />
          </button>

          {/* Download Button */}
          <a
            href={selectedImage}
            download={`Basha-Cafe-Menu-${selectedImage.split('-')[1]}`} // Provides a nice name like Basha-Cafe-Menu-1.jpeg
            className="absolute top-4 right-20 sm:top-8 sm:right-24 z-50 flex items-center gap-2 p-2 sm:p-3 sm:px-4 bg-primary text-primary-foreground border border-primary rounded-full hover:bg-primary/90 transition-colors focus:outline-none font-medium"
            title="Download Menu"
          >
            <Download size={20} />
            <span className="hidden sm:inline">Download</span>
          </a>

          {/* Image Container */}
          <div className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center animate-in fade-in zoom-in duration-300">
            <div className="relative w-full h-full max-h-[90vh]">
              <Image
                src={selectedImage}
                alt="Full size menu page"
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

