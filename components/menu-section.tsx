"use client"

import { useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

const menuCategories = [
  { id: "food", label: "Food Menu" },
  { id: "shisha", label: "Shisha Menu" },
  { id: "drinks", label: "Beverages" },
]

const menuItems = {
  food: [
    {
      name: "Mixed Grill Platter",
      description: "Lamb chops, chicken skewers, beef kofta with saffron rice",
      price: "$32",
      popular: true,
    },
    {
      name: "Basha Signature Kebab",
      description: "Tender beef kebab marinated in secret spices, served with hummus",
      price: "$24",
      popular: true,
    },
    {
      name: "Mediterranean Mezze",
      description: "Hummus, baba ganoush, falafel, tabbouleh, warm pita bread",
      price: "$18",
      popular: false,
    },
    {
      name: "Grilled Salmon",
      description: "Atlantic salmon with lemon herb butter and seasonal vegetables",
      price: "$28",
      popular: false,
    },
    {
      name: "Lamb Shawarma Wrap",
      description: "Slow-roasted lamb with garlic sauce, pickles, fresh vegetables",
      price: "$16",
      popular: true,
    },
    {
      name: "Royal Baklava",
      description: "Layers of phyllo, pistachios, walnuts, drizzled with honey",
      price: "$12",
      popular: false,
    },
  ],
  shisha: [
    {
      name: "Double Apple",
      description: "Classic blend of red and green apple, smooth and refreshing",
      price: "$28",
      popular: true,
    },
    {
      name: "Grape Mint",
      description: "Sweet grape with cool mint finish",
      price: "$28",
      popular: true,
    },
    {
      name: "Basha Special Mix",
      description: "Our signature house blend - a mysterious fusion of premium flavors",
      price: "$35",
      popular: true,
    },
    {
      name: "Watermelon Ice",
      description: "Fresh watermelon with icy undertones",
      price: "$28",
      popular: false,
    },
    {
      name: "Blueberry Muffin",
      description: "Sweet blueberry with warm bakery notes",
      price: "$30",
      popular: false,
    },
    {
      name: "Premium Gold",
      description: "Exotic tropical fruits with golden honey notes",
      price: "$38",
      popular: true,
    },
  ],
  drinks: [
    {
      name: "Turkish Coffee",
      description: "Traditional brew served in ornate cup with Turkish delight",
      price: "$6",
      popular: true,
    },
    {
      name: "Fresh Mint Tea",
      description: "Moroccan-style mint tea with fresh spearmint leaves",
      price: "$5",
      popular: true,
    },
    {
      name: "Mango Lassi",
      description: "Creamy yogurt smoothie with Alphonso mango",
      price: "$8",
      popular: false,
    },
    {
      name: "Rose Lemonade",
      description: "House-made lemonade with rose water and edible flowers",
      price: "$7",
      popular: false,
    },
    {
      name: "Arabic Coffee",
      description: "Cardamom-spiced coffee served in traditional dallah",
      price: "$6",
      popular: false,
    },
    {
      name: "Passion Fruit Mojito",
      description: "Non-alcoholic passion fruit with fresh mint and lime",
      price: "$9",
      popular: true,
    },
  ],
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("food")

  return (
    <section id="menu" className="py-24 bg-card relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 pattern-dots" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Selection</span>
          <h2 className="text-4xl sm:text-5xl font-sans font-bold text-foreground mt-4 mb-6">
            Our <span className="text-primary">Menu</span>
          </h2>
          <div className="w-24 h-px bg-primary mx-auto mb-8" />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-3 text-sm tracking-wider uppercase transition-all duration-300 border",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-foreground/70 border-primary/30 hover:border-primary hover:text-primary"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
            <div
              key={item.name}
              className="bg-background/50 border border-primary/20 p-6 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                {item.popular && (
                  <span className="flex items-center gap-1 text-primary text-xs">
                    <Star className="w-3 h-3 fill-primary" />
                    Popular
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>
              <p className="text-primary font-medium text-lg">{item.price}</p>
            </div>
          ))}
        </div>

        {/* Menu Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="aspect-square relative overflow-hidden group">
            <Image
              src="/images/food-family-deal.jpg"
              alt="Signature dishes"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-primary text-sm tracking-wider uppercase">Main Courses</span>
            </div>
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <Image
              src="/images/premium-hookah.jpg"
              alt="Premium hookah"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-primary text-sm tracking-wider uppercase">Shisha</span>
            </div>
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <Image
              src="/images/dessert.jpg"
              alt="Desserts"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-primary text-sm tracking-wider uppercase">Desserts</span>
            </div>
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <Image
              src="/images/drinks.jpg"
              alt="Beverages"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-primary text-sm tracking-wider uppercase">Beverages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
