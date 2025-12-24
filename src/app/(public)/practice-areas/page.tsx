import Link from 'next/link'
import { Container, Section, SectionTitle } from '@/components/ui'
import { Scale, Users, ShieldCheck, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Practice Areas | Leonard, Hammond, Thoma & Terrill',
  description:
    'Experienced Fort Wayne attorneys specializing in Family Law, Personal Injury, and Criminal Defense. Expert legal representation for your case.',
}

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      icon: Users,
      title: 'Divorce & Family Law',
      slug: 'divorce-family-law',
      description:
        'Compassionate representation for divorce, child custody, support, adoption, and all family law matters.',
      services: [
        'Divorce & Legal Separation',
        'Child Custody & Visitation',
        'Child & Spousal Support',
        'Property & Asset Division',
        'Prenuptial Agreements',
        'Adoption',
      ],
      color: 'bg-primary',
    },
    {
      icon: Scale,
      title: 'Personal Injury',
      slug: 'personal-injury',
      description:
        'Fighting for maximum compensation for accident victims. No fee unless we win your case.',
      services: [
        'Car & Truck Accidents',
        'Slip & Fall Injuries',
        'Medical Malpractice',
        'Workplace Injuries',
        'Wrongful Death',
        'Product Liability',
      ],
      color: 'bg-primary',
    },
    {
      icon: ShieldCheck,
      title: 'Criminal Defense',
      slug: 'criminal-defense',
      description:
        'Aggressive defense protecting your rights and freedom in all criminal matters.',
      services: [
        'DUI/OWI Defense',
        'Drug Crimes',
        'Theft & Property Crimes',
        'Assault & Battery',
        'White Collar Crimes',
        'Juvenile Defense',
      ],
      color: 'bg-primary',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <Container>
          <nav className="text-sm mb-4 text-white/70">Home &gt; Practice Areas</nav>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Practice Areas</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Experienced legal representation across multiple practice areas in Fort Wayne and
            throughout Indiana
          </p>
        </Container>
      </section>

      {/* Practice Areas Grid */}
      <Section>
        <div className="text-center mb-12">
          <SectionTitle>Areas of Legal Expertise</SectionTitle>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Our attorneys have decades of combined experience providing effective legal solutions
            for individuals and families
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.slug}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${area.color} rounded-lg flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                  {area.title}
                </h2>

                {/* Description */}
                <p className="text-text-light mb-6">{area.description}</p>

                {/* Services List */}
                <div className="mb-6">
                  <h3 className="font-semibold text-primary mb-3">Services Include:</h3>
                  <ul className="space-y-2">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="flex items-start text-sm text-text-light">
                        <span className="text-secondary mr-2">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Link */}
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section variant="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Why Choose Leonard, Hammond, Thoma & Terrill?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Decades of Experience</h3>
                  <p className="text-text-light">
                    Our attorneys bring extensive experience and proven results
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Personalized Attention</h3>
                  <p className="text-text-light">
                    We take time to understand your unique situation and goals
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Local Expertise</h3>
                  <p className="text-text-light">
                    Deep knowledge of Fort Wayne courts and legal community
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Free Consultations</h3>
                  <p className="text-text-light">
                    Meet with us at no cost to discuss your case and options
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Schedule Your Free Consultation
            </h3>
            <p className="text-text-light mb-6">
              Ready to discuss your legal matter? Contact us today for a no-obligation consultation
              with one of our experienced attorneys.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">📞</span>
                </div>
                <div>
                  <p className="text-sm text-text-light">Call Us</p>
                  <p className="font-bold text-primary">(260) 555-0100</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">✉️</span>
                </div>
                <div>
                  <p className="text-sm text-text-light">Email Us</p>
                  <p className="font-bold text-primary">contact@lhttlaw.com</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-primary text-white text-center py-3 px-6 rounded-md hover:bg-primary-dark transition-colors font-semibold mt-6"
              >
                Contact Us Online
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
