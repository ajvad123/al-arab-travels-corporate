import { useEffect, useState } from "react";
import { Menu, X, Plane } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#haj-umrah", label: "Haj & Umrah" },
  { href: "#destinations", label: "Destinations" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-card-premium" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-3 group active" aria-current="page">
            <span
              className={`grid place-items-center w-10 h-10 rounded-xl transition-all duration-500 shadow-md group-hover:scale-105 ${
                scrolled
                  ? "bg-navy text-white group-hover:bg-gold group-hover:text-navy"
                  : "bg-white/10 text-gold backdrop-blur-md border border-white/20 group-hover:bg-white/20"
              }`}
            >
              <Plane className={`w-5 h-5 transition-colors ${scrolled ? "text-gold group-hover:text-navy" : "text-gold"}`} />
            </span>
            <span
              className={`font-display font-bold text-lg md:text-xl leading-tight tracking-tight transition-colors duration-500 ${
                scrolled ? "text-navy" : "text-white"
              }`}
            >
              Al Arab <span className="text-gradient">Travels</span>
              <span className="block text-[10px] font-semibold tracking-widest text-gold uppercase mt-0.5">
                Kalikavu · Kerala
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  scrolled
                    ? "text-muted-foreground hover:text-navy hover:bg-navy/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-medium rounded-xl bg-gold text-navy shadow-glow hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Now
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className={`lg:hidden h-10 w-10 grid place-items-center rounded-xl transition-all duration-300 ${
              scrolled ? "glass text-navy" : "bg-white/10 backdrop-blur-md border border-white/20 text-white"
            }`}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 animate-fade-up shadow-card-premium border border-border/50">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:text-navy hover:bg-navy/5 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-3 text-center text-sm font-medium rounded-xl bg-gold text-navy shadow-glow hover:opacity-90 transition-all"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

