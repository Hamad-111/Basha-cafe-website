"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu & Shisha", href: "#menu" },
    { label: "VIP Celebrations", href: "#celebrations" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Reservations", href: "#reservations" },
  ]

  return (
    <footer id="contact" className="bg-background border-t border-primary/20" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block p-3 mb-6 rounded-full border border-primary/20 bg-card">
              <span className="text-primary font-serif font-bold text-xl tracking-tighter italic">
                The Basha <span className="text-foreground">Cafe</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Islamabad&apos;s #1 trending rooftop cafe, restaurant, and luxury sheesha lounge in E-11. Indulge in world-class hookah flavors, artisanal cuisine, viral celebration setups, and late-night vibes until 4:00 AM.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/thebashacafe?igsh=eHU3bjV2bzE3aHJq&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
                aria-label="Follow Basha Cafe on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/177v9Q2DKr/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
                aria-label="Follow Basha Cafe on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@bashacafeww?_r=1&_t=ZS-93NxPf4cl2f"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
                aria-label="Follow Basha Cafe on TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Quick Links">
            <h3 className="text-foreground font-semibold mb-6 tracking-wider uppercase text-sm">Explore</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info with Schema Semantic markup */}
          <div>
            <h3 className="text-foreground font-semibold mb-6 tracking-wider uppercase text-sm">Location &amp; Contact</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  Rooftop Casa Bella Hotel,<br />
                  Main Margalla Rd, E-11/4,<br />
                  Islamabad, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+923244684895"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors font-medium"
                >
                  +92 324 4684895
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:khanhaziq508@gmail.com"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  khanhaziq508@gmail.com
                </a>
              </div>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-foreground font-semibold mb-6 tracking-wider uppercase text-sm">Operating Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-card/60 border border-primary/20 rounded-xl">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground text-sm">
                  <p className="font-semibold text-foreground">Monday – Sunday</p>
                  <p className="text-primary font-medium">12:00 PM – 4:00 AM</p>
                  <p className="text-xs text-muted-foreground mt-1">Open late night 7 days a week</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {currentYear} Basha Cafe &amp; Restaurant. All rights reserved. Top Sheesha Cafe in Islamabad.
          </p>
          <div className="flex gap-6">
            <Link href="#celebrations" className="hover:text-primary transition-colors">
              Birthday Setups
            </Link>
            <Link href="#reservations" className="hover:text-primary transition-colors">
              Table Booking
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact &amp; Location
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
