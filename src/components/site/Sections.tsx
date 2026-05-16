import { useEffect, useRef, useState } from "react";
import {
  Plane, FileCheck, MapPin, Phone, Mail, MessageCircle, Star,
  ShieldCheck, Clock, Award, Users, BadgeCheck, Wallet, Headphones,
  Lock, Briefcase, Globe2, Luggage, BookOpen, Building2, Compass,
  ArrowRight, Quote,
} from "lucide-react";
import heroLanding from "@/assets/hero-landing.jpg";

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      <img
        src={heroLanding}
        alt="Al Arab Travels — premium global travel and Haj & Umrah services"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-navy/65" />

      <div className="container-x py-20 md:py-28 text-white relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider uppercase text-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Premium Travel & Visa Consultancy
          </span>
          <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
            Your Trusted Travel Partner for{" "}
            <span className="text-gold">Global Journeys</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl leading-relaxed">
            From international flight bookings and visa assistance to Haj & Umrah pilgrimage
            packages — Al Arab Travels delivers a seamless, professional experience for every
            traveler from Kerala to the world.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-gold text-navy px-7 py-3.5 font-semibold hover:bg-gold/90 transition shadow-lg"
            >
              Book Now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 border border-white/30 text-white px-7 py-3.5 font-semibold hover:bg-white/20 transition backdrop-blur"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {[
              { icon: ShieldCheck, label: "Licensed Travel Agency" },
              { icon: Users, label: "Trusted by Thousands" },
              { icon: Clock, label: "24/7 Support" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm text-white/90">
                <Icon className="w-5 h-5 text-gold" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function About() {
  const items = [
    { icon: Plane, title: "Flight Booking", text: "International & domestic flights at the best fares." },
    { icon: FileCheck, title: "Visa Processing", text: "End-to-end visit, tourist and work visa support." },
    { icon: Compass, title: "Haj & Umrah", text: "Hand-crafted pilgrimage packages with full guidance." },
    { icon: Globe2, title: "Holiday Tours", text: "Curated holiday packages across the globe." },
  ];
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">About Us</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
            A trusted name in international travel, based in Kalikavu, Kerala.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            For years, Al Arab Travels has helped families, professionals and pilgrims from Malappuram
            and across Kerala explore the world with confidence. We combine deep regional expertise
            with international networks to deliver seamless flight, visa and travel solutions —
            every step handled with care, precision and full transparency.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              { k: "15+", v: "Years Trusted" },
              { k: "50+", v: "Destinations" },
              { k: "100%", v: "Licensed" },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-gold pl-4">
                <div className="font-display font-bold text-2xl text-navy">{s.k}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group p-6 rounded-xl border border-border bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="grid place-items-center w-12 h-12 rounded-lg bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                <Icon className="w-6 h-6" />
              </span>
              <h3 className="mt-5 font-display font-semibold text-lg text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
export function Services() {
  const services = [
    { icon: Plane, title: "Flight Ticket Booking", text: "Best fares on international & domestic flights." },
    { icon: FileCheck, title: "Visit Visa Services", text: "Fast, reliable visit visa processing." },
    { icon: Globe2, title: "Tourist Visa Assistance", text: "Hassle-free tourist visa documentation." },
    { icon: BookOpen, title: "Haj Packages", text: "Premium Haj packages with full support." },
    { icon: Compass, title: "Umrah Packages", text: "Affordable, comfortable Umrah journeys." },
    { icon: Briefcase, title: "Gulf Job Visa Assistance", text: "Trusted Gulf employment visa services." },
    { icon: Luggage, title: "Holiday Tour Packages", text: "Curated holidays for families & groups." },
    { icon: ShieldCheck, title: "Travel Insurance", text: "Comprehensive travel cover for peace of mind." },
    { icon: BadgeCheck, title: "Passport Assistance", text: "End-to-end passport application support." },
  ];
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Our Services</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
            Complete travel & visa solutions, under one roof.
          </h2>
          <p className="mt-4 text-foreground/70">
            From your first enquiry to your safe return — we handle every detail with professional care.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative p-7 rounded-xl bg-white border border-border hover:border-gold hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-300" />
              <span className="grid place-items-center w-14 h-14 rounded-lg bg-secondary text-navy group-hover:bg-navy group-hover:text-gold transition-colors">
                <Icon className="w-7 h-7" />
              </span>
              <h3 className="mt-5 font-display font-semibold text-lg text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-brand hover:gap-2.5 transition-all">
                Enquire <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HAJ & UMRAH ---------------- */
export function HajUmrah() {
  const features = [
    { icon: Building2, label: "Hotel Accommodation" },
    { icon: Plane, label: "Air Ticket" },
    { icon: Luggage, label: "Transportation" },
    { icon: BookOpen, label: "Guidance Support" },
    { icon: Users, label: "Group Assistance" },
    { icon: BadgeCheck, label: "Visa Processing" },
  ];
  return (
    <section id="haj-umrah" className="relative py-20 md:py-28 bg-navy text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath fill='%23C8A951' d='M40 0l8 32 32 8-32 8-8 32-8-32L0 40l32-8z'/%3E%3C/svg%3E\")",
          backgroundSize: "120px",
        }}
      />
      <div className="container-x relative grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Pilgrimage</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            Haj & Umrah Packages, <span className="text-gold">crafted with devotion.</span>
          </h2>
          <p className="mt-6 text-white/75 leading-relaxed">
            Travel for your sacred journey with complete peace of mind. Our premium Haj & Umrah
            packages include accommodation, transport, group support and expert religious guidance —
            so you can focus entirely on your worship.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 p-3.5 rounded-md bg-white/5 border border-white/10">
                <span className="grid place-items-center w-9 h-9 rounded-md bg-gold/15 text-gold shrink-0">
                  <Icon className="w-4.5 h-4.5" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-gold text-navy px-7 py-3.5 font-semibold hover:bg-gold/90 transition"
          >
            Enquire Haj & Umrah Packages <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=80"
              alt="Masjid al-Haram, Mecca"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block bg-white text-navy p-5 rounded-xl shadow-xl max-w-[220px] border border-gold/20">
            <div className="text-3xl font-display font-bold text-gold">5★</div>
            <div className="text-sm mt-1 font-medium">Hotels near Haram & Madinah</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
export function WhyUs() {
  const items = [
    { icon: Award, title: "Trusted Agency", text: "A reputation built on years of service." },
    { icon: Wallet, title: "Affordable Pricing", text: "Transparent fares with no hidden costs." },
    { icon: Clock, title: "Fast Visa Processing", text: "Efficient turnaround with strong embassy ties." },
    { icon: Users, title: "Experienced Consultants", text: "Friendly experts who guide every detail." },
    { icon: Headphones, title: "Customer Support", text: "24/7 assistance before, during and after travel." },
    { icon: Lock, title: "Safe & Secure", text: "Verified bookings and secure documentation." },
  ];
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Why Choose Us</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
            The premium standard in travel & visa consultancy.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="p-7 rounded-xl bg-secondary hover:bg-white border border-transparent hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <span className="grid place-items-center w-12 h-12 rounded-lg bg-navy text-gold">
                <Icon className="w-6 h-6" />
              </span>
              <h3 className="mt-5 font-display font-semibold text-lg text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DESTINATIONS ---------------- */
export function Destinations() {
  const list = [
    { name: "Dubai", country: "United Arab Emirates", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80" },
    { name: "Saudi Arabia", country: "Kingdom of Saudi Arabia", img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=80" },
    { name: "Qatar", country: "Doha & beyond", img: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=900&q=80" },
    { name: "Malaysia", country: "Kuala Lumpur", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80" },
    { name: "Turkey", country: "Istanbul & Cappadocia", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80" },
    { name: "Singapore", country: "City of the future", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80" },
  ];
  return (
    <section id="destinations" className="py-20 md:py-28 bg-secondary">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Popular Destinations</span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
              Explore the world's most loved destinations.
            </h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-navy hover:text-gold inline-flex items-center gap-1.5">
            View all packages <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((d) => (
            <a
              key={d.name}
              href="#contact"
              className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="text-xs uppercase tracking-widest text-gold font-semibold">{d.country}</div>
                <div className="mt-1 font-display font-bold text-2xl">{d.name}</div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Explore packages <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
export function Testimonials() {
  const data = [
    {
      name: "Abdul Rahman",
      role: "Umrah Pilgrim, Manjeri",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      text: "A truly spiritual experience. Every detail of our Umrah was taken care of — from visa to hotel near Haram. Highly recommended.",
    },
    {
      name: "Fathima K.",
      role: "Tourist Visa, Kalikavu",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      text: "Got my Dubai visa within days. The team is professional, transparent and genuinely helpful throughout the process.",
    },
    {
      name: "Mohammed Salim",
      role: "Gulf Job Visa, Malappuram",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
      text: "Al Arab Travels handled my Gulf employment visa flawlessly. Honest pricing and excellent communication. Five stars.",
    },
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % data.length), 6000);
    return () => clearInterval(t);
  }, [data.length]);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Testimonials</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
            Trusted by travelers across Kerala.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {data.map((t, i) => (
            <div
              key={t.name}
              className={`relative p-7 rounded-xl bg-white border transition-all duration-500 ${
                i === active
                  ? "border-gold shadow-xl md:-translate-y-2"
                  : "border-border shadow-sm"
              }`}
            >
              <Quote className="w-8 h-8 text-gold/30" />
              <div className="mt-3 flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-gold" />
                ))}
              </div>
              <p className="mt-4 text-foreground/80 leading-relaxed text-sm">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover" loading="lazy" />
                <div>
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const dur = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            setVal(Math.floor(p * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <div ref={ref} className="font-display font-bold text-4xl md:text-5xl text-gold">{val.toLocaleString()}{suffix}</div>;
}

export function Stats() {
  const stats = [
    { n: 12000, s: "+", label: "Happy Clients" },
    { n: 25000, s: "+", label: "Tickets Booked" },
    { n: 18000, s: "+", label: "Visas Approved" },
    { n: 15, s: "+", label: "Years Experience" },
  ];
  return (
    <section className="py-16 md:py-20 bg-navy text-white">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <Counter to={s.n} suffix={s.s} />
            <div className="mt-2 text-sm uppercase tracking-widest text-white/70 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Contact Us</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
            Plan your next journey with us.
          </h2>
          <p className="mt-4 text-foreground/70">
            Our travel consultants are ready to help you with bookings, visas and packages.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, title: "Office Address", lines: ["Al Arab Travels", "Kalikavu, Malappuram", "Kerala, India"] },
              { icon: Phone, title: "Phone", lines: ["+91 98765 43210"] },
              { icon: Mail, title: "Email", lines: ["info@alarabtravels.com"] },
            ].map(({ icon: Icon, title, lines }) => (
              <div key={title} className="p-5 rounded-xl border border-border flex gap-4 hover:border-gold transition-colors">
                <span className="grid place-items-center w-12 h-12 rounded-lg bg-navy text-gold shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-display font-semibold text-navy">{title}</div>
                  {lines.map((l) => (
                    <div key={l} className="text-sm text-muted-foreground">{l}</div>
                  ))}
                </div>
              </div>
            ))}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-brand text-white px-6 py-4 font-semibold hover:bg-emerald-brand/90 transition shadow-sm"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
            <div className="rounded-xl overflow-hidden border border-border h-56">
              <iframe
                title="Al Arab Travels Location"
                src="https://www.google.com/maps?q=Kalikavu,Malappuram,Kerala&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 p-7 md:p-9 rounded-xl bg-secondary border border-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" placeholder="Your full name" />
              <Field label="Phone" name="phone" placeholder="+91" />
            </div>
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Service of interest</label>
              <select className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20">
                <option>Flight Booking</option>
                <option>Visit Visa</option>
                <option>Tourist Visa</option>
                <option>Haj Package</option>
                <option>Umrah Package</option>
                <option>Holiday Package</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your travel plans..."
                className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-navy text-white px-8 py-3.5 font-semibold hover:bg-navy/90 transition"
            >
              {sent ? "Thank you — we'll be in touch!" : "Send Enquiry"} <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-navy mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-10 h-10 rounded-lg bg-white/10 text-gold">
              <Plane className="w-5 h-5" />
            </span>
            <span className="font-display font-bold text-lg">Al Arab Travels</span>
          </div>
          <p className="mt-4 text-sm text-white/65 leading-relaxed">
            A trusted travel and visa consultancy based in Kalikavu, Malappuram — helping
            Kerala travel the world with confidence and care.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-gold uppercase text-sm tracking-wider">Quick Links</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {["About", "Services", "Haj & Umrah", "Destinations", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/\s|&/g, "-").replace("--", "-")}`} className="text-white/70 hover:text-gold transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-gold uppercase text-sm tracking-wider">Services</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {["Flight Booking", "Visa Assistance", "Haj Packages", "Umrah Packages", "Tour Packages"].map((l) => (
              <li key={l} className="text-white/70 hover:text-gold transition-colors cursor-pointer">{l}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-gold uppercase text-sm tracking-wider">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />Kalikavu, Malappuram, Kerala</li>
            <li className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-gold shrink-0" />+91 98765 43210</li>
            <li className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-gold shrink-0" />info@alarabtravels.com</li>
          </ul>
          <div className="mt-5 flex gap-2.5">
            {["F", "in", "ig", "X"].map((s) => (
              <a key={s} href="#" aria-label={s} className="grid place-items-center w-9 h-9 rounded-md bg-white/10 hover:bg-gold hover:text-navy transition-colors text-xs font-bold">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
        <div>© {new Date().getFullYear()} Al Arab Travels. All rights reserved.</div>
        <div>Crafted with care in Kerala, India.</div>
      </div>
    </footer>
  );
}
