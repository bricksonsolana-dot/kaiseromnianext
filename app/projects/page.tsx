import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';
import StructuredData from '@/app/components/StructuredData';

export const metadata: Metadata = {
  title: 'Έργα μας | Portfolio Κατασκευών | Kaiser Omnia',
  description:
    'Δείτε το portfolio κατασκευαστικών έργων της Kaiser Omnia. Κατοικίες και εμπορικά κτίρια υψηλών προδιαγραφών σε όλη την Αθήνα.',
  keywords: [
    'κατασκευαστικά έργα αθήνα',
    'portfolio αρχιτεκτονική',
    'κατασκευή κατοικιών',
  ],
  alternates: {
    canonical: 'https://kaiser-omnia.gr/projects',
    languages: {
      'el-GR': 'https://kaiser-omnia.gr/projects',
      'en-US': 'https://kaiser-omnia.gr/en/projects',
      'x-default': 'https://kaiser-omnia.gr/projects',
    },
  },
  openGraph: {
    title: 'Έργα μας | Portfolio Κατασκευών | Kaiser Omnia',
    description:
      'Δείτε το portfolio κατασκευαστικών έργων της Kaiser Omnia. Κατοικίες και εμπορικά κτίρια υψηλών προδιαγραφών σε όλη την Αθήνα.',
    url: 'https://kaiser-omnia.gr/projects',
    siteName: 'Kaiser Omnia',
    locale: 'el_GR',
    type: 'website',
    images: [
      {
        url: 'https://kaiser-omnia.gr/philosophy.png',
        width: 1200,
        height: 630,
        alt: 'Kaiser Omnia — Έργα',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Έργα μας | Portfolio Κατασκευών | Kaiser Omnia',
    description:
      'Δείτε το portfolio κατασκευαστικών έργων της Kaiser Omnia. Κατοικίες και εμπορικά κτίρια υψηλών προδιαγραφών σε όλη την Αθήνα.',
    images: ['https://kaiser-omnia.gr/philosophy.png'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kaiser-omnia.gr' },
    { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://kaiser-omnia.gr/projects' },
  ],
}

export default function ProjectsPage() {
  return (
    <>
      <StructuredData schema={breadcrumbSchema} />
      <ProjectsClient />
    </>
  );
}
