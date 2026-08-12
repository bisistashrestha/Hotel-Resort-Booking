import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import OurPhilosophy from "@/components/home/OurPhilosophy";
import Accomodations from "@/components/home/Accomodations"
import Footer from "@/components/layout/Footer"

export default function Home() {
    return (
        <main className="min-h-screen bg-[var(--color-forest)]">
            <Navbar />
            <Hero />
            <OurPhilosophy />
            <Accomodations/>
            <Footer/>
        </main>
    );
}