import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Was Gäste sagen</h2>
          <p className="text-brand-ink/60 italic text-lg">Echte Erlebnisse von zufriedenen Kunden.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm relative"
            >
              <Quote className="text-brand-olive/10 absolute top-8 right-8" size={60} />
              <p className="text-brand-ink/70 italic mb-8 relative z-10">"{t.text}"</p>
              <div>
                <p className="font-serif text-xl">{t.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-olive font-bold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
