import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const RESTAURANTS = [
  {
    id: 1,
    name: 'Le Manguier',
    type: 'Restaurant gastronomique',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-le-manguier-800x533-1.jpeg',
    description: 'Cuisine raffinée alliant saveurs locales et gastronomie internationale.',
  },
  {
    id: 2,
    name: 'Jardin de l\'Océan',
    type: 'Restaurant · terrasse',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-jardin-de-locean-2-800x533-1.jpeg',
    description: 'Face à l\'Atlantique, une expérience culinaire sous les étoiles.',
  },
  {
    id: 3,
    name: 'Dizzy Bar',
    type: 'Bar à jazz',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-dizzy-bar-800x533-1.jpeg',
    description: 'Ambiance jazz authentique et cocktails signature.',
  },
  {
    id: 4,
    name: 'Lounge Bar',
    type: 'Salon · après-midi',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/11-800x533-1.jpeg',
    description: 'Un havre de tranquillité pour vos moments de détente.',
  },
];

const Dining = () => {
  return (
    <section id="restauration" className="relative py-24 lg:py-32 px-4 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <div className="eyebrow text-royal-gold mb-4">Restauration & Bars</div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-foreground">
            Art culinaire et <span className="italic gold-text">convivialité</span>
          </h2>
        </motion.div>

        {/* Grille de restaurants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {RESTAURANTS.map((restaurant, idx) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group"
            >
              {/* Image */}
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
              </div>

              {/* Contenu */}
              <div className="space-y-3">
                <div className="eyebrow text-royal-gold text-xs">{restaurant.type}</div>
                <h3 className="font-display text-2xl font-light text-foreground">
                  {restaurant.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {restaurant.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lien vers page complète */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <Link
            to="/restauration"
            className="inline-flex items-center gap-2 text-royal-gold hover:text-yellow-500 transition-colors font-light"
          >
            Voir tous les restaurants
            <ChevronRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Dining;