import { Hero } from '@/components/home/Hero'
import { PracticeAreas } from '@/components/home/PracticeAreas'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { Testimonials } from '@/components/home/Testimonials'
import { BlogPreview } from '@/components/home/BlogPreview'
import { CTASection } from '@/components/ui/CTASection'

export const metadata = {
  title: 'Law Firm Name | Fort Wayne Divorce, Personal Injury & Criminal Defense Attorneys',
  description:
    'Trusted Fort Wayne law firm specializing in divorce & family law, personal injury, and criminal defense. Free consultations. Call (260) 555-0100.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <WhyChooseUs />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </>
  )
}
