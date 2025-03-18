
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center page-transition">
            <h1 className="heading-1 text-gold mb-4">About Us</h1>
            <p className="text-gold-light/80 text-lg">
              Learn about our passion for creating extraordinary events
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="page-transition" style={{ animationDelay: "0.3s" }}>
              <span className="text-gold font-medium">Our Story</span>
              <h2 className="heading-2 text-black mt-2 mb-4">A Legacy of Excellence</h2>
              <div className="space-y-4 text-textGray">
                <p>
                  Founded in 2010, Golden Events began with a simple vision: to transform ordinary gatherings into extraordinary experiences. What started as a small team of passionate event enthusiasts has grown into a premier event planning company trusted by individuals and corporations alike.
                </p>
                <p>
                  Our journey has been marked by countless successful events, from intimate celebrations to grand corporate galas. Each event has contributed to our expertise and reinforced our commitment to excellence.
                </p>
                <p>
                  Today, we pride ourselves on our ability to bring creative visions to life while maintaining meticulous attention to detail and providing personalized service that exceeds our clients' expectations.
                </p>
              </div>
            </div>
            <div className="h-[400px] bg-gold/10 rounded-lg relative overflow-hidden page-transition" style={{ animationDelay: "0.5s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center text-gold">
                <span className="text-2xl font-light italic">Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-black/95 text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 page-transition" style={{ animationDelay: "0.3s" }}>
            <span className="text-gold font-medium">Our Core Values</span>
            <h2 className="heading-2 mt-2 mb-4">What Drives Us</h2>
            <p className="text-white/80">
              These principles guide our approach to every event we plan and execute
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: "Excellence",
                description: "We strive for perfection in every detail, no matter how small."
              },
              {
                value: "Creativity",
                description: "We bring innovative ideas to make each event unique and memorable."
              },
              {
                value: "Integrity",
                description: "We operate with honesty and transparency in all our dealings."
              },
              {
                value: "Reliability",
                description: "We deliver on our promises and ensure peace of mind for our clients."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-300 page-transition" 
                style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
              >
                <h3 className="text-xl font-semibold text-gold mb-3">{item.value}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 page-transition" style={{ animationDelay: "0.3s" }}>
            <span className="text-gold font-medium">Meet Our Team</span>
            <h2 className="heading-2 text-black mt-2 mb-4">The People Behind Your Perfect Events</h2>
            <p className="text-textGray">
              Our talented team of professionals is dedicated to making your event dreams come true
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & Creative Director" },
              { name: "Michael Chen", role: "Senior Event Planner" },
              { name: "Olivia Rodriguez", role: "Client Relations Manager" }
            ].map((member, index) => (
              <div 
                key={index} 
                className="text-center page-transition" 
                style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
              >
                <div className="h-64 bg-gold/10 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-gold">
                    <span className="text-lg font-light italic">Team Member Photo</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">{member.name}</h3>
                <p className="text-gold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
