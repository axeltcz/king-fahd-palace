import React from 'react';
import { Activity, Dumbbell, Waves, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Wellness = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#0A0A0B] to-[#1a1a1d] py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-serif text-[#D4AF37] mb-4">
            Wellness Sanctuary
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Rejuvenation and vitality at the heart of luxury
          </p>
        </div>

        {/* Wellness Image Section */}
        <div
          className={`mb-16 transition-all duration-700 transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1544161515-81205f8abecc?w=1200&q=80"
            alt="Wellness at King Fahd Palace"
            className="w-full h-96 object-cover rounded-lg shadow-2xl border border-[#D4AF37]/20"
          />
        </div>

        {/* Wellness Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Activity,
              title: 'Spa & Massage',
              description: 'Traditional therapies and modern treatments',
            },
            {
              icon: Dumbbell,
              title: 'Fitness Center',
              description: 'State-of-the-art equipment and expert trainers',
            },
            {
              icon: Waves,
              title: 'Swimming Pools',
              description: 'Olympic-size and relaxation pools',
            },
            {
              icon: Users,
              title: 'Banquet Halls',
              description: 'Private wellness events and retreats',
            },
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`group relative bg-[#1a1a1d]/50 border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/60 transition-all duration-500 transform ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-12 h-12 text-[#D4AF37]" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-serif text-[#D4AF37] text-center mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-400 text-center leading-relaxed">
                  {pillar.description}
                </p>

                {/* Hover accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Wellness;
