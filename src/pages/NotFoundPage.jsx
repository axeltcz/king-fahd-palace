import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center px-4 bg-obsidian overflow-hidden pt-16">
      <div className="max-w-2xl w-full text-center">
        {/* Monogramme */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block font-display text-7xl font-light text-royal-gold">404</div>
        </motion.div>

        {/* Titre */}
        <motion.h1
          className="font-display text-[clamp(2rem,5vw,4rem)] font-light text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Page non trouvée
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </motion.p>

        {/* Lien retour */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-royal-gold to-yellow-600 text-obsidian font-semibold rounded-sm hover:opacity-90 transition-opacity"
          >
            <ChevronLeft size={18} />
            Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;