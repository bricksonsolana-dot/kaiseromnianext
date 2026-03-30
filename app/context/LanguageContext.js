'use client';
import { createContext, useContext } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const LanguageContext = createContext();

export const LanguageProvider = ({ children, locale }) => {
  const router = useRouter();
  const pathname = usePathname();

  // locale is passed from the server layout via Providers
  const language = locale || 'el';

  const toggleLanguage = () => {
    // Current path might be /el/services or /en/services
    // Strip the locale prefix to get the bare path
    const pathWithoutLocale = pathname.replace(/^\/(el|en)/, '') || '/';

    if (language === 'el') {
      // Navigate to /en/...
      router.push(`/en${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`);
    } else {
      // Navigate to bare path (proxy rewrites to /el/...)
      router.push(pathWithoutLocale);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside a LanguageProvider');
  }
  return context;
};
