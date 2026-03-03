import React from 'react';
import { Youtube, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-brand-cream border-t border-brand-olive/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-serif font-bold tracking-tight">MANUL</div>
        
        <div className="flex gap-6">
          <a href="#" className="text-brand-ink/40 hover:text-brand-olive transition-colors"><Instagram size={18} /></a>
          <a href="#" className="text-brand-ink/40 hover:text-brand-olive transition-colors"><Facebook size={18} /></a>
          <a href="#" className="text-brand-ink/40 hover:text-brand-olive transition-colors"><Youtube size={18} /></a>
        </div>

        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-ink/40">
          <a href="#" className="hover:text-brand-olive transition-colors">Impressum</a>
          <a href="#" className="hover:text-brand-olive transition-colors">Datenschutz</a>
          <a href="#" className="hover:text-brand-olive transition-colors">AGB</a>
        </div>

        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-ink/40">
          © {new Date().getFullYear()} Manul Kulinarik. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};
