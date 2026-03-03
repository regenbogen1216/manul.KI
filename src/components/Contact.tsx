import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-olive text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif mb-10">Lassen Sie uns <br /><span className="italic">gemeinsam genießen.</span></h2>
            <p className="text-white/70 text-lg mb-12 max-w-md leading-relaxed">
              Haben Sie Fragen zu meinen Services oder möchten Sie ein unverbindliches Angebot für Ihr nächstes Event? Ich freue mich auf Ihre Nachricht.
            </p>

            <div className="space-y-8">
              <a href="tel:067762409910" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-olive transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Telefon</p>
                  <p className="text-2xl font-serif">0677 62409910</p>
                </div>
              </a>

              <a href="mailto:be@manul.at" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-olive transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1">E-Mail</p>
                  <p className="text-2xl font-serif">be@manul.at</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Region</p>
                  <p className="text-2xl font-serif">Steiermark & Österreichweit</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-16">
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-olive transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-olive transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-olive transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[48px] text-brand-ink"
          >
            <h3 className="text-3xl font-serif mb-8">Anfrage senden</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Name</label>
                  <input type="text" className="w-full border-b border-brand-ink/10 py-2 focus:border-brand-olive outline-none transition-colors" placeholder="Ihr Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">E-Mail</label>
                  <input type="email" className="w-full border-b border-brand-ink/10 py-2 focus:border-brand-olive outline-none transition-colors" placeholder="ihre@mail.at" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Anlass</label>
                <select className="w-full border-b border-brand-ink/10 py-2 focus:border-brand-olive outline-none transition-colors bg-transparent">
                  <option>Privatkoch Dinner</option>
                  <option>Catering</option>
                  <option>Consulting</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Nachricht</label>
                <textarea rows={4} className="w-full border-b border-brand-ink/10 py-2 focus:border-brand-olive outline-none transition-colors resize-none" placeholder="Wie kann ich Ihnen helfen?"></textarea>
              </div>
              <button className="w-full bg-brand-olive text-white py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-opacity-90 transition-all">
                Nachricht abschicken
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
    </section>
  );
};
