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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-sm border-b border-border" : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid place-items-center w-10 h-10 rounded-lg bg-navy text-white">
            <Plane className="w-5 h-5 text-gold" />
          </span>
          <span className="font-display font-bold text-lg md:text-xl text-navy leading-tight">
            Al Arab Travels
            <span className="block text-[10px] font-medium tracking-widest text-gold uppercase">Kalikavu · Kerala</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-navy relative group transition-colors"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-navy text-white px-5 py-2.5 text-sm font-semibold hover:bg-navy/90 transition shadow-sm"
          >
            Book Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-navy"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md text-foreground hover:bg-secondary text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-navy text-white px-5 py-3 text-sm font-semibold"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
