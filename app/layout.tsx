// src/app/layout.tsx
import type { Metadata } from 'next';
import { Cormorant_Garamond, Barlow, Barlow_Condensed } from 'next/font/google';
import Providers from '@/app/components/Providers';
import './globals.css';  // ← Single import, replaces both index.css and App.css

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],  // latin-ext for Greek characters
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kaiser-omnia.com'),
  title: {
    default: 'Kaiser Omnia | Construction',
    template: '%s | Kaiser Omnia',
  },
  description: 'Kaiser Omnia - Κατασκευαστική Εταιρεία με 40+ χρόνια εμπειρίας. Αρχιτεκτονική και Κατασκευή Υψηλών Προδιαγραφών.',
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    siteName: 'Kaiser Omnia',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="el"
      className={`${cormorant.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      {/* No inline styles needed — globals.css handles body styling */}
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}