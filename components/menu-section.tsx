"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Download, Flame, UtensilsCrossed, Coffee, Sparkles } from "lucide-react"

interface MenuHighlight {
  name: string
  description: string
  tag?: string
  price?: string
}

const menuCategories: { id: string; label: string; icon: typeof Flame; items: MenuHighlight[] }[] = [
  {
    id: "sheesha",
    label: "Signature Sheesha",
    icon: Flame,
    items: [
      {
        name: "Classic Double Apple & Mint",
        description: "The timeless Middle Eastern favorite infused with crisp anise, fresh mint, and cold-smoke filtration.",
        tag: "Most Popular",
        price: "Premium",
      },
      {
        name: "Russian Custom Craft Blends",
        description: "Heavy clouds with smooth imported dark leaf tobacco, berry fusion, and iced mouthpiece.",
        tag: "Exclusive",
        price: "VIP",
      },
      {
        name: "Basha Royal Paan Kiwi",
        description: "Exotic betel leaf aroma paired with tangy fresh kiwi and an icy cooling finish.",
        tag: "Chef's Pick",
        price: "Signature",
      },
      {
        name: "Citrus Mist & Blue Breeze",
        description: "Sweet blueberry undertones harmonized with zesty lime, grapefruit, and refreshing mint.",
        tag: "Trending",
        price: "Special",
      },
    ],
  },
  {
    id: "cuisine",
    label: "Gourmet Dining",
    icon: UtensilsCrossed,
    items: [
      {
        name: "Basha Supreme Mixed Platter",
        description: "Succulent charcoal grilled kebabs, tender chicken tikka boti, spiced wings, hummus, and freshly baked flatbreads.",
        tag: "Platter",
        price: "Sharing",
      },
      {
        name: "Creamy Fettuccine Alfredo",
        description: "Rich parmesan cream sauce tossed with grilled herb chicken breast and garlic toasted baguette.",
        tag: "Classic",
        price: "Entree",
      },
      {
        name: "Artisan Smash Beef Burger",
        description: "Double prime beef patty, melted cheddar, caramelized onions, and secret house smoked truffle sauce on brioche.",
        tag: "Best Seller",
        price: "Entree",
      },
      {
        name: "Loaded Crispy Buffalo Wings",
        description: "Crispy fried golden wings drenched in fiery buffalo glaze and accompanied by cool house ranch dip.",
        tag: "Starter",
        price: "Appetizer",
      },
    ],
  },
  {
    id: "drinks",
    label: "Beverages & Mocktails",
    icon: Coffee,
    items: [
      {
        name: "Basha Signature Mint Margarita",
        description: "Fresh crushed mint leaves, zesty lemon, sea salt rim, and effervescent fizz for the ultimate palate cleanser.",
        tag: "Refreshing",
        price: "Mocktail",
      },
      {
        name: "Electric Blue Colada",
        description: "Tropical blend of creamy coconut cream, chilled pineapple juice, and vibrant blue curaçao drizzle.",
        tag: "Tropical",
        price: "Mocktail",
      },
      {
        name: "Spanish Iced Latte & Cortado",
        description: "Double shot of fresh Arabica espresso shaken over sweetened condensed milk and velvety whole milk.",
        tag: "Barista Pick",
        price: "Coffee",
      },
      {
        name: "Traditional Karak Chai",
        description: "Slow-brewed strong spiced tea simmered with green cardamom, saffron threads, and condensed milk.",
        tag: "All-Time Fav",
        price: "Tea",
      },
    ],
  },
  {
    id: "desserts",
    label: "Decadent Desserts",
    icon: Sparkles,
    items: [
      {
        name: "Belgian Molten Lava Cake",
        description: "Warm molten Belgian chocolate cake with a flowing ganache center, served with vanilla bean gelato.",
        tag: "Decadent",
        price: "Dessert",
      },
      {
        name: "Lotus Biscoff Cream Cheesecake",
        description: "Creamy baked New York style cheesecake layered with crunchy caramelized Lotus biscuit crumb and spread.",
        tag: "Top Rated",
        price: "Dessert",
      },
      {
        name: "Sizzling Iron Skillet Brownie",
        description: "Fudge walnut brownie served on a sizzling hot plate drizzled with dark chocolate fudge and ice cream.",
        tag: "Showstopper",
        price: "Dessert",
      },
    ],
  },
]

export function MenuSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>("sheesha")

  const menuImages = [
    {
      src: "/menu-1.jpg",
      delay: "0",
      alt: "Basha Cafe Islamabad Menu Page 1 - Starters, Appetizers and Continental Specialties",
      title: "Starters & Continental",
    },
    {
      src: "/menu-2.jpg",
      delay: "100",
      alt: "Basha Cafe Islamabad Menu Page 2 - Gourmet Burgers, Steaks, Sandwiches and Pastas",
      title: "Burgers, Steaks & Pastas",
    },
    {
      src: "/menu-3.jpg",
      delay: "200",
      alt: "Basha Cafe Islamabad Menu Page 3 - Signature Sheesha Flavors, Russian Hookah & Deals",
      title: "Sheesha & Hookah Flavors",
    },
    {
      src: "/menu-4.jpg",
      delay: "300",
      alt: "Basha Cafe Islamabad Menu Page 4 - Artisan Mocktails, Shakes, Hot Coffee and Desserts",
      title: "Drinks & Desserts",
    },
  ]

  const activeCategory = menuCategories.find((cat) => cat.id === activeTab) || menuCategories[0]

  return (
    <section id="menu" className="py-24 bg-card relative overflow-hidden" aria-labelledby="menu-heading">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-[0.4em] uppercase">Gourmet & Lounge Dining</span>
          <h2 id="menu-heading" className="text-5xl sm:text-6xl font-sans font-bold text-foreground mt-4 mb-6">
            Exclusive <span className="text-primary italic">Menu</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Explore our curated culinary creations, signature mocktails, and Islamabad&apos;s most celebrated sheesha flavors. Browse our highlights or inspect our full visual menu pages below.
          </p>
        </div>

        {/* Category Tabs for SEO & Quick Browsing */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {menuCategories.map((category) => {
            const Icon = category.icon
            const isActive = activeTab === category.id
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105"
                    : "bg-background/80 text-foreground/80 border-primary/20 hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.label}</span>
              </button>
            )
          })}
        </div>

        {/* Featured Items Grid for Google Crawlability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {activeCategory.items.map((item) => (
            <article
              key={item.name}
              className="p-6 rounded-2xl bg-background/60 border border-primary/15 hover:border-primary/40 transition-all duration-300 group shadow-md"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-xl font-sans font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                {item.tag && (
                  <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                    {item.tag}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>

        {/* Visual Menu Presentation Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-serif text-foreground mb-2">Full Menu Cards</h3>
          <p className="text-sm text-muted-foreground">Click any page to expand into high-resolution view or download for later.</p>
        </div>

        {/* Dynamic Image Presentation (Row Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {menuImages.map((image, index) => (
            <div
              key={image.src}
              className="relative w-full overflow-hidden rounded-xl border border-primary/20 shadow-lg group cursor-pointer"
              style={{ animationDelay: `${image.delay}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative w-full aspect-[1/1.414]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index < 2}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center pointer-events-none">
                  <span className="text-white text-xs uppercase tracking-widest font-semibold mb-2">
                    {image.title}
                  </span>
                  <span className="text-white text-xs font-medium tracking-wider uppercase border border-white/60 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm bg-black/30">
                    View Fullscreen
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu Card Full View"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-background/95 backdrop-blur-md"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 p-2 sm:p-3 bg-card border border-primary/30 rounded-full text-foreground hover:text-primary hover:border-primary transition-colors focus:outline-none"
            title="Close"
            aria-label="Close menu view"
          >
            <X size={24} />
          </button>

          {/* Download Button */}
          <a
            href={selectedImage}
            download={`Basha-Cafe-Menu-${selectedImage.split("-")[1] || "card"}`}
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
                alt="Full size Basha Cafe Islamabad menu page"
                fill
                className="object-contain"
                sizes="100vw"
                quality={95}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
