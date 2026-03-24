"use client";

import { ReactNode } from 'react';
import { Toaster } from 'sonner';

// Import your existing components (copy them over first)
import { LanguageProvider } from '@/app/context/LanguageContext';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer/Footer';
import SmoothScroll from '@/app/components/SmoothScroll';

// Optional: A lightweight scroll-to-top wrapper if needed
// (Next.js handles most scrolling, but if you use hash links #id, this helps)
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ScrollToTop />
      
      {/* Global visual effects */}
      <SmoothScroll children={undefined} />

      {/* Navbar is usually outside the main route content */}
      <Navbar />
      
      {/* Page content gets injected here */}
      {children}
      
      {/* Footer is usually outside the main route content */}
      <Footer />
      
      {/* Global notification toaster */}
      <Toaster position="top-right" richColors />
    </LanguageProvider>
  );
}