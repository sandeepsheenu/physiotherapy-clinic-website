import Image from "next/image"
import { ShieldCheck, Clock, Star } from "lucide-react"
import { BookingForm } from "@/components/booking-form"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:pb-24 lg:pt-16">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Now serving 24+ areas across Bangalore
          </span>

          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Professional home physiotherapy in Bangalore
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Can&apos;t step out? Well, that&apos;s where we step in. Expert physiotherapists
            deliver personalised pain relief, mobility restoration, and post-surgical rehab
            right to your doorstep.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-sm">
            <Image
              src="/images/hero-physio.png"
              alt="A physiotherapist helping a patient with a gentle stretch in a sunlit home"
              width={900}
              height={560}
              priority
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {[
              { icon: Clock, label: "Same-day", sub: "appointments" },
              { icon: ShieldCheck, label: "Certified", sub: "physiotherapists" },
              { icon: Star, label: "4.9/5", sub: "patient rating" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-4"
              >
                <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <dt className="font-heading text-lg font-semibold text-foreground">
                  {item.label}
                </dt>
                <dd className="text-xs text-muted-foreground">{item.sub}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right - booking form */}
        <div id="book" className="lg:pt-4">
          <BookingForm />
        </div>
      </div>
    </section>
  )
}
