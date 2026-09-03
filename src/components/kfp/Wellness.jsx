import React from 'react';
import { motion } from 'framer-motion';
import { Spa, Dumbbell, Waves, Heart } from 'lucide-react';

const PILLARS = [
  {
    id: 1,
    name: 'Spa & Hammam',
    icon: Spa,
    description: 'Sérénité et revitalisation au cœur du palace.',
  },
  {
    id: 2,
    name: 'Espace Fitness',
    icon: Dumbbell,
    description: 'Équipements de pointe et coaching personnalisé.',
  },
  {
    id: 3,
    name: '4 Piscines Privées',
    icon: Waves,
    description: 'Baignade et détente face à l\'Océan Atlantique.',
  },
  {
    id: 4,
    name: 'Banquets & Mariages',
    icon: Heart,
    description: 'Célébrez vos moments précieux en toute élégance.',
  },
];

const Wellness = () => {
  return (
    <section id="bien-etre" className="relative py-24 lg:py-32 px-4 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <div className="eyebrow text-royal-gold mb-4">Bien-être & Loisirs</div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-foreground">
            Quatre piliers de <span className="italic gold-text">sérénité</span>
          </h2>
        </motion.div>

        {/* Image loisirs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative h-80 lg:h-96 rounded-lg overflow-hidden mb-16 group"
        >
          <img
            src="https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-hotel-loisirs-800x533-1.jpeg"
            alt="Bien-être et loisirs"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
        </motion.div>

        {/* Grille de piliers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true, margin: '-100px' }}
                className="bg-muted rounded-lg p-6 border border-border hover:border-royal-gold transition-colors group"
              >
                <Icon className="w-8 h-8 text-royal-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg font-light text-foreground mb-2">
                  {pillar.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Wellness;