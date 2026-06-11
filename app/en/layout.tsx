import type { Metadata } from 'next'

const siteUrl = 'https://meetingroomutrecht.nl'

export const metadata: Metadata = {
  title: {
    default: 'Luxury meeting room & venue for hire in Utrecht | Villa 37',
    template: '%s | Villa 37',
  },
  description:
    'Rent a unique and inspiring meeting venue in Utrecht. Luxury meeting room for meetings, workshops, coaching and events in a beautiful villa setting.',
  keywords: [
    'meeting room Utrecht',
    'venue hire Utrecht',
    'luxury meeting venue Netherlands',
    'Villa 37 Utrecht',
    'team offsite Utrecht',
    'workshop venue Utrecht',
    'meeting room Netherlands',
    'event venue Utrecht',
  ],
  alternates: {
    canonical: `${siteUrl}/en`,
    languages: {
      nl: siteUrl,
      en: `${siteUrl}/en`,
      'x-default': siteUrl,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: `${siteUrl}/en`,
    siteName: 'Villa 37',
    title: 'Luxury meeting room & venue for hire in Utrecht | Villa 37',
    description:
      'Rent a unique and inspiring meeting venue in Utrecht. Luxury meeting room for meetings, workshops, coaching and events in a beautiful villa setting.',
    images: [
      {
        url: '/venue/photo-9.jpg',
        width: 1200,
        height: 630,
        alt: 'Villa 37 — Luxury Meeting Venue Utrecht',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury meeting room & venue for hire in Utrecht | Villa 37',
    description:
      'Luxury meeting venue in Utrecht for meetings, workshops, dinners and special gatherings.',
    images: ['/venue/photo-9.jpg'],
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
