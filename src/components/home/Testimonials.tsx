import { Section, SectionTitle, Button } from '@/components/ui'
import { Star, ExternalLink } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      area: 'Divorce & Family Law',
      rating: 5,
      quote:
        'They handled my divorce with professionalism and compassion. The attorney kept me informed every step and fought hard for fair custody arrangements. Highly recommend.',
    },
    {
      name: 'John D.',
      area: 'Personal Injury',
      rating: 5,
      quote:
        'After my car accident, they dealt with the insurance company so I could focus on recovery. Secured a settlement that covered all my medical bills and more.',
    },
    {
      name: 'Michael R.',
      area: 'Criminal Defense',
      rating: 5,
      quote:
        'Facing criminal charges was terrifying, but this firm defended me aggressively. They got my charges reduced significantly. Forever grateful.',
    },
    {
      name: 'Lisa K.',
      area: 'Divorce & Family Law',
      rating: 5,
      quote:
        'Professional, responsive, and truly cared about my case. They made a difficult time much easier. Thank you for protecting my rights.',
    },
  ]

  return (
    <Section>
      <SectionTitle>What Our Clients Say</SectionTitle>
      <p className="text-center text-text-light mb-12">Our clients speak out</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-text mb-4 italic">&quot;{testimonial.quote}&quot;</p>
            <div>
              <p className="font-semibold text-primary">{testimonial.name}</p>
              <p className="text-sm text-text-light">{testimonial.area}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">
            See More Reviews on Google
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </a>
      </div>
    </Section>
  )
}
