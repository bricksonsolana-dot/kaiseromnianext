import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import StructuredData from '@/app/components/StructuredData';

export const metadata: Metadata = {
  title: 'Επικοινωνία | Kaiser Omnia — Ασπρόπυργος',
  description:
    'Επικοινωνήστε με την Kaiser Omnia. Μεγαρίδος 125, Ασπρόπυργος. Τηλ: +30 6948209440. Συμπληρώστε τη φόρμα για να ξεκινήσουμε το έργο σας.',
  keywords: [
    'επικοινωνία κατασκευαστική',
    'kaiser omnia ασπροπυργος',
    'κατασκευαστική εταιρεία τηλέφωνο',
  ],
  alternates: {
    canonical: 'https://kaiser-omnia.gr/contact',
    languages: {
      'el-GR': 'https://kaiser-omnia.gr/contact',
      'en-US': 'https://kaiser-omnia.gr/en/contact',
      'x-default': 'https://kaiser-omnia.gr/contact',
    },
  },
  openGraph: {
    title: 'Επικοινωνία | Kaiser Omnia — Ασπρόπυργος',
    description:
      'Επικοινωνήστε με την Kaiser Omnia. Μεγαρίδος 125, Ασπρόπυργος. Τηλ: +30 6948209440. Συμπληρώστε τη φόρμα για να ξεκινήσουμε το έργο σας.',
    url: 'https://kaiser-omnia.gr/contact',
    siteName: 'Kaiser Omnia',
    locale: 'el_GR',
    type: 'website',
    images: [
      {
        url: 'https://kaiser-omnia.gr/philosophy.png',
        width: 1200,
        height: 630,
        alt: 'Kaiser Omnia — Επικοινωνία',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Επικοινωνία | Kaiser Omnia — Ασπρόπυργος',
    description:
      'Επικοινωνήστε με την Kaiser Omnia. Μεγαρίδος 125, Ασπρόπυργος. Τηλ: +30 6948209440. Συμπληρώστε τη φόρμα για να ξεκινήσουμε το έργο σας.',
    images: ['https://kaiser-omnia.gr/philosophy.png'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kaiser-omnia.gr' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://kaiser-omnia.gr/contact' },
  ],
}

export default function ContactPage() {
  return (
    <>
      <StructuredData schema={breadcrumbSchema} />
      <ContactClient />
    </>
  );
}
