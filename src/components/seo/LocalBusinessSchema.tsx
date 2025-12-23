export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Leonard, Hammond, Thoma & Terrill',
    description:
      'Experienced attorneys in Fort Wayne, Indiana specializing in Family Law, Personal Injury, and Criminal Defense.',
    url: 'https://lhttlaw.com',
    logo: 'https://lhttlaw.com/logo.png',
    image: 'https://lhttlaw.com/office.jpg',
    telephone: '+1-260-555-0100',
    email: 'contact@lhttlaw.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'Fort Wayne',
      addressRegion: 'IN',
      postalCode: '46802',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '41.0793',
      longitude: '-85.1394',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Fort Wayne',
      },
      {
        '@type': 'State',
        name: 'Indiana',
      },
    ],
    sameAs: [
      'https://www.facebook.com/yourfirm',
      'https://www.linkedin.com/company/yourfirm',
      'https://twitter.com/yourfirm',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Legal Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Family Law & Divorce',
            description: 'Divorce, child custody, spousal support, and family law matters',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Personal Injury',
            description: 'Car accidents, workplace injuries, and personal injury claims',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Criminal Defense',
            description: 'DUI/OWI defense, misdemeanors, felonies, and criminal law',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
