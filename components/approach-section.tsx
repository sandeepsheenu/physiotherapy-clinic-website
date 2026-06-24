import {
  Activity,
  HeartPulse,
  Footprints,
  Dumbbell,
  Brain,
  Wind,
  Trophy,
  PersonStanding,
  Hand,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const treatments = [
  {
    icon: HeartPulse,
    title: "Pain Management Therapy",
    desc: "Targeted techniques to relieve acute and chronic pain effectively.",
  },
  {
    icon: Activity,
    title: "Post-Surgical Rehabilitation",
    desc: "Guided recovery after knee, hip, spinal, or joint surgeries.",
  },
  {
    icon: Footprints,
    title: "Gait & Balance Training",
    desc: "Restore steady, confident movement and reduce fall risk.",
  },
  {
    icon: Dumbbell,
    title: "Strengthening & Conditioning",
    desc: "Build muscle, stability, and endurance with tailored exercises.",
  },
  {
    icon: Brain,
    title: "Neurological Rehabilitation",
    desc: "Improve coordination and mobility for neurological conditions.",
  },
  {
    icon: Wind,
    title: "Pulmonary Physiotherapy",
    desc: "Breathing-focused therapy to improve respiratory function.",
  },
  {
    icon: Trophy,
    title: "Sports Injury Recovery",
    desc: "Functional rehab to get athletes safely back to performance.",
  },
  {
    icon: PersonStanding,
    title: "Ergonomic & Postural Training",
    desc: "Correct posture and prevent pain caused by daily habits.",
  },
  {
    icon: Hand,
    title: "Manual Therapy & Stretching",
    desc: "Hands-on mobilisation to ease stiffness and boost flexibility.",
  },
]

export function ApproachSection() {
  return (
    <section id="approach" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Our Approach
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
            Our home physiotherapy treatment approach
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Evidence-based, personalised care covering every stage of your recovery journey.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <article
              key={t.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <t.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {t.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="rounded-full">
            <a href="#book">Book Now</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
