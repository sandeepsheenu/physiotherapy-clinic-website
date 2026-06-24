import Image from "next/image"
import { Check } from "lucide-react"

const highlights = [
  "Tailored treatment plans for individual needs",
  "Professional care delivered at home",
  "Advanced techniques for effective recovery",
  "Comprehensive pain management solutions",
  "Posture correction and injury rehabilitation",
  "Focus on improved mobility and well-being",
]

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary/50 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="order-2 overflow-hidden rounded-3xl border border-border shadow-sm lg:order-1">
          <Image
            src="/images/about-physio.png"
            alt="A physiotherapist guiding a patient through a resistance band exercise at home"
            width={760}
            height={620}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            About Us
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
            Convenient home physiotherapy at your doorstep
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our mission is to provide personalised and effective care in the comfort of your
            home. We deliver expert services directly to you, ensuring comprehensive recovery,
            convenience, and accessibility for a wide range of physical conditions.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our experienced physiotherapists specialise in pain relief, mobility restoration,
            and post-surgical rehabilitation, addressing conditions like back pain, joint
            discomfort, posture correction, and sports injuries effectively.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
