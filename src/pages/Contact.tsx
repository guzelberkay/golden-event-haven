
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-gold" />,
      title: 'Visit Us',
      details: ['Levent, Istanbul', 'Turkey']
    },
    {
      icon: <Phone className="w-6 h-6 text-gold" />,
      title: 'Call Us',
      details: ['+90 (212) 555-0123', '+90 (533) 555-0123']
    },
    {
      icon: <Mail className="w-6 h-6 text-gold" />,
      title: 'Email Us',
      details: ['info@eventnora.com', 'support@eventnora.com']
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center page-transition">
            <h1 className="heading-1 text-gold mb-4">Contact Us</h1>
            <p className="text-gold-light/80 text-lg">
              Let's discuss your next extraordinary event
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="page-transition">
                <h2 className="heading-2 text-black mb-6">Get in Touch</h2>
                <p className="text-textGray text-lg">
                  We're here to help bring your vision to life. Contact us to start planning your next event.
                </p>
              </div>

              <div className="grid gap-8">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 page-transition"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="p-3 bg-gold/10 rounded-lg">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-textGray">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form className="space-y-6 page-transition" style={{ animationDelay: "0.4s" }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-gold focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-gold focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-gold focus:border-gold"
                ></textarea>
              </div>
              <button type="submit" className="gold-button w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
