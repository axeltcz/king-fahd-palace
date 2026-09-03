import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import EventBlock from '../components/kfp/EventBlock';

const EVENTS_DETAILED = [
  {
    id: 1,
    name: 'Soirées Jazz de Dakar',
    category: 'Musique',
    location: 'Dizzy Bar',
    date: 'Tous les vendredis',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-dizzy-bar-800x533-1.jpeg',
    description: 'Découvrez une soirée jazz authentique avec les meilleurs musiciens du Sénégal. Entre improvisation et maitrise, récits d\'histoires musicales et rhum vieux, le Dizzy Bar devient le cœur vibrant d\'une culture artistique vivante. Réservez votre table pour une expérience immersive.',
  },
  {
    id: 2,
    name: 'Sommet Diplomatique de l\'UMOA',
    category: 'Diplomatie',
    location: 'Grand amphithéâtre',
    date: '12-14 Octobre 2026',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/06/King-Fahd-Palace-Hotel-Dakar-Exterior.jpeg',
    description: 'Une plateforme pour les leaders de l\'Union Monétaire Ouest-Africaine. Le King Fahd Palace accueille chaque année les hauts représentants de l\'UMOA pour débattre de la stabilité économique régionale. Infrastructures souveraines et sécurité maximale.',
  },
  {
    id: 3,
    name: 'Exposition Teranga d\'Art',
    category: 'Arts',
    location: 'Galerie du Palais',
    date: '1er-30 Novembre 2026',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-le-manguier-800x533-1.jpeg',
    description: 'Célébration de l\'art sénégalais contemporain et traditionnel. La Galerie du Palais met en lumière les créateurs qui redessinent les contours de l\'identité culturelle africaine. Vernissage le 1er novembre à 18h.',
  },
  {
    id: 4,
    name: 'Gala de la Fondation',
    category: 'Célébration',
    location: 'Grand Ballroom',
    date: '15 Décembre 2026',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-jardin-de-locean-2-800x533-1.jpeg',
    description: 'Une soirée d\'excellence et de prestige au cœur du palace. Le Gala annuel de la Fondation réunit chefs d\'État, philanthropes et personnalités pour soutenir l\'éducation en Afrique de l\'Ouest. Dress code : tenue de gala.',
  },
  {
    id: 5,
    name: 'Salon de la Mode Sénégalaise',
    category: 'Mode',
    location: 'Jardin de l\'Océan',
    date: '20-22 Janvier 2027',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/11-800x533-1.jpeg',
    description: 'Mettez en avant les créateurs de mode sénégalais de renommée internationale. Cette prestigieuse plateforme permet aux design africains de rayonner sur la scène mondiale. Défilés, ateliers et rencontres avec les créateurs.',
  },
  {
    id: 6,
    name: 'Récital de Kora',
    category: 'Musique',
    location: 'Lounge Bar',
    date: '1er jeudi du mois',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-hotel-loisirs-800x533-1.jpeg',
    description: 'Une performance intime de l\'instrument traditionnel sénégalais par excellence. La kora, cette "harpe" ancienne aux 21 cordes, résonne entre les murs du Lounge Bar pour raconter les contes de la Teranga. Atmosphère méditative et sensorielle.',
  },
];

const TerangaPage = () => {
  return (
    <>
      {/* Hero section */}
      <section className="relative w-full h-96 overflow-hidden pt-32">
        <img
          src="https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-dizzy-bar-800x533-1.jpeg"
          alt="Teranga"
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
              Le calendrier <span className="italic gold-text">culturel</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Dirigée par la Teranga sénégalaise, chaque événement raconte une histoire
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

          {/* EventBlocks */}
          {EVENTS_DETAILED.map((event, idx) => (
            <EventBlock
              key={event.id}
              event={event}
              index={idx}
              isEven={idx % 2 === 0}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default TerangaPage;