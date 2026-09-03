export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/20 text-white/70 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-serif text-xl text-gold mb-4">King Fahd Palace</h3>
          <p className="text-sm leading-relaxed">
            Un havre de luxe et de raffinement, alliant tradition et modernité
            au cœur de la ville.
          </p>
        </div>

        <div>
          <h4 className="uppercase text-sm tracking-widest text-gold mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-gold">Accueil</a></li>
            <li><a href="/chambres" className="hover:text-gold">Chambres</a></li>
            <li><a href="/restaurant" className="hover:text-gold">Restaurant</a></li>
            <li><a href="/contact" className="hover:text-gold">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase text-sm tracking-widest text-gold mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Avenue Royale, Dakar, Sénégal</li>
            <li>+221 33 000 00 00</li>
            <li>contact@kingfahdpalace.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} King Fahd Palace. Tous droits réservés.
      </div>
    </footer>
  );
}
