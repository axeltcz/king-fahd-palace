const rooms = [
  {
    name: 'Chambre Deluxe',
    desc: 'Élégance et confort avec vue panoramique sur la ville.',
    img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Suite Royale',
    desc: "Un espace généreux alliant luxe et raffinement à l'orientale.",
    img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Suite Présidentielle',
    desc: "L'excellence absolue, pour une expérience hors du commun.",
    img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Rooms() {
  return (
    <div className="pt-32 max-w-7xl mx-auto px-6 pb-20">
      <h1 className="font-serif text-4xl text-gold text-center mb-4">
        Nos Chambres & Suites
      </h1>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-14">
        Découvrez nos hébergements pensés pour votre confort absolu.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {rooms.map((room) => (
          <div
            key={room.name}
            className="bg-black/40 border border-gold/20 rounded-lg overflow-hidden hover:border-gold/50 transition"
          >
            <img src={room.img} alt={room.name} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="font-serif text-xl text-gold mb-2">{room.name}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{room.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
