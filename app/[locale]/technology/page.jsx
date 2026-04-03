import { client } from '@/sanity/lib/client';
import { technologyPageQuery } from '@/sanity/lib/queries';
import TechnologyClient from '@/app/technology/TechnologyClient';
import StructuredData from '@/app/components/StructuredData';

const BASE_URL = 'https://kaiser-omnia.gr';

const meta = {
  el: {
    title: 'Τεχνολογία Κατασκευής — Double Wall System',
    description:
      'Η Kaiser Omnia χρησιμοποιεί προηγμένες τεχνολογίες κατασκευής, όπως το Double Wall System, για κτίρια υψηλής ενεργειακής απόδοσης και αντοχής.',
    keywords: ['Double Wall System', 'τεχνολογία κατασκευής', 'ενεργειακή απόδοση κτιρίου', 'Kaiser Omnia τεχνολογία'],
    ogTitle: 'Τεχνολογία Κατασκευής | Kaiser Omnia',
    ogAlt: 'Kaiser Omnia — Τεχνολογία Κατασκευής',
  },
  en: {
    title: 'Construction Technology — Double Wall System',
    description:
      'Kaiser Omnia uses advanced construction technologies, including the Double Wall System, for buildings with high energy efficiency and durability.',
    keywords: ['Double Wall System', 'construction technology', 'building energy efficiency', 'Kaiser Omnia technology'],
    ogTitle: 'Construction Technology | Kaiser Omnia',
    ogAlt: 'Kaiser Omnia — Construction Technology',
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = locale === 'en' ? meta.en : meta.el;
  const elUrl = `${BASE_URL}/technology`;
  const enUrl = `${BASE_URL}/en/technology`;
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
          url: `${BASE_URL}/images/home/ipo_kataskevi_me_thea.png`,
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
      images: [`${BASE_URL}/images/home/ipo_kataskevi_me_thea.png`],
    },
  };
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Technology', item: `${BASE_URL}/technology` },
  ],
};

export const revalidate = 3600;

export default async function TechnologyPage() {
  const sanityData = await client.fetch(technologyPageQuery).catch(() => null);

  return (
    <>
      <StructuredData schema={breadcrumbSchema} />
      <TechnologyClient sanityData={sanityData} />
    </>
  );
}
