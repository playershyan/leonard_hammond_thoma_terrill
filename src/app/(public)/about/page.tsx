import { Section, SectionTitle, CTASection } from '@/components/ui'
import { Scale, Users, Award, Heart, Shield } from 'lucide-react'

export const metadata = {
  title: 'About Us | Law Firm Name - Fort Wayne Attorneys',
  description:
    'Learn about our Fort Wayne law firm. Experienced attorneys dedicated to family law, personal injury, and criminal defense with compassionate, client-focused representation.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Scale,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in every case we handle',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your needs and goals drive everything we do',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue the best possible outcomes through diligent preparation',
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We understand the human side of legal challenges',
    },
    {
      icon: Shield,
      title: 'Protection',
      description: 'We are fierce advocates for your rights and interests',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4 text-white/70">Home &gt; About</nav>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Our Firm</h1>
          <p className="text-xl text-white/90">Your trusted legal advocates in Fort Wayne</p>
        </div>
      </section>

      {/* Firm Overview */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Who We Are</SectionTitle>
          <div className="prose prose-lg max-w-none text-text-light">
            <p className="mb-6">
              At Law Firm Name, we are dedicated to providing exceptional legal representation
              across family law, personal injury, and criminal defense. Based in Fort Wayne,
              Indiana, our experienced attorneys combine aggressive advocacy with compassionate
              client service to achieve the best possible outcomes for those we serve.
            </p>
            <p className="mb-6">
              We understand that legal challenges are often the most stressful times in our clients'
              lives. Whether you're navigating a divorce, recovering from an injury, or facing
              criminal charges, our team is here to guide you with expertise, empathy, and
              unwavering dedication.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-background-gray p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">Our Mission</h3>
                <p className="text-text-light">
                  To protect our clients' rights and interests through skilled legal representation,
                  personalized attention, and a commitment to achieving justice.
                </p>
              </div>
              <div className="bg-background-gray p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">Our Vision</h3>
                <p className="text-text-light">
                  To be Fort Wayne's most trusted law firm, known for exceptional results, client
                  satisfaction, and positive impact in our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="gray">
        <SectionTitle>Our Core Values</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-text-light">{value.description}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* History */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Our Story</SectionTitle>
          <div className="prose prose-lg max-w-none text-text-light">
            <p className="mb-6">
              Founded with a vision to provide accessible, high-quality legal services to the Fort
              Wayne community, our firm has grown through dedication to our clients and commitment
              to excellence. Over the years, we've helped hundreds of families navigate complex
              legal challenges and achieve favorable outcomes.
            </p>
            <p className="mb-6">
              Our attorneys bring more than 50 years of combined experience to every case. We've
              built our reputation on integrity, thorough preparation, and aggressive advocacy. From
              our first case to our most recent victory, our focus remains the same: protecting our
              clients' rights and securing their futures.
            </p>
          </div>
        </div>
      </Section>

      {/* Community Involvement */}
      <Section variant="gray">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Community Commitment</SectionTitle>
          <div className="prose prose-lg max-w-none text-text-light text-center">
            <p className="mb-6">
              We believe in giving back to the Fort Wayne community that has supported us. Our
              attorneys regularly participate in pro bono legal services, local bar association
              activities, and community education programs. We're proud to serve not just as legal
              advocates, but as active members of the Fort Wayne community.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready to Work With Our Team?"
        subheading="Schedule a free consultation to discuss your legal needs"
      />
    </>
  )
}
