import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Wifi, Tv2, Wind, Droplet, Shield } from 'lucide-react';

const LIGHTING_PRESETS = [
  { id: 'dawn', label: 'Aube', gradient: 'from-blue-900 via-orange-200 to-yellow-100' },
  { id: 'noon', label: 'Midi', gradient: 'from-blue-300 via-white to-yellow-200' },
  { id: 'golden', label: 'Heure dorée', gradient: 'from-orange-900 via-orange-400 to-yellow-300' },
];

const AMENITIES = [
  { icon: Wind, label: 'Climatisation' },
  { icon: Tv2, label: 'Smart TV' },
  { icon: Wifi, label: 'Wi-Fi' },
  { icon: Droplet, label: 'Tout inclus' },
  { icon: Droplet, label: 'Blanchisserie' },
  { icon: Shield, label: 'Sécurité 24/7' },
];

const RoomBlock = ({ room, index }) => {
  const [selectedLighting, setSelectedLighting] = useState('golden');
  const lighting = LIGHTING_PRESETS.find((l) => l.id === selectedLighting);
  const isEven = index % 2 === 0;

  const Container = isEven ? 'div' : 'div';

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-16 lg:py-24 border-b border-border last:border-b-0"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
        {/* Image */}
        <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden group">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay de lumière */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${lighting.gradient} mix-blend-overlay opacity-30 transition-all duration-500`}
            key={selectedLighting}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Contenu */}
        <div className="space-y-6">
          <div>
            <div className="eyebrow text-royal-gold mb-3">Chambre Premium</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-foreground mb-4">
              {room.name}
            </h2>
            <div className="flex flex-wrap gap-6 mb-6">
              <div>
                <span className="eyebrow text-muted-foreground text-xs">Surface</span>
                <p className="text-lg font-light text-royal-gold">{room.surface} m²</p>
              </div>
              <div>
                <span className="eyebrow text-muted-foreground text-xs">Occupancy</span>
                <p className="text-lg font-light text-foreground">{room.occupancy}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {room.description}
          </p>

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

          {/* Amenities */}
          <div>
            <div className="eyebrow text-muted-foreground mb-4">Services & Équipements</div>
            <div className="grid grid-cols-2 gap-3">
              {AMENITIES.map((amenity) => {
                const Icon = amenity.icon;
                return (
                  <div key={amenity.label} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-royal-gold flex-shrink-0" />
                    <span className="text-sm text-foreground">{amenity.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/#reserver"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-royal-gold to-yellow-600 text-obsidian font-semibold rounded-sm hover:opacity-90 transition-opacity"
          >
            Réserver maintenant
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default RoomBlock;