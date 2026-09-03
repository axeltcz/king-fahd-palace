import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Plus, Minus } from 'lucide-react';

const CAPACITY_TIERS = [
  { min: 0, max: 0, label: 'Salle vide', note: 'Préparation' },
  { min: 1, max: 250, label: 'Conseil privé', note: 'Intimité' },
  { min: 251, max: 500, label: 'Conférence', note: 'Officiel' },
  { min: 501, max: 750, label: 'Gala', note: 'Prestige' },
  { min: 751, max: 1000, label: 'Sommet plénier', note: 'Souverain' },
];

const DiplomaticPulse = () => {
  const [capacity, setCapacity] = useState(500);

  const currentTier = CAPACITY_TIERS.find(
    (tier) => capacity >= tier.min && capacity <= tier.max
  );

  const handleCapacityChange = (e) => {
    setCapacity(Number(e.target.value));
  };

  const incrementCapacity = () => {
    setCapacity((prev) => Math.min(prev + 50, 1000));
  };

  const decrementCapacity = () => {
    setCapacity((prev) => Math.max(prev - 50, 0));
  };

  // Nombre de sièges animés (grille 120 sièges max, remplie selon %)
  const seatsPercentage = (capacity / 1000) * 100;
  const filledSeats = Math.round((capacity / 1000) * 120);

  return (
    <section id="diplomatie" className="relative py-24 lg:py-32 px-4 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <div className="eyebrow text-royal-gold mb-4">Diplomatic Pulse</div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-foreground">
            Le centre <span className="italic gold-text">souverain</span>
          </h2>
        </motion.div>

        {/* Visualiseur principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
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
            {/* Slider de capacité */}
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
                onChange={handleCapacityChange}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-royal-gold"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0</span>
                <span>1000</span>
              </div>
            </div>

            {/* Boutons +/- */}
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

            {/* Palier courant */}
            <div className="bg-muted rounded-lg p-6 border border-royal-gold">
              <div className="eyebrow text-royal-gold mb-2">Palier courant</div>
              <h3 className="font-display text-2xl font-light text-foreground mb-1">
                {currentTier?.label}
              </h3>
              <p className="text-sm text-muted-foreground italic">{currentTier?.note}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div>
                <div className="eyebrow text-muted-foreground text-xs mb-1">Surface</div>
                <div className="text-lg font-light text-royal-gold">6000 m²</div>
              </div>
              <div>
                <div className="eyebrow text-muted-foreground text-xs mb-1">Salles</div>
                <div className="text-lg font-light text-royal-gold">66</div>
              </div>
              <div>
                <div className="eyebrow text-muted-foreground text-xs mb-1">Amphithéâtre</div>
                <div className="text-lg font-light text-royal-gold">700</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lien vers page complète */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <Link
            to="/diplomatie"
            className="inline-flex items-center gap-2 text-royal-gold hover:text-yellow-500 transition-colors font-light"
          >
            Voir le centre de conférences
            <ChevronRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DiplomaticPulse;