import Image from "next/image";
import Link from "next/link";

const heroImage = encodeURI("/images/Hero Section Image.jpg");

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-[var(--color-cream)]">
      <Image
        src={heroImage}
        alt="Mountain resort courtyard with pool and distant peaks"
        fill
        priority
        sizes="100vw"	
        className="object-cover object-center opacity-48 relative"
      />
      <div className="relative mx-auto min-h-[72vh] sm:min-h-[calc(100vh-88px)] px-4 sm:px-6 md:px-10">
        <div className="pointer-events-none absolute inset-x-0 top-[14%] sm:top-[10%] md:top-[9%] text-center">
          <h1 className="font-heading text-[clamp(2.45rem,8.3vw,6rem)] leading-[0.95] tracking-[-0.03em] text-[var(--color-cream)] drop-shadow-[0_10px_35px_rgba(0,0,0,0.22)]">
            Breathe.
          </h1>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-[42%] sm:top-[38%] md:top-[37%] text-center px-3">
          <h2 className="font-heading text-[clamp(2rem,7vw,4.9rem)] leading-[0.95] tracking-[-0.025em] text-[var(--color-cream)] drop-shadow-[0_10px_35px_rgba(0,0,0,0.18)]">
            Into the Mountains.
          </h2>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-[19%] sm:bottom-[15%] text-center px-4">
          <p className="text-[clamp(0.95rem,3.8vw,1.7rem)] leading-tight text-white/82 drop-shadow-[0_8px_18px_rgba(0,0,0,0.22)]">
            Discover Calm in Every Breeze.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 h-12 sm:h-[3rem] w-full bg-[var(--color-forest)]">
        <Link
          href="/booking"
          className="
            absolute
            left-1/2
            -top-[clamp(0.4rem,1.4vw,5rem)]
            -translate-x-1/2
            inline-flex
            items-center
            justify-center
            h-[clamp(46px,4.2vw,5rem)]
            px-[clamp(1.25rem,4vw,5rem)]
            text-[clamp(0.95rem,1.6vw,1.35rem)]
            rounded-full
            bg-[var(--color-primary)]
            !text-[var(--color-cream)]
            font-heading
            border-[0.25rem] sm:border-[0.4rem]
            border-[var(--color-forest)]
            transition-colors
            duration-300
            hover:bg-[var(--color-cream)]
            hover:!text-[var(--color-forest)]
          "
        >
          Reserve Stay
        </Link>
        </div>
       </div>
    </section>
  );
}