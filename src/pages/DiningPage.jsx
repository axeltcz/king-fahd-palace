import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import RestaurantBlock from '../components/kfp/RestaurantBlock';

const RESTAURANTS_DETAILED = [
  {
    id: 1,
    name: 'Le Manguier',
    type: 'Restaurant gastronomique',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-le-manguier-800x533-1.jpeg',
    description: 'Nos chefs mettent leur savoir-faire au service d\'une expérience culinaire unique, sublimant les produits locaux avec des techniques inspirées des plus grandes tables internationales. Le Manguier incarne l\'excellence gastronomique du King Fahd Palace.',
    hours: 'Ouvert tous les jours de 7h à 23h',
    signature: 'Poulpe rôti au four traditionnels avec sauce caramelle et citron frais',
  },
  {
    id: 2,
    name: 'Jardin de l\'Océan',
    type: 'Restaurant · terrasse',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-jardin-de-locean-2-800x533-1.jpeg',
    description: 'Face à l\'Atlantique, laissez-vous enchanter par une cuisine raffinée dans un cadre unique. Les fruits de mer frais, la créativité du chef et la douceur des brises marées font du Jardin de l\'Océan un lieu inoubliable.',
    hours: 'Petit-déjeuner 7h-11h | Déjeuner 12h-15h | Dîner 19h-23h',
    signature: 'Homard grillé avec risotto aux crevettes et sauce miso',
  },
  {
    id: 3,
    name: 'Dizzy Bar',
    type: 'Bar à jazz',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-dizzy-bar-800x533-1.jpeg',
    description: 'Ambiance jazz authentique, cocktails signature et atmosphère intimiste. Le Dizzy Bar est le cœur battant de la vie nocturne du King Fahd Palace, où la musique et les saveurs se rencontrent.',
    hours: '17h-02h (Fermeture lundi)',
    signature: 'Mojito Teranga avec rhum blanc et herbes locales',
  },
  {
    id: 4,
    name: 'Lounge Bar',
    type: 'Salon · après-midi',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/11-800x533-1.jpeg',
    description: 'Un havre de tranquillité pour vos moments de détente. Tea time anglais, cocktails légers et ambiance feutrée font du Lounge Bar le refuge idéal après une journée chargée.',
    hours: '14h-23h (Espace réservé clients)',
    signature: 'Thé blanc au jasmin avec pâtisseries maison',
  },
];

const DiningPage = () => {
  return (
    <>
      {/* Hero section */}
      <section className="relative w-full h-96 overflow-hidden pt-32">
        <img
          src="https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-le-manguier-800x533-1.jpeg"
          alt="Restauration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/60 to-obsidian" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-foreground mb-4">
              Restauration & <span className="italic gold-text">Bars</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Un voyage culinaire dans l'excellence gastronomique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="relative py-0 px-4 bg-obsidian">
        <div className="max-w-5xl mx-auto">
          {/* Lien retour */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="pt-12 mb-6"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-royal-gold transition-colors"
            >
              <ChevronLeft size={18} />
              Retour à l'accueil
            </Link>
          </motion.div>

          {/* RestaurantBlocks */}
          {RESTAURANTS_DETAILED.map((restaurant, idx) => (
            <RestaurantBlock
              key={restaurant.id}
              restaurant={restaurant}
              index={idx}
              isEven={idx % 2 === 0}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default DiningPage;