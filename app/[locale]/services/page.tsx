import type { Metadata } from 'next';
import ServicesClient from '@/app/services/ServicesClient';
import StructuredData from '@/app/components/StructuredData';
import { sanityFetch } from '@/sanity/lib/live';
import { servicesPageQuery } from '@/sanity/lib/queries';

const BASE_URL = 'https://kaiser-omnia.gr';

const meta = {
  el: {
    title: 'Υπηρεσίες Κατασκευής & Αρχιτεκτονικής',
    description:
      'Αρχιτεκτονική μελέτη, τεχνική εφαρμογή, κατασκευή και project management. 40+ χρόνια εμπειρίας στην κατασκευή υψηλών προδιαγραφών.',
    keywords: ['αρχιτεκτονική μελέτη', 'κατασκευή κατοικίας', 'project management κατασκευή'],
    ogTitle: 'Υπηρεσίες Κατασκευής & Αρχιτεκτονικής | Kaiser Omnia',
    ogAlt: 'Kaiser Omnia — Υπηρεσίες Κατασκευής',
  },
  en: {
    title: 'Construction & Architecture Services',
    description:
      'Architectural design, technical engineering, construction and project management. 40+ years of experience in high-spec construction.',
    keywords: ['architectural design', 'house construction', 'construction project management'],
    ogTitle: 'Construction & Architecture Services | Kaiser Omnia',
    ogAlt: 'Kaiser Omnia — Construction Services',
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = locale === 'en' ? meta.en : meta.el;
  const elUrl = `${BASE_URL}/services`;
  const enUrl = `${BASE_URL}/en/services`;
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
          url: `${BASE_URL}/images/services/services.png`,
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
      images: [`${BASE_URL}/images/services/services.png`],
    },
  };
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
  ],
};

export default async function ServicesPage() {
  const { data: sanityData } = await sanityFetch({ query: servicesPageQuery });

  return (
    <>
      <StructuredData schema={breadcrumbSchema} />
      <ServicesClient sanityData={sanityData} />
    </>
  );
}
