
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Globe, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-black shadow-lg py-3' 
          : 'bg-black/95 py-5'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-gold text-xl md:text-2xl font-bold tracking-tight">
            EventNora
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'nav-link',
                location.pathname === item.path && 'after:w-full font-medium'
              )}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-4">
            <button className="language-selector">
              <Globe size={16} />
              <span>EN</span>
            </button>
            <button className="language-selector">
              <Globe size={16} />
              <span>TR</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gold" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black absolute top-full left-0 w-full border-t border-gold/20 animate-slideIn">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'text-gold hover:text-gold-light transition-colors py-2',
                    location.pathname === item.path && 'font-medium'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <button className="language-selector self-start py-2">
                <Globe size={16} />
                <span>English</span>
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
