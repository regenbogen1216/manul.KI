import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

export const Blog = () => {
  return (
    <section id="blog" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Kulinarischer Blog</h2>
          <p className="text-brand-ink/60 max-w-2xl mx-auto italic text-lg">
            Gedanken über Essen, Regionalität und den Alltag eines Kochs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-8 items-center group"
            >
              <div className="aspect-square rounded-[40px] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-olive mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Tag size={12} /> {post.category}</span>
                </div>
                <h3 className="text-3xl font-serif mb-4 leading-tight group-hover:text-brand-olive transition-colors">
                  {post.title}
                </h3>
                <p className="text-brand-ink/60 text-sm mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all">
                  Weiterlesen <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
