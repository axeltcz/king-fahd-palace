import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ROOMS = [
  {
    id: 'superieure',
    name: 'Chambre Supérieure',
    surface: 28,
    occupancy: '1 adulte · 1 enfant',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2021/12/f168c741-b57a-4f33-8719-a6588b2d1f8a.jpeg',
  },
  {
    id: 'deluxe',
    name: 'Chambre Deluxe',
    surface: 42,
    occupancy: '3 adultes · 2 enfants',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2021/12/chambre-superieur-4.jpeg',
  },
  {
    id: 'executive',
    name: 'Chambre Exécutive',
    surface: 33,
    occupancy: '2 adultes',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2021/12/suite-junior-salon.jpeg',
  },
  {
    id: 'junior',
    name: 'Suite Junior',
    surface: 95,
    occupancy: '4 adultes',
    image: 'https://www.kingfahdpalacehotels.com/wp-content/uploads/2021/12/8.jpeg',
  },
];

const LIGHTING_PRESETS = [
  { id: 'dawn', label: 'Aube', gradient: 'from-blue-900 via-orange-200 to-yellow-100' },
  { id: 'noon', label: 'Midi', gradient: 'from-blue-300 via-white to-yellow-200' },
  { id: 'golden', label: 'Heure dorée', gradient: 'from-orange-900 via-orange-400 to-yellow-300' },
];

const Chambers = () => {
  const [selectedRoom, setSelectedRoom] = useState('deluxe');
  const [selectedLighting, setSelectedLighting] = useState('golden');

  const room = ROOMS.find((r) => r.id === selectedRoom);
  const lighting = LIGHTING_PRESETS.find((l) => l.id === selectedLighting);

  return (
    <section id="chambres" className="relative py-24 lg:py-32 px-4 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <div className="eyebrow text-royal-gold mb-4">Chambres & Suites</div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-foreground">
            Confort et <span className="italic gold-text">élégance</span>
          </h2>
        </motion.div>

        {/* Colonne principale : image + bascule de lumière */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-12"
        >
          {/* Plan SVG architectural (colonne gauche) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-muted rounded-lg p-6 aspect-square flex items-center justify-center overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                {/* Contour chambre */}
                <rect x="40" y="40" width="220" height="160" fill="none" stroke="#D4AF37" strokeWidth="2" />
                {/* Zones principales */}
                <rect x="40" y="40" width="140" height="160" fill="#D4AF37" opacity="0.05" />
                <rect x="180" y="40" width="80" height="160" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4" />
                {/* Lit */}
                <ellipse cx="90" cy="95" rx="35" ry="50" fill="none" stroke="#D4AF37" strokeWidth="2" />
                <text x="90" y="100" textAnchor="middle" className="font-display text-xs fill-royal-gold" fontSize="10">
                  LIT
                </text>
                {/* Salon/Terrasse */}
                <rect x="180" y="60" width="70" height="80" fill="none" stroke="#D4AF37" strokeWidth="1" />
                <text x="215" y="110" textAnchor="middle" className="font-display text-xs fill-royal-gold" fontSize="9">
                  TERRASSE
                </text>
                {/* Surface info */}
                <text x="150" y="280" textAnchor="middle" className="font-display text-xs fill-royal-gold" fontSize="11" fontWeight="300">
                  {room.surface} m²
                </text>
              </svg>
            </div>
            {/* Surface et occupancy */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="eyebrow text-muted-foreground">Surface</span>
                <span className="text-lg font-light text-royal-gold">{room.surface} m²</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="eyebrow text-muted-foreground">Occupancy</span>
                <span className="text-sm text-muted-foreground">{room.occupancy}</span>
              </div>
            </div>
          </div>

          {/* Image + bascule de lumière (colonne droite, 2 colonnes) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image avec gradient de lumière */}
            <div className="relative h-96 lg:h-[450px] rounded-lg overflow-hidden group">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay de lumière animé */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${lighting.gradient} mix-blend-overlay opacity-30 transition-all duration-500`}
                key={selectedLighting}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Bascule de lumière */}
            <div className="space-y-3">
              <div className="eyebrow text-muted-foreground">Ambiance</div>
              <div className="grid grid-cols-3 gap-3">
                {LIGHTING_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => setSelectedLighting(preset.id)}
                    className={`py-3 px-4 rounded-sm transition-all duration-300 font-medium text-sm ${
                      selectedLighting === preset.id
                        ? 'bg-royal-gold text-obsidian'
                        : 'bg-muted hover:bg-secondary text-foreground border border-border'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sélecteur de chambres */}
            <div className="space-y-3">
              <div className="eyebrow text-muted-foreground">Sélectionnez votre chambre</div>
              <div className="grid grid-cols-2 gap-3">
                {ROOMS.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRoom(r.id)}
                    className={`py-3 px-4 rounded-sm transition-all duration-300 text-sm font-light ${
                      selectedRoom === r.id
                        ? 'bg-royal-gold text-obsidian'
                        : 'bg-muted hover:bg-secondary text-foreground border border-border'
                    }`}
                  >
                    {r.name}
                  </button>
                ))}
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
            to="/chambres"
            className="inline-flex items-center gap-2 text-royal-gold hover:text-yellow-500 transition-colors font-light"
          >
            Voir toutes les chambres
            <ChevronRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Chambers;