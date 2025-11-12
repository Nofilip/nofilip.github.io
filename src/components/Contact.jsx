function Contact() {
  return (
    <main className="px-6 md:px-10 py-16 md:py-24 text-slate-100 font-mono fade-in-delay">
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div className="order-2 md:order-1 bg-black/30 border border-slate-800 rounded-xl p-6 shadow-lg shadow-violet-700/20">
          <h1 className="text-2xl font-extrabold mb-6 text-violet-300 text-center">
            &lt;div&gt;Kontakt&lt;/div&gt;
          </h1>

          <form className="flex flex-col gap-4" action="#">
            <div>
              <label className="block text-slate-300 mb-1" htmlFor="name">
                Namn
              </label>
              <input
                id="name"
                type="text"
                placeholder="Ditt namn"
                className="w-full bg-black/30 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-600"
                required
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1" htmlFor="email">
                E-post
              </label>
              <input
                id="email"
                type="email"
                placeholder="din@email.se"
                className="w-full bg-black/30 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-600"
                required
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1" htmlFor="message">
                Meddelande
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Skriv ditt meddelande här…"
                className="w-full bg-black/30 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-600"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-2 px-5 py-2.5 bg-violet-700 text-slate-100 rounded-lg hover:bg-violet-900 transition focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              Skicka
            </button>
          </form>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-slate-800 shadow-lg shadow-violet-900/20 motion-safe:animate-float">
            {/* Bild */}
            <img
              src="/Images/contactImage.jpg"
              alt="Kontakta mig"
              className="absolute inset-0 w-full h-full object-cover filter-[brightness(0.9)_contrast(1.05)_saturate(0.9)]"
            />

            {/* Ljus violett ton */}
            <div className="absolute inset-0 bg-violet-500/10 mix-blend-soft-light"></div>

            {/* Ljusreflektion i kanten */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-white/10"></div>

            {/* Vignette */}
            <div className="pointer-events-none absolute inset-0 mask-[radial-gradient(70%_70%_at_50%_50%,black,transparent)]"></div>

            {/* Inre ring */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>

            {/* Glow bakom bilden – pulserar långsamt */}
            <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-violet-600/20 blur-3xl motion-safe:animate-slow-pulse"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
