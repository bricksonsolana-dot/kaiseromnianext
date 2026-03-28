import TechnologyClient from '@/app/technology/TechnologyClient';
import StructuredData from '@/app/components/StructuredData';

export const metadata = {
  title: 'Τεχνολογία Κατασκευής — Double Wall System',
  description:
    'Η Kaiser Omnia χρησιμοποιεί προηγμένες τεχνολογίες κατασκευής, όπως το Double Wall System, για κτίρια υψηλής ενεργειακής απόδοσης και αντοχής.',
  keywords: [
    'Double Wall System',
    'τεχνολογία κατασκευής',
    'ενεργειακή απόδοση κτιρίου',
    'Kaiser Omnia τεχνολογία',
  ],
  alternates: {
    canonical: 'https://kaiser-omnia.gr/technology',
    languages: {
      'el-GR': 'https://kaiser-omnia.gr/technology',
      'en-US': 'https://kaiser-omnia.gr/en/technology',
      'x-default': 'https://kaiser-omnia.gr/technology',
    },
  },
  openGraph: {
    title: 'Τεχνολογία Κατασκευής | Kaiser Omnia',
    description:
      'Η Kaiser Omnia χρησιμοποιεί προηγμένες τεχνολογίες κατασκευής, όπως το Double Wall System, για κτίρια υψηλής ενεργειακής απόδοσης και αντοχής.',
    url: 'https://kaiser-omnia.gr/technology',
    siteName: 'Kaiser Omnia',
    locale: 'el_GR',
    type: 'website',
    images: [
      {
        url: '/images/home/ipo_kataskevi_me_thea.png',
        width: 1200,
        height: 630,
        alt: 'Kaiser Omnia — Τεχνολογία Κατασκευής',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Τεχνολογία Κατασκευής | Kaiser Omnia',
    description:
      'Η Kaiser Omnia χρησιμοποιεί προηγμένες τεχνολογίες κατασκευής, όπως το Double Wall System, για κτίρια υψηλής ενεργειακής απόδοσης και αντοχής.',
    images: ['/images/home/ipo_kataskevi_me_thea.png'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kaiser-omnia.gr' },
    { '@type': 'ListItem', position: 2, name: 'Technology', item: 'https://kaiser-omnia.gr/technology' },
  ],
};

export default function TechnologyPage() {
  return (
    <>
      <StructuredData schema={breadcrumbSchema} />
      <TechnologyClient />
    </>
  );
}
