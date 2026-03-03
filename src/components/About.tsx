import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  const experiences = [
    'Fine Dining & Gourmet-Küche',
    'Steirische & Österreichische Klassiker',
    'Internationale Kulinarik',
    'Catering & Großveranstaltungen',
    'Schulkantinen & Gemeinschaftsverpflegung',
    'À-la-carte & Kantinen-Management'
  ];

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pill-image h-[400px] mt-12 overflow-hidden shadow-lg"
            >
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600" alt="Fresh ingredients" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pill-image h-[400px] overflow-hidden shadow-lg"
            >
              <img src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600" alt="Cooking process" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-olive rounded-full flex items-center justify-center text-white text-center p-4 shadow-2xl rotate-12">
            <p className="font-serif italic text-lg">Über 15 Jahre Erfahrung</p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-8">Vom Fine Dining <br /><span className="italic">zur steirischen Seele.</span></h2>
          <p className="text-lg text-brand-ink/70 mb-8 leading-relaxed">
            Mein Name ist Manul, und meine Leidenschaft gehört der ehrlichen, geschmackvollen Küche. Ob in der gehobenen Gastronomie oder bei der Verpflegung von Schulkindern – Qualität und Regionalität stehen für mich an erster Stelle.
          </p>
          <p className="text-lg text-brand-ink/70 mb-10 leading-relaxed">
            Ich verbinde die Präzision des Fine Dinings mit der Bodenständigkeit der steirischen Küche. Mein Ziel ist es, jeden Gast mit authentischen Aromen und handwerklicher Perfektion zu begeistern.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {experiences.map((exp) => (
              <div key={exp} className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-olive shrink-0" size={20} />
                <span className="font-medium text-sm">{exp}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
