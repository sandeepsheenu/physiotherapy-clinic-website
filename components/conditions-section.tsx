import { Activity, Bone, Dumbbell, Brain, Sparkles, Baby } from "lucide-react"

const conditions = [
  {
    icon: Activity,
    title: "Post-Surgery Rehabilitation",
    desc: "Recovery after knee or hip replacements, spinal surgery, or joint repairs.",
  },
  {
    icon: Bone,
    title: "Chronic Pain Management",
    desc: "Arthritis, back pain, and fibromyalgia care to reduce discomfort and improve mobility.",
  },
  {
    icon: Dumbbell,
    title: "Sports Injuries",
    desc: "Rehabilitation for sprains, strains, and tendon injuries to prevent future damage.",
  },
  {
    icon: Brain,
    title: "Stroke Recovery",
    desc: "Tailored therapies to regain motor function, coordination, and strength post-stroke.",
  },
  {
    icon: Sparkles,
    title: "Neurological Disorders",
    desc: "Care for Parkinson's, multiple sclerosis, and other movement-affecting conditions.",
  },
  {
    icon: Baby,
    title: "Pediatric Physiotherapy",
    desc: "Developmental delays, cerebral palsy, and posture problems in children.",
  },
]

export function ConditionsSection() {
  return (
    <section id="symptoms" className="bg-secondary/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Conditions We Treat
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
            Effective home physiotherapy for a wide range of conditions
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((c) => (
            <div
              key={c.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
