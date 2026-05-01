import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Star, 
  Plus, 
  Minus, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  ExternalLink,
  ChevronUp,
  CheckCircle2,
  MessageCircle,
  Heart,
  Code
} from 'lucide-react';
import { 
  COLORS, 
  SERVICES, 
  BENEFITS, 
  PORTFOLIO, 
  TESTIMONIALS, 
  PRICING, 
  FAQS, 
  SOCIAL_LINKS 
} from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: 'portfolio/index.html' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen ? 'bg-white/95 backdrop-blur-xl py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/src/assets/images/logo.png" 
            alt="CodeWithSiril Logo" 
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
          />
          <span className="font-bold text-2xl tracking-tight text-brand-dark">
            Code<span className="text-brand-blue">With</span>Siril
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-brand-slate hover:text-brand-blue font-medium transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full" />
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-brand-dark hover:bg-brand-blue text-white px-7 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-brand-blue/20 transform hover:-translate-y-0.5"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-slate-800 font-bold text-2xl hover:text-brand-blue transition-colors flex items-center justify-between"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ArrowRight size={20} className="text-slate-300" />
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-brand-blue text-white px-8 py-5 rounded-2xl font-black text-center shadow-glow mt-4"
                onClick={() => setIsOpen(false)}
              >
                START A PROJECT
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight font-serif"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-brand-slate leading-relaxed font-light"
      >
        {subtitle}
      </motion.p>
    )}
    <div className={`h-1.5 w-16 bg-brand-blue mt-8 rounded-full ${centered ? 'mx-auto' : ''}`} />
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string; key?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden mb-4 transition-all hover:border-blue-200 shadow-sm">
      <button 
        className="w-full p-6 text-left flex justify-between items-center bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg text-slate-900">{question}</span>
        {isOpen ? <Minus className="text-blue-600" /> : <Plus className="text-blue-600" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6 bg-white"
          >
            <p className="text-slate-600 leading-relaxed pt-2 border-t border-slate-50">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PolicyModal = ({ 
  isOpen, 
  onClose, 
  title, 
  content 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  content: string; 
}) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-premium overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto custom-scrollbar">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-black text-brand-dark font-serif">{title}</h3>
              <button 
                onClick={onClose}
                className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-brand-blue hover:text-white transition-all"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-6 text-brand-slate leading-relaxed text-lg font-light whitespace-pre-line">
              {content}
            </div>
          </div>
          <div className="p-8 border-t border-slate-100 bg-slate-50/50 text-right">
            <button 
              onClick={onClose}
              className="bg-brand-dark text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-brand-blue transition-all"
            >
              CLOSE
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const ProjectsModal = ({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
}) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-dark/90 backdrop-blur-lg"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          className="relative w-full max-w-7xl h-full max-h-[90vh] bg-white rounded-[3rem] shadow-premium overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 md:p-12 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div>
              <h3 className="text-4xl font-black text-brand-dark font-serif tracking-tight">Our Full Portfolio</h3>
              <p className="text-brand-slate font-light mt-2 italic">Engineering excellence across diverse industries</p>
            </div>
            <button 
              onClick={onClose}
              className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-500 hover:bg-brand-blue hover:text-white transition-all shadow-sm group hover:-rotate-90"
            >
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PORTFOLIO.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative rounded-[2rem] overflow-hidden shadow-premium aspect-[4/3] cursor-pointer"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-brand-blue font-black text-[10px] uppercase tracking-[0.3em] mb-2">{item.category}</span>
                    <h4 className="text-white text-xl font-bold mb-4">{item.title}</h4>
                    <div className="flex items-center gap-2 text-white/60 text-[10px] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details <ArrowRight size={12} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="p-8 bg-slate-50/80 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm font-medium">Ready to start your own success story?</p>
            <button 
              onClick={() => { onClose(); window.location.href="#contact"; }}
              className="bg-brand-blue text-white px-10 py-4 rounded-2xl font-black tracking-widest text-xs hover:bg-brand-dark transition-all shadow-glow uppercase"
            >
              Launch Your Project Now
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activePolicy, setActivePolicy] = useState<{ title: string; content: string } | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const POLICIES = {
    privacy: {
      title: "Privacy Policy",
      content: `We value your privacy and are committed to protecting your personal information. Any information you provide through our website, such as your name, email address, phone number, or project details, will be used solely to communicate with you and deliver our services. 

We do not sell, rent, or share your personal information with third parties, except when required by law. By using our website, you consent to the collection and use of your information in accordance with this Privacy Policy.`
    },
    terms: {
      title: "Terms of Service",
      content: `By accessing and using this website, you agree to comply with our terms and conditions. All services provided by CodeWithSiril are subject to mutual agreement, project scope, and payment terms. 

We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice. Unauthorized use, reproduction, or distribution of any content from this website is strictly prohibited.`
    },
    cookie: {
      title: "Cookie Policy",
      content: `Our website may use cookies to enhance your browsing experience, analyze website traffic, and improve our services. Cookies are small files stored on your device that help us understand how visitors interact with our website. 

You can choose to disable cookies through your browser settings; however, some features of the website may not function properly. By continuing to use our website, you consent to our use of cookies.`
    }
  };

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden section-padding">
        {/* Background Image Overlay with animated pulse */}
        <div className="absolute inset-0 z-0 opacity-10 scale-105 pointer-events-none">
          <img 
            src="/src/assets/images/cover.png" 
            alt="Background" 
            className="w-full h-full object-cover grayscale opacity-20 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-black mb-8 tracking-[0.2em] uppercase border border-brand-blue/20"
              >
                <div className="w-2 h-2 bg-brand-blue rounded-full animate-ping" />
                Innovating Since 2025
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-brand-dark leading-[0.95] mb-8 pb-4"
              >
                Building <span className="text-gradient">Powerful</span> Digital Assets
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-brand-slate mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                CodeWithSiril engineering premium scalable solutions for forward-thinking businesses.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
              >
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto bg-brand-blue hover:bg-brand-dark text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-glow flex items-center justify-center gap-3 hover:-translate-y-1"
                >
                  Get Free Consultation <ArrowRight size={22} strokeWidth={3} />
                </a>
                <a 
                  href="portfolio/index.html" 
                  className="w-full sm:w-auto glass hover:bg-white text-brand-dark px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center border border-slate-200"
                >
                  View Case Studies
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="flex-1 relative w-full px-4 sm:px-0"
            >
              <div className="relative z-10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-premium border-8 md:border-[12px] border-white ring-1 ring-slate-100 animate-float">
                <img 
                  src="/src/assets/images/cover.png" 
                  alt="CodeWithSiril Solution"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Blur Backgrounds */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/40 rounded-full blur-[100px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-slate-50 relative overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563EB 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-blue/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Creative Collaboration" 
                  className="rounded-[3rem] shadow-premium w-full relative z-10"
                  referrerPolicy="no-referrer"
                />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-10 -right-4 glass p-10 rounded-3xl shadow-premium z-20 hidden md:block"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-white shadow-glow">
                      <Star size={32} fill="currentColor" />
                    </div>
                    <div>
                      <div className="font-extrabold text-4xl text-brand-dark">150+</div>
                      <div className="text-brand-slate font-bold uppercase tracking-widest text-xs">Excellence Awards</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <SectionHeader 
                title="Premium Digital Architecture" 
                subtitle="We don't just write code; we design robust digital ecosystems that empower brands to dominate their industry." 
                centered={false}
              />
              <p className="text-lg text-brand-slate mb-10 leading-relaxed font-light">
                At <span className="font-bold text-brand-dark">CodeWithSiril</span>, we bridge the gap between complex engineering and human-centric design. Our methodology focuses on scalability, lightning-fast performance, and conversion-optimized interfaces that turn visitors into lifelong advocates.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="p-8 bg-white rounded-[2rem] shadow-premium hover:shadow-brand-blue/5 transition-shadow">
                  <div className="text-4xl font-black text-brand-blue mb-2">1</div>
                  <div className="text-brand-dark text-xs font-black uppercase tracking-[0.2em] opacity-60 italic">Year of Innovation</div>
                </div>
                <div className="p-8 bg-white rounded-[2rem] shadow-premium hover:shadow-brand-blue/5 transition-shadow">
                  <div className="text-4xl font-black text-brand-blue mb-2">98%</div>
                  <div className="text-brand-dark text-xs font-black uppercase tracking-[0.2em] opacity-60 italic">Client Retention</div>
                </div>
              </div>
              <a href="#contact" className="group inline-flex items-center gap-3 text-brand-blue font-black tracking-widest text-sm hover:gap-5 transition-all">
                EXPLORE OUR CRAFT <ArrowRight size={20} strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Elite Digital Services" 
            subtitle="We engineer comprehensive solutions designed to give your brand a decisive advantage in the global market."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-premium hover:shadow-glow hover:-translate-y-3 transition-all duration-500 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="w-16 h-16 bg-brand-blue/5 text-brand-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 relative z-10">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-5 relative z-10">{service.title}</h3>
                <p className="text-brand-slate leading-relaxed font-light relative z-10">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-dark text-white overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 -skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-blue/5 skew-x-12 -translate-x-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1">
              <SectionHeader 
                title="The CodeWithSiril Advantage" 
                subtitle="We don't just solve problems; we identify opportunities for your business to scale using cutting-edge technology." 
                centered={false}
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {BENEFITS.map((benefit, index) => (
                  <motion.div 
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <benefit.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 group-hover:text-brand-blue transition-colors">{benefit.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 w-full lg:max-w-lg">
              <div className="glass p-10 md:p-14 rounded-[3rem] text-brand-dark shadow-premium relative">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center text-white shadow-glow animate-float">
                  <Star fill="currentColor" size={32} />
                </div>
                <h3 className="text-3xl font-black mb-8 font-serif">Initiate Your <br/><span className="text-brand-blue">Project Now</span></h3>
                <form className="space-y-6">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                  />
                  <input 
                    type="email" 
                    placeholder="Work Email" 
                    className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                  />
                  <select className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all text-slate-500 appearance-none">
                    <option>Interested Service</option>
                    <option>Corporate Branding</option>
                    <option>Enterprise Software</option>
                    <option>Revenue Optimization</option>
                  </select>
                  <button className="w-full bg-brand-dark hover:bg-brand-blue text-white font-bold py-5 rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-95">
                    Send Inquiry
                  </button>
                  <p className="text-xs text-slate-400 text-center font-medium">
                    Strict confidentiality maintained. 
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Exceptional Case Studies" 
            subtitle="Explore our portfolio of high-impact digital transformations and enterprise-grade software solutions."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {PORTFOLIO.slice(0, 4).map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-[3rem] overflow-hidden shadow-premium aspect-[16/10] cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent flex flex-col justify-end p-12 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-px bg-brand-blue" />
                    <span className="text-brand-blue font-black text-xs uppercase tracking-[0.3em]">{item.category}</span>
                  </div>
                  <h3 className="text-white text-4xl font-black mb-6 leading-none">{item.title}</h3>
                  <div className="flex items-center gap-3 text-white font-black tracking-widest text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 uppercase translate-y-4 group-hover:translate-y-0">
                    Discover Case Study <ArrowRight size={16} strokeWidth={3} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button 
              onClick={() => setShowAllProjects(true)}
              className="bg-brand-dark hover:bg-brand-blue text-white px-12 py-5 rounded-2xl font-black tracking-widest text-sm transition-all inline-flex items-center gap-3 shadow-premium hover:shadow-glow"
            >
              BROWSE ALL PROJECTS <ArrowRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #FFF 1px, transparent 0), linear-gradient(-45deg, #FFF 1px, transparent 0)', backgroundSize: '60px 60px' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader 
            title="Voices of Success" 
            subtitle="Don't just take our word for it—hear from the visionary leaders who have partnered with CodeWithSiril."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div 
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-dark border border-white/10 p-12 rounded-[3rem] relative group"
              >
                <div className="absolute -top-6 left-12 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-blue shadow-glow transform rotate-12 group-hover:rotate-0 transition-transform">
                  <Star fill="currentColor" size={24} />
                </div>
                <div className="flex gap-1 mb-8 text-white/40">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-white" />
                  ))}
                </div>
                <p className="text-xl italic mb-10 leading-relaxed font-light opacity-90 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center font-black text-xl border border-white/20">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg">{testimonial.name}</h4>
                    <span className="text-white/60 text-xs font-black uppercase tracking-widest">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white" />
        
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader 
            title="Strategic Investment Plans" 
            subtitle="Transparent tier-based pricing engineered for companies that demand excellence and scalability."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto items-center">
            {PRICING.map((plan, index) => (
              <motion.div 
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white transition-all duration-500 hover:-translate-y-4 flex flex-col ${
                  plan.recommended ? 'border-2 border-brand-blue lg:scale-105 z-10 shadow-glow py-12 md:py-16' : 'border border-slate-100 shadow-premium'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-8 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-glow">
                    Highly Recommended
                  </div>
                )}
                <div className="mb-10">
                  <h3 className="text-sm font-black text-brand-blue uppercase tracking-[0.3em] mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-brand-dark">{plan.price}</span>
                    <span className="text-brand-slate font-medium text-lg italic">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-6 mb-12 flex-grow">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-brand-blue/10 text-brand-blue rounded-lg flex items-center justify-center mt-0.5">
                        <CheckCircle2 size={14} strokeWidth={3} />
                      </div>
                      <span className="text-brand-dark text-sm font-bold leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-5 rounded-2xl font-black tracking-widest text-xs transition-all uppercase ${
                  plan.recommended ? 'bg-brand-blue hover:bg-brand-dark text-white shadow-glow' : 'bg-brand-dark hover:bg-brand-blue text-white'
                }`}>
                  SECURE THIS PLAN
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container max-w-4xl relative z-10">
          <SectionHeader 
            title="Strategic Insights" 
            subtitle="Get clarity on our methodology, commitment to quality, and how we drive results for our partners."
          />
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/3">
              <SectionHeader 
                title="Let's Define the Future" 
                subtitle="Whether you're looking to disrupt a market or optimize an existing ecosystem, our engineers are ready." 
                centered={false}
              />
              
              <div className="space-y-10">
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-brand-blue/20 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <Mail size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Connect via Email</h4>
                    <a href="mailto:santhanasiril0202@gmail.com" className="text-white font-black text-xl tracking-tight hover:text-brand-blue transition-colors">
                      santhanasiril0202@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-brand-blue/20 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <Phone size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Instant Consultation</h4>
                    <p className="text-white font-black text-xl tracking-tight">+91 93630 21664</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-white/10 flex gap-6">
                {SOCIAL_LINKS.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-dark rounded-xl flex items-center justify-center text-white hover:text-brand-blue hover:scale-110 transition-all"
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="glass-dark p-12 lg:p-20 rounded-[3rem] border border-white/10">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Identity</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe" 
                      className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all text-white placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Work Email</label>
                    <input 
                      type="email" 
                      placeholder="e.g. john@company.com" 
                      className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all text-white placeholder:text-white/20"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Mobile Number</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. +1 234 567 8900" 
                      className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all text-white placeholder:text-white/20"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Project Brief</label>
                    <textarea 
                      placeholder="Briefly describe your objectives..." 
                      rows={4}
                      className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all text-white placeholder:text-white/20 resize-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button className="w-full md:w-auto bg-brand-blue hover:bg-white hover:text-brand-dark text-white px-16 py-6 rounded-2xl font-black tracking-[0.2em] uppercase text-xs transition-all shadow-glow hover:shadow-white/10">
                      IGNITE THE PROJECT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-brand-dark border-t border-white/5 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 lg:gap-0">
            {/* Left: Branding */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src="/src/assets/images/logo.png" 
                  alt="CodeWithSiril" 
                  className="w-10 h-10 object-contain"
                />
                <span className="font-bold text-2xl tracking-tighter text-white">
                  Code<span className="text-brand-blue">With</span>Siril
                </span>
              </div>
              <p className="text-slate-500 text-xs font-medium italic opacity-70">
                © {new Date().getFullYear()} CodeWithSiril. Engineering Excellence.
              </p>
            </div>
            
            {/* Center: Tagline */}
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
            
            {/* Right: Policy Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-8">
              <button 
                onClick={() => setActivePolicy(POLICIES.privacy)} 
                className="text-slate-500 hover:text-brand-blue text-xs font-black tracking-widest uppercase transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setActivePolicy(POLICIES.terms)} 
                className="text-slate-500 hover:text-brand-blue text-xs font-black tracking-widest uppercase transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => setActivePolicy(POLICIES.cookie)} 
                className="text-slate-500 hover:text-brand-blue text-xs font-black tracking-widest uppercase transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      <PolicyModal 
        isOpen={!!activePolicy} 
        onClose={() => setActivePolicy(null)} 
        title={activePolicy?.title || ''} 
        content={activePolicy?.content || ''} 
      />

      {/* Projects Modal */}
      <ProjectsModal 
        isOpen={showAllProjects} 
        onClose={() => setShowAllProjects(false)} 
      />

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        {showScrollTop && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 bg-white text-slate-900 rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all ring-1 ring-slate-100"
          >
            <ChevronUp size={28} />
          </motion.button>
        )}
        <a 
          href="https://wa.me/919363021664" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-600 transition-all transform hover:scale-110"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
}
