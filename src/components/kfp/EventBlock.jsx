import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Calendar } from 'lucide-react';

const EventBlock = ({ event, index, isEven }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-16 lg:py-24 border-b border-border last:border-b-0"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
        {/* Image */}
        <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden group">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
        </div>

        {/* Contenu */}
        <div className="space-y-6">
          <div>
            <div className="eyebrow text-royal-gold mb-3">{event.category}</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-foreground mb-4">
              {event.name}
            </h2>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {event.description}
          </p>

          {/* Infos */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-foreground">
              <MapPin className="w-5 h-5 text-royal-gold flex-shrink-0" />
              <span>{event.location}</span>
            </div>
            {event.date && (
              <div className="flex items-center gap-3 text-foreground">
                <Calendar className="w-5 h-5 text-royal-gold flex-shrink-0" />
                <span>{event.date}</span>
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            to="/#reserver"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-royal-gold to-yellow-600 text-obsidian font-semibold rounded-sm hover:opacity-90 transition-opacity"
          >
            Réserver une place
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default EventBlock;