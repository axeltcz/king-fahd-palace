import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BarChart3 } from 'lucide-react';

export default function DiplomaticPulse() {
  const [capacity, setCapacity] = useState(500);

  // Calcul des configurations basées sur la capacité
  const theater = Math.floor(capacity * 1);
  const banquet = Math.floor(capacity * 0.7);
  const classroom = Math.floor(capacity * 0.5);
  const cocktail = Math.floor(capacity * 1.2);

  // Couleur dynamique selon la capacité
  const getColorClass = () => {
    if (capacity < 300) return 'bg-[#D4AF37]';
    if (capacity < 600) return 'bg-[#C8A028]';
    if (capacity < 900) return 'bg-[#A68318]';
    return 'bg-[#8B6914]';
  };

  // Grille de sièges animés
  const seatCount = Math.ceil(capacity / 10);
  const seats = Array.from({ length: Math.min(seatCount, 120) });

  return (
    <section className="py-24 px-6 bg-[#0A0A0B]">
      <div className="max-w-6xl mx-auto">
        {/* Titre et intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-6">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-instrument-sans font-semibold">
              Centre de Conférences
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-cormorant-garamond text-white mb-6">
            Diplomatic Pulse
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Visualiseur interactif de capacité. Ajustez le nombre de participants et découvrez les
            configurations optimales pour votre événement.
          </p>
        </motion.div>

        {/* Contrôle interactif */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#1a1a1b] rounded-lg p-8 mb-12 border border-[#D4AF37]/20"
        >
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <label className="text-white font-instrument-sans font-semibold flex items-center gap-2">
                <Users className="w-5 h-5 text-[#D4AF37]" />
                Nombre de participants
              </label>
              <span className="text-3xl font-cormorant-garamond text-[#D4AF37]">{capacity}</span>
            </div>
            <input
              type="range"
              min="100"
              max="1000"
              value={capacity}
              onChange={(e) => setCapacity(parseInt(e.target.value))}
              className="w-full h-2 bg-[#D4AF37]/20 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${((capacity - 100) / 900) * 100}%, #D4AF37/20 ${((capacity - 100) / 900) * 100}%, #D4AF37/20 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>100</span>
              <span>1000</span>
            </div>
          </div>

          {/* Grille de sièges */}
          <div className="mb-8">
            <p className="text-gray-400 text-sm font-instrument-sans mb-4">Visualisation des places</p>
            <div className="flex flex-wrap gap-2 bg-[#0A0A0B] p-6 rounded-lg">
              {seats.map((_, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.02, duration: 0.3 }}
                  className={`w-3 h-3 rounded-full ${getColorClass()} cursor-pointer hover:scale-125 transition-transform`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {seats.length === 120 && 'Grille réduite pour visualisation'}
            </p>
          </div>
        </motion.div>

        {/* Configurations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Théâtre', seats: theater, description: 'Maximum de spectateurs' },
            { name: 'Banquet', seats: banquet, description: 'Repas assis' },
            { name: 'Classe', seats: classroom, description: 'Configuration pédagogique' },
            { name: 'Cocktail', seats: cocktail, description: 'Débout avec stands' },
          ].map((config, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#1a1a1b] rounded-lg p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-lg font-instrument-sans font-semibold text-white">{config.name}</h3>
              </div>
              <p className="text-4xl font-cormorant-garamond text-[#D4AF37] mb-2">{config.seats}</p>
              <p className="text-sm text-gray-500">{config.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Espaces disponibles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-[#D4AF37]/20"
        >
          <h3 className="text-2xl font-cormorant-garamond text-white mb-8">Nos Espaces</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Grand Ballroom',
                capacity: 800,
                description: 'Espace principal avec colonnes majestueuses et lustre monumental.',
              },
              {
                name: 'Salle Océan',
                capacity: 300,
                description: 'Vue panoramique sur l\'Atlantique, naturellement lumineuse.',
              },
              {
                name: 'Salon Teranga',
                capacity: 150,
                description: 'Espace intimiste pour réunions et séminaires.',
              },
              {
                name: 'Suite Présidentielle',
                capacity: 50,
                description: 'Salon privé pour négociations diplomatiques.',
              },
            ].map((space, idx) => (
              <div key={idx} className="bg-[#1a1a1b] rounded-lg p-6 border border-[#D4AF37]/20">
                <h4 className="text-lg font-instrument-sans font-semibold text-white mb-2">
                  {space.name}
                </h4>
                <p className="text-sm text-gray-400 mb-4">{space.description}</p>
                <p className="text-xs text-[#D4AF37] font-semibold">
                  Jusqu\'à {space.capacity} personnes
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}