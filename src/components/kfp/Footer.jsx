import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire:', contactForm);
    alert('Formulaire de contact non câblé pour le moment');
  };

  return (
    <footer id="contact" className="relative bg-obsidian border-t border-border pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="font-display text-2xl font-light text-foreground mb-6">Contactez-nous</h3>
            <p className="text-muted-foreground mb-6">Notre équipe est à votre écoute pour toute demande d'information ou de réservation.</p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={contactForm.name}
                onChange={handleFormChange}
                className="w-full bg-muted border border-border px-4 py-3 rounded-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-royal-gold"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={contactForm.email}
                onChange={handleFormChange}
                className="w-full bg-muted border border-border px-4 py-3 rounded-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-royal-gold"
              />
              <textarea
                name="message"
                placeholder="Votre message"
                value={contactForm.message}
                onChange={handleFormChange}
                rows="5"
                className="w-full bg-muted border border-border px-4 py-3 rounded-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-royal-gold resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-royal-gold to-yellow-600 text-obsidian font-semibold py-3 rounded-sm hover:opacity-90 transition-opacity"
              >
                Envoyer
              </button>
            </form>
          </motion.div>

          {/* Infos de contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-light text-foreground mb-6">Coordonnées</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-royal-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground">Route des Almadies</p>
                    <p className="text-foreground">B.P. 8181, Dakar · Sénégal</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-royal-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground">+221 33 869 69 69</p>
                    <p className="text-foreground">+221 78 116 75 75</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-royal-gold flex-shrink-0 mt-1" />
                  <p className="text-foreground">reservation.dakar@kingfahdpalacehotels.com</p>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className="font-display text-lg font-light text-foreground mb-4">Nous suivre</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/kingfahdpalace/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-obsidian transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/KingFahdPalace/?locale=fr_FR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-obsidian transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://x.com/KINGFAHDPALACE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-obsidian transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="hairline my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-royal-gold to-yellow-600 rounded-full flex items-center justify-center">
              <span className="font-display text-xs font-bold text-obsidian">KF</span>
            </div>
            <span className="font-display text-sm text-foreground">King Fahd Palace</span>
          </div>
          <div className="flex gap-8 flex-wrap justify-center lg:justify-end">
            <a href="#" className="eyebrow text-muted-foreground hover:text-royal-gold transition-colors">Accueil</a>
            <a href="/chambres" className="eyebrow text-muted-foreground hover:text-royal-gold transition-colors">Chambres</a>
            <a href="/restauration" className="eyebrow text-muted-foreground hover:text-royal-gold transition-colors">Restauration</a>
            <a href="/diplomatie" className="eyebrow text-muted-foreground hover:text-royal-gold transition-colors">Diplomatie</a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 King Fahd Palace. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;