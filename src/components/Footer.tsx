import React from 'react';
import { motion } from 'motion/react';
import { Heart, Code, MapPin } from 'lucide-react';
import logo from '../assets/images/logo.png';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms' | 'cookie') => void;
  onNavigate: (to: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy, onNavigate }) => {
  return (
    <footer className="py-16 bg-brand-dark border-t border-white/5 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <img src={logo} alt="CodeWithSiril" className="w-10 h-10 object-contain" />
              <span className="font-bold text-2xl tracking-tighter text-white">
                Code<span className="text-brand-blue">With</span>Siril
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Engineering high-performance websites, ecommerce platforms, and custom digital software for growing businesses in Madurai and globally.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/');
                  }}
                  className="hover:text-brand-blue transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-blue transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-blue transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-brand-blue transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-blue transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-4">Local Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href="/web-development-madurai"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/web-development-madurai');
                  }}
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:text-white transition-colors font-medium"
                >
                  <MapPin size={13} className="text-brand-blue" />
                  Web Development Madurai
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-blue transition-colors">Ecommerce Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-blue transition-colors">Custom Web Applications</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-blue transition-colors">Website Maintenance</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-4">Location & Contact</h4>
            <p className="text-sm text-slate-400 mb-2 leading-relaxed">
              Madurai, Tamil Nadu 625001, India
            </p>
            <p className="text-sm text-slate-300 font-semibold mb-1">
              <a href="tel:+919363021664" className="hover:text-brand-blue transition-colors">+91 93630 21664</a>
            </p>
            <p className="text-sm text-slate-400">
              <a href="mailto:santhanasiril0202@gmail.com" className="hover:text-brand-blue transition-colors">santhanasiril0202@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <p className="text-slate-500 text-xs font-medium italic opacity-70">
              © {new Date().getFullYear()} CodeWithSiril. Engineering Excellence.
            </p>
          </div>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="flex items-center gap-2.5 text-slate-400 text-[10px] font-black tracking-[0.25em] uppercase bg-white/5 px-8 py-3 rounded-full border border-white/10 cursor-default transition-colors duration-300"
            >
              Designed with <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse" /> and <Code size={12} className="text-brand-blue" />
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end gap-6">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="text-slate-500 hover:text-brand-blue text-xs font-black tracking-widest uppercase transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="text-slate-500 hover:text-brand-blue text-xs font-black tracking-widest uppercase transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onOpenPolicy('cookie')}
              className="text-slate-500 hover:text-brand-blue text-xs font-black tracking-widest uppercase transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
