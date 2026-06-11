import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import { headers } from 'next/headers'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

const siteUrl = 'https://meetingroomutrecht.nl'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bijzondere, inspirerende en luxe vergaderlocatie huren Utrecht | vergaderruimte & meetingroom',
    template: '%s | Villa 37',
  },
  description:
    'Huur een bijzondere en inspirerende vergaderlocatie in Utrecht. Luxe meetingroom / vergaderruimte voor meetings, workshops en events in een unieke setting.',
  keywords: [
    'vergaderlocatie Utrecht',
    'meetingroom Utrecht',
    'vergaderruimte huren Utrecht',
    'luxe vergaderlocatie',
    'villa verhuur vergadering',
    'Villa 37',
    'team offsite Utrecht',
    'workshop locatie Utrecht',
  ],
  authors: [{ name: 'Villa 37', url: siteUrl }],
  alternates: {
    canonical: siteUrl,
    languages: {
      nl: siteUrl,
      en: `${siteUrl}/en`,
      'x-default': siteUrl,
    },
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
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: siteUrl,
    siteName: 'Villa 37',
    title: 'Bijzondere, inspirerende en luxe vergaderlocatie huren Utrecht | vergaderruimte & meetingroom',
    description:
      'Huur een bijzondere en inspirerende vergaderlocatie in Utrecht. Luxe meetingroom / vergaderruimte voor meetings, workshops en events in een unieke setting.',
    images: [
      {
        url: '/venue/photo-9.jpg',
        width: 1200,
        height: 630,
        alt: 'Villa 37 — Luxe Vergaderlocatie Utrecht',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bijzondere, inspirerende en luxe vergaderlocatie huren Utrecht | vergaderruimte & meetingroom',
    description:
      'Luxe vergaderlocatie in Utrecht voor meetings, workshops, diners en bijzondere bijeenkomsten.',
    images: ['/venue/photo-9.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EventVenue'],
    name: 'Villa 37',
    description:
      'Luxe vergaderlocatie in Utrecht voor meetings, workshops, diners en bijzondere bijeenkomsten.',
    url: siteUrl,
    telephone: '+31647779797',
    email: 'contact@meetingroomutrecht.nl',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Emmikkerboslaan 37',
      addressLocality: 'Utrecht',
      postalCode: '3454 NV',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.074,
      longitude: 5.0325,
    },
    image: `${siteUrl}/venue/photo-9.jpg`,
    priceRange: '€€',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '23:00',
    },
    areaServed: { '@type': 'City', name: 'Utrecht' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Vergaderlocatie huren — gehele dag',
    description: 'Exclusief gebruik van de woonkamer van Villa 37 voor de gehele dag, inclusief thee, koffie en water.',
    brand: { '@type': 'Brand', name: 'Villa 37' },
    offers: {
      '@type': 'Offer',
      url: siteUrl,
      priceCurrency: 'EUR',
      price: '460',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      itemOffered: {
        '@type': 'Service',
        name: 'Dagverhuur vergaderlocatie Utrecht',
        areaServed: 'Utrecht',
      },
    },
  },
]

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const locale = headersList.get('x-locale') ?? 'nl'

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.VERCEL_ENV && <Analytics />}
      </body>
    </html>
  )
}
