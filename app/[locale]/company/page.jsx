import CompanyClient from '@/app/company/CompanyClient';
import StructuredData from '@/app/components/StructuredData';

export const metadata = {
  title: 'Σχετικά με εμάς',
  description:
    'Γνωρίστε την Kaiser Omnia Construction. 40+ χρόνια εμπειρίας στην αρχιτεκτονική μελέτη και κατασκευή υψηλών προδιαγραφών στην Αττική.',
  keywords: [
    'Kaiser Omnia',
    'κατασκευαστική εταιρεία Αθήνα',
    'αρχιτεκτονική εταιρεία',
    'σχετικά με εμάς',
  ],
  alternates: {
    canonical: 'https://kaiser-omnia.gr/company',
    languages: {
      'el-GR': 'https://kaiser-omnia.gr/company',
      'en-US': 'https://kaiser-omnia.gr/en/company',
      'x-default': 'https://kaiser-omnia.gr/company',
    },
  },
  openGraph: {
    title: 'Σχετικά με εμάς | Kaiser Omnia',
    description:
      'Γνωρίστε την Kaiser Omnia Construction. 40+ χρόνια εμπειρίας στην αρχιτεκτονική μελέτη και κατασκευή υψηλών προδιαγραφών στην Αττική.',
    url: 'https://kaiser-omnia.gr/company',
    siteName: 'Kaiser Omnia',
    locale: 'el_GR',
    type: 'website',
    images: [
      {
        url: '/company/company3.png',
        width: 1200,
        height: 630,
        alt: 'Kaiser Omnia — Σχετικά με εμάς',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Σχετικά με εμάς | Kaiser Omnia',
    description:
      'Γνωρίστε την Kaiser Omnia Construction. 40+ χρόνια εμπειρίας στην αρχιτεκτονική μελέτη και κατασκευή υψηλών προδιαγραφών στην Αττική.',
    images: ['/company/company3.png'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kaiser-omnia.gr' },
    { '@type': 'ListItem', position: 2, name: 'Company', item: 'https://kaiser-omnia.gr/company' },
  ],
};

export default function CompanyPage() {
  return (
    <>
      <StructuredData schema={breadcrumbSchema} />
      <CompanyClient />
    </>
  );
}
