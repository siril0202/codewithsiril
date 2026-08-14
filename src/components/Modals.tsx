import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { PORTFOLIO } from '../constants';

export const PolicyModal = ({
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
                className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-brand-blue hover:text-white transition-all cursor-pointer"
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
              className="bg-brand-dark text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-brand-blue transition-all cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export const ProjectsModal = ({
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
              className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-500 hover:bg-brand-blue hover:text-white transition-all shadow-sm group hover:-rotate-90 cursor-pointer"
            >
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PORTFOLIO.map((item, index) => {
                const hasLink = item.link && item.link !== '#';
                const CardWrapper = (hasLink ? 'a' : 'div') as 'a' | 'div';
                const wrapperProps = hasLink
                  ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
                  : {};

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="w-full h-full"
                  >
                    <CardWrapper
                      {...wrapperProps}
                      className={`block relative rounded-[2rem] overflow-hidden shadow-premium aspect-[4/3] group ${
                        hasLink ? 'cursor-pointer' : 'cursor-default'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <span className="text-brand-blue font-black text-[10px] uppercase tracking-[0.3em] mb-2">
                          {item.category}
                        </span>
                        <h4 className="text-white text-xl font-bold mb-4">{item.title}</h4>
                        <div className="flex items-center gap-4">
                          {hasLink ? (
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-white text-white hover:text-brand-dark rounded-xl font-bold text-[10px] tracking-widest uppercase shadow-glow hover:scale-105 active:scale-95 duration-300 transition-all">
                              Live Demo
                              <ExternalLink size={12} strokeWidth={2.5} />
                            </span>
                          ) : (
                            <div className="flex items-center gap-2 text-white/60 text-[10px] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                              View Details <ArrowRight size={12} />
                            </div>
                          )}
                        </div>
                      </div>
                    </CardWrapper>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="p-8 bg-slate-50/80 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm font-medium">Ready to start your own success story?</p>
            <button
              onClick={() => {
                onClose();
                const contactEl = document.getElementById('contact');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '#contact';
                }
              }}
              className="bg-brand-blue text-white px-10 py-4 rounded-2xl font-black tracking-widest text-xs hover:bg-brand-dark transition-all shadow-glow uppercase cursor-pointer"
            >
              Launch Your Project Now
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);
