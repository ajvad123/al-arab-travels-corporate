import { useEffect, useRef, useState } from "react";
import {
  Plane, FileCheck, MapPin, Phone, Mail, MessageCircle, Star,
  ShieldCheck, Clock, Award, Users, BadgeCheck, Wallet, Headphones,
  Lock, Briefcase, Globe2, Luggage, BookOpen, Building2, Compass,
  ArrowRight, Quote, CheckCircle2, Calendar, Sparkles,
} from "lucide-react";
import heroLanding from "@/assets/hero-landing.jpg";

/* ---------------- SCROLL ANIMATION WRAPPER ---------------- */
function ScrollAnimate({
  children,
  type = "fade-up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  type?: "fade-up" | "fade-left" | "fade-right" | "zoom-in";
  delay?: number;
  className?: string;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let hiddenStyles = "opacity-0 translate-y-12";
  if (type === "fade-left") hiddenStyles = "opacity-0 -translate-x-12";
  if (type === "fade-right") hiddenStyles = "opacity-0 translate-x-12";
  if (type === "zoom-in") hiddenStyles = "opacity-0 scale-95 translate-y-8";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0 translate-x-0 scale-100" : hiddenStyles
      }`}
    >
      {children}
    </div>
  );
}

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      <img
        src={heroLanding}
        alt="Al Arab Travels — premium global travel and Haj & Umrah services"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[pulse_12s_ease-in-out_infinite]"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,81,0.15),transparent_55%)]" />

      <div className="container-x w-full py-20 md:py-28 text-white relative z-10">
        <ScrollAnimate type="fade-up" className="max-w-2xl lg:max-w-3xl">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase text-gold shadow-lg hover:bg-white/15 transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" /> Premium Travel & Visa Consultancy
          </span>
          <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.12] tracking-tight">
            Your Trusted Travel Partner for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold drop-shadow-sm">
              Global Journeys
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-white/90 max-w-xl lg:max-w-2xl leading-relaxed font-light">
            From international flight bookings and visa assistance to Haj & Umrah pilgrimage
            packages — Al Arab Travels delivers a seamless, professional experience for every
            traveler from Kerala to the world.
          </p>

          <div className="mt-10 flex flex-wrap gap-4.5 items-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gold text-navy px-8 py-4 font-semibold hover:bg-gold/90 transition-all duration-300 shadow-[0_4px_20px_rgba(200,169,81,0.4)] hover:shadow-[0_6px_25px_rgba(200,169,81,0.6)] hover:-translate-y-0.5 text-base"
            >
              Book Now <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:-translate-y-0.5 text-base"
            >
              Contact Us
            </a>
          </div>
        </ScrollAnimate>

        <ScrollAnimate type="fade-up" delay={300} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl pt-8 border-t border-white/15">
          {[
            { icon: ShieldCheck, label: "Govt. Licensed Agency", desc: "100% verified & accredited" },
            { icon: Users, label: "Trusted by Thousands", desc: "15+ years of excellence" },
            { icon: Clock, label: "24/7 Dedicated Support", desc: "Assistance at every step" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-gold/40 transition-all duration-300 group">
              <span className="grid place-items-center w-11 h-11 rounded-lg bg-gold/20 text-gold group-hover:scale-110 transition-transform shadow-inner shrink-0">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <div className="font-semibold text-sm text-white/95 group-hover:text-white transition-colors">{label}</div>
                <div className="text-xs text-white/70 mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </ScrollAnimate>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function About() {
  const items = [
    { icon: Plane, title: "Flight Booking", text: "International & domestic flights at the best competitive fares with instant ticketing." },
    { icon: FileCheck, title: "Visa Processing", text: "End-to-end visit, tourist and work visa documentation with high embassy success rates." },
    { icon: Compass, title: "Haj & Umrah", text: "Hand-crafted pilgrimage packages featuring premium proximity hotels and full guidance." },
    { icon: Globe2, title: "Holiday Tours", text: "Curated premium holiday packages across breathtaking global destinations." },
  ];
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />
      <div className="container-x relative grid lg:grid-cols-2 gap-16 items-center">
        <ScrollAnimate type="fade-left">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            <span className="w-6 h-0.5 bg-gold rounded-full" /> About Al Arab Travels
          </div>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy leading-tight tracking-tight">
            A trusted standard in international travel, based in Kalikavu, Kerala.
          </h2>
          <p className="mt-6 text-foreground/80 leading-relaxed text-base md:text-lg font-normal">
            For years, Al Arab Travels has operated as a premier travel and visa consultancy, helping families, professionals, and pilgrims from Malappuram and across Kerala explore the world with absolute confidence. We combine deep regional expertise with extensive global airline and embassy networks to deliver seamless flight, visa, and travel solutions.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 p-6 rounded-2xl bg-secondary border border-border/60 shadow-sm">
            {[
              { k: "15+", v: "Years Trusted" },
              { k: "50+", v: "Global Destinations" },
              { k: "100%", v: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.v} className="border-l-4 border-gold pl-4 py-1 bg-gradient-to-r from-gold/5 to-transparent rounded-r-xl">
                <div className="font-display font-bold text-2xl md:text-3xl text-navy">{s.k}</div>
                <div className="text-[11px] md:text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </ScrollAnimate>

        <div className="grid sm:grid-cols-2 gap-6 items-stretch">
          {items.map(({ icon: Icon, title, text }, i) => (
            <ScrollAnimate
              key={title}
              type="fade-right"
              delay={i * 150}
              className="group p-8 rounded-2xl border border-border/80 bg-gradient-to-b from-white via-secondary/30 to-secondary/50 hover:border-gold/50 shadow-sm hover:shadow-card-premium transition-all duration-500 relative overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 h-full"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent group-hover:via-gold transition-all duration-500" />
              <div className="flex flex-col flex-1">
                <div className="min-h-[120px] flex flex-col items-start">
                  <span className="grid place-items-center w-14 h-14 rounded-xl bg-gold/15 text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-sm group-hover:shadow-glow group-hover:scale-110 mb-6 shrink-0">
                    <Icon className="w-7 h-7" />
                  </span>
                  <h3 className="font-display font-bold text-xl text-navy group-hover:text-gold transition-colors leading-snug line-clamp-1">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 leading-relaxed transition-colors mt-1">{text}</p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
export function Services() {
  const services = [
    { icon: Plane, tag: "Instant Ticketing", title: "Flight Ticket Booking", text: "Professional international and domestic flight reservations with competitive corporate fares, flexible date changes, and instant seat confirmation." },
    { icon: FileCheck, tag: "Fast Track", title: "Visa Processing Services", text: "Comprehensive visa support for visit, tourist, business, and employment travel. We handle documentation, appointments, and embassy compliance." },
    { icon: BookOpen, tag: "Premium Proximity", title: "Haj & Umrah Packages", text: "Expertly arranged pilgrimage packages featuring 5-star hotels near the Haram, comfortable luxury transport, and dedicated multilingual religious guides." },
    { icon: ShieldCheck, tag: "Comprehensive", title: "Global Travel Insurance", text: "Reliable travel insurance plans covering emergency medical expenses, trip cancellations, flight delays, and baggage loss for complete peace of mind." },
  ];
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-secondary via-white to-secondary relative overflow-hidden">
      <div className="container-x relative z-10">
        <ScrollAnimate type="fade-up" className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            <span className="w-6 h-0.5 bg-gold rounded-full" /> Our Core Services
          </div>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy leading-tight tracking-tight">
            Professional travel & visa services tailored for every journey.
          </h2>
          <p className="mt-4 text-foreground/75 text-lg">
            Depend on Al Arab Travels for precise planning, transparent pricing, and dedicated support from initial enquiry to your safe return.
          </p>
        </ScrollAnimate>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {services.map(({ icon: Icon, tag, title, text }, i) => (
            <ScrollAnimate
              key={title}
              type="zoom-in"
              delay={i * 150}
              className="group relative p-8 rounded-2xl bg-white border border-border/80 hover:border-gold/60 shadow-md hover:shadow-card-premium transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-2 h-full"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex flex-col flex-1">
                <div className="min-h-[156px] flex flex-col items-start w-full">
                  <div className="w-full flex items-start justify-between gap-2 mb-6">
                    <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 text-gold group-hover:from-gold group-hover:to-yellow-500 group-hover:text-navy transition-all duration-500 shadow-sm group-hover:shadow-glow group-hover:scale-110 shrink-0">
                      <Icon className="w-7 h-7" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-gold/10 text-gold rounded-full group-hover:bg-navy group-hover:text-white transition-colors shadow-sm text-right leading-tight max-w-[140px] shrink">
                      {tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy group-hover:text-gold transition-colors leading-snug line-clamp-2 w-full">
                    {title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 leading-relaxed transition-colors mt-2">
                  {text}
                </p>
              </div>
              <a href="#contact" className="mt-8 pt-5 border-t border-border/60 flex items-center justify-between text-sm font-semibold text-navy group-hover:text-gold transition-colors w-full">
                Enquire Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HAJ & UMRAH ---------------- */
export function HajUmrah() {
  const features = [
    { icon: Building2, label: "Premium Hotel Accommodation" },
    { icon: Plane, label: "Direct & Connecting Flights" },
    { icon: Luggage, label: "Comfortable Transportation" },
    { icon: BookOpen, label: "Expert Religious Guidance" },
    { icon: Users, label: "Dedicated Group Assistance" },
    { icon: BadgeCheck, label: "Quick Visa Processing" },
  ];
  return (
    <section id="haj-umrah" className="relative py-20 md:py-28 bg-navy text-white overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath fill='%23C8A951' d='M40 0l8 32 32 8-32 8-8 32-8-32L0 40l32-8z'/%3E%3C/svg%3E\")",
          backgroundSize: "120px",
        }}
      />
      <div className="container-x relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <ScrollAnimate type="fade-left">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            <span className="w-6 h-0.5 bg-gold rounded-full" /> Sacred Pilgrimage
          </div>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
            Haj & Umrah Packages, <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">crafted with devotion.</span>
          </h2>
          <p className="mt-6 text-white/80 leading-relaxed text-base md:text-lg font-light">
            Travel for your sacred journey with complete peace of mind. Our premium Haj & Umrah
            packages include accommodation, transport, group support and expert religious guidance —
            so you can focus entirely on your worship.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-gold/50 transition-all duration-300 group">
                <span className="grid place-items-center w-11 h-11 rounded-lg bg-gold/15 text-gold shrink-0 group-hover:bg-gold group-hover:text-navy transition-colors duration-300 shadow-inner">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="text-sm font-semibold tracking-wide group-hover:text-white transition-colors">{label}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-12 group inline-flex items-center gap-3 rounded-xl bg-gold text-navy px-8 py-4 font-semibold hover:bg-gold/90 transition-all duration-300 shadow-[0_4px_25px_rgba(200,169,81,0.4)] hover:shadow-[0_6px_30px_rgba(200,169,81,0.6)] hover:-translate-y-0.5 text-base"
          >
            Enquire Haj & Umrah Packages <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </ScrollAnimate>

        <ScrollAnimate type="fade-right" delay={200} className="relative lg:pl-6">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-gold/30 shadow-[0_0_50px_rgba(200,169,81,0.25)] group">
            <img
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=80"
              alt="Masjid al-Haram, Mecca"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60" />
          </div>
          <div className="absolute bottom-8 left-0 sm:left-2 hidden sm:flex items-center gap-4 bg-white/95 backdrop-blur-md text-navy p-6 rounded-2xl shadow-2xl border border-gold/40 max-w-[280px] hover:-translate-y-1 transition-transform duration-500 animate-[bounce_6s_ease-in-out_infinite]">
            <div className="grid place-items-center w-14 h-14 rounded-xl bg-gold/20 text-gold font-display font-bold text-2xl shrink-0 shadow-inner">5★</div>
            <div>
              <div className="font-display font-bold text-base text-navy leading-tight">Premium Hotels</div>
              <div className="text-xs text-muted-foreground mt-1 font-medium">Located near Haram & Madinah</div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
export function WhyUs() {
  const items = [
    { icon: Award, title: "Trusted Agency", text: "A solid reputation built on years of dedicated, transparent travel service across Kerala." },
    { icon: Wallet, title: "Affordable Pricing", text: "Highly competitive, upfront fares with zero hidden costs or last-minute surprises." },
    { icon: Clock, title: "Fast Visa Processing", text: "Efficient turnaround times backed by strong embassy, consulate, and VFS ties." },
    { icon: Users, title: "Experienced Consultants", text: "Friendly, highly trained travel experts who guide you through every single detail." },
    { icon: Headphones, title: "24/7 Customer Support", text: "Round-the-clock dedicated assistance before, during, and after your entire trip." },
    { icon: Lock, title: "Safe & Secure", text: "100% verified airline bookings, secure visa documentation, and complete data privacy." },
  ];
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="container-x relative z-10">
        <ScrollAnimate type="fade-up" className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            <span className="w-6 h-0.5 bg-gold rounded-full" /> Why Choose Al Arab <span className="w-6 h-0.5 bg-gold rounded-full" />
          </div>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy leading-tight tracking-tight">
            The premium standard in travel & visa consultancy.
          </h2>
          <p className="mt-4 text-foreground/75 text-lg">
            Experience unparalleled service, exceptional reliability, and complete dedication to your travel needs.
          </p>
        </ScrollAnimate>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {items.map(({ icon: Icon, title, text }, i) => (
            <ScrollAnimate
              key={title}
              type="fade-up"
              delay={i * 100}
              className="p-8 rounded-2xl bg-gradient-to-b from-white to-secondary border border-border/80 hover:border-gold/50 shadow-sm hover:shadow-card-premium transition-all duration-500 group relative overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 h-full"
            >
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-all duration-500 pointer-events-none" />
              <div className="flex flex-col flex-1">
                <div className="min-h-[130px] flex flex-col items-start w-full">
                  <span className="grid place-items-center w-14 h-14 rounded-2xl bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-md group-hover:shadow-glow group-hover:scale-110 mb-6 shrink-0">
                    <Icon className="w-7 h-7" />
                  </span>
                  <h3 className="font-display font-bold text-xl text-navy group-hover:text-gold transition-colors leading-snug line-clamp-1 w-full">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 leading-relaxed transition-colors mt-1">{text}</p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DESTINATIONS ---------------- */
export function Destinations() {
  const list = [
    { name: "Dubai", country: "United Arab Emirates", tag: "Daily Flights", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80" },
    { name: "Saudi Arabia", country: "Kingdom of Saudi Arabia", tag: "Haj & Umrah", img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=80" },
    { name: "Qatar", country: "Doha & beyond", tag: "Visit & Work Visas", img: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=900&q=80" },
    { name: "Malaysia", country: "Kuala Lumpur", tag: "Holiday Packages", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80" },
    { name: "Turkey", country: "Istanbul & Cappadocia", tag: "Guided Tours", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80" },
    { name: "Singapore", country: "City of the future", tag: "Corporate Travel", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80" },
  ];
  return (
    <section id="destinations" className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      <div className="container-x relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <ScrollAnimate type="fade-up" className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              <span className="w-6 h-0.5 bg-gold rounded-full" /> Popular Destinations
            </div>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy leading-tight tracking-tight">
              Explore the world's most loved destinations.
            </h2>
          </ScrollAnimate>
          <ScrollAnimate type="fade-up" delay={200}>
            <a href="#contact" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-border text-sm font-semibold text-navy hover:border-gold hover:text-gold transition-all duration-300 shadow-sm hover:shadow-md">
              View all packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </ScrollAnimate>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((d, i) => (
            <ScrollAnimate
              key={d.name}
              type="zoom-in"
              delay={i * 100}
            >
              <a
                href="#contact"
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-card-premium transition-all duration-500 border border-border/50 block hover:-translate-y-1.5"
              >
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="absolute top-6 right-6">
                  <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-navy font-bold border border-white/20 shadow-lg group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                    {d.tag}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8 text-white flex flex-col justify-end">
                  <div className="text-xs uppercase tracking-widest text-gold font-bold">{d.country}</div>
                  <div className="mt-1 font-display font-bold text-3xl tracking-tight">{d.name}</div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-navy bg-gold px-6 py-3 rounded-xl w-max opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-glow">
                    Explore packages <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </ScrollAnimate>
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
      text: "A truly spiritual experience. Every detail of our Umrah was taken care of — from visa to hotel near Haram. Highly recommended for anyone seeking peace of mind.",
    },
    {
      name: "Fathima K.",
      role: "Tourist Visa, Kalikavu",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b2:9330?auto=format&fit=crop&w=200&q=80",
      text: "Got my Dubai visit visa within days! The team is incredibly professional, transparent and genuinely helpful throughout the entire process. Exceptional service.",
    },
    {
      name: "Mohammed Salim",
      role: "Gulf Job Visa, Malappuram",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
      text: "Al Arab Travels handled my Gulf employment visa flawlessly. Honest pricing, prompt updates and excellent communication from start to finish. Five stars.",
    },
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % data.length), 6000);
    return () => clearInterval(t);
  }, [data.length]);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-secondary/50 to-white relative overflow-hidden">
      <div className="container-x relative z-10">
        <ScrollAnimate type="fade-up" className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            <span className="w-6 h-0.5 bg-gold rounded-full" /> Client Testimonials <span className="w-6 h-0.5 bg-gold rounded-full" />
          </div>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy leading-tight tracking-tight">
            Trusted by travelers across Kerala.
          </h2>
          <p className="mt-4 text-foreground/75 text-lg">
            Read what our clients have to say about their experiences traveling with Al Arab Travels.
          </p>
        </ScrollAnimate>

        <div className="mt-16 grid md:grid-cols-3 gap-8 items-stretch">
          {data.map((t, i) => (
            <ScrollAnimate
              key={t.name}
              type="fade-up"
              delay={i * 150}
              className={`relative p-8 md:p-10 rounded-2xl transition-all duration-500 flex flex-col justify-between h-full ${
                i === active
                  ? "bg-gradient-to-b from-white via-gold/5 to-white border-2 border-gold shadow-card-premium md:-translate-y-4 scale-105 z-10"
                  : "bg-white border border-border/80 shadow-md hover:shadow-card-premium hover:-translate-y-1.5 opacity-90 hover:opacity-100"
              }`}
            >
              <div>
                <Quote className="w-10 h-10 text-gold/30 absolute top-6 right-6 pointer-events-none" />
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="w-4.5 h-4.5 fill-gold" />
                  ))}
                </div>
                <p className="mt-6 text-foreground/85 leading-relaxed text-base italic">"{t.text}"</p>
              </div>
              <div className="mt-8 pt-6 border-t border-border flex items-center gap-4 w-full">
                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-gold/40 shadow-md shrink-0" loading="lazy" />
                <div>
                  <div className="font-display font-bold text-lg text-navy leading-tight">{t.name}</div>
                  <div className="text-xs font-semibold text-gold uppercase tracking-wider mt-0.5">{t.role}</div>
                </div>
              </div>
            </ScrollAnimate>
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
          const dur = 2000;
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
  return (
    <div ref={ref} className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold drop-shadow-md whitespace-nowrap tracking-tight">
      {val.toLocaleString()}{suffix}
    </div>
  );
}

export function Stats() {
  const stats = [
    { n: 12000, s: "+", label: "Happy Clients" },
    { n: 25000, s: "+", label: "Tickets Booked" },
    { n: 18000, s: "+", label: "Visas Approved" },
    { n: 15, s: "+", label: "Years Experience" },
  ];
  return (
    <section className="py-16 md:py-20 bg-navy relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,81,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="container-x relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 text-center">
        {stats.map((s, i) => (
          <ScrollAnimate key={s.label} type="fade-up" delay={i * 100} className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:border-gold/40 transition-colors duration-300 flex flex-col justify-center items-center">
            <Counter to={s.n} suffix={s.s} />
            <div className="mt-2 sm:mt-3 text-[11px] sm:text-xs md:text-sm lg:text-base uppercase tracking-wider text-white/80 font-semibold leading-snug px-1">{s.label}</div>
          </ScrollAnimate>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container-x relative z-10">
        <ScrollAnimate type="fade-up" className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            <span className="w-6 h-0.5 bg-gold rounded-full" /> Contact Al Arab Travels <span className="w-6 h-0.5 bg-gold rounded-full" />
          </div>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy leading-tight tracking-tight">
            Plan your next journey with us.
          </h2>
          <p className="mt-4 text-foreground/75 text-lg">
            Our experienced travel consultants are ready to help you with instant bookings, visas and custom packages.
          </p>
        </ScrollAnimate>

        <div className="mt-16 grid lg:grid-cols-5 gap-10 items-start">
          <ScrollAnimate type="fade-left" delay={200} className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, title: "Office Address", lines: ["Al Arab Travels", "Kalikavu, Malappuram", "Kerala, India"] },
              { icon: Phone, title: "Phone Number", lines: ["+91 98765 43210"] },
              { icon: Mail, title: "Email Address", lines: ["info@alarabtravels.com"] },
            ].map(({ icon: Icon, title, lines }) => (
              <div key={title} className="p-6 rounded-2xl border border-border/80 bg-gradient-to-b from-white to-secondary/50 hover:border-gold/60 shadow-md hover:shadow-card-premium transition-all duration-500 flex gap-5 items-start group hover:-translate-y-1">
                <span className="grid place-items-center w-14 h-14 rounded-xl bg-gold/15 text-gold shrink-0 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-sm group-hover:shadow-glow group-hover:scale-110">
                  <Icon className="w-6 h-6" />
                </span>
                <div>
                  <div className="font-display font-bold text-lg text-navy">{title}</div>
                  <div className="mt-1 space-y-0.5">
                    {lines.map((l) => (
                      <div key={l} className="text-sm text-muted-foreground">{l}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-3 w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-5 font-semibold hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 text-base"
            >
              <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
            </a>
            <div className="rounded-2xl overflow-hidden border border-border h-64 shadow-md">
              <iframe
                title="Al Arab Travels Location"
                src="https://www.google.com/maps?q=Kalikavu,Malappuram,Kerala&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </ScrollAnimate>

          <ScrollAnimate type="fade-right" delay={200} className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white via-secondary/30 to-secondary/80 border border-border/80 shadow-card-premium space-y-6 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-gold via-yellow-300 to-gold" />
              <h3 className="font-display font-bold text-2xl text-navy mb-2">Send an Enquiry</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Full Name" name="name" placeholder="Your full name" />
                <Field label="Phone Number" name="phone" placeholder="+91" />
              </div>
              <Field label="Email Address" name="email" type="email" placeholder="you@email.com" />
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Service of interest</label>
                <select className="w-full rounded-xl border border-border bg-white px-5 py-4 text-sm focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/15 transition-all shadow-sm">
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
                  placeholder="Tell us about your travel plans, dates or specific requirements..."
                  className="w-full rounded-xl border border-border bg-white px-5 py-4 text-sm focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/15 transition-all shadow-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-navy text-white px-10 py-4 font-semibold hover:bg-gold hover:text-navy transition-all duration-300 shadow-lg hover:shadow-gold/30 text-base"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Thank you — we'll be in touch!
                  </>
                ) : (
                  <>
                    Send Enquiry <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </ScrollAnimate>
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
        className="w-full rounded-xl border border-border bg-white px-5 py-4 text-sm focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/15 transition-all shadow-sm"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t border-white/10">
      <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-white/10 text-gold shadow-inner">
              <Plane className="w-6 h-6" />
            </span>
            <span className="font-display font-bold text-xl tracking-tight">Al Arab Travels</span>
          </div>
          <p className="mt-6 text-sm text-white/70 leading-relaxed font-light">
            A trusted travel and visa consultancy based in Kalikavu, Malappuram — helping
            Kerala travel the world with confidence, transparency and utmost care.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-gold uppercase text-sm tracking-widest border-l-2 border-gold pl-3">Quick Links</h4>
          <ul className="mt-6 space-y-3 text-sm">
            {["About", "Services", "Haj & Umrah", "Destinations", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/\s|&/g, "-").replace("--", "-")}`} className="text-white/70 hover:text-gold hover:pl-1 transition-all duration-300 block">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-gold uppercase text-sm tracking-widest border-l-2 border-gold pl-3">Our Services</h4>
          <ul className="mt-6 space-y-3 text-sm">
            {["Flight Booking", "Visa Assistance", "Haj Packages", "Umrah Packages", "Tour Packages"].map((l) => (
              <li key={l} className="text-white/70 hover:text-gold hover:pl-1 transition-all duration-300 cursor-pointer block">{l}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-gold uppercase text-sm tracking-widest border-l-2 border-gold pl-3">Contact Info</h4>
          <ul className="mt-6 space-y-3.5 text-sm text-white/70">
            <li className="flex items-start gap-3"><MapPin className="w-4.5 h-4.5 mt-0.5 text-gold shrink-0" />Kalikavu, Malappuram, Kerala</li>
            <li className="flex items-center gap-3"><Phone className="w-4.5 h-4.5 text-gold shrink-0" />+91 98765 43210</li>
            <li className="flex items-center gap-3"><Mail className="w-4.5 h-4.5 text-gold shrink-0" />info@alarabtravels.com</li>
          </ul>
          <div className="mt-6 flex gap-3">
            {["F", "in", "ig", "X"].map((s) => (
              <a key={s} href="#" aria-label={s} className="grid place-items-center w-10 h-10 rounded-xl bg-white/10 hover:bg-gold hover:text-navy transition-all duration-300 text-xs font-bold shadow-sm hover:shadow-gold/20 hover:-translate-y-0.5">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60 font-light">
        <div>© {new Date().getFullYear()} Al Arab Travels. All rights reserved.</div>
        <div>Crafted with care and devotion in Kerala, India.</div>
      </div>
    </footer>
  );
}
