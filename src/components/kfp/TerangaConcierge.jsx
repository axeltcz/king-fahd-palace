import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EVENTS = [
  {
    id: 1,
    name: 'Soirées Jazz de Dakar',
    category: 'Musique',
    location: 'Dizzy Bar',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-dizzy-bar-800x533-1.jpeg',
    description: 'Découvrez une soirée jazz authentique avec les meilleurs musiciens du Sénégal.',
  },
  {
    id: 2,
    name: 'Sommet Diplomatique de l\'UMOA',
    category: 'Diplomatie',
    location: 'Grand amphithéâtre',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/06/King-Fahd-Palace-Hotel-Dakar-Exterior.jpeg',
    description: 'Une plateforme pour les leaders de l\'Union Monétaire Ouest-Africaine.',
  },
  {
    id: 3,
    name: 'Exposition Teranga d\'Art',
    category: 'Arts',
    location: 'Galerie du Palais',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-le-manguier-800x533-1.jpeg',
    description: 'Célébration de l\'art sénégalais contemporain et traditionnel.',
  },
  {
    id: 4,
    name: 'Gala de la Fondation',
    category: 'Célébration',
    location: 'Grand Ballroom',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-palace-jardin-de-locean-2-800x533-1.jpeg',
    description: 'Une soirée d\'élégance et de prestige au cœur du palace.',
  },
  {
    id: 5,
    name: 'Salon de la Mode Sénégalaise',
    category: 'Mode',
    location: 'Jardin de l\'Océan',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/11-800x533-1.jpeg',
    description: 'Mettez en avant les créateurs de mode sénégalais de renommée internationale.',
  },
  {
    id: 6,
    name: 'Récital de Kora',
    category: 'Musique',
    location: 'Lounge Bar',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/03/king-fahd-hotel-loisirs-800x533-1.jpeg',
    description: 'Une performance intime de l\'instrument traditionnel sénégalais.',
  },
];

const TerangaConcierge = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  React.useEffect(() => {
    checkScroll();
    scrollContainerRef.current?.addEventListener('scroll', checkScroll);
    return () => scrollContainerRef.current?.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <section id="teranga" className="relative py-24 lg:py-32 px-4 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <div className="eyebrow text-royal-gold mb-4">Teranga Concierge</div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-foreground">
            Le calendrier <span className="italic gold-text">culturel</span>
          </h2>
        </motion.div>

        {/* Carrousel avec contrôles */}
        <div className="relative">
          {/* Boutons flèches */}
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-obsidian to-transparent p-3 text-royal-gold hover:text-yellow-500 transition-colors hidden lg:flex"
            >
              <ChevronLeft size={32} />
            </motion.button>
          )}

          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-l from-obsidian to-transparent p-3 text-royal-gold hover:text-yellow-500 transition-colors hidden lg:flex"
            >
              <ChevronRight size={32} />
            </motion.button>
          )}

          {/* Carrousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {EVENTS.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[78vw] sm:w-[420px] group"
              >
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent" />

                  {/* Badge catégorie */}
                  <div className="absolute top-4 left-4">
                    <div className="glass px-3 py-1 rounded-sm">
                      <span className="eyebrow text-royal-gold text-xs">{event.category}</span>
                    </div>
                  </div>

                  {/* Numéro filigrane */}
                  <div className="absolute top-4 right-4 font-display text-5xl font-light text-royal-gold opacity-30">
                    0{event.id}
                  </div>

                  {/* Contenu en bas */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-light text-foreground mb-2">
                      {event.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 group-hover:opacity-100 transition-opacity opacity-0 group-hover:opacity-100 max-h-16 overflow-hidden">
                      {event.description}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      📍 {event.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lien vers page complète */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-12"
        >
          <Link
            to="/teranga"
            className="inline-flex items-center gap-2 text-royal-gold hover:text-yellow-500 transition-colors font-light"
          >
            Voir le calendrier complet
            <ChevronRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TerangaConcierge;