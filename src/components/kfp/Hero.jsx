import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const INTENTIONS = [
  { id: 'diplomacy', label: 'Diplomatie', icon: '🏛️' },
  { id: 'wellness', label: 'Bien-être', icon: '✨' },
  { id: 'celebration', label: 'Célébration', icon: '🎉' },
  { id: 'arts', label: 'Les Arts', icon: '🎭' },
];

const Hero = () => {
  const [selectedIntention, setSelectedIntention] = useState(null);
  const [formData, setFormData] = useState({
    arrival: '',
    departure: '',
    adults: '2',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Pour l'instant, pas de backend — juste un placeholder
    console.log('Recherche:', { selectedIntention, ...formData });
    alert('Fonctionnalité de recherche à câbler');
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image avec parallaxe */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: 'easeOut' }}
      >
        <img
          src="https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/06/King-Fahd-Palace-Hotel-Dakar-Exterior.jpeg"
          alt="King Fahd Palace Façade"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay gradient sombre */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/60 to-obsidian/80" />

      {/* Monogramme filigrane */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="font-display text-[15rem] font-light text-royal-gold">KF</div>
      </motion.div>

      {/* Contenu */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] font-light leading-none text-foreground mb-6">
            King Fahd
            <br />
            <span className="italic gold-text">Palace</span>
          </h1>
        </motion.div>

        {/* Sous-titre */}
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-12 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          L'embassade digitale du prestige sénégalais. Un palais monumental de 35 hectares face à l'Atlantique, où la Teranga rencontre l'architecture souveraine.
        </motion.p>

        {/* Widget de réservation */}
        <motion.div
          className="glass rounded-lg p-8 max-w-2xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          id="reserver"
        >
          {/* Intentions */}
          <div className="mb-8">
            <div className="eyebrow text-muted-foreground mb-4">Votre intention</div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {INTENTIONS.map((intention) => (
                <button
                  key={intention.id}
                  onClick={() => setSelectedIntention(intention.id)}
                  className={`py-3 px-4 rounded-sm transition-all duration-300 font-medium text-sm ${
                    selectedIntention === intention.id
                      ? 'bg-royal-gold text-obsidian'
                      : 'bg-muted hover:bg-secondary text-foreground border border-border'
                  }`}
                >
                  <span className="mr-2">{intention.icon}</span>
                  {intention.label}
                </button>
              ))}
            </div>
          </div>

          {/* Champs du formulaire */}
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Arrivée */}
              <div>
                <label className="eyebrow text-muted-foreground mb-2 block">Arrivée</label>
                <input
                  type="date"
                  name="arrival"
                  value={formData.arrival}
                  onChange={handleFormChange}
                  className="w-full bg-obsidian border border-border px-4 py-3 rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-royal-gold"
                />
              </div>

              {/* Départ */}
              <div>
                <label className="eyebrow text-muted-foreground mb-2 block">Départ</label>
                <input
                  type="date"
                  name="departure"
                  value={formData.departure}
                  onChange={handleFormChange}
                  className="w-full bg-obsidian border border-border px-4 py-3 rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-royal-gold"
                />
              </div>

              {/* Adultes */}
              <div>
                <label className="eyebrow text-muted-foreground mb-2 block">Adultes</label>
                <select
                  name="adults"
                  value={formData.adults}
                  onChange={handleFormChange}
                  className="w-full bg-obsidian border border-border px-4 py-3 rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-royal-gold"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} adulte{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Bouton Rechercher */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-royal-gold to-yellow-600 text-obsidian font-semibold py-3 rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-6"
            >
              Rechercher
              <ChevronRight size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;