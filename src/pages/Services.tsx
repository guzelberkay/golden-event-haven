
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Check } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Corporate Events',
      description: 'Professional planning for conferences, seminars, and team building events.',
      features: [
        'Full event coordination',
        'Venue selection and management',
        'Catering services',
        'Technical equipment setup'
      ],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81'
    },
    {
      title: 'Weddings',
      description: 'Create your dream wedding with our expert planning services.',
      features: [
        'Ceremony & reception planning',
        'Decor and styling',
        'Vendor coordination',
        'Timeline management'
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
    },
    {
      title: 'Private Events',
      description: 'Exceptional private events tailored to your needs.',
      features: [
        'Birthday celebrations',
        'Anniversary parties',
        'Social gatherings',
        'Custom theme development'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center page-transition">
            <h1 className="heading-1 text-gold mb-4">Our Services</h1>
            <p className="text-gold-light/80 text-lg">
              Crafting unforgettable experiences for every occasion
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center page-transition"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h2 className="heading-2 text-black">{service.title}</h2>
                  <p className="text-textGray text-lg">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="text-gold" size={20} />
                        <span className="text-textGray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`h-[400px] relative rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
