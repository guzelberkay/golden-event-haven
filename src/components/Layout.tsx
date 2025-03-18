
import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Toaster } from '@/components/ui/toaster';
import { useLanguage } from '@/contexts/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-24 md:pt-28">{children}</main>
      <Footer />
      <Toaster />
      <div className="fixed bottom-8 left-8 text-xs text-gold/40 pointer-events-none">
        {t("Site available in: English, Türkçe", "Site dilleri: İngilizce, Türkçe")}
      </div>
    </div>
  );
};

export default Layout;
