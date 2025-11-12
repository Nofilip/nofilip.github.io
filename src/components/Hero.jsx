import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="py-16 md:py-24 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 font-mono text-slate-100">
      <div>
        <div>
          <h1 className="text-4xl font-bold mb-4 fade-in-delay p-6 bg-black/30 border border-slate-800 rounded-xl shadow-lg shadow-violet-700/20 transition-all duration-300 hover:shadow-violet-500/30">
            <code>&lt;div&gt;Välkommen&lt;/div&gt;</code>
          </h1>
        </div>
        <div className="max-w-lg mx-auto md:mx-0 bg-black/30 border border-slate-800 rounded-xl p-8 shadow-lg shadow-violet-700/20 transition-all duration-300 hover:shadow-violet-500/30 fade-in-delay">
          <p className="text-green-400 text-sm mb-2">~/portfolio</p>

          <pre className="text-slate-300 text-base whitespace-pre-wrap">
            {`const developer = {
          name: "Filip",
          role: "Frontendstudent",
          passion: "bygga levande webblösningar",
          exploring: ["frontend", "backend", "databaser"],
        };`}
          </pre>
        </div>

        <p className="mt-6 text-slate-300 max-w-md mx-auto md:mx-0 fade-in-delay">
          Jag gillar att se hur idéer blir till fungerande lösningar — att bygga
          logik, koppla ihop front och back och få helheten att leva.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start fade-in-delay">
          <Link
            className="glow-btn px-5 py-2.5 bg-violet-700 text-slate-100 font-mono rounded-xl hover:bg-violet-900 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            to="/projects"
          >
            Mina Projekt
          </Link>
          <Link
            className="glow-btn px-5 py-2.5 bg-violet-700 text-slate-100 font-mono rounded-xl hover:bg-violet-900 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            to="/contact"
          >
            Kontakta Mig
          </Link>
        </div>
      </div>

      <div className="flex justify-center flex-1 fade-in-delay">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/10 border border-slate-700 flex items-center justify-center shadow-md shadow-black/30">
          <img
            src="/Images/profilbild.jpg"
            alt="Filip"
            className="w-full h-full object-cover rounded-full opacity-90"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
