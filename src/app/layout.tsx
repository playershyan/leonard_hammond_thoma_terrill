import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lhttlaw.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Leonard, Hammond, Thoma & Terrill | Fort Wayne Attorneys',
    template: '%s | Leonard, Hammond, Thoma & Terrill',
  },
  description:
    'Experienced Fort Wayne attorneys specializing in Family Law, Personal Injury, and Criminal Defense. Free consultations available. Call (260) 555-0100 today.',
  keywords: [
    'Fort Wayne attorneys',
    'Indiana lawyers',
    'family law',
    'divorce attorney',
    'personal injury lawyer',
    'criminal defense',
    'Fort Wayne legal services',
  ],
  authors: [{ name: 'Leonard, Hammond, Thoma & Terrill' }],
  creator: 'Leonard, Hammond, Thoma & Terrill',
  publisher: 'Leonard, Hammond, Thoma & Terrill',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Leonard, Hammond, Thoma & Terrill',
    title: 'Leonard, Hammond, Thoma & Terrill | Fort Wayne Attorneys',
    description:
      'Experienced Fort Wayne attorneys specializing in Family Law, Personal Injury, and Criminal Defense. Free consultations available.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Leonard, Hammond, Thoma & Terrill - Fort Wayne Attorneys',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leonard, Hammond, Thoma & Terrill | Fort Wayne Attorneys',
    description:
      'Experienced Fort Wayne attorneys specializing in Family Law, Personal Injury, and Criminal Defense.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
