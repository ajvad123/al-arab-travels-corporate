import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import {
  Hero, About, Services, HajUmrah, WhyUs, Destinations,
  Testimonials, Stats, Contact, Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Al Arab Travels | Premium Travel & Visa Consultancy in Kalikavu, Kerala" },
      {
        name: "description",
        content:
          "Al Arab Travels — a trusted travel agency in Kalikavu, Malappuram, Kerala. Flight booking, visa assistance, Haj & Umrah packages, tour packages and 24/7 support.",
      },
      { name: "keywords", content: "Al Arab Travels, Kalikavu travel agency, Malappuram visa, Haj Umrah packages Kerala, flight booking Kerala" },
      { property: "og:title", content: "Al Arab Travels — Your Trusted Travel Partner" },
      { property: "og:description", content: "Premium flight booking, visa, Haj & Umrah services from Kalikavu, Malappuram, Kerala." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HajUmrah />
        <WhyUs />
        <Destinations />
        <Testimonials />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
