import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#D4AF37]/20 pt-20 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-cormorant-garamond text-white mb-4">King Fahd Palace</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Un havre de luxe et de raffinement, alliant tradition et modernité au cœur de la ville.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-instrument-sans font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Accueil', 'Chambres', 'Restauration', 'Teranga', 'Diplomatie', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase().replace(/é/g, 'e').replace(/ç/g, 'c')}`}
                      className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-instrument-sans font-semibold mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="text-gray-500 text-sm">Avenue Royale, Dakar, Sénégal</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                <a href="tel:+221331339000" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm">
                  +221 33 133 9000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                <a
                  href="mailto:contact@kingfahdpalace.com"
                  className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  contact@kingfahdpalace.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-instrument-sans font-semibold mb-6">
              Nous Suivre
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: 'https://facebook.com/kingfahdpalacehotels', label: 'Facebook' },
                { icon: Instagram, href: 'https://instagram.com/kingfahdpalacehotels', label: 'Instagram' },
                { icon: Twitter, href: 'https://twitter.com/kingfahdpalace', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-gray-500 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#D4AF37]/10 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600"
          >
            <p>© 2026 King Fahd Palace. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Conditions d\'utilisation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}