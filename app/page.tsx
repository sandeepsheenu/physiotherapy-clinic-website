import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ApproachSection } from "@/components/approach-section"
import { CtaBand } from "@/components/cta-band"
import { WhyChoose } from "@/components/why-choose"
import { Testimonials } from "@/components/testimonials"
import { ConditionsSection } from "@/components/conditions-section"
import { FaqSection } from "@/components/faq-section"
import { ServiceAreas } from "@/components/service-areas"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <ApproachSection />
        <CtaBand />
        <WhyChoose />
        <ConditionsSection />
        <Testimonials />
        <FaqSection />
        <ServiceAreas />
      </main>
      <SiteFooter />
    </div>
  )
}
