
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, MessageCircle, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <footer className="bg-black text-gold/90 pt-16 pb-8">
      <div className="container-custom">
        {/* Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gold">EventNora</h3>
            <p className="text-gold/80 text-sm max-w-xs">
              {t(
                "Creating unforgettable moments with meticulous planning and elegant execution for all your special occasions.",
                "Tüm özel etkinlikleriniz için titiz planlama ve zarif uygulama ile unutulmaz anlar yaratıyoruz."
              )}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/905555550123" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">
              {t("Quick Links", "Hızlı Bağlantılar")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gold/80 hover:text-gold transition-colors text-sm">
                  {t("Home", "Ana Sayfa")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gold/80 hover:text-gold transition-colors text-sm">
                  {t("About Us", "Hakkımızda")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gold/80 hover:text-gold transition-colors text-sm">
                  {t("Services", "Hizmetler")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gold/80 hover:text-gold transition-colors text-sm">
                  {t("Contact", "İletişim")}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gold/80 hover:text-gold transition-colors text-sm">
                  {t("FAQ", "SSS")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">
              {t("Our Services", "Hizmetlerimiz")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gold/80 hover:text-gold transition-colors text-sm">
                  {t("Corporate Events", "Kurumsal Etkinlikler")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gold/80 hover:text-gold transition-colors text-sm">
                  {t("Wedding Planning", "Düğün Organizasyonu")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gold/80 hover:text-gold transition-colors text-sm">
                  {t("Private Parties", "Özel Partiler")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gold/80 hover:text-gold transition-colors text-sm">
                  {t("Product Launches", "Ürün Lansmanları")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">
              {t("Contact Info", "İletişim Bilgileri")}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold mt-0.5" />
                <span className="text-gold/80 text-sm">Levent, Istanbul, Turkey</span>
              </div>
              <a href="tel:+902125550123" className="flex items-center space-x-3 text-gold/80 hover:text-gold transition-colors">
                <Phone size={18} className="text-gold" />
                <span className="text-sm">+90 (212) 555-0123</span>
              </a>
              <a href="https://wa.me/905555550123" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gold/80 hover:text-gold transition-colors">
                <MessageCircle size={18} className="text-gold" />
                <span className="text-sm">+90 (555) 555-0123</span>
              </a>
              <a href="mailto:info@eventnora.com" className="flex items-center space-x-3 text-gold/80 hover:text-gold transition-colors">
                <Mail size={18} className="text-gold" />
                <span className="text-sm">info@eventnora.com</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gold/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gold/70 text-sm">
              © {currentYear} EventNora. {t("All rights reserved.", "Tüm hakları saklıdır.")}
            </p>
            <div className="text-gold/70 text-xs flex gap-6">
              <Link to="/privacy" className="hover:text-gold transition-colors">
                {t("Privacy Policy", "Gizlilik Politikası")}
              </Link>
              <Link to="/terms" className="hover:text-gold transition-colors">
                {t("Terms of Service", "Kullanım Şartları")}
              </Link>
              <div className="flex items-center gap-4">
                <button 
                  className={cn("hover:text-gold transition-colors", language === 'en' && "text-gold")} 
                  onClick={() => setLanguage('en')}
                >
                  English
                </button>
                <button 
                  className={cn("hover:text-gold transition-colors", language === 'tr' && "text-gold")} 
                  onClick={() => setLanguage('tr')}
                >
                  Türkçe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
