
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { language, t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What types of events do you organize?",
      questionTr: "Ne tür etkinlikler düzenliyorsunuz?",
      answer: "We specialize in corporate events, weddings, private parties, and product launches.",
      answerTr: "Kurumsal etkinlikler, düğünler, özel partiler ve ürün lansmanları konusunda uzmanız."
    },
    {
      question: "How far in advance should I book your services?",
      questionTr: "Hizmetlerinizi ne kadar önceden ayarlamalıyım?",
      answer: "We recommend booking at least 3-6 months in advance for large events.",
      answerTr: "Büyük etkinlikler için en az 3-6 ay önceden rezervasyon yapmanızı öneririz."
    },
    {
      question: "Do you provide services outside of Istanbul?",
      questionTr: "İstanbul dışında hizmet veriyor musunuz?",
      answer: "Yes, we organize events throughout Turkey and can travel internationally.",
      answerTr: "Evet, tüm Türkiye'de ve uluslararası alanda etkinlikler düzenliyoruz."
    },
    {
      question: "What is included in your basic event package?",
      questionTr: "Temel etkinlik paketinize neler dahildir?",
      answer: "Our basic package includes event planning, venue selection, and coordination on the day.",
      answerTr: "Temel paketimiz etkinlik planlaması, mekan seçimi ve etkinlik günü koordinasyonunu içerir."
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center page-transition">
            <h1 className="heading-1 text-gold mb-4">{language === 'en' ? 'FAQ' : 'SSS'}</h1>
            <p className="text-gold-light/80 text-lg">
              {language === 'en' ? 'Frequently Asked Questions' : 'Sıkça Sorulan Sorular'}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm px-6">
                <AccordionTrigger className="text-left">
                  <div className="space-y-1">
                    <div className="font-semibold text-black">
                      {language === 'en' ? faq.question : faq.questionTr}
                    </div>
                    {language !== 'en' && (
                      <div className="text-sm text-gray-600">{faq.question}</div>
                    )}
                    {language === 'en' && (
                      <div className="text-sm text-gray-600">{faq.questionTr}</div>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2 space-y-2">
                    <p className="text-gray-700">
                      {language === 'en' ? faq.answer : faq.answerTr}
                    </p>
                    {language !== 'en' && (
                      <p className="text-gray-600">{faq.answer}</p>
                    )}
                    {language === 'en' && (
                      <p className="text-gray-600">{faq.answerTr}</p>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
