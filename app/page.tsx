import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MenuSection } from "@/components/menu-section"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Reservations } from "@/components/reservations"
import { VideoTutorial } from "@/components/video-tutorial"
import { GuestReviews } from "@/components/guest-reviews"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <Testimonials />
      <VideoTutorial />
      <GuestReviews />
      <Reservations />
      <Footer />
    </main>
  )
}
