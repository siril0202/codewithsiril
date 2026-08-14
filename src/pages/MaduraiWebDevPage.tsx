import React from 'react';
import { motion } from 'motion/react';
import cover from '../assets/images/cover.png';
import {
  Globe,
  ShoppingCart,
  Code2,
  Layout,
  Smartphone,
  Settings,
  Search,
  CheckCircle2,
  Clock,
  CircleDollarSign,
  HeadphonesIcon,
  Zap,
  BarChart3,
  ShieldCheck,
  UserCheck,
  Utensils,
  Hotel,
  Stethoscope,
  GraduationCap,
  Sparkles,
  ShoppingBag,
  Building2,
  Compass,
  Briefcase,
  Rocket,
  ArrowRight,
  ExternalLink,
  Phone,
  Mail,
  MessageCircle,
  Star,
  ChevronRight
} from 'lucide-react';
import { PORTFOLIO, TESTIMONIALS, SOCIAL_LINKS } from '../constants';
import { SectionHeader, FAQItem } from '../components/UI';
import { InitiateProjectForm, ContactForm } from '../components/Forms';
import { SEO } from '../components/SEO';

interface MaduraiWebDevPageProps {
  onOpenPortfolio: () => void;
  onNavigate: (to: string) => void;
}

export const MaduraiWebDevPage: React.FC<MaduraiWebDevPageProps> = ({ onOpenPortfolio, onNavigate }) => {
  // Dedicated local services list for Madurai
  const maduraiServices = [
    {
      icon: Globe,
      title: 'Business Website Development',
      description: 'Professional corporate and local business websites designed to establish trust, showcase your offerings, and convert Madurai visitors into paying customers.',
      tags: ['Corporate Sites', 'Lead Generation', 'Fast Loading']
    },
    {
      icon: ShoppingCart,
      title: 'Ecommerce Website Development',
      description: 'Robust online stores tailored for local shops and brands with UPI & card payments, inventory management, product catalogs, and WhatsApp order alerts.',
      tags: ['Payment Gateways', 'UPI / Razorpay', 'WhatsApp Orders']
    },
    {
      icon: Code2,
      title: 'Custom Web Applications',
      description: 'High-performance interactive web portals, custom booking engines, and CRM systems built using modern React, TypeScript, and cloud APIs.',
      tags: ['React & Node', 'Custom Portals', 'Scalable Architecture']
    },
    {
      icon: Layout,
      title: 'Landing Page Development',
      description: 'High-converting single-page websites engineered for ad campaigns, product launches, and local lead generation in Madurai and Tamil Nadu.',
      tags: ['Conversion Focused', 'A/B Ready', 'Ad Campaign Optimized']
    },
    {
      icon: Smartphone,
      title: 'Responsive Web Design',
      description: 'Fluid, mobile-first designs that look exceptional and operate seamlessly across all smartphones, tablets, laptops, and desktop monitors.',
      tags: ['Mobile First', 'Cross-Browser', 'Retina Ready']
    },
    {
      icon: Settings,
      title: 'Website Maintenance',
      description: 'Comprehensive maintenance, speed optimization, security updates, daily backups, and ongoing technical support for uninterrupted operations.',
      tags: ['Security Patches', 'Speed Boost', '24/7 Monitoring']
    },
    {
      icon: Search,
      title: 'SEO-Friendly Website Development',
      description: 'Clean semantic HTML, schema.org structured data, fast Core Web Vitals, and local Madurai SEO practices to help your site rank at the top of Google.',
      tags: ['Local SEO', 'Schema Markup', 'Core Web Vitals']
    }
  ];

  // Genuine benefits of choosing CodeWithSiril
  const maduraiBenefits = [
    {
      icon: Smartphone,
      title: '100% Responsive Design',
      description: 'Every layout is meticulously designed for mobile, tablet, and desktop screens, guaranteeing a smooth user experience on any device.'
    },
    {
      icon: Zap,
      title: 'Fast-Loading Websites',
      description: 'Engineered with clean code and modern asset bundling for sub-second load times that keep visitors engaged and reduce bounce rates.'
    },
    {
      icon: Layout,
      title: 'Mobile-Friendly Architecture',
      description: 'Over 80% of local searches happen on mobile devices. We develop with a strict mobile-first mindset from wireframe to deployment.'
    },
    {
      icon: Code2,
      title: 'Modern Technologies',
      description: 'Built using state-of-the-art frameworks like React, TypeScript, and Vite for rock-solid security, lightning speed, and future scalability.'
    },
    {
      icon: Search,
      title: 'SEO-Friendly Structure',
      description: 'Built-in local SEO best practices including meta tags, OpenGraph previews, XML sitemaps, and valid JSON-LD schema markup.'
    },
    {
      icon: CheckCircle2,
      title: 'Custom Solutions',
      description: 'We build tailored digital solutions that match your exact business workflow and branding without relying on bloated, rigid templates.'
    },
    {
      icon: UserCheck,
      title: 'Direct Communication',
      description: 'Collaborate directly with the lead developer throughout the project for clear milestones, rapid revisions, and zero miscommunication.'
    },
    {
      icon: CircleDollarSign,
      title: 'Affordable for Small Businesses',
      description: 'Honest, competitive pricing engineered specifically for Madurai startups, local traders, and growing businesses with no hidden costs.'
    }
  ];

  // 10 Key Industries served in Madurai
  const industries = [
    {
      icon: Utensils,
      name: 'Restaurants & Cafes',
      desc: 'Interactive digital menus, table reservation requests, Google Maps directions, and online food ordering setups.'
    },
    {
      icon: Hotel,
      name: 'Hotels & Hospitality',
      desc: 'Room showcase galleries, tourist guides, direct reservation inquiries, and amenity spotlights.'
    },
    {
      icon: Stethoscope,
      name: 'Clinics & Healthcare',
      desc: 'Doctor specializations, clinic timings, appointment inquiry forms, patient testimonials, and health services info.'
    },
    {
      icon: GraduationCap,
      name: 'Schools & Education',
      desc: 'Admissions portals, curriculum overviews, faculty highlights, student notices, and campus facilities.'
    },
    {
      icon: Sparkles,
      name: 'Salons & Spas',
      desc: 'Service rate cards, bridal makeover portfolios, stylist bios, and instant WhatsApp booking integration.'
    },
    {
      icon: ShoppingBag,
      name: 'Retail & Local Shops',
      desc: 'Digital product showcases, seasonal offers, WhatsApp catalog ordering, and local store locators.'
    },
    {
      icon: Building2,
      name: 'Real Estate & Builders',
      desc: 'Property listings, architectural floor plans, high-res galleries, location advantages, and buyer inquiry forms.'
    },
    {
      icon: Compass,
      name: 'Travel & Tour Operators',
      desc: 'South India tour packages, temple tour itineraries, vehicle rental bookings, and instant travel inquiry forms.'
    },
    {
      icon: Briefcase,
      name: 'Small Businesses & Traders',
      desc: 'Professional digital business cards, B2B product catalogs, wholesale quotation requests, and GST-ready invoices.'
    },
    {
      icon: Rocket,
      name: 'Startups & Service Providers',
      desc: 'High-converting SaaS landing pages, MVP web applications, service funnels, and pitch deck presentations.'
    }
  ];

  // 6-step structured development process
  const processSteps = [
    {
      number: '01',
      title: 'Requirement Gathering',
      desc: 'We discuss your business goals, target audience in Madurai, feature requirements, and timeline to craft a clear project roadmap.'
    },
    {
      number: '02',
      title: 'UI/UX Design & Wireframing',
      desc: 'We create intuitive, user-friendly mockups and visual layouts aligned with your brand identity and conversion objectives.'
    },
    {
      number: '03',
      title: 'Frontend & Backend Development',
      desc: 'We build your website using modern React, TypeScript, and clean code standards with high performance and responsiveness.'
    },
    {
      number: '04',
      title: 'Testing & Quality Assurance',
      desc: 'Rigorous checks for mobile responsiveness, cross-browser compatibility, form submissions, and Core Web Vitals speed.'
    },
    {
      number: '05',
      title: 'Deployment & Launch',
      desc: 'We configure your custom domain, SSL certificate, CDN hosting, Google Analytics, and submit your XML sitemap to Google.'
    },
    {
      number: '06',
      title: 'Maintenance & Support',
      desc: 'We provide post-launch support, regular security updates, speed monitoring, and content assistance to ensure long-term success.'
    }
  ];

  // 6 Madurai-specific FAQs
  const maduraiFaqs = [
    {
      question: 'How much does a business website cost in Madurai?',
      answer: 'Website development costs in Madurai depend on project scope and features. At CodeWithSiril, starter single-page business websites begin at ₹4,999, multi-page business websites with advanced features start around ₹14,999, and custom web applications or ecommerce portals are quoted based on specific functional requirements. All pricing is upfront with zero hidden charges.'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'A standard starter or business website typically takes 7 to 10 days from initial requirement confirmation to live launch. Custom web applications, booking platforms, or full ecommerce stores generally take 2 to 4 weeks depending on the number of pages, custom features, and feedback turnaround.'
    },
    {
      question: 'Do you provide ecommerce website development in Madurai?',
      answer: 'Yes! We develop complete ecommerce websites for businesses in Madurai. Features include modern product catalogs, shopping cart, UPI / Razorpay payment gateway integration, order notifications, customer accounts, and WhatsApp order checkout options.'
    },
    {
      question: 'Can you redesign an existing website?',
      answer: 'Absolutely. If your current website is slow, outdated, or not mobile-friendly, we can redesign and rebuild it using modern web technologies. We modernize the design, improve loading speeds, implement local SEO best practices, and ensure it converts visitors into leads.'
    },
    {
      question: 'Do you provide website maintenance and support?',
      answer: 'Yes, we offer ongoing maintenance and support packages. This includes regular security patches, content updates, hosting and SSL monitoring, daily/weekly backups, and speed optimization so your website stays secure and operational 24/7.'
    },
    {
      question: 'Can you build SEO-friendly websites for local businesses in Madurai?',
      answer: 'Yes. Every website we develop follows strict on-page SEO principles: semantic HTML5 markup, fast loading speeds, mobile-first design, structured schema markup (JSON-LD), XML sitemaps, OpenGraph metadata, and Google Search Console configuration to help your business rank for local Madurai search queries.'
    }
  ];

  // JSON-LD Structured Data for Local SEO & FAQ
  const jsonLdSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'CodeWithSiril - Web Development Company in Madurai',
      'url': 'https://www.codewithsiril.site/web-development-madurai',
      'logo': 'https://www.codewithsiril.site/src/assets/images/logo.png',
      'image': 'https://www.codewithsiril.site/og-banner.png',
      'telephone': '+919363021664',
      'email': 'santhanasiril0202@gmail.com',
      'priceRange': '₹₹',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Madurai',
        'addressRegion': 'Tamil Nadu',
        'postalCode': '625001',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 9.9252,
        'longitude': 78.1198
      },
      'areaServed': [
        { '@type': 'City', 'name': 'Madurai' },
        { '@type': 'AdministrativeArea', 'name': 'Tamil Nadu' },
        { '@type': 'Country', 'name': 'India' }
      ],
      'description': 'Professional web development company in Madurai providing business websites, ecommerce development, and custom web applications.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': maduraiFaqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.codewithsiril.site/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Web Development in Madurai',
          'item': 'https://www.codewithsiril.site/web-development-madurai'
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Web Development Company in Madurai | CodeWithSiril"
        description="Professional web development in Madurai for business websites, ecommerce stores and custom web applications. Get a free quote from CodeWithSiril."
        canonical="https://www.codewithsiril.site/web-development-madurai"
        ogTitle="Web Development Company in Madurai | CodeWithSiril"
        ogDescription="Professional web development in Madurai for business websites, ecommerce stores and custom web applications. Get a free quote from CodeWithSiril."
        ogUrl="https://www.codewithsiril.site/web-development-madurai"
        schemas={jsonLdSchemas}
      />

      {/* Breadcrumb Bar */}
      <div className="pt-24 md:pt-28 pb-4 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
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
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-brand-dark">Web Development Madurai</span>
          </nav>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img
            src={cover}
            alt="Web Development in Madurai"
            className="w-full h-full object-cover grayscale opacity-20 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-black mb-6 tracking-[0.15em] uppercase border border-brand-blue/20"
              >
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
                Madurai, Tamil Nadu • Web Solutions
              </motion.div>

              {/* Single Main H1 Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-dark leading-[1.05] mb-6 tracking-tight font-serif"
              >
                Web Development Company in <span className="text-gradient">Madurai</span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-brand-slate mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                CodeWithSiril creates fast, responsive, and modern websites for businesses in Madurai. From high-converting business websites to custom web applications and ecommerce stores, we engineer digital platforms that drive real customer inquiries and revenue.
              </motion.p>

              {/* Primary & Secondary CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              >
                <a
                  href="#contact"
                  className="w-full sm:w-auto bg-brand-blue hover:bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold text-base transition-all shadow-glow flex items-center justify-center gap-2.5 hover:-translate-y-0.5 cursor-pointer"
                >
                  Get a Free Quote <ArrowRight size={20} strokeWidth={2.5} />
                </a>
                <a
                  href="#portfolio"
                  className="w-full sm:w-auto glass hover:bg-white text-brand-dark px-8 py-4 rounded-2xl font-bold text-base transition-all flex items-center justify-center border border-slate-200 cursor-pointer"
                >
                  View Our Work
                </a>
              </motion.div>

              {/* Trust Metric Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80 text-left"
              >
                <div>
                  <div className="text-xl font-extrabold text-brand-dark">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Mobile Responsive</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-brand-dark">&lt; 1.5s</div>
                  <div className="text-xs text-slate-500 font-medium">Fast Load Time</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-brand-dark">SEO Ready</div>
                  <div className="text-xs text-slate-500 font-medium">Google Friendly</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-brand-dark">1-on-1</div>
                  <div className="text-xs text-slate-500 font-medium">Direct Developer</div>
                </div>
              </motion.div>
            </div>

            {/* Hero Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 90 }}
              className="flex-1 relative w-full"
            >
              <div className="relative z-10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-premium border-8 border-white ring-1 ring-slate-100 bg-brand-dark">
                <img
                  src={cover}
                  alt="Web Development Services by CodeWithSiril in Madurai"
                  className="w-full h-auto object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent flex flex-col justify-end p-8">
                  <div className="glass-dark p-4 rounded-2xl border border-white/10 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h2 className="text-sm font-bold text-white">Madurai Web Development Hub</h2>
                        <p className="text-xs text-slate-300 font-light">Custom Websites • Fast Delivery • Local Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-200/40 rounded-full blur-[90px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section id="services" className="section-padding bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Web Development Services in Madurai"
            subtitle="Tailored website design and software development solutions crafted to help businesses in Madurai attract customers and expand online."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maduraiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 md:p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-premium hover:shadow-glow hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-brand-blue/5 text-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <service.icon size={30} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h3>
                  <p className="text-brand-slate leading-relaxed font-light text-sm mb-6">{service.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose CodeWithSiril */}
      <section id="why-us" className="section-padding bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            <div className="flex-1">
              <SectionHeader
                title="Why Choose CodeWithSiril in Madurai?"
                subtitle="We build purpose-driven websites that combine modern aesthetics with high speed, clean code, and search engine visibility."
                centered={false}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {maduraiBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      <benefit.icon size={24} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 group-hover:text-brand-blue transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed font-light">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full lg:max-w-lg">
              <div className="glass p-8 md:p-12 rounded-[3rem] text-brand-dark shadow-premium relative">
                <div className="absolute -top-5 -right-5 w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white shadow-glow">
                  <Star fill="currentColor" size={26} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-6 font-serif">
                  Request a Free Quote <br />
                  <span className="text-brand-blue text-xl font-sans font-semibold">for Madurai Businesses</span>
                </h3>
                <InitiateProjectForm defaultService="Business Website Development" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Industries We Serve in Madurai */}
      <section id="industries" className="section-padding bg-white relative">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Industries We Serve in Madurai"
            subtitle="Custom-designed digital solutions tailored to the business dynamics of key local industries across Madurai and southern Tamil Nadu."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((ind, index) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="p-6 bg-slate-50/70 hover:bg-white border border-slate-100 hover:border-blue-200 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-100/60 text-brand-blue flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <ind.icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-brand-dark mb-2">{ind.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Portfolio / Recent Work */}
      <section id="portfolio" className="section-padding bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Recent Work & Case Studies"
            subtitle="Explore real-world websites and web applications built with precision, high performance, and user-centric design."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  transition={{ delay: index * 0.05 }}
                  className="w-full h-full"
                >
                  <CardWrapper
                    {...wrapperProps}
                    className={`block relative rounded-[2.5rem] overflow-hidden shadow-premium aspect-[16/11] group bg-brand-dark ${
                      hasLink ? 'cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={`${item.title} - Website development project`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent flex flex-col justify-end p-8 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-brand-blue font-black text-[10px] uppercase tracking-[0.25em] mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                      <div className="flex items-center gap-3">
                        {hasLink ? (
                          <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-blue hover:bg-white text-white hover:text-brand-dark rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-glow">
                            Live Demo
                            <ExternalLink size={12} strokeWidth={2.5} />
                          </span>
                        ) : (
                          <span className="text-white/60 text-xs font-semibold">Custom Platform</span>
                        )}
                      </div>
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-14 text-center">
            <button
              onClick={onOpenPortfolio}
              className="bg-brand-dark hover:bg-brand-blue text-white px-10 py-4 rounded-2xl font-black tracking-wider text-xs transition-all inline-flex items-center gap-2 shadow-premium hover:shadow-glow uppercase cursor-pointer"
            >
              Browse All Projects <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Website Development Process */}
      <section id="process" className="section-padding bg-white relative">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Website Development Process"
            subtitle="A transparent, reliable 6-phase journey from initial consultation to successful website launch."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group relative overflow-hidden"
              >
                <span className="text-5xl font-black text-slate-200 group-hover:text-brand-blue/20 transition-colors absolute top-6 right-6 font-serif select-none">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center font-bold text-lg mb-6 shadow-glow">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 relative z-10">{step.title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed font-light relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
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
            title="Client Feedback & Trust"
            subtitle="Hear how CodeWithSiril has helped businesses scale with modern web design and technical excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-dark border border-white/10 p-10 rounded-[2.5rem] relative"
              >
                <div className="flex gap-1 mb-6 text-white">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg italic mb-8 leading-relaxed font-light opacity-95">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center font-black text-lg border border-white/20">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base">{testimonial.name}</h4>
                    <span className="text-white/60 text-xs font-semibold">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section id="faq" className="section-padding bg-white relative">
        <div className="container max-w-4xl relative z-10 mx-auto px-6">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about web development in Madurai, project costs, timelines, and maintenance."
          />
          <div className="space-y-4">
            {maduraiFaqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section id="contact" className="section-padding bg-brand-dark text-white overflow-hidden relative">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            <div className="lg:w-5/12">
              <SectionHeader
                title="Ready to Build Your Website in Madurai?"
                subtitle="Whether you're starting a new venture or upgrading an existing website, we're here to build a fast, high-converting digital presence for your business."
                centered={false}
              />

              {/* Direct Action Buttons */}
              <div className="space-y-4 mb-10">
                <a
                  href="https://wa.me/919363021664?text=Hi%20Siril%2C%20I%20am%20looking%20for%20web%20development%20services%20in%20Madurai."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 bg-emerald-600 hover:bg-emerald-500 rounded-2xl text-white font-bold transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle size={24} />
                    Chat on WhatsApp
                  </span>
                  <span className="text-xs uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">Instant Reply</span>
                </a>

                <a
                  href="tel:+919363021664"
                  className="flex items-center justify-between p-5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl text-white font-bold transition-all cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <Phone size={24} />
                    Call: +91 93630 21664
                  </span>
                  <span className="text-xs uppercase tracking-wider text-slate-300">Mon - Sat</span>
                </a>
              </div>

              <div className="space-y-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center text-brand-blue">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs uppercase tracking-wider block">Email Inquiries</span>
                    <a
                      href="mailto:santhanasiril0202@gmail.com"
                      className="text-white font-bold hover:text-brand-blue transition-colors"
                    >
                      santhanasiril0202@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 glass-dark rounded-xl flex items-center justify-center text-white hover:text-brand-blue transition-all"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:w-7/12">
              <div className="glass-dark p-8 md:p-14 rounded-[3rem] border border-white/10">
                <h3 className="text-2xl font-bold mb-2 text-white">Get a Free Consultation & Quote</h3>
                <p className="text-slate-300 text-sm mb-8 font-light">
                  Tell us about your project requirements and we'll get back to you within 24 hours with a free quote and timeline.
                </p>
                <ContactForm
                  defaultMessage="Hi, I'm interested in web development services in Madurai for my business."
                  buttonText="GET MY FREE QUOTE"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
