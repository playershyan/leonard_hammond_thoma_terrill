import { Section, SectionTitle } from '@/components/ui'
import { Award, Heart, TrendingUp, Clock, DollarSign } from 'lucide-react'

export function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: 'Experienced Attorneys',
      description:
        '50+ Years Combined Experience | Expert representation in all three practice areas',
    },
    {
      icon: Heart,
      title: 'Compassionate Approach',
      description: 'We understand your situation | Personalized, client-focused strategies',
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Hundreds of successful cases | Consistent results for our clients',
    },
    {
      icon: Clock,
      title: 'Available 24/7',
      description: "Emergencies don't wait | We're here when you need us most",
    },
    {
      icon: DollarSign,
      title: 'Free Consultations',
      description: 'No obligation | Clear information about your options',
    },
  ]

  return (
    <Section variant="gray">
      <SectionTitle>Why Clients Trust Us</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div key={feature.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-text-light">{feature.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
