import React from 'react';
import { motion } from 'motion/react';
import cover from '../assets/images/cover.png';
import { 
  ArrowRight, 
  Star, 
  Mail, 
  Phone, 
  ExternalLink,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { 
  SERVICES, 
  BENEFITS, 
  PORTFOLIO, 
  TESTIMONIALS, 
  PRICING, 
  FAQS, 
  SOCIAL_LINKS 
} from '../constants';
import { SectionHeader, FAQItem } from '../components/UI';
import { InitiateProjectForm, ContactForm } from '../components/Forms';
import { SEO } from '../components/SEO';

interface HomePageProps {
  onOpenPortfolio: () => void;
  onNavigate: (to: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenPortfolio, onNavigate }) => {
  return (
    <>
      <SEO
        title="Best Website Developer in Madurai | Affordable Web Design | CodeWithSiril"
        description="CodeWithSiril is a freelance website developer in Madurai offering affordable website design, ecommerce website development, POS billing software, admin dashboards and SEO-friendly web solutions for businesses near Madurai."
        canonical="https://www.codewithsiril.site/"
        ogTitle="CodeWithSiril | Best Website Developer in Madurai"
        ogDescription="Affordable and professional website development in Madurai for business websites, ecommerce stores and POS solutions."
        ogUrl="https://www.codewithsiril.site/"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden section-padding">
        <div className="absolute inset-0 z-0 opacity-10 scale-105 pointer-events-none">
          <img
            src={cover}
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
                  href="#portfolio"
                  className="w-full sm:w-auto glass hover:bg-white text-brand-dark px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center border border-slate-200"
                >
                  View Case Studies
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
              className="flex-1 relative w-full px-4 sm:px-0"
            >
              <div className="relative z-10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-premium border-8 md:border-[12px] border-white ring-1 ring-slate-100 animate-float">
                <img
                  src={cover}
                  alt="CodeWithSiril Solution"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/40 rounded-full blur-[100px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-slate-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#2563EB 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
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
                      <div className="text-brand-slate font-bold uppercase tracking-widest text-xs">
                        Excellence Awards
                      </div>
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
                At <span className="font-bold text-brand-dark">CodeWithSiril</span>, we bridge the gap between
                complex engineering and human-centric design. Our methodology focuses on scalability,
                lightning-fast performance, and conversion-optimized interfaces that turn visitors into
                lifelong advocates.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="p-8 bg-white rounded-[2rem] shadow-premium hover:shadow-brand-blue/5 transition-shadow">
                  <div className="text-4xl font-black text-brand-blue mb-2">1</div>
                  <div className="text-brand-dark text-xs font-black uppercase tracking-[0.2em] opacity-60 italic">
                    Year of Innovation
                  </div>
                </div>
                <div className="p-8 bg-white rounded-[2rem] shadow-premium hover:shadow-brand-blue/5 transition-shadow">
                  <div className="text-4xl font-black text-brand-blue mb-2">98%</div>
                  <div className="text-brand-dark text-xs font-black uppercase tracking-[0.2em] opacity-60 italic">
                    Client Retention
                  </div>
                </div>
              </div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 text-brand-blue font-black tracking-widest text-sm hover:gap-5 transition-all"
              >
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

          {/* Featured Local SEO Service Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-r from-blue-900 via-brand-dark to-slate-900 text-white shadow-premium flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-500/20"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0 border border-brand-blue/30">
                <MapPin size={28} />
              </div>
              <div>
                <span className="text-blue-400 text-xs font-black uppercase tracking-[0.25em]">Specialized Local Service</span>
                <h3 className="text-2xl font-bold text-white mt-1">Web Development Services in Madurai</h3>
                <p className="text-slate-300 text-sm font-light mt-1">
                  Looking for a professional web developer in Madurai? We build fast, mobile-friendly websites for local businesses.
                </p>
              </div>
            </div>
            <a
              href="/web-development-madurai"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/web-development-madurai');
              }}
              className="px-8 py-4 bg-brand-blue hover:bg-white hover:text-brand-dark text-white rounded-2xl font-bold text-sm tracking-wider uppercase transition-all shadow-glow flex-shrink-0 flex items-center gap-2 group cursor-pointer"
            >
              Explore Madurai Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

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
                <p className="text-brand-slate leading-relaxed font-light relative z-10">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-dark text-white overflow-hidden relative">
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
                      <h4 className="font-bold text-xl mb-2 group-hover:text-brand-blue transition-colors">
                        {benefit.title}
                      </h4>
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
                <h3 className="text-3xl font-black mb-8 font-serif">
                  Initiate Your <br />
                  <span className="text-brand-blue">Project Now</span>
                </h3>
                <InitiateProjectForm />
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
            {PORTFOLIO.slice(0, 6).map((item, index) => {
              const hasLink = item.link && item.link !== '#';
              const CardWrapper = (hasLink ? 'a' : 'div') as 'a' | 'div';
              const wrapperProps = hasLink
                ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full h-full"
                >
                  <CardWrapper
                    {...wrapperProps}
                    className={`block relative rounded-[3rem] overflow-hidden shadow-premium aspect-[16/10] group ${
                      hasLink ? 'cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent flex flex-col justify-end p-10 lg:p-14 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-brand-blue font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-white text-2xl lg:text-3xl font-bold mb-5">{item.title}</h3>
                      <div className="flex items-center gap-4">
                        {hasLink ? (
                          <span className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-white text-white hover:text-brand-dark rounded-xl font-bold text-xs tracking-widest uppercase shadow-glow hover:scale-105 active:scale-95 duration-300 transition-all">
                            Live Demo
                            <ExternalLink size={14} strokeWidth={2.5} />
                          </span>
                        ) : (
                          <div className="flex items-center gap-2 text-white/60 text-xs font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                            Discover Case Study <ArrowRight size={16} strokeWidth={3} />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-20 text-center">
            <button
              onClick={onOpenPortfolio}
              className="bg-brand-dark hover:bg-brand-blue text-white px-12 py-5 rounded-2xl font-black tracking-widest text-sm transition-all inline-flex items-center gap-3 shadow-premium hover:shadow-glow cursor-pointer"
            >
              BROWSE ALL PROJECTS <ArrowRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-blue text-white overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #FFF 1px, transparent 0), linear-gradient(-45deg, #FFF 1px, transparent 0)',
            backgroundSize: '60px 60px',
          }}
        />
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
                <p className="text-xl italic mb-10 leading-relaxed font-light opacity-90">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center font-black text-xl border border-white/20">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg">{testimonial.name}</h4>
                    <span className="text-white/60 text-xs font-black uppercase tracking-widest">
                      {testimonial.role}
                    </span>
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
                  plan.recommended
                    ? 'border-2 border-brand-blue lg:scale-105 z-10 shadow-glow py-12 md:py-16'
                    : 'border border-slate-100 shadow-premium'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-8 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-glow">
                    Highly Recommended
                  </div>
                )}
                <div className="mb-10">
                  <h3 className="text-sm font-black text-brand-blue uppercase tracking-[0.3em] mb-4">
                    {plan.name}
                  </h3>
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
                <a
                  href="#contact"
                  className={`w-full py-5 rounded-2xl font-black tracking-widest text-xs transition-all uppercase text-center block ${
                    plan.recommended
                      ? 'bg-brand-blue hover:bg-brand-dark text-white shadow-glow'
                      : 'bg-brand-dark hover:bg-brand-blue text-white'
                  }`}
                >
                  SECURE THIS PLAN
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container max-w-4xl relative z-10 mx-auto px-6">
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
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
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
                    <h4 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">
                      Connect via Email
                    </h4>
                    <a
                      href="mailto:santhanasiril0202@gmail.com"
                      className="text-white font-black text-xl tracking-tight hover:text-brand-blue transition-colors"
                    >
                      santhanasiril0202@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-brand-blue/20 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <Phone size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">
                      Instant Consultation
                    </h4>
                    <a href="tel:+919363021664" className="text-white font-black text-xl tracking-tight hover:text-brand-blue transition-colors">
                      +91 93630 21664
                    </a>
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
                    aria-label={social.name}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="glass-dark p-12 lg:p-20 rounded-[3rem] border border-white/10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
