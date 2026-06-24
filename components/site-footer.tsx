import { Activity, MapPin, Phone } from "lucide-react"

const columns = [
  {
    title: "Services",
    links: [
      "Post surgery rehabilitation",
      "Musculoskeletal physiotherapy",
      "Physiotherapy at home",
      "Neuro physiotherapy rehab",
      "Vestibular rehabilitation",
    ],
  },
  {
    title: "Treatments",
    links: ["Back pain", "Cracking joints", "Shoulder pain", "Inflammation", "Neck pain"],
  },
  {
    title: "Conditions",
    links: ["Osteoarthritis", "Sciatica", "Concussion", "Whiplash", "Osteoporosis"],
  },
  {
    title: "Therapies",
    links: [
      "Cupping therapy",
      "Chiropractic therapy",
      "Laser therapy",
      "Traction therapy",
      "Ultrasound therapy",
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <a href="#" className="flex items-center gap-2" aria-label="Physiotattva home">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Activity className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-xl font-semibold tracking-tight text-foreground">
                Physiotattva
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              We are committed to bringing access to quality physio care through ultra-modern
              clinics and high-skilled practitioners — to all.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                No. 280, 15th Cross, 5th Phase, JP Nagar, Bangalore - 560078
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href="tel:+918004122464" className="hover:text-primary">
                  +91 1800 4122 4640
                </a>
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Copyright &copy; 2026 Physiotattva. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary">
              Refund Policy
            </a>
            <a href="#" className="hover:text-primary">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
