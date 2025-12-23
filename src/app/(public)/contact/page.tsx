import { Section, SectionTitle } from '@/components/ui'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata = {
  title: 'Contact Us | Law Firm Name - Fort Wayne Attorneys',
  description:
    'Contact our Fort Wayne law firm for a free consultation. Call (260) 555-0100 or visit our office at 123 Main Street. Available 24/7 for emergencies.',
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['123 Main Street', 'Fort Wayne, IN 46802'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(260) 555-0100', 'Available 24/7 for emergencies'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@lawfirm.com', 'We respond within 24 hours'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday - Sunday: By appointment'],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4 text-white/70">Home &gt; Contact</nav>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90">Schedule your free consultation today</p>
        </div>
      </section>

      {/* Contact Information */}
      <Section>
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info) => {
            const Icon = info.icon
            return (
              <div key={info.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-text-light">
                    {detail}
                  </p>
                ))}
              </div>
            )
          })}
        </div>
      </Section>

      {/* Map and Info */}
      <Section variant="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Placeholder */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Send Us a Message</h2>
            <p className="text-text-light mb-6">
              Fill out the form below and we'll get back to you within 24 hours. For immediate
              assistance, please call us at (260) 555-0100.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <ContactForm />
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Visit Our Office</h2>
            <p className="text-text-light mb-6">
              Conveniently located in downtown Fort Wayne. Free parking available for clients.
            </p>
            <div className="bg-gray-300 rounded-lg overflow-hidden" style={{ height: '400px' }}>
              {/* Google Maps Embed - Replace with actual embed URL when available */}
              <div className="w-full h-full flex items-center justify-center text-text-light">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <p className="font-semibold">Google Maps will be embedded here</p>
                  <p className="text-sm mt-2">
                    Set NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL in environment variables
                  </p>
                </div>
              </div>
              {/*
              Uncomment and use this when you have the Google Maps embed URL:
              <iframe
                src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              */}
            </div>
          </div>
        </div>
      </Section>

      {/* Why Contact Us Section */}
      <Section>
        <SectionTitle>Why Choose Our Firm?</SectionTitle>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-text-light">Years Combined Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-text-light">Emergency Availability</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-text-light">Free Consultations</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-text-light mb-6">
              Don't face legal challenges alone. Our experienced attorneys are ready to fight for
              your rights and protect your future.
            </p>
            <a
              href="tel:2605550100"
              className="inline-block bg-primary text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-dark transition-colors"
            >
              Call Now: (260) 555-0100
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
