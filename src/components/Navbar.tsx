import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, MapPin } from 'lucide-react';
import logo from '../assets/images/logo.png';

interface NavbarProps {
  currentPath: string;
  onNavigate: (to: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMaduraiPage = currentPath === '/web-development-madurai' || currentPath === '/web-development-madurai/';

  interface NavLinkItem {
    name: string;
    href: string;
    isSpecial?: boolean;
  }

  const homeLinks: NavLinkItem[] = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Madurai Web Dev', href: '/web-development-madurai', isSpecial: true },
    { name: 'Contact', href: '#contact' },
  ];

  const maduraiLinks: NavLinkItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Industries', href: '#industries' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const links = isMaduraiPage ? maduraiLinks : homeLinks;

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    setIsOpen(false);
    if (href.startsWith('/')) {
      e.preventDefault();
      onNavigate(href);
    } else if (href.startsWith('#')) {
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen ? 'bg-white/95 backdrop-blur-xl py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <img
            src={logo}
            alt="CodeWithSiril Logo"
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
          />
          <span className="font-bold text-2xl tracking-tight text-brand-dark">
            Code<span className="text-brand-blue">With</span>Siril
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            if (link.isSpecial) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-blue bg-blue-50 border border-blue-200/60 hover:bg-brand-blue hover:text-white transition-all shadow-sm"
                >
                  <MapPin size={12} className="flex-shrink-0" />
                  {link.name}
                </a>
              );
            }
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-brand-slate hover:text-brand-blue font-medium transition-colors relative group text-sm"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full" />
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="bg-brand-dark hover:bg-brand-blue text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-brand-blue/20 transform hover:-translate-y-0.5"
          >
            {isMaduraiPage ? 'Get a Free Quote' : 'Start a Project'}
          </a>
        </div>

        <button
          className="lg:hidden text-slate-900 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-5 max-h-[80vh] overflow-y-auto">
              {links.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`font-bold text-xl hover:text-brand-blue transition-colors flex items-center justify-between ${
                    link.isSpecial ? 'text-brand-blue bg-blue-50/80 p-3 rounded-xl' : 'text-slate-800'
                  }`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <span className="flex items-center gap-2">
                    {link.isSpecial && <MapPin size={18} />}
                    {link.name}
                  </span>
                  <ArrowRight size={18} className="text-slate-300" />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-brand-blue text-white px-8 py-4 rounded-2xl font-black text-center shadow-glow mt-2 text-sm tracking-wider uppercase"
                onClick={(e) => handleLinkClick(e, '#contact')}
              >
                {isMaduraiPage ? 'GET A FREE QUOTE' : 'START A PROJECT'}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
