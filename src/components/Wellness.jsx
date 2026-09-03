import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Dumbbell, Waves, Users } from 'lucide-react';

const WellnessPillar = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="flex flex-col items-center text-center"
  >
    <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-[#D4AF37]" />
    </div>
    <h3 className="text-lg font-instrument-sans font-semibold text-white mb-2">
      {title}
    </h3>
    <p className="text-sm text-gray-400 max-w-xs">{description}</p>
  </motion.div>
);

export default function Wellness() {
  const pillars = [
    {
      icon: Activity,
      title: 'Spa & Massages',
      description: 'Soins holistiques inspirés des traditions sénégalaises',
    },
    {
      icon: Dumbbell,
      title: 'Fitness',
      description: 'Équipements modernes et coaching personnalisé',
    },
    {
      icon: Waves,
      title: 'Piscines',
      description: 'Bassins panoramiques face à l\'Atlantique',
    },
    {
      icon: Users,
      title: 'Événements Bien-être',
      description: 'Yoga, méditation et ateliers de détente',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0A0A0B]">
      <div className="max-w-6xl mx-auto">
        {/* Image et texte introductif */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://www.kingfahdpalacehotels.com/wp-content/uploads/2023/06/King-Fahd-Palace-Hotel-Dakar-Exterior.jpeg"
              alt="Wellness Area"
              className="rounded-lg overflow-hidden h-80 object-cover w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-cormorant-garamond text-white mb-6">
              Bien-être & Sérénité
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Échappez à la vie urbaine dans nos espaces de détente privilégiés. Du spa traditionnel
              aux installations sportives ultramodernes, chaque moment de détente est pensé pour votre
              bien-être.
            </p>
            <p className="text-gray-500 text-base">
              Nos thérapeutes certifiés et nos coachs de renommée internationale vous guident vers
              l'équilibre parfait entre corps et esprit.
            </p>
          </motion.div>
        </div>

        {/* Grille des 4 piliers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <WellnessPillar key={idx} {...pillar} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}