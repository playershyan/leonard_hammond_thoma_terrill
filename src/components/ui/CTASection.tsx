import { Button } from '@/components/ui'
import { Phone } from 'lucide-react'
import Link from 'next/link'

interface CTASectionProps {
  headline?: string
  subheading?: string
  phoneNumber?: string
}

export function CTASection({
  headline = 'Ready to Protect Your Rights?',
  subheading = 'Schedule your free consultation today',
  phoneNumber = '(260) 555-0100',
}: CTASectionProps) {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{headline}</h2>
        <p className="text-xl mb-8 text-white/90">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Schedule Free Consultation
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-primary"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now: {phoneNumber}
          </Button>
        </div>
        <p className="text-sm text-white/70 mt-6">We respond to inquiries within 24 hours</p>
      </div>
    </section>
  )
}
