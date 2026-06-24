import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "After my surgery, I needed help regaining mobility. The home physiotherapy sessions were extremely convenient, and the therapist's guidance was instrumental in my recovery.",
    name: "Anjali K",
    role: "Post-surgical rehab",
  },
  {
    quote:
      "I had difficulty walking after an ankle fracture, but Physiotattva's home physiotherapy sessions brought me back on my feet. The care and attention to detail were outstanding.",
    name: "Ravi V",
    role: "Injury recovery",
  },
  {
    quote:
      "I couldn't travel for physiotherapy sessions due to my health condition. The home physiotherapy team provided exceptional care, helping me regain strength and mobility.",
    name: "Shweta M",
    role: "Chronic care",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Testimonials
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
            Recovery stories from our patients
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <Quote className="h-8 w-8 text-accent/60" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <figcaption>
                  <div className="font-heading font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
