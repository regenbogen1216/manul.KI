import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Was ich für Sie tue</h2>
          <p className="text-brand-ink/60 max-w-2xl mx-auto italic text-lg">
            Ob intimes Dinner oder großes Event – ich biete maßgeschneiderte kulinarische Lösungen für jeden Anlass.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-[40px] border border-brand-olive/10 hover:border-brand-olive/30 hover:shadow-xl transition-all group bg-brand-cream/30"
              >
                <div className="w-14 h-14 bg-brand-olive/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-olive group-hover:text-white transition-colors">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-brand-ink/70 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
