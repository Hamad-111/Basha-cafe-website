"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Why is The Basha Cafe known as the #1 trending cafe in Islamabad?",
    answer:
      "The Basha Cafe has become Islamabad's top trending cafe and rooftop destination thanks to our cinematic Margalla mountain views, viral birthday celebration decor with crimson rose arches, authentic Russian craft hookah blends, and vibrant late-night lounge atmosphere open every single day until 4:00 AM.",
  },
  {
    question: "What are the opening hours of The Basha Cafe in Islamabad?",
    answer:
      "The Basha Cafe is open every single day, Monday through Sunday, from 12:00 PM (noon) until 4:00 AM (late night). Whether you're planning a relaxed afternoon lunch, sunset coffee, an evening dinner with friends, or a late-night sheesha lounge session, our doors are open.",
  },
  {
    question: "Where is The Basha Cafe located?",
    answer:
      "The Basha Cafe is situated on the Rooftop of Casa Bella Hotel, Main Margalla Road, E-11, Islamabad. Our elevated rooftop setting offers breathtaking panoramic views of the Islamabad skyline and Margalla Hills, pairing open-air rooftop breezes with luxury indoor lounge seating.",
  },
  {
    question: "Why is The Basha Cafe rated among the best sheesha cafes in Islamabad?",
    answer:
      "The Basha Cafe is celebrated for delivering Islamabad's finest hookah experience. We utilize authentic premium Russian pipes, top-grade natural coconut coals, and an extensive collection of 50+ world-class shisha flavors (classic double apple, mint blends, exotic fruit fusions, and house craft specials) curated by master shisha artisans for clean, smooth, long-lasting sessions.",
  },
  {
    question: "Can I book The Basha Cafe for birthdays, anniversaries, and private events?",
    answer:
      "Yes! The Basha Cafe is Islamabad's favorite venue for milestone celebrations. We offer exclusive VIP lounge areas, custom floral rose arches, neon sign backdrops, celebration cakes, fairy light ambiance, and personalized food platters. Contact us in advance through our reservation form or WhatsApp to book your dream celebration.",
  },
  {
    question: "What types of food and drinks are served at The Basha Cafe?",
    answer:
      "Our culinary team serves an extensive multi-cuisine menu including Middle Eastern mixed grill platters, artisan smash burgers, crispy buffalo wings, Alfredo pastas, grilled steaks, signature mocktails (Blue Colada, Mint Margarita), freshly brewed Italian coffees, Karak tea, and desserts such as Molten Lava Cake and Lotus Cheesecake.",
  },
  {
    question: "How can I reserve a table at The Basha Cafe?",
    answer:
      "You can reserve your table directly through our online reservation form below, or reach out to us instantly via WhatsApp or phone call at +92 324 4684895. While walk-ins are always welcomed, we recommend booking in advance for weekend evenings and VIP rooftop view tables.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden" aria-labelledby="faq-heading">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-card mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Everything You Need To Know</span>
          </div>
          <h2 id="faq-heading" className="text-4xl sm:text-5xl font-sans font-bold text-foreground mt-2 mb-6">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Got questions about <strong className="text-foreground font-semibold">The Basha Cafe</strong>, Islamabad&apos;s #1 trending rooftop cafe, restaurant, and luxury sheesha lounge? Here are answers to our most frequent guest inquiries.
          </p>
        </div>

        {/* Accordion List */}
        <div className="bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 sm:p-8 shadow-xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border border-primary/10 rounded-xl px-5 py-2 data-[state=open]:border-primary/40 data-[state=open]:bg-primary/5 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-medium text-foreground hover:text-primary transition-colors py-4">
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
