"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border border-primary/20">
              <Image
                src="/logo-gold.png"
                alt="Basha Cafe Logo"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Where flavor meets the lounge experience. Premium hookah, exquisite cuisine,
              and an atmosphere designed for unforgettable moments.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/thebashacafe?igsh=eHU3bjV2bzE3aHJq&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/177v9Q2DKr/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@bashacafeww?_r=1&_t=ZS-93NxPf4cl2f"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-medium mb-6 tracking-wider uppercase text-sm">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Menu", "Gallery", "Reservations"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-medium mb-6 tracking-wider uppercase text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Roof Top Casa Bella Hotel<br />
                  E-11, Islamabad
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:03244684895" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  0324 4684895
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:khanhaziq508@gmail.com" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  khanhaziq508@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-foreground font-medium mb-6 tracking-wider uppercase text-sm">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground text-sm">
                  <p className="font-medium text-foreground/80">Monday - Sunday</p>
                  <p>12:00 PM - 4:00 AM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Basha Cafe & Restaurant. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
