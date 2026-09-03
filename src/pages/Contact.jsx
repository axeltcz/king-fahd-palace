import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-32 max-w-4xl mx-auto px-6 pb-20">
      <h1 className="font-serif text-4xl text-gold text-center mb-4">
        Contactez-nous
      </h1>
      <p className="text-white/70 text-center mb-14">
        Notre équipe est à votre écoute pour toute demande d'information ou de
        réservation.
      </p>

      {sent ? (
        <p className="text-center text-gold text-lg">
          Merci ! Votre message a bien été envoyé.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-black/40 border border-gold/20 rounded px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-black/40 border border-gold/20 rounded px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full bg-black/40 border border-gold/20 rounded px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold"
          />
          <button
            type="submit"
            className="bg-gold text-black px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-gold/90 transition"
          >
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
}
