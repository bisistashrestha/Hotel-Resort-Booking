import Link from "next/link";
import Logo from "./Logo";

const quickLinks = [
  { href: "/", label: "About Yama Kaze" },
  { href: "/rooms", label: "Rooms" },
  { href: "/experiences", label: "Experiences" },
  { href: "/offers", label: "Offers" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/dining", label: "Dining" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-deep-forest)] pt-12 text-[var(--color-cream)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="mb-5">
              <Logo />
            </div>
            <p className="max-w-sm text-sm leading-7 text-[var(--color-cream)]/80">
              A mountain retreat built for slower mornings, meaningful stays, and unforgettable evenings under the pines.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Quick Links
            </p>
            <div className="mt-5 grid gap-2 text-sm text-[var(--color-cream)]/80">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-[var(--color-primary)]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Contact
            </p>
            <div className="mt-5 space-y-2 text-sm text-[var(--color-cream)]/80">
              <p>1-234-111-322</p>
              <p>+91 12345 12345</p>
              <a href="mailto:reservations@yamakaze.com" className="block transition hover:text-[var(--color-primary)]">
                reservations@yamakaze.com
              </a>
              <a href="mailto:contactus@yamakaze.com" className="block transition hover:text-[var(--color-primary)]">
                contactus@yamakaze.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 pb-8">
          <p className="text-center text-sm text-[var(--color-cream)]/70">
            © 2026 Yama Kaze. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}