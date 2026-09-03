import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import RoomBlock from '../components/kfp/RoomBlock';

const ROOMS_DETAILED = [
  {
    id: 'superieure',
    name: 'Chambre Supérieure',
    surface: 28,
    occupancy: '1 adulte · 1 enfant',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2021/12/f168c741-b57a-4f33-8719-a6588b2d1f8a.jpeg',
    description: 'Notre chambre supérieure offre tout le confort nécessaire pour un séjour agréable. Avec une surface de 28 m², elle dispose d\'une literie premium, d\'une salle de bain spacieuse et d\'une vue dégagée. Idéale pour les voyageurs en quête de tranquillité.',
  },
  {
    id: 'deluxe',
    name: 'Chambre Deluxe',
    surface: 42,
    occupancy: '3 adultes · 2 enfants',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2021/12/chambre-superieur-4.jpeg',
    description: 'Élégance et confort réunis. Cette chambre de 42 m² offre une vue panoramique sur la ville, un espace de vie spacieux et des services haut de gamme. Parfaite pour une famille ou un séjour de prestige.',
  },
  {
    id: 'executive',
    name: 'Chambre Exécutive',
    surface: 33,
    occupancy: '2 adultes',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2021/12/suite-junior-salon.jpeg',
    description: 'Dédiée aux voyageurs d\'affaires et aux couples, cette chambre associe l\'efficacité à l\'hospitalité. Avec 33 m² bien agencés, elle propose un espace de travail équipé et des services de concierge haut de gamme.',
  },
  {
    id: 'junior',
    name: 'Suite Junior',
    surface: 95,
    occupancy: '4 adultes',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2021/12/8.jpeg',
    description: 'Vaste et luxueuse, cette suite de 95 m² dispose d\'une chambre à coucher séparée, d\'un salon et d\'une terrasse privée. Préfecture d\'hospitalité pour les séjours de prestige et les célébrations.',
  },
  {
    id: 'presidential',
    name: 'Suite Présidentielle',
    surface: 250,
    occupancy: 'Résidence d\'État',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2021/12/OK_IMG_7015-copy-1024x683-1.jpeg',
    description: 'L\'apothéose du luxe : cette résidence de 250 m² dispose de multiples espaces, d\'une cuisine privée, d\'un espace de réunion et de terrasses spectaculaires. Réservée aux haut dignitaires et aux hôtes de prestige.',
  },
];

const RoomsPage = () => {
  return (
    <>
      {/* Hero section */}
      <section className="relative w-full h-96 overflow-hidden pt-32">
        <img
          src="https://www.kingfahdpalacehotels.com/wp-content/uploads/2021/12/f168c741-b57a-4f33-8719-a6588b2d1f8a.jpeg"
          alt="Chambres"
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
              Chambres & <span className="italic gold-text">Suites</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Découvrez nos hébergements pensés pour votre confort absolu
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

          {/* RoomBlocks */}
          {ROOMS_DETAILED.map((room, idx) => (
            <RoomBlock key={room.id} room={room} index={idx} />
          ))}
        </div>
      </section>
    </>
  );
};

export default RoomsPage;