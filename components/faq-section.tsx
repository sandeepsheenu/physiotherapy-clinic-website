import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "What is home visit physiotherapy?",
    a: "Home visit physiotherapy involves a qualified physiotherapist coming to your home to provide personalised care for pain relief, mobility improvement, and rehabilitation.",
  },
  {
    q: "Can physiotherapy be done at home?",
    a: "Yes. Most physiotherapy treatments — including manual therapy, exercise prescription, and pain management — can be safely and effectively delivered in your home with the right equipment and expertise.",
  },
  {
    q: "Is home physiotherapy as effective as clinic sessions?",
    a: "Home physiotherapy is just as effective for most conditions. You receive focused, one-on-one attention, and your therapist can tailor exercises to your real home environment for better long-term results.",
  },
  {
    q: "How do I book a session?",
    a: "Simply fill out the booking form on this page or call us. Our care team will confirm your area, preferred time slot, and match you with the right physiotherapist.",
  },
]

export function FaqSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            FAQ
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
            Questions, answered
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Everything you need to know about home physiotherapy with Physiotattva.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
