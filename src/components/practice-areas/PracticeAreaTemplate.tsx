import { Section, SectionTitle, CTASection } from '@/components/ui'

interface Service {
  title: string
  description: string
}

interface Step {
  title: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

interface Testimonial {
  name: string
  quote: string
}

interface PracticeAreaTemplateProps {
  title: string
  subtitle: string
  introduction: string
  services: Service[]
  process: Step[]
  faqs: FAQ[]
  testimonials: Testimonial[]
  ctaHeadline: string
  ctaSubheading: string
}

export function PracticeAreaTemplate({
  title,
  subtitle,
  introduction,
  services,
  process,
  faqs,
  testimonials,
  ctaHeadline,
  ctaSubheading,
}: PracticeAreaTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4 text-white/70">Home &gt; Practice Areas &gt; {title}</nav>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{title}</h1>
          <p className="text-xl text-white/90">{subtitle}</p>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-text-light">{introduction}</p>
        </div>
      </Section>

      {/* Services */}
      <Section variant="gray">
        <SectionTitle>Our Expertise Covers</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-sm text-text-light">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionTitle>How We Handle Your Case</SectionTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          {process.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-text-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="gray">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-semibold text-primary cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-3 text-text-light">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionTitle>Client Testimonials</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-text mb-4 italic">&quot;{testimonial.quote}&quot;</p>
              <p className="font-semibold text-primary">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection headline={ctaHeadline} subheading={ctaSubheading} />
    </>
  )
}
