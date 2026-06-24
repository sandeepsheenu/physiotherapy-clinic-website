"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const areas = [
  "Arekere",
  "Banashankari",
  "Bannerghatta Road",
  "Bellandur",
  "Electronic City",
  "HSR Layout",
  "Indiranagar",
  "Jayanagar",
  "JP Nagar",
  "Koramangala",
  "Malleshwaram",
  "Whitefield",
  "Yelahanka",
]

const slots = [
  "08:00 - 10:00 AM",
  "10:00 - 12:00 PM",
  "12:00 - 02:00 PM",
  "02:00 - 04:00 PM",
  "04:00 - 06:00 PM",
  "06:00 - 08:00 PM",
]

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="mb-6">
        <h2 className="font-heading text-2xl font-semibold text-foreground">Book Now</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Fill this form &amp; we&apos;ll take it from there!
        </p>
      </div>

      {submitted ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl bg-secondary px-6 py-12 text-center">
          <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
          <h3 className="font-heading text-xl font-semibold text-foreground">
            Request received!
          </h3>
          <p className="max-w-xs text-sm text-muted-foreground">
            Thank you. Our care team will reach out shortly to confirm your home
            physiotherapy session.
          </p>
          <Button
            variant="outline"
            className="mt-2 rounded-full"
            onClick={() => setSubmitted(false)}
          >
            Book another session
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="111-222-3333" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="area">Area</Label>
            <Select>
              <SelectTrigger id="area" className="w-full">
                <SelectValue placeholder="Select your area" />
              </SelectTrigger>
              <SelectContent>
                {areas.map((area) => (
                  <SelectItem key={area} value={area}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Select>
                <SelectTrigger id="time" className="w-full">
                  <SelectValue placeholder="Pick a time-slot" />
                </SelectTrigger>
                <SelectContent>
                  {slots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="List down your symptoms"
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full rounded-full" size="lg">
            Book My Session
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            By submitting, you agree to be contacted about your appointment.
          </p>
        </form>
      )}
    </div>
  )
}
