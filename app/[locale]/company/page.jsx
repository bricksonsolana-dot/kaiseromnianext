import CompanyClient from '@/app/company/CompanyClient';
import StructuredData from '@/app/components/StructuredData';

const BASE_URL = 'https://kaiser-omnia.gr';

const meta = {
  el: {
    title: 'Σχετικά με εμάς',
    description:
      'Γνωρίστε την Kaiser Omnia Construction. 40+ χρόνια εμπειρίας στην αρχιτεκτονική μελέτη και κατασκευή υψηλών προδιαγραφών στην Αττική.',
    keywords: ['Kaiser Omnia', 'κατασκευαστική εταιρεία Αθήνα', 'αρχιτεκτονική εταιρεία', 'σχετικά με εμάς'],
    ogTitle: 'Σχετικά με εμάς | Kaiser Omnia',
    ogAlt: 'Kaiser Omnia — Σχετικά με εμάς',
  },
  en: {
    title: 'About Us',
    description:
      'Meet Kaiser Omnia Construction. 40+ years of experience in architectural design and high-spec construction in Attica.',
    keywords: ['Kaiser Omnia', 'construction company Athens', 'architecture firm', 'about us'],
    ogTitle: 'About Us | Kaiser Omnia',
    ogAlt: 'Kaiser Omnia — About Us',
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = locale === 'en' ? meta.en : meta.el;
  const elUrl = `${BASE_URL}/company`;
  const enUrl = `${BASE_URL}/en/company`;
  const url = locale === 'en' ? enUrl : elUrl;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: url,
      languages: {
        'el-GR': elUrl,
        'en-US': enUrl,
        'x-default': elUrl,
      },
    },
    openGraph: {
      title: t.ogTitle,
      description: t.description,
      url,
      siteName: 'Kaiser Omnia',
      locale: locale === 'en' ? 'en_US' : 'el_GR',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/company/company.png`,
          width: 1200,
          height: 630,
          alt: t.ogAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.ogTitle,
      description: t.description,
      images: [`${BASE_URL}/company/company.png`],
    },
  };
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Company', item: `${BASE_URL}/company` },
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
