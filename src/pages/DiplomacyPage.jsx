import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Plus, Minus } from 'lucide-react';

const CONFIGURATIONS = [
  { name: 'Théâtre', capacity: 700, description: 'Présentations et discours' },
  { name: 'Banquet', capacity: 500, description: 'Repas assis' },
  { name: 'Classe', capacity: 300, description: 'Ateliers et formations' },
  { name: 'Cocktail', capacity: 1000, description: 'Réception debout' },
  { name: 'Salon en U', capacity: 80, description: 'Discussions conférences' },
  { name: 'Exposition', capacity: 6000, description: 'Grand format' },
];

const SPACES = [
  { name: 'Grand Amphithéâtre', capacity: 700, description: 'Principal espace de conférences' },
  { name: 'Petit Amphithéâtre', capacity: 120, description: 'Réunions intimes' },
  { name: 'Salles Jumelles', capacity: 2000, description: '2 espaces de 1000 m² chacun' },
  { name: '66 Salles', capacity: 500, description: 'Ateliers et breakout rooms' },
];

const DiplomacyPage = () => {
  const [capacity, setCapacity] = useState(500);

  const currentTier = [
    { min: 0, max: 0, label: 'Salle vide', note: 'Préparation' },
    { min: 1, max: 250, label: 'Conseil privé', note: 'Intimité' },
    { min: 251, max: 500, label: 'Conférence', note: 'Officiel' },
    { min: 501, max: 750, label: 'Gala', note: 'Prestige' },
    { min: 751, max: 1000, label: 'Sommet plénier', note: 'Souverain' },
  ].find((tier) => capacity >= tier.min && capacity <= tier.max);

  const incrementCapacity = () => {
    setCapacity((prev) => Math.min(prev + 50, 1000));
  };

  const decrementCapacity = () => {
    setCapacity((prev) => Math.max(prev - 50, 0));
  };

  const filledSeats = Math.round((capacity / 1000) * 120);

  return (
    <>
      {/* Hero section */}
      <section className="relative w-full h-96 overflow-hidden pt-32">
        <img
          src="https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/06/King-Fahd-Palace-Hotel-Dakar-Exterior.jpeg"
          alt="Diplomatie"
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
              Le centre <span className="italic gold-text">souverain</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Depuis 1991, plus de 3 000 événements nationaux et internationaux
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="relative py-24 lg:py-32 px-4 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          {/* Lien retour */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-royal-gold transition-colors"
            >
              <ChevronLeft size={18} />
              Retour à l'accueil
            </Link>
          </motion.div>

          {/* Visualiseur complet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            {/* Grille de sièges */}
            <div className="bg-muted rounded-lg p-8 aspect-square flex items-center justify-center overflow-hidden">
              <div className="grid grid-cols-12 gap-2">
                {Array.from({ length: 120 }).map((_, idx) => (
                  <motion.div
                    key={idx}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx < filledSeats
                        ? 'bg-gradient-to-br from-royal-gold to-yellow-600'
                        : 'bg-border'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.005 }}
                  />
                ))}
              </div>
            </div>

            {/* Contrôles */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label className="eyebrow text-muted-foreground">Capacité d'accueil</label>
                  <div className="text-3xl font-display font-light text-royal-gold">
                    {capacity}
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={capacity}
                  onChange={(e) => setCapacity(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-royal-gold"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={decrementCapacity}
                  className="flex-1 bg-muted border border-border hover:border-royal-gold rounded-sm py-3 text-royal-gold transition-colors flex items-center justify-center gap-2"
                >
                  <Minus size={18} /> Moins
                </button>
                <button
                  onClick={incrementCapacity}
                  className="flex-1 bg-muted border border-border hover:border-royal-gold rounded-sm py-3 text-royal-gold transition-colors flex items-center justify-center gap-2"
                >
                  <Plus size={18} /> Plus
                </button>
              </div>

              <div className="bg-muted rounded-lg p-6 border border-royal-gold">
                <div className="eyebrow text-royal-gold mb-2">Palier courant</div>
                <h3 className="font-display text-2xl font-light text-foreground mb-1">
                  {currentTier?.label}
                </h3>
                <p className="text-sm text-muted-foreground italic">{currentTier?.note}</p>
              </div>

              <button className="w-full bg-gradient-to-r from-royal-gold to-yellow-600 text-obsidian font-semibold py-3 rounded-sm hover:opacity-90 transition-opacity">
                Demander un devis
              </button>
            </div>
          </motion.div>

          {/* Configurations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="font-display text-3xl font-light text-foreground mb-8">
              Configurations d'accés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CONFIGURATIONS.map((config) => (
                <div
                  key={config.name}
                  className="bg-muted rounded-lg p-6 border border-border hover:border-royal-gold transition-colors"
                >
                  <div className="text-lg font-display text-royal-gold mb-2">{config.name}</div>
                  <div className="text-2xl font-light text-foreground mb-3">{config.capacity}</div>
                  <p className="text-sm text-muted-foreground">{config.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Espaces */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-light text-foreground mb-8">
              Nos espaces
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SPACES.map((space) => (
                <div
                  key={space.name}
                  className="bg-muted rounded-lg p-6 border border-border hover:border-royal-gold transition-colors"
                >
                  <div className="text-lg font-display text-royal-gold mb-2">{space.name}</div>
                  <div className="text-2xl font-light text-foreground mb-3">
                    {space.capacity} m²
                  </div>
                  <p className="text-sm text-muted-foreground">{space.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DiplomacyPage;