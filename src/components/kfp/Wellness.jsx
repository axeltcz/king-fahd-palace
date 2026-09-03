import React from "react";
import { Activity, Dumbbell, Waves, Users } from "lucide-react";

const Wellness = () => {
  const services = [
    {
      icon: Activity,
      title: "Fitness Center",
      description: "State-of-the-art gymnasium with personal trainers"
    },
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Olympic-grade equipment and specialized programs"
    },
    {
      icon: Waves,
      title: "Aquatic Facilities",
      description: "Olympic swimming pools and water therapy centers"
    },
    {
      icon: Users,
      title: "Wellness Groups",
      description: "Community fitness classes and wellness seminars"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Wellness Center</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive health and fitness facilities designed for rejuvenation and vitality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <Icon className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Wellness;