import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronUp, MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PolicyModal, ProjectsModal } from './components/Modals';
import { HomePage } from './pages/HomePage';
import { MaduraiWebDevPage } from './pages/MaduraiWebDevPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    return typeof window !== 'undefined' ? window.location.pathname : '/';
  });
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

  // Listen to browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (to: string) => {
    if (to.startsWith('/')) {
      const targetPath = to.toLowerCase().replace(/\/+$/, '') || '/';
      const currentNorm = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
      if (currentNorm !== targetPath) {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const normalizedPath = currentPath.toLowerCase().replace(/\/+$/, '') || '/';
  const isMaduraiPage = normalizedPath === '/web-development-madurai';

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      <main>
        {isMaduraiPage ? (
          <MaduraiWebDevPage
            onOpenPortfolio={() => setShowAllProjects(true)}
            onNavigate={handleNavigate}
          />
        ) : (
          <HomePage
            onOpenPortfolio={() => setShowAllProjects(true)}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      <Footer
        onOpenPolicy={(type) => setActivePolicy(POLICIES[type])}
        onNavigate={handleNavigate}
      />

      <PolicyModal
        isOpen={!!activePolicy}
        onClose={() => setActivePolicy(null)}
        title={activePolicy?.title || ''}
        content={activePolicy?.content || ''}
      />

      <ProjectsModal
        isOpen={showAllProjects}
        onClose={() => setShowAllProjects(false)}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 bg-white text-slate-900 rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all ring-1 ring-slate-100 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp size={28} />
          </motion.button>
        )}
        <a
          href="https://wa.me/919363021664"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-600 transition-all transform hover:scale-110 cursor-pointer"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
}
