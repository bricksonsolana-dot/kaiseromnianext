import type { Metadata } from 'next';
import ServicesClient from '@/app/services/ServicesClient';
import StructuredData from '@/app/components/StructuredData';

export const metadata: Metadata = {
  title: 'Υπηρεσίες Κατασκευής & Αρχιτεκτονικής',
  description:
    'Αρχιτεκτονική μελέτη, τεχνική εφαρμογή, κατασκευή και project management. 40+ χρόνια εμπειρίας στην κατασκευή υψηλών προδιαγραφών.',
  keywords: [
    'αρχιτεκτονική μελέτη',
    'κατασκευή κατοικίας',
    'project management κατασκευή',
  ],
  alternates: {
    canonical: 'https://kaiser-omnia.gr/services',
    languages: {
      'el-GR': 'https://kaiser-omnia.gr/services',
      'en-US': 'https://kaiser-omnia.gr/en/services',
      'x-default': 'https://kaiser-omnia.gr/services',
    },
  },
  openGraph: {
    title: 'Υπηρεσίες Κατασκευής & Αρχιτεκτονικής | Kaiser Omnia',
    description:
      'Αρχιτεκτονική μελέτη, τεχνική εφαρμογή, κατασκευή και project management. 40+ χρόνια εμπειρίας στην κατασκευή υψηλών προδιαγραφών.',
    url: 'https://kaiser-omnia.gr/services',
    siteName: 'Kaiser Omnia',
    locale: 'el_GR',
    type: 'website',
    images: [
      {
        url: '/images/services/services.png',
        width: 1200,
        height: 630,
        alt: 'Kaiser Omnia — Υπηρεσίες Κατασκευής',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Υπηρεσίες Κατασκευής & Αρχιτεκτονικής | Kaiser Omnia',
    description:
      'Αρχιτεκτονική μελέτη, τεχνική εφαρμογή, κατασκευή και project management. 40+ χρόνια εμπειρίας στην κατασκευή υψηλών προδιαγραφών.',
    images: ['/images/services/services.png'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kaiser-omnia.gr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://kaiser-omnia.gr/services' },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <StructuredData schema={breadcrumbSchema} />
      <ServicesClient />
    </>
  );
}
