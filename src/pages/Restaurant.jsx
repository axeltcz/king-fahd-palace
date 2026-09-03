export default function Restaurant() {
  return (
    <div className="pt-32 max-w-6xl mx-auto px-6 pb-20">
      <h1 className="font-serif text-4xl text-gold text-center mb-4">
        Notre Restaurant
      </h1>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-14">
        Une cuisine raffinée mêlant saveurs locales et gastronomie
        internationale, dans un cadre élégant.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
          alt="Restaurant"
          className="rounded-lg w-full h-80 object-cover border border-gold/20"
        />
        <div>
          <h2 className="font-serif text-2xl text-gold mb-4">
            L'art de la gastronomie
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Nos chefs mettent leur savoir-faire au service d'une expérience
            culinaire unique, sublimant les produits locaux avec des
            techniques inspirées des plus grandes tables internationales.
          </p>
          <p className="text-white/70 leading-relaxed">
            Ouvert tous les jours de 7h à 23h, notre restaurant vous accueille
            pour le petit-déjeuner, le déjeuner et le dîner.
          </p>
        </div>
      </div>
    </div>
  );
}
