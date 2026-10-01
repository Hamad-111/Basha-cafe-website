"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Users, CheckCircle, PhoneCall } from "lucide-react"

export function Reservations() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 6000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="reservations" className="py-24 bg-card relative overflow-hidden" aria-labelledby="reservations-heading">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-bold">Reserve Your Table</span>
            <h2 id="reservations-heading" className="text-4xl sm:text-5xl font-sans font-bold text-foreground mt-4 mb-6">
              Book Your <span className="text-primary italic">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-8" />

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Secure your prime table at <strong className="text-foreground font-semibold">The Basha Cafe</strong>, Islamabad&apos;s #1 trending rooftop destination. Whether it&apos;s an intimate dinner, viral birthday celebration, or a relaxing sheesha night under the Margalla sky, we are ready to welcome you with five-star hospitality.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-background/50 border border-primary/20 rounded-xl">
                <Calendar className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Open Daily</p>
                  <p className="text-muted-foreground text-sm">Monday through Sunday</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-background/50 border border-primary/20 rounded-xl">
                <Clock className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Operating Hours</p>
                  <p className="text-muted-foreground text-sm">12:00 PM – 4:00 AM (Late Night)</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-background/50 border border-primary/20 rounded-xl">
                <Users className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">VIP Lounge &amp; Celebrations</p>
                  <p className="text-muted-foreground text-sm">Private birthday setups &amp; anniversary bookings available</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-background/50 border border-primary/20 rounded-xl">
                <PhoneCall className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Direct Call or WhatsApp</p>
                  <a href="tel:03244684895" className="text-primary hover:underline text-sm font-medium">
                    +92 324 4684895
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-background border border-primary/30 p-8 sm:p-10 rounded-2xl relative shadow-2xl">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary rounded-tl-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary rounded-tr-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary rounded-bl-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary rounded-br-2xl pointer-events-none" />

            {isSubmitted ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-foreground mb-2">Reservation Request Received!</h3>
                <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                  Thank you, {formData.name || "Guest"}. Our concierge will contact you via WhatsApp/phone to confirm your table.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-serif text-foreground mb-6 text-center">Make an Online Reservation</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="reservation-name" className="text-foreground/90 font-medium">Full Name</Label>
                    <Input
                      id="reservation-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-card border-primary/30 focus:border-primary text-foreground"
                      placeholder="e.g. Ali Ahmed"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reservation-phone" className="text-foreground/90 font-medium">Phone / WhatsApp</Label>
                    <Input
                      id="reservation-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-card border-primary/30 focus:border-primary text-foreground"
                      placeholder="0324 1234567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reservation-email" className="text-foreground/90 font-medium">Email Address (Optional)</Label>
                  <Input
                    id="reservation-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-card border-primary/30 focus:border-primary text-foreground"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="reservation-date" className="text-foreground/90 font-medium">Date</Label>
                    <Input
                      id="reservation-date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="bg-card border-primary/30 focus:border-primary text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reservation-time" className="text-foreground/90 font-medium">Time</Label>
                    <Input
                      id="reservation-time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="bg-card border-primary/30 focus:border-primary text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reservation-guests" className="text-foreground/90 font-medium">Guests</Label>
                    <select
                      id="reservation-guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 bg-card border border-primary/30 focus:border-primary text-foreground rounded-md text-sm"
                    >
                      <option value="">Select guests</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? "Guest" : "Guests"}</option>
                      ))}
                      <option value="10+">10+ Guests (Group/Event)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reservation-requests" className="text-foreground/90 font-medium">Special Requests / Occasion</Label>
                  <Textarea
                    id="reservation-requests"
                    name="requests"
                    value={formData.requests}
                    onChange={handleChange}
                    rows={3}
                    className="bg-card border-primary/30 focus:border-primary text-foreground resize-none"
                    placeholder="e.g. Birthday celebration, rooftop Margalla view table, preferred shisha flavor..."
                  />
                </div>

                <Button
                  type="submit"
                  id="submit-reservation-btn"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-sm tracking-wider uppercase font-medium shadow-lg shadow-primary/20"
                >
                  Confirm Table Reservation
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
