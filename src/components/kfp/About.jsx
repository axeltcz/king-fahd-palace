import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="palais" className="relative py-24 lg:py-32 px-4 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Colonne gauche : texte */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          <div className="eyebrow text-royal-gold">Le Palais</div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-tight text-foreground">
            Depuis son inauguration en <span className="italic gold-text">1991</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Depuis son inauguration en 1991, le King Fahd Palace s'est bâti une réputation d'excellence dans le monde entier. Posé sur 35 hectares de parc paysager face à l'Océan Atlantique, il est la référence indiscutable de l'Afrique de l'Ouest pour les réunions, conférences et célébrations souveraines.
          </p>
          <div className="pt-4 border-t border-border">
            <p className="italic text-royal-gold font-light text-lg">
              « La Teranga sénégalaise, élevée au rang d'art diplomatique. »
            </p>
          </div>
        </motion.div>

        {/* Colonne droite : image avec overlay */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden group"
        >
          <img
            src="https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/06/King-Fahd-Palace-Hotel-Dakar-Exterior.jpeg"
            alt="King Fahd Palace Façade"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay année d'inauguration */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/40 to-transparent flex items-end justify-center pb-8">
            <div className="glass px-6 py-4 rounded-lg text-center">
              <div className="font-display text-4xl font-light text-royal-gold">1991</div>
              <div className="eyebrow text-muted-foreground mt-1">Année d'inauguration</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;