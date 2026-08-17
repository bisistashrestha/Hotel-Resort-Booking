import Hero from "@/components/home/Hero";
import OurPhilosophy from "@/components/home/OurPhilosophy";
import Accomodations from "@/components/home/Accomodations";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-forest)]">
      <Hero />
      <OurPhilosophy />
      <Accomodations />
    </main>
  );
}