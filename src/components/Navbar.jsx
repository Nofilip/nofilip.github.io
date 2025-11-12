import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const links = [
    { to: "/", label: "Hem" },
    { to: "/projects", label: "Projekt" },
    { to: "/about", label: "Om mig" },
    { to: "/contact", label: "Kontakt" },
  ];

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 border-b border-slate-800 shadow-md transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0b16]/95 backdrop-blur-md shadow-violet-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto h-16 px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl nav-link font-bold text-violet-500 hover:text-slate-200 transition"
        >
          Portfolio
        </Link>
        <button
          className="md:hidden p-2 rounded cursor-pointer transition"
          aria-label="Öppna meny"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <div className="relative w-6 h-4">
            <span
              className={`absolute block h-0.5 w-6 bg-slate-200 transform transition duration-300 ${
                open ? "rotate-45 translate-y-0" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute block h-0.5 w-6 bg-slate-200 transition duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute block h-0.5 w-6 bg-slate-200 transform transition duration-300 ${
                open ? "-rotate-45 translate-y-0" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>

        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="
      md:hidden 
      absolute top-16 left-0 right-0 z-40
      bg-slate-900/80 backdrop-blur-md
      border-b border-white/10
      shadow-xl
    "
        >
          <ul className="px-6 py-4 flex flex-col gap-3 items-center">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block py-2 nav-link text-slate-20 "
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
