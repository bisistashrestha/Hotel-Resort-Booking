import Image from "next/image";
import Link from "next/link";

export default function OurPhilosophy() {
  return (
    <section className="bg-[var(--color-forest)] text-[var(--color-cream)] pt-8 sm:pt-10 relative">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-4 px-4 sm:gap-8 sm:px-6 pb-8 sm:pb-10">
        <div className="h-px flex-1 bg-[var(--color-cream)]"></div>

        <div className="text-center">
            <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl leading-none">山風</h2>
            <p className="text-[var(--color-primary)] font-body text-sm sm:text-base">Mountain Wind</p>
        </div>

        <div className="h-px flex-1 bg-[var(--color-cream)]"></div>
        </div>

        <div className="mx-auto w-[min(92vw,64rem)] bg-[var(--color-deep-forest)] h-auto px-4 sm:px-8 md:px-10 py-6 sm:py-8">
            <h1 className="text-center text-[var(--color-primary)] text-[clamp(2rem,6vw,6rem)] leading-none">OUR PHILOSOPHY</h1>
            <p className="text-[var(--color-primary)] text-[clamp(0.7rem,1.2vw,1.1rem)] text-center font-heading">EST. 2026</p>
            <h2 className="pt-8 sm:pt-10 pb-3 text-left text-[var(--color-cream)] text-[clamp(1.5rem,2.5vw,3rem)] leading-tight">Find Stillness in the Mountains</h2>
            <p className="text-[var(--color-primary)] text-[clamp(1rem,1.2vw,1.5rem)] text-left font-body">
                Inspired by the spirit of <b>山風 (Mountain Wind), Yama Kaze</b> offers a peaceful escape where every moment feels unhurried.
            </p>
            <p className="pt-8 sm:pt-10 font-quote text-[var(--color-cream)] text-[clamp(1.2rem,3.2vw,3.5rem)] text-left leading-none">
                "Luxury Isn't Excess. <br></br>It's peace."
            </p>
            <p className="text-right pb-1 sm:pb-2 font-quote text-[var(--color-cream)] text-[clamp(0.9rem,2.3vw,2.2rem)]">
                - The  Yama Kaze Philosophy
            </p>
        </div>
            <div className="relative pt-8 sm:pt-10">
            <img src="/images/wave.svg" alt="" className="w-full inline-flex flex-auto" />

            <div
                className="
                absolute
                inset-0
                flex
                flex-col
                items-center
                justify-center
                "
            >
                <p className="pt-3 sm:pt-7 text-[var(--color-cream)] text-[clamp(0.9rem,3vw,6rem)]">↓</p>

                <h3 className="font-heading text-base sm:text-2xl text-[var(--color-cream)] text-center px-2">
                Explore The Collection
                </h3>
            </div>
            </div>
    </section>
  
); }