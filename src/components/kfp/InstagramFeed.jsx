import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/06/King-Fahd-Palace-Hotel-Dakar-Exterior.jpeg',
    alt: 'Façade du palace',
  },
  {
    id: 2,
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2021/12/f168c741-b57a-4f33-8719-a6588b2d1f8a.jpeg',
    alt: 'Chambre Supérieure',
  },
  {
    id: 3,
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-le-manguier-800x533-1.jpeg',
    alt: 'Restaurant Le Manguier',
  },
  {
    id: 4,
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-jardin-de-locean-2-800x533-1.jpeg',
    alt: 'Jardin de l\'Océan',
  },
  {
    id: 5,
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-dizzy-bar-800x533-1.jpeg',
    alt: 'Dizzy Bar',
  },
  {
    id: 6,
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-hotel-loisirs-800x533-1.jpeg',
    alt: 'Loisirs et bien-être',
  },
];

const InstagramFeed = () => {
  return (
    <section className="relative py-24 lg:py-32 px-4 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <div className="eyebrow text-royal-gold mb-4">Instagram</div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-foreground">
            Suivez-nous sur <span className="italic gold-text">@KingFahdPalace</span>
          </h2>
        </motion.div>

        {/* Grille Instagram */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-obsidian/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="w-8 h-8 text-royal-gold" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bouton suivre */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <a
            href="https://www.instagram.com/kingfahdpalace/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-royal-gold to-yellow-600 text-obsidian font-medium rounded-sm hover:opacity-90 transition-opacity"
          >
            <Instagram size={18} />
            Suivre
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;