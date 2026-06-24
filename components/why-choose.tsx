import { Users, Home, ClipboardList, Wallet } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Experienced physiotherapists",
    desc: "A team of highly trained specialists across a variety of rehabilitation techniques.",
  },
  {
    icon: Home,
    title: "Convenience & comfort",
    desc: "Treatment delivered directly to your home — a more comfortable alternative to clinic visits.",
  },
  {
    icon: ClipboardList,
    title: "Tailored treatment plans",
    desc: "We assess your condition and customise plans to fit your specific needs and goals.",
  },
  {
    icon: Wallet,
    title: "Affordable & accessible",
    desc: "Cost-effective home physiotherapy without compromising on quality of care.",
  },
]

export function WhyChoose() {
  return (
    <section className="bg-secondary/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Why Physiotattva
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
            Why choose Physiotattva in Bangalore
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We bring top-notch physiotherapy to you with the best physiotherapists, available
            in the comfort of your home or at our fully equipped clinics.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <r.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
