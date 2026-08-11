import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--color-primary)]/98 text-[var(--color-cream)] shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm">
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 md:px-10">
        <div className="shrink-0">
          <Logo />
        </div>

        <ul className="hidden flex-1 items-center justify-center gap-7 lg:flex xl:gap-10">
          <li>
            <Link href="/rooms" className="text-[17px] font-medium transition duration-200 hover:opacity-75">
              Rooms
            </Link>
          </li>

          <li>
            <Link href="/experiences" className="text-[17px] font-medium transition duration-200 hover:opacity-75">
              Experiences
            </Link>
          </li>

          <li>
            <Link href="/offers" className="text-[17px] font-medium transition duration-200 hover:opacity-75">
              Offers
            </Link>
          </li>

          <li>
            <button className="text-[17px] font-medium transition duration-200 hover:opacity-75">
              More ▾
            </button>
          </li>
        </ul>

        <div className="flex shrink-0 items-center gap-4 sm:gap-6 md:gap-8">
          <Link href="/login" className="hidden text-[17px] transition duration-200 hover:opacity-75 sm:inline-flex">
            Login/Join
          </Link>

          <button className="border border-[var(--color-cream)] px-7 py-4 sm:px-7 sm:py-4 sm:text-[18px] text-[16px] font-medium transition-colors duration-200 hover:bg-[var(--color-cream)] hover:text-[var(--color-primary)]">
            <Link href="/booking">Book Now</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}