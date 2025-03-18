
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = {
    'corporate-events': {
      title: t('Corporate Events', 'Kurumsal Etkinlikler'),
      description: t(
        'Professional planning for conferences, seminars, and team building events.',
        'Konferanslar, seminerler ve takım oluşturma etkinlikleri için profesyonel planlama.'
      ),
      fullDescription: t(
        'We specialize in creating exceptional corporate events that leave lasting impressions. From intimate board meetings to large-scale conferences, our team handles every detail with precision and creativity.',
        'Kalıcı izler bırakan olağanüstü kurumsal etkinlikler yaratmada uzmanız. Küçük yönetim kurulu toplantılarından büyük ölçekli konferanslara kadar, ekibimiz her detayı hassasiyet ve yaratıcılıkla ele alır.'
      ),
      features: [
        t('Full event coordination', 'Tam etkinlik koordinasyonu'),
        t('Venue selection and management', 'Mekan seçimi ve yönetimi'),
        t('Catering services', 'İkram hizmetleri'),
        t('Technical equipment setup', 'Teknik ekipman kurulumu')
      ],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81'
    },
    'weddings': {
      title: t('Weddings', 'Düğünler'),
      description: t(
        'Create your dream wedding with our expert planning services.',
        'Uzman planlama hizmetlerimizle hayalinizdeki düğünü yaratın.'
      ),
      fullDescription: t(
        'Your special day deserves nothing but perfection. Our wedding planning services cover everything from venue selection to the last dance, ensuring every moment is magical.',
        'Özel gününüz mükemmellikten başka bir şeyi hak etmiyor. Düğün planlama hizmetlerimiz, mekan seçiminden son dansa kadar her şeyi kapsıyor ve her anın büyülü olmasını sağlıyor.'
      ),
      features: [
        t('Ceremony & reception planning', 'Tören ve resepsiyon planlaması'),
        t('Decor and styling', 'Dekorasyon ve stil'),
        t('Vendor coordination', 'Tedarikçi koordinasyonu'),
        t('Timeline management', 'Zaman çizelgesi yönetimi')
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
    },
    'private-events': {
      title: t('Private Events', 'Özel Etkinlikler'),
      description: t(
        'Exceptional private events tailored to your needs.',
        'İhtiyaçlarınıza göre özelleştirilmiş olağanüstü özel etkinlikler.'
      ),
      fullDescription: t(
        'From intimate gatherings to grand celebrations, we transform your vision into reality. Our team ensures every detail reflects your style and exceeds your expectations.',
        'Samimi buluşmalardan görkemli kutlamalara kadar, vizyonunuzu gerçeğe dönüştürüyoruz. Ekibimiz, her detayın tarzınızı yansıtmasını ve beklentilerinizi aşmasını sağlar.'
      ),
      features: [
        t('Birthday celebrations', 'Doğum günü kutlamaları'),
        t('Anniversary parties', 'Yıldönümü partileri'),
        t('Social gatherings', 'Sosyal toplantılar'),
        t('Custom theme development', 'Özel tema geliştirme')
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    }
  };

  const service = services[slug as keyof typeof services];

  if (!service) {
    return (
      <Layout>
        <div className="container-custom py-16">
          <h1 className="heading-1 text-center text-gold">
            {t("Service not found", "Hizmet bulunamadı")}
          </h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container-custom h-full flex items-center justify-center">
            <h1 className="heading-1 text-white text-center">{service.title}</h1>
          </div>
        </div>
      </div>
      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-textGray mb-8">{service.fullDescription}</p>
          <h2 className="heading-2 text-gold mb-6">{t("What We Offer", "Neler Sunuyoruz")}</h2>
          <ul className="grid gap-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-textGray">
                <div className="w-2 h-2 mt-2 rounded-full bg-gold"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetail;
