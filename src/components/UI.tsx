import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export const SectionHeader = ({
  title,
  subtitle,
  centered = true
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) => (
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

export const FAQItem = ({
  question,
  answer
}: {
  question: string;
  answer: string;
  key?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden mb-4 transition-all hover:border-blue-200 shadow-sm">
      <button
        className="w-full p-6 text-left flex justify-between items-center bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-lg text-slate-900">{question}</span>
        {isOpen ? <Minus className="text-blue-600 flex-shrink-0" /> : <Plus className="text-blue-600 flex-shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6 bg-white"
          >
            <p className="text-slate-600 leading-relaxed pt-2 border-t border-slate-50">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
