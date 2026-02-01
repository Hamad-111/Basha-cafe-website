"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Users, CheckCircle } from "lucide-react"

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
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="reservations" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm tracking-[0.3em] uppercase">Reserve</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground mt-4 mb-6">
              Book Your <span className="text-primary">Experience</span>
            </h2>
            <div className="w-24 h-px bg-primary mb-8" />
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Secure your table at Basha Cafe and prepare for an unforgettable evening. 
              Whether it{"'"}s a romantic dinner, a celebration with friends, or a relaxing 
              hookah session, we{"'"}re ready to welcome you.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-background/50 border border-primary/20">
                <Calendar className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-foreground font-medium">Open Daily</p>
                  <p className="text-muted-foreground text-sm">Monday - Sunday</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-background/50 border border-primary/20">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-foreground font-medium">Operating Hours</p>
                  <p className="text-muted-foreground text-sm">4:00 PM - 2:00 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-background/50 border border-primary/20">
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-foreground font-medium">Private Events</p>
                  <p className="text-muted-foreground text-sm">VIP lounge available for special occasions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-background border border-primary/30 p-8 sm:p-10 relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-primary" />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-primary" />

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-foreground mb-2">Reservation Confirmed!</h3>
                <p className="text-muted-foreground">We{"'"}ll contact you shortly to confirm your booking.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-serif text-foreground mb-6 text-center">Make a Reservation</h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground/80">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-muted border-primary/30 focus:border-primary text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground/80">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-muted border-primary/30 focus:border-primary text-foreground"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground/80">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-muted border-primary/30 focus:border-primary text-foreground"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-foreground/80">Date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="bg-muted border-primary/30 focus:border-primary text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-foreground/80">Time</Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="bg-muted border-primary/30 focus:border-primary text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-foreground/80">Guests</Label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 bg-muted border border-primary/30 focus:border-primary text-foreground rounded-md"
                    >
                      <option value="">Select</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? "Guest" : "Guests"}</option>
                      ))}
                      <option value="10+">10+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requests" className="text-foreground/80">Special Requests</Label>
                  <Textarea
                    id="requests"
                    name="requests"
                    value={formData.requests}
                    onChange={handleChange}
                    rows={3}
                    className="bg-muted border-primary/30 focus:border-primary text-foreground resize-none"
                    placeholder="Any special requests or dietary requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-sm tracking-wider uppercase font-medium"
                >
                  Reserve Now
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
