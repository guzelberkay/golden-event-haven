
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle, Star } from 'lucide-react';
import Layout from '@/components/Layout';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-light/30 via-background to-background z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center page-transition">
            <span className="inline-block px-3 py-1 bg-black text-gold text-sm font-medium rounded-full mb-6">
              Premier Event Planning
            </span>
            <h1 className="heading-1 mb-6 text-black">
              Crafting <span className="text-gold">Unforgettable</span> Moments For Your Special Occasions
            </h1>
            <p className="paragraph mb-8 opacity-90 max-w-2xl mx-auto">
              We transform your vision into reality with meticulous planning, creative design, and flawless execution for all types of events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="gold-button">
                Get in Touch
              </Link>
              <Link 
                to="/services" 
                className="flex items-center justify-center gap-2 px-6 py-2.5 text-black hover:text-gold transition-colors duration-300"
              >
                Our Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 page-transition" style={{ animationDelay: "0.3s" }}>
            <span className="text-gold font-medium">Why Choose Us</span>
            <h2 className="heading-2 text-black mt-2 mb-4">The Golden Standard in Event Planning</h2>
            <p className="paragraph opacity-80">
              We bring expertise, creativity, and precision to every event, ensuring a seamless experience from concept to execution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-10 h-10 text-gold" />,
                title: "Premium Service",
                description: "Exceptional attention to detail and personalized care for every client and event."
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-gold" />,
                title: "Expert Planning",
                description: "Professional event coordinators with years of experience in various event types."
              },
              {
                icon: <Calendar className="w-10 h-10 text-gold" />,
                title: "Timely Execution",
                description: "Precise scheduling and coordination to ensure your event runs flawlessly."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg border border-gold/10 shadow-sm hover:shadow-md transition-all duration-300 page-transition" 
                style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                <p className="text-textGray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/95 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center page-transition" style={{ animationDelay: "0.5s" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your <span className="text-gold">Memorable</span> Event?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contact us today to discuss your event needs and let us bring your vision to life.
            </p>
            <Link to="/contact" className="inline-block bg-gold hover:bg-gold-dark text-black px-8 py-3 rounded transition-all duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
