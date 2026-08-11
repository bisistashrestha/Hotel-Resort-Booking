import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block">
      <div className="leading-none text-[var(--color-cream)]">

        <p className="text-center text-[0.72rem] tracking-[0.34em] sm:text-sm">
          山風
        </p>

        <p className="mt-1 font-heading text-[clamp(1rem,3vw,2.3rem)] leading-none">
          Yama Kaze
        </p>

        <p className="mt-1 text-center text-[10px] uppercase tracking-[0.34em] opacity-90 sm:text-[11px]">
          Mountain Resort
        </p>

      </div>
    </Link>
  );
}