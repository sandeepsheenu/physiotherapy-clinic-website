import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBand() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">
          <Image
            src="/images/cta-physio.png"
            alt=""
            aria-hidden="true"
            width={800}
            height={600}
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="relative grid gap-6 px-6 py-12 sm:px-10 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:py-16">
            <div>
              <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
                Book expert home physiotherapy in Bangalore now
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-primary-foreground/85">
                Experience personalised home physiotherapy providing expert care at your
                doorstep for effective recovery, pain relief, and improved well-being.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full"
              >
                <a href="tel:+918004122464">
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href="#book">Book Online</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
