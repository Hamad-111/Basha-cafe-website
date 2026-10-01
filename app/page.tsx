import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MenuSection } from "@/components/menu-section"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import { Reservations } from "@/components/reservations"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <Testimonials />
        <FaqSection />
        <Reservations />
      </main>
      <Footer />
    </div>
  )
}
