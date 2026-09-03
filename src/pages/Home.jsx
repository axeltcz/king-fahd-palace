export default function Home() {
  return (
    <div className="pt-24">
      <section className="relative h-[80vh] flex items-center justify-center text-center px-6 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-6">
            Bienvenue au King Fahd Palace
          </h1>
          <p className="text-white/80 text-lg mb-8">
            L'excellence de l'hospitalité, au cœur du luxe et de la sérénité.
          </p>
          <a
            href="/chambres"
            className="inline-block bg-gold text-black px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-gold/90 transition"
          >
            Découvrir nos chambres
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-3xl text-gold mb-6">
          Une expérience inégalée
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
          Le King Fahd Palace vous accueille dans un cadre somptueux, entre
          architecture raffinée et service irréprochable. Chaque détail est
          pensé pour offrir à nos hôtes un séjour d'exception.
        </p>
      </section>
    </div>
  );
}
