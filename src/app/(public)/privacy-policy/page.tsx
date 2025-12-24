import { Container, Section } from '@/components/ui'

export const metadata = {
  title: 'Privacy Policy | Leonard, Hammond, Thoma & Terrill',
  description:
    'Privacy policy for Leonard, Hammond, Thoma & Terrill law firm. Learn how we protect your information and handle data submitted through our website.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'December 25, 2024'

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <Container>
          <nav className="text-sm mb-4 text-white/70">Home &gt; Privacy Policy</nav>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/90">
            Our commitment to protecting your privacy and personal information
          </p>
        </Container>
      </section>

      {/* Privacy Policy Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8">
            <p className="text-sm text-text-light">
              <strong>Last Updated:</strong> {lastUpdated}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                1. Introduction
              </h2>
              <p className="text-text leading-relaxed mb-4">
                Leonard, Hammond, Thoma & Terrill ("we," "us," "our," or "the Firm") is
                committed to protecting the privacy of visitors to our website located at{' '}
                <a href="https://lhttlaw.com" className="text-primary hover:underline">
                  lhttlaw.com
                </a>{' '}
                (the "Website"). This Privacy Policy describes our practices concerning the
                collection, use, and disclosure of information submitted through our Website,
                particularly through our online contact form.
              </p>
              <p className="text-text leading-relaxed">
                By using this Website, you acknowledge that you have read and understood this
                Privacy Policy and consent to the practices described herein.
              </p>
            </section>

            {/* Information Collection */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                2. Information Collection and Transmission
              </h2>
              <p className="text-text leading-relaxed mb-4">
                <strong className="text-primary">No Database Storage:</strong> Our Website does not
                store personal information submitted through the contact form in any database or
                persistent storage system. When you submit the contact form, your information is
                transmitted directly via email to the Firm's designated email address.
              </p>
              <p className="text-text leading-relaxed mb-4">
                <strong className="text-primary">Information Collected:</strong> The contact form
                collects the following information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text space-y-2">
                <li>First and Last Name</li>
                <li>Email Address</li>
                <li>Telephone Number</li>
                <li>Subject of Inquiry</li>
                <li>Message Content</li>
              </ul>
              <p className="text-text leading-relaxed">
                This information is collected solely to enable us to respond to your inquiry and
                evaluate whether we can assist you with your legal matter.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                3. Data Retention and Storage
              </h2>
              <p className="text-text leading-relaxed mb-4">
                <strong className="text-primary">Website Servers:</strong> Because this Website does
                not utilize a contact database or persistent storage system for form submissions, no
                record of your submitted information remains on our Website servers or hosting
                infrastructure after the email transmission is complete.
              </p>
              <p className="text-text leading-relaxed mb-4">
                <strong className="text-primary">Email Records:</strong> Information received via
                email is subject to our internal email retention policies and may be retained in our
                email system consistent with our document retention obligations and professional
                responsibilities as attorneys licensed to practice law.
              </p>
              <p className="text-text leading-relaxed">
                <strong className="text-primary">Legal Obligations:</strong> We may retain
                information as required by applicable law, legal process, litigation, or regulatory
                requirements.
              </p>
            </section>

            {/* Use of Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                4. Use of Information
              </h2>
              <p className="text-text leading-relaxed mb-4">
                Information received through the contact form is used exclusively for the following
                purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-text space-y-2">
                <li>Responding to your inquiry or request for information</li>
                <li>Evaluating potential legal representation</li>
                <li>Scheduling consultations or appointments</li>
                <li>
                  Providing information about our legal services that may be relevant to your inquiry
                </li>
              </ul>
              <p className="text-text leading-relaxed">
                <strong className="text-primary">No Sale or Sharing:</strong> We do not sell, rent,
                lease, or otherwise disclose your personal information to third parties for
                marketing purposes. We do not share your information with third parties except as
                described in this Privacy Policy or as required by law.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                5. Third-Party Service Providers
              </h2>
              <p className="text-text leading-relaxed mb-4">
                <strong className="text-primary">Email Service Provider:</strong> We utilize Resend,
                a third-party email delivery service, to facilitate the transmission of contact form
                submissions from the Website to our internal email system. Resend processes your
                information solely for the purpose of delivering your message to us and does not
                retain your data beyond what is necessary to complete the transmission.
              </p>
              <p className="text-text leading-relaxed mb-4">
                <strong className="text-primary">Web Hosting:</strong> Our Website is hosted on
                third-party servers. While we implement reasonable security measures, visitors should
                be aware that information transmitted over the internet may be subject to
                interception.
              </p>
              <p className="text-text leading-relaxed">
                <strong className="text-primary">Analytics:</strong> We may use Google Analytics or
                similar services to collect anonymous usage statistics to improve our Website. These
                services may use cookies to collect non-personally identifiable information about
                your visit.
              </p>
            </section>

            {/* Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                6. Security Measures
              </h2>
              <p className="text-text leading-relaxed mb-4">
                We implement reasonable administrative, technical, and physical security measures
                designed to protect the information transmitted through our Website. However, no
                method of transmission over the internet or electronic storage is completely secure.
              </p>
              <p className="text-text leading-relaxed">
                <strong className="text-primary">Important:</strong> You should not transmit
                confidential, sensitive, or time-sensitive information through the contact form.
                Email and online forms are not secure methods of communication for confidential
                matters.
              </p>
            </section>

            {/* No Attorney-Client Relationship */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                7. No Attorney-Client Relationship
              </h2>
              <div className="bg-yellow-50 border-l-4 border-secondary p-6 mb-4">
                <p className="text-text leading-relaxed font-semibold mb-2">IMPORTANT NOTICE:</p>
                <p className="text-text leading-relaxed">
                  Submission of information through this Website, including the contact form, does
                  NOT create an attorney-client relationship between you and Leonard, Hammond, Thoma
                  & Terrill. An attorney-client relationship is established only through a written
                  engagement agreement signed by both you and the Firm.
                </p>
              </div>
              <p className="text-text leading-relaxed mb-4">
                <strong className="text-primary">No Confidentiality:</strong> Information you submit
                through this Website is not protected by attorney-client privilege or work product
                doctrine until a formal attorney-client relationship has been established.
              </p>
              <p className="text-text leading-relaxed">
                <strong className="text-primary">Time-Sensitive Matters:</strong> Do not use this
                Website to communicate time-sensitive information, as we cannot guarantee when or
                whether your submission will be reviewed. If you have a legal matter with urgent
                deadlines, please contact our office directly by telephone.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                8. Cookies and Tracking Technologies
              </h2>
              <p className="text-text leading-relaxed mb-4">
                Our Website may use cookies and similar tracking technologies to enhance user
                experience and collect analytics data. Cookies are small data files stored on your
                device.
              </p>
              <p className="text-text leading-relaxed">
                <strong className="text-primary">Managing Cookies:</strong> Most web browsers allow
                you to control cookies through browser settings. You may disable cookies, though
                doing so may affect certain Website functionality.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-text leading-relaxed">
                Our Website is not directed to individuals under the age of 18. We do not knowingly
                collect personal information from minors. If you believe we have inadvertently
                collected information from a minor, please contact us immediately.
              </p>
            </section>

            {/* California Privacy Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                10. Your Privacy Rights
              </h2>
              <p className="text-text leading-relaxed mb-4">
                <strong className="text-primary">California Residents:</strong> Under California law
                (including the California Consumer Privacy Act), California residents may have
                certain rights regarding their personal information. Because we do not store contact
                form data in a database, we have limited ability to retrieve or delete such
                information from our Website infrastructure.
              </p>
              <p className="text-text leading-relaxed">
                However, you may contact us to request information about what personal data we may
                have retained in our email system or to request deletion of such information, subject
                to legal and professional retention obligations.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-text leading-relaxed">
                We reserve the right to modify this Privacy Policy at any time. Changes will be
                effective immediately upon posting to this Website with an updated "Last Updated"
                date. Your continued use of the Website after any changes constitutes your acceptance
                of the revised Privacy Policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                12. Contact Information
              </h2>
              <p className="text-text leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please
                contact us:
              </p>
              <div className="bg-background-gray p-6 rounded-lg border border-gray-200">
                <p className="text-text mb-2">
                  <strong>Leonard, Hammond, Thoma & Terrill</strong>
                </p>
                <p className="text-text mb-2">123 Main Street</p>
                <p className="text-text mb-2">Fort Wayne, IN 46802</p>
                <p className="text-text mb-2">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+12605550100" className="text-primary hover:underline">
                    (260) 555-0100
                  </a>
                </p>
                <p className="text-text">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:contact@lhttlaw.com" className="text-primary hover:underline">
                    contact@lhttlaw.com
                  </a>
                </p>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="mb-8">
              <div className="bg-gray-100 border border-gray-300 p-6 rounded-lg">
                <h3 className="text-lg font-heading font-bold text-primary mb-3">Disclaimer</h3>
                <p className="text-sm text-text leading-relaxed">
                  This Privacy Policy is provided for informational purposes and does not constitute
                  legal advice. The information on this Website is for general informational purposes
                  only and should not be construed as legal advice or relied upon as a substitute for
                  legal counsel. Laws governing privacy and data protection vary by jurisdiction and
                  are subject to change.
                </p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </>
  )
}
