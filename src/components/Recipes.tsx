import React from 'react';
import { motion } from 'motion/react';
import { RECIPES } from '../constants';
import { Clock, ChefHat, ArrowRight } from 'lucide-react';

export const Recipes = () => {
  return (
    <section id="recipes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-serif mb-6">Meine Rezepte</h2>
            <p className="text-brand-ink/60 italic text-lg">
              Kochen Sie meine liebsten Gerichte zu Hause nach. Von steirischen Klassikern bis zu modernen Kreationen.
            </p>
          </div>
          <button className="text-brand-olive font-bold flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest text-sm">
            Alle Rezepte <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {RECIPES.map((recipe) => (
            <motion.div
              key={recipe.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden mb-6 relative">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  <ChefHat size={14} /> {recipe.difficulty}
                </div>
              </div>
              <div className="flex items-center gap-4 text-brand-olive text-xs font-bold uppercase tracking-widest mb-3">
                <span className="flex items-center gap-1"><Clock size={14} /> {recipe.prepTime}</span>
              </div>
              <h3 className="text-3xl font-serif mb-3 group-hover:text-brand-olive transition-colors">{recipe.title}</h3>
              <p className="text-brand-ink/60 text-sm line-clamp-2 leading-relaxed">
                {recipe.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
