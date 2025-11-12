import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="px-6 md:px-10 py-16 md:py-24 text-slate-100 font-mono fade-in-delay">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-violet-300">
          &lt;div&gt;Om mig&lt;/div&gt;
        </h1>
        <p className="text-slate-300">
          Hej! Jag heter Filip och jag gillar att förvandla idéer till
          fungerande webblösningar — från UI till databas. Här är lite mer om
          vem jag är och vad jag jobbar med just nu.
        </p>
      </header>

      {/* Intro + Bild */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr,0.8fr] gap-8 items-start">
        <div className="bg-black/30 border border-slate-800 rounded-xl p-6 shadow-lg shadow-violet-700/20">
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-violet-400">
            Kort om mig
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Frontendstudent som utforskar fullstack. Jag gillar tydlig struktur,
            ren kod och små detaljer som lyfter upplevelsen. Just nu tränar jag
            mycket på React, API:er och SQLite. Målet: bli trygg i hela kedjan.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-slate-800 rounded-lg p-4">
              <p className="text-green-400 text-sm mb-1">Fokus</p>
              <p>React, Tailwind, Node/Express</p>
            </div>
            <div className="bg-white/5 border border-slate-800 rounded-lg p-4">
              <p className="text-green-400 text-sm mb-1">Intressen</p>
              <p>Komponentdesign, DX, databasflöden</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "HTML&CSS",
              "JavaScript",
              "React",
              "Angular",
              "Tailwind",
              "Node",
              "Express",
              "SQLite",
              "Git",
              "GitHub",
            ].map((tag) => (
              <span
                key={tag}
                className="text-sm bg-violet-700/20 border border-violet-800 rounded-lg px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Erfarenhet */}
      <section className="max-w-5xl mx-auto mt-12">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-violet-400">
          Vägen hit
        </h2>
        <ol className="relative border-s border-slate-800 pl-6 space-y-6">
          <li>
            <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-violet-600 border border-violet-300"></div>
            <p className="text-sm text-slate-400">Nu</p>
            <p className="font-semibold">
              Bygger portfolio & små fullstack-projekt
            </p>
            <p className="text-slate-300">React, Tailwind, Express, SQLite</p>
          </li>
          <li>
            <div className="absolute -left-2.5 top-18 w-5 h-5 rounded-full bg-violet-600 border border-violet-300"></div>
            <p className="text-sm text-slate-400">2024–2025</p>
            <p className="font-semibold">
              JS 1 → JS 2 (React), backend-grunder
            </p>
            <p className="text-slate-300">
              API:er, routing, fetch, databaskoppling
            </p>
          </li>
        </ol>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto mt-12 bg-black/30 border border-slate-800 rounded-xl p-6 text-center">
        <p className="mb-4 text-slate-300">
          Vill du se vad jag byggt eller snacka om ett samarbete?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/projects"
            className="glow-btn px-5 py-2.5 bg-violet-700 rounded-xl hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Mina projekt
          </Link>
          <Link
            to="/contact"
            className="glow-btn px-5 py-2.5 bg-violet-700 rounded-xl hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Kontakta mig
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
