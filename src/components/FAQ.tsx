import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-serif mb-16 text-center">Häufige Fragen</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border-b border-brand-olive/10">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <span className="text-xl font-serif group-hover:text-brand-olive transition-colors">{faq.question}</span>
                {activeIndex === index ? <Minus size={20} className="text-brand-olive" /> : <Plus size={20} className="text-brand-olive" />}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-brand-ink/60 leading-relaxed italic">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
