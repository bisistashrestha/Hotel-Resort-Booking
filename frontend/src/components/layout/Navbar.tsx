"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { logout } from "@/lib/api";
import Logo from "./Logo";

const moreLinks = [
  { href: "/rooms", label: "Rooms" },
  { href: "/offers", label: "Offers" },
  { href: "/experiences", label: "Experiences" },
  { href: "/profile", label: "Profile" },
  { href: "/my-trips", label: "My Trips" },
];

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000"}/api/users/profile/`, {
          credentials: "include",
        });
        setIsLoggedIn(response.ok);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--color-primary)]/98 text-[var(--color-cream)] shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm">
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 md:px-10">
        <div className="shrink-0">
          <Logo />
        </div>

        <div className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-10">
          <Link href="/rooms" className="text-[17px] font-medium transition duration-200 hover:opacity-75">
            Rooms
          </Link>
          <Link href="/experiences" className="text-[17px] font-medium transition duration-200 hover:opacity-75">
            Experiences
          </Link>
          <Link href="/offers" className="text-[17px] font-medium transition duration-200 hover:opacity-75">
            Offers
          </Link>

          <div ref={menuRef} className="relative">
            <button
              type="button"
              onClick={() => setIsMoreOpen((open) => !open)}
              className="flex items-center gap-1 text-[17px] font-medium transition duration-200 hover:opacity-75"
              aria-expanded={isMoreOpen}
            >
              More <span aria-hidden="true">▾</span>
            </button>

            {isMoreOpen && (
              <div className="absolute left-1/2 top-[calc(100%+0.75rem)] w-48 -translate-x-1/2 rounded-[1rem] border border-white/10 bg-[var(--color-deep-forest)] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
                {moreLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMoreOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm transition hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4 md:gap-6">
          {isLoggedIn ? (
            <>
              <Link href="/profile" className="hidden text-[17px] transition duration-200 hover:opacity-75 sm:inline-flex">
                Profile
              </Link>
              <Link href="/my-trips" className="hidden text-[17px] transition duration-200 hover:opacity-75 sm:inline-flex">
                My Trips
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="text-[17px] transition duration-200 hover:opacity-75"
              >
                Sign out
              </button>
            </>
          ) : (
            <Link href="/login" className="hidden text-[17px] transition duration-200 hover:opacity-75 sm:inline-flex">
              Login/Join
            </Link>
          )}

          <div ref={menuRef} className="relative lg:hidden">
            <button
              type="button"
              onClick={() => setIsMoreOpen((open) => !open)}
              className="rounded-full border border-white/30 px-3 py-2 text-sm font-medium transition hover:bg-white/10"
            >
              More
            </button>

            {isMoreOpen && (
              <div className="absolute right-0 top-[calc(100%+0.75rem)] w-48 rounded-[1rem] border border-white/10 bg-[var(--color-deep-forest)] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
                {moreLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMoreOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm transition hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/booking" className="border border-[var(--color-cream)] px-4 py-3 text-[15px] font-medium transition-colors duration-200 hover:bg-[var(--color-cream)] hover:text-[var(--color-primary)] sm:px-6 sm:py-3.5 sm:text-[17px]">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}