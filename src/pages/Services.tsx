
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: t('Corporate Events', 'Kurumsal Etkinlikler'),
      description: t(
        'Professional planning for conferences, seminars, and team building events.',
        'Konferanslar, seminerler ve takım oluşturma etkinlikleri için profesyonel planlama.'
      ),
      features: [
        t('Full event coordination', 'Tam etkinlik koordinasyonu'),
        t('Venue selection and management', 'Mekan seçimi ve yönetimi'),
        t('Catering services', 'İkram hizmetleri'),
        t('Technical equipment setup', 'Teknik ekipman kurulumu')
      ],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      slug: 'corporate-events'
    },
    {
      title: t('Weddings', 'Düğünler'),
      description: t(
        'Create your dream wedding with our expert planning services.',
        'Uzman planlama hizmetlerimizle hayalinizdeki düğünü yaratın.'
      ),
      features: [
        t('Ceremony & reception planning', 'Tören ve resepsiyon planlaması'),
        t('Decor and styling', 'Dekorasyon ve stil'),
        t('Vendor coordination', 'Tedarikçi koordinasyonu'),
        t('Timeline management', 'Zaman çizelgesi yönetimi')
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      slug: 'weddings'
    },
    {
      title: t('Private Events', 'Özel Etkinlikler'),
      description: t(
        'Exceptional private events tailored to your needs.',
        'İhtiyaçlarınıza göre özelleştirilmiş olağanüstü özel etkinlikler.'
      ),
      features: [
        t('Birthday celebrations', 'Doğum günü kutlamaları'),
        t('Anniversary parties', 'Yıldönümü partileri'),
        t('Social gatherings', 'Sosyal toplantılar'),
        t('Custom theme development', 'Özel tema geliştirme')
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      slug: 'private-events'
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center page-transition">
            <h1 className="heading-1 text-gold mb-4">
              {t("Our Services", "Hizmetlerimiz")}
            </h1>
            <p className="text-gold-light/80 text-lg">
              {t(
                "Crafting unforgettable experiences for every occasion",
                "Her özel an için unutulmaz deneyimler yaratıyoruz"
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="page-transition"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
