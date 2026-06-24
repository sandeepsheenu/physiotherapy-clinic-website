import { MapPin } from "lucide-react"

const areas = [
  "Arekere",
  "Banashankari",
  "Bannerghatta Road",
  "Begur",
  "Bellandur",
  "Electronic City",
  "Hoodi",
  "HSR Layout",
  "Indiranagar",
  "Jayanagar",
  "JP Nagar",
  "Kaggadasapura",
  "Kalyan Nagar",
  "Koramangala",
  "Malleshwaram",
  "Nagarbhavi",
  "Rajarajeshwari Nagar",
  "Sadashiv Nagar",
  "Sahakar Nagar",
  "Sarjapura",
  "Vijayanagar",
  "Kanakapura",
  "Whitefield",
  "Yelahanka",
]

export function ServiceAreas() {
  return (
    <section id="services" className="bg-secondary/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Coverage
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
            Areas we serve across Bangalore
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Expert physiotherapists ready to visit you in 24+ neighbourhoods.
          </p>
        </div>

        <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <li key={area}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary">
                <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                {area}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
