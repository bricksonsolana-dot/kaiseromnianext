import type { Metadata } from 'next';
import ContactClient from '@/app/contact/ContactClient';
import StructuredData from '@/app/components/StructuredData';
import { sanityFetch } from '@/sanity/lib/live';
import { contactPageQuery } from '@/sanity/lib/queries';

const BASE_URL = 'https://kaiser-omnia.gr';

const meta = {
  el: {
    title: 'Επικοινωνία — Ασπρόπυργος',
    description:
      'Επικοινωνήστε με την Kaiser Omnia. Μεγαρίδος 125, Ασπρόπυργος. Τηλ: +30 6948209440. Συμπληρώστε τη φόρμα για να ξεκινήσουμε το έργο σας.',
    keywords: ['επικοινωνία κατασκευαστική', 'kaiser omnia ασπροπυργος', 'κατασκευαστική εταιρεία τηλέφωνο'],
    ogTitle: 'Επικοινωνία | Kaiser Omnia — Ασπρόπυργος',
    ogAlt: 'Kaiser Omnia — Επικοινωνία',
  },
  en: {
    title: 'Contact — Aspropyrgos',
    description:
      'Contact Kaiser Omnia. Megaridos 125, Aspropyrgos. Tel: +30 6948209440. Fill in the form to start your project.',
    keywords: ['contact construction company', 'kaiser omnia aspropyrgos', 'construction company phone'],
    ogTitle: 'Contact | Kaiser Omnia — Aspropyrgos',
    ogAlt: 'Kaiser Omnia — Contact',
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = locale === 'en' ? meta.en : meta.el;
  const elUrl = `${BASE_URL}/contact`;
  const enUrl = `${BASE_URL}/en/contact`;
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
          url: `${BASE_URL}/contact/contact1.png`,
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
      images: [`${BASE_URL}/contact/contact1.png`],
    },
  };
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact` },
  ],
};

export default async function ContactPage() {
  const { data: sanityData } = await sanityFetch({ query: contactPageQuery });

  return (
    <>
      <StructuredData schema={breadcrumbSchema} />
      <ContactClient sanityData={sanityData} />
    </>
  );
}
