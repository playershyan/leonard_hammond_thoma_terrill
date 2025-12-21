import { Section, SectionTitle } from '@/components/ui'
import { Heart, Shield, Scale } from 'lucide-react'
import Link from 'next/link'

export function PracticeAreas() {
  const areas = [
    {
      icon: Heart,
      title: 'Divorce & Family Law',
      description:
        "Compassionate guidance through divorce, custody, support, and asset division. We protect your family's future.",
      href: '/practice-areas/divorce-family-law',
    },
    {
      icon: Shield,
      title: 'Personal Injury Law',
      description:
        'Maximum compensation for accident victims. We fight insurance companies to recover damages you deserve.',
      href: '/practice-areas/personal-injury',
    },
    {
      icon: Scale,
      title: 'Criminal Defense Law',
      description:
        'Aggressive protection of your rights. Experienced defense against all criminal charges from misdemeanors to felonies.',
      href: '/practice-areas/criminal-defense',
    },
  ]

  return (
    <Section>
      <SectionTitle>Our Practice Areas</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {areas.map((area) => {
          const Icon = area.icon
          return (
            <div
              key={area.title}
              className="text-center p-6 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">{area.title}</h3>
              <p className="text-text-light mb-4">{area.description}</p>
              <Link href={area.href} className="text-primary font-semibold hover:text-primary-dark">
                Learn More →
              </Link>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
