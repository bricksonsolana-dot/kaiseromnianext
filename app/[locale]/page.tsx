import type { Metadata } from 'next';
import HomeClient from '@/app/HomeClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Kaiser Omnia | Κατασκευαστική Εταιρεία Αθήνα',
  },
  description:
    'Kaiser Omnia – Κατασκευαστική εταιρεία με 40+ χρόνια εμπειρίας στην Αθήνα. Αρχιτεκτονική, μελέτη και κατασκευή υψηλών προδιαγραφών.',
  alternates: {
    canonical: 'https://kaiser-omnia.gr',
    languages: {
      'el-GR': 'https://kaiser-omnia.gr',
      'en-US': 'https://kaiser-omnia.gr/en',
      'x-default': 'https://kaiser-omnia.gr',
    },
  },
  openGraph: {
    title: 'Kaiser Omnia | Κατασκευαστική Εταιρεία Αθήνα',
    description:
      'Kaiser Omnia – Κατασκευαστική εταιρεία με 40+ χρόνια εμπειρίας στην Αθήνα. Αρχιτεκτονική, μελέτη και κατασκευή υψηλών προδιαγραφών.',
    url: 'https://kaiser-omnia.gr',
    siteName: 'Kaiser Omnia',
    locale: 'el_GR',
    type: 'website',
    images: [
      {
        url: '/images/home/land4.jpg',
        width: 1200,
        height: 630,
        alt: 'Kaiser Omnia — Κατασκευαστική Εταιρεία',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaiser Omnia | Κατασκευαστική Εταιρεία Αθήνα',
    description:
      'Kaiser Omnia – Κατασκευαστική εταιρεία με 40+ χρόνια εμπειρίας στην Αθήνα. Αρχιτεκτονική, μελέτη και κατασκευή υψηλών προδιαγραφών.',
    images: ['/images/home/land4.jpg'],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
