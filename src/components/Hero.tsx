import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-olive font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
            Privatkoch • Catering • Consulting
          </span>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-light leading-[0.9] mb-8">
            Kulinarik mit <br />
            <span className="italic">Herz & Seele.</span>
          </h1>
          <p className="text-lg text-brand-ink/70 max-w-md mb-10 leading-relaxed">
            Von steirischer Tradition bis zum Fine Dining – ich bringe erstklassige Gastronomie direkt zu Ihnen. Erfahren, leidenschaftlich und authentisch.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-brand-olive text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center gap-2 group"
            >
              Jetzt anfragen <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="border border-brand-olive/30 px-8 py-4 rounded-full font-medium hover:bg-brand-olive hover:text-white transition-all"
            >
              Meine Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="pill-image w-full aspect-[3/4] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
              alt="Chef hands plating food" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-xl hidden lg:block max-w-[240px]">
            <p className="font-serif italic text-xl mb-2">"Kochen ist Handwerk, Genuss ist Kunst."</p>
            <p className="text-xs uppercase tracking-widest text-brand-olive font-bold">— Chef Manul</p>
          </div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-brand-olive/5 rounded-l-full -z-10 blur-3xl" />
    </section>
  );
};
