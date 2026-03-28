// src/app/layout.tsx
import type { Metadata } from 'next';
import { Cormorant_Garamond, Barlow, Barlow_Condensed } from 'next/font/google';
import Providers from '@/app/components/Providers';
import StructuredData from '@/app/components/StructuredData';
import './globals.css';  // ← Single import, replaces both index.css and App.css

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['GeneralContractor', 'LocalBusiness'],
  name: 'Kaiser Omnia',
  legalName: 'Kaiser Omnia Construction',
  url: 'https://kaiser-omnia.gr',
  logo: 'https://kaiser-omnia.gr/logo.png',
  image: 'https://kaiser-omnia.gr/og-image.jpg',
  description: 'Κατασκευαστική Εταιρεία με 40+ χρόνια εμπειρίας. Αρχιτεκτονική και Κατασκευή Υψηλών Προδιαγραφών.',
  foundingDate: '1984',
  telephone: '+30 6948209440',
  email: 'info@kaiser-omnia.gr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Μεγαρίδος 125',
    addressLocality: 'Ασπρόπυργος',
    postalCode: '19300',
    addressCountry: 'GR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.0661,
    longitude: 23.5861,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Greece',
  },
  priceRange: '€€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Construction Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Architectural Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical Application Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Project Management' } },
    ],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kaiser Omnia',
  url: 'https://kaiser-omnia.gr',
}

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],  // latin-ext for Greek characters
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kaiser-omnia.gr'),
  title: {
    default: 'Kaiser Omnia | Κατασκευαστική Εταιρεία Αθήνα',
    template: '%s | Kaiser Omnia',
  },
  description:
    'Kaiser Omnia – Κατασκευαστική εταιρεία με 40+ χρόνια εμπειρίας στην Αθήνα. Αρχιτεκτονική, μελέτη και κατασκευή υψηλών προδιαγραφών.',
  keywords: [
    'κατασκευαστική εταιρεία αθήνα',
    'construction company athens',
    'αρχιτεκτονική',
    'κατασκευή κατοικιών',
  ],
  alternates: {
    canonical: 'https://kaiser-omnia.gr',
    languages: {
      'el-GR': 'https://kaiser-omnia.gr',
      'en-US': 'https://kaiser-omnia.gr/en',
      'x-default': 'https://kaiser-omnia.gr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    alternateLocale: 'en_US',
    siteName: 'Kaiser Omnia',
    title: 'Kaiser Omnia | Κατασκευαστική Εταιρεία Αθήνα',
    description:
      'Kaiser Omnia – Κατασκευαστική εταιρεία με 40+ χρόνια εμπειρίας στην Αθήνα. Αρχιτεκτονική, μελέτη και κατασκευή υψηλών προδιαγραφών.',
    url: 'https://kaiser-omnia.gr',
    images: [
      {
        url: 'https://kaiser-omnia.gr/philosophy.png',
        width: 1200,
        height: 630,
        alt: 'Kaiser Omnia Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaiser Omnia | Κατασκευαστική Εταιρεία Αθήνα',
    description:
      'Kaiser Omnia – Κατασκευαστική εταιρεία με 40+ χρόνια εμπειρίας στην Αθήνα. Αρχιτεκτονική, μελέτη και κατασκευή υψηλών προδιαγραφών.',
    images: ['https://kaiser-omnia.gr/philosophy.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="el"
      className={`${cormorant.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <head>
        <StructuredData schema={localBusinessSchema} />
        <StructuredData schema={websiteSchema} />
      </head>
      {/* No inline styles needed — globals.css handles body styling */}
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}