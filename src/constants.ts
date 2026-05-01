import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Search, 
  Palette, 
  Megaphone, 
  Settings, 
  Code2,
  CheckCircle2,
  Clock,
  CircleDollarSign,
  HeadphonesIcon,
  Zap,
  BarChart3,
  Instagram,
  Linkedin,
  Github,
  MessageCircle
} from 'lucide-react';

export const COLORS = {
  primary: '#2563EB',
  secondary: '#1D4ED8',
  accent: '#3B82F6',
  background: '#FFFFFF',
  sectionBackground: '#F8FAFC',
  textPrimary: '#0F172A',
  textSecondary: '#475569',
};

export const SERVICES = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, high-performance websites tailored to your business goals using modern frameworks.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Development',
    description: 'Scale your sales with robust online stores, secure payment gateways, and seamless UX.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile solutions for iOS and Android that engage users.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve search rankings, drive organic traffic, and optimize your online visibility.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centric designs that combine aesthetics with intuitive functionality.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Growth-focused strategies across social media, PPC, and content marketing.',
  },
  {
    icon: Settings,
    title: 'Website Maintenance',
    description: 'Ongoing support, security updates, and performance monitoring for peace of mind.',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Scalable software solutions built to solve your unique business challenges.',
  },
];

export const BENEFITS = [
  {
    icon: CheckCircle2,
    title: 'Expert Team',
    description: 'Seasoned developers and designers committed to excellence.',
  },
  {
    icon: CircleDollarSign,
    title: 'Affordable Pricing',
    description: 'Premium solutions that fit your budget without compromises.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Efficient workflows ensuring timely project completion.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: '24/7 assistance and maintenance for your digital assets.',
  },
  {
    icon: Zap,
    title: 'SEO-Optimized',
    description: 'Built-in SEO best practices for maximum search visibility.',
  },
  {
    icon: BarChart3,
    title: 'Scalable Solutions',
    description: 'Future-proof technology that grows with your business.',
  },
];

export const PORTFOLIO = [
  {
    title: 'Cloud POS System',
    category: 'POS & Inventory',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    title: 'Hostel Management System',
    category: 'Management Software',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    title: 'Elite Travels Platform',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    title: 'Global E-Commerce Hub',
    category: 'E-Commerce & Payments',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    title: 'Smart Billing Software',
    category: 'Windows Application',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    title: 'Secure Barcode Generator',
    category: 'Utility Software',
    image: 'https://images.unsplash.com/photo-1722900879089-221a411fc7c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    title: 'Advanced Inventory System',
    category: 'Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    title: 'EcoStore E-Commerce',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechVentures',
    content: 'CodeWithSiril transformed our online presence. Their attention to detail and technical expertise is unmatched.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, EcoShop',
    content: 'The e-commerce platform developed for us has significantly increased our conversion rates. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    role: 'Marketing Director, GlobalReach',
    content: 'Professional, responsive, and innovative. They delivered exactly what we needed on time and within budget.',
    rating: 5,
  },
];

export const PRICING = [
  {
    name: 'Starter',
    price: '₹4,999',
    period: 'Starting at',
    features: [
      'Single Page React Website',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      '1 Month Free Maintenance',
    ],
    recommended: false,
  },
  {
    name: 'Business',
    price: '₹14,999',
    period: 'Starting at',
    features: [
      'Multi-page CMS Website',
      'Enhanced SEO & Analytics',
      'Advanced Animations',
      'Social Media Integration',
      '3 Months Free Maintenance',
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Contact for Quote',
    features: [
      'Full-stack Web Applications',
      'Custom API Development',
      'E-commerce Integration',
      'Dedicated Project Manager',
      '1 Year Priority Support',
    ],
    recommended: false,
  },
];

export const FAQS = [
  {
    question: 'How long does it take to build a website?',
    answer: 'Timeline varies projects. A starter website takes 7-10 days, while complex business platforms can take 4-8 weeks.',
  },
  {
    question: 'Do you provide maintenance after delivery?',
    answer: 'Yes, we offer various maintenance plans once the project is launched to ensure your site remains secure and up-to-date.',
  },
  {
    question: 'Can you help with app store submissions?',
    answer: 'Absolutely. We handle the entire process of submitting your mobile apps to both Apple App Store and Google Play Store.',
  },
  {
    question: 'Is my website SEO-friendly?',
    answer: 'Yes, every project we build follows the latest SEO best practices, including semantic HTML, fast loading speeds, and mobile optimization.',
  },
];

export const SOCIAL_LINKS = [
  { icon: Instagram, url: 'https://instagram.com/codewithsiril', name: 'Instagram', color: '#E4405F' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/santhana-siril/', name: 'LinkedIn', color: '#0077B5' },
  { icon: Github, url: 'https://github.com/siril0202', name: 'GitHub', color: '#181717' },
  { icon: MessageCircle, url: 'https://wa.me/919363021664', name: 'WhatsApp', color: '#25D366' },
];
