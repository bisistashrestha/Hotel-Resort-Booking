import Image from "next/image";
import Link from "next/link";

export default function OurPhilosophy() {
  return (
    <section className="bg-[var(--color-forest)] text-[var(--color-cream)] pt-10 relative">
        <div className="flex items-center justify-center gap-8 pb-10">
        <div className="h-px flex-1 bg-[var(--color-cream)]"></div>

        <div className="text-center">
            <h2 className="font-heading text-8xl">山風</h2>
            <p className="text-[var(--color-primary)] font-body">Mountain Wind</p>
        </div>

        <div className="h-px flex-1 bg-[var(--color-cream)]"></div>
        </div>

        <div className="max-w-4xl w-230 place-self-center bg-[var(--color-deep-forest)] h-auto">
            <h1 className="text-center pt-5 text-[var(--color-primary)] text-[clamp(2.5rem,3vw,6rem)] leading-none">OUR PHILOSOPHY</h1>
            <p className="text-[var(--color-primary)] text-[clamp(0.2rem,1.2vw,1.5rem)] text-center font-heading">EST. 2026</p>
            <h2 className="pl-10 pt-10 pb-3 text-left pt-5 text-[var(--color-cream)] text-[clamp(1.5rem,2.5vw,3rem)] leading-none">Find Stillness in the Mountains</h2>
            <p className="text-[var(--color-primary)] text-[clamp(1.1rem,1.2vw,1.5rem)] text-left font-body px-10">
                Inspired by the spirit of <b>山風 (Mountain Wind), Yama Kaze</b> offers a peaceful escape where every moment feels unhurried.
            </p>
            <p className="pt-10 pl-58 font-quote text-[var(--color-cream)] text-[clamp(1rem,3.5vw,3.5rem)] text-left px-10 leading-none inline-flex flex-auto">
                "Luxury Isn't Excess. <br></br>It's peace."
            </p>
            <p className="text-right pr-58 pb-4 font-quote text-[var(--color-cream)] text-[clamp(0.6rem,2.7vw,2.7rem)] text-left px-10">
                - The  Yama Kaze Philosophy
            </p>
        </div>
            <div className="relative pt-10">
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
                <p className="pt-7 text-lg text-[var(--color-cream)] text-[clamp(1rem,3vw,6rem)]">↓</p>

                <h3 className="font-heading text-2xl text-[var(--color-cream)]">
                Explore The Collection
                </h3>
            </div>
            </div>
    </section>
  
); }