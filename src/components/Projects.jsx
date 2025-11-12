import { useEffect, useState } from "react";

const GH_USER = "Nofilip";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`
        );
        if (!res.ok) throw new Error("Något gick fel med GitHub-anropet");
        const data = await res.json();

        // filtrera bort forks, privata eller arkiverade repos
        const clean = data.filter((r) => !r.fork && !r.private && !r.archived);

        setRepos(clean);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (loading) return <p className="text-slate-300">Hämtar projekt...</p>;
  if (error) return <p className="text-rose-400">{error}</p>;

  return (
    <main className="px-6 md:px-10 py-16 md:py-24 text-slate-100 font-mono">
      <h1
        className="text-4xl md:text-5xl font-extrabold mb-6 text-violet-300 fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        &lt;div&gt;Mina projekt (GitHub)&lt;/div&gt;
      </h1>

      <ul className="space-y-3 max-w-5xl">
        {repos.map((repo, i) => (
          <li
            key={repo.id}
            className="bg-black/30 border border-slate-800 rounded-lg p-4 shadow-md hover:shadow-violet-800/10 transition reveal-left"
            style={{ animationDelay: `${0.8 + i * 0.15}s` }}
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-violet-300 hover:text-violet-200 font-semibold"
            >
              {repo.name}
            </a>
            <p className="text-slate-300 text-sm mt-1">
              {repo.description || "Ingen beskrivning..."}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Projects;
