import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, Youtube, Instagram, Facebook } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Über mich', href: '#about' },
    { name: 'Rezepte', href: '#recipes' },
    { name: 'Blog', href: '#blog' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-3xl font-serif font-bold tracking-tight">MANUL</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest font-medium hover:text-brand-olive transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:067762409910" 
            className="bg-brand-olive text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Phone size={14} /> 0677 62409910
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-cream border-t border-brand-olive/10 p-6 md:hidden flex flex-col space-y-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif italic hover:text-brand-olive transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-brand-olive/10 flex flex-col space-y-3">
              <a href="tel:067762409910" className="flex items-center gap-3 text-brand-olive">
                <Phone size={18} /> 0677 62409910
              </a>
              <a href="mailto:be@manul.at" className="flex items-center gap-3 text-brand-olive">
                <Mail size={18} /> be@manul.at
              </a>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-brand-olive"><Instagram size={20} /></a>
                <a href="#" className="text-brand-olive"><Facebook size={20} /></a>
                <a href="#" className="text-brand-olive"><Youtube size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
