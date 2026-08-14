"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiFetch } from "@/lib/api";

type Booking = {
  id: number;
  room: number;
  room_number: string;
  room_type_name: string;
  check_in_date: string;
  check_out_date: string;
  total_price: string;
  status: string;
  created_at: string;
};

export default function MyTripsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBookings = async () => {
      try {
        const response = await apiFetch("/api/bookings/my-trips/");

        if (response.status === 401) {
          throw new Error("Please sign in to view your trips.");
        }

        if (!response.ok) {
          throw new Error("Unable to load your bookings.");
        }

        const data = await response.json();

        setBookings(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong."
        );
      } finally {
        setLoading(false);
      }
    };

    getBookings();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--color-cream)]">
        <p>Loading your trips...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-cream)]">
        <p className="text-red-600">{error}</p>

        <Link href="/login" className="mt-4 underline">
          Sign in
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-cream)] px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">

        <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">
          My Trips
        </p>

        <h1 className="mt-4 font-heading text-5xl text-[var(--color-forest)]">
          Your stays.
        </h1>

        <p className="mt-4 text-lg text-[var(--color-ink)]/70">
          View and manage your Yama Kaze reservations.
        </p>

        {bookings.length === 0 ? (
          <div className="mt-10 rounded-[2rem] bg-white p-8">
            <h2 className="font-heading text-2xl">
              No bookings yet.
            </h2>

            <p className="mt-2 text-[var(--color-ink)]/70">
              Your next mountain escape is waiting.
            </p>

            <Link
              href="/booking"
              className="mt-6 inline-block rounded-full bg-[var(--color-deep-forest)] px-6 py-3 text-white"
            >
              Book a stay
            </Link>
          </div>
        ) : (
          <div className="mt-10 space-y-5">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="rounded-[1.75rem] bg-white p-6 shadow-[0_16px_50px_rgba(35,56,43,0.08)]"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row">

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-primary)]">
                      {booking.status}
                    </p>

                    <h2 className="mt-2 font-heading text-2xl text-[var(--color-forest)]">
                      {booking.room_type_name}
                    </h2>

                    <p className="mt-1 text-sm text-[var(--color-ink)]/60">
                      Room {booking.room_number}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-sm text-[var(--color-ink)]/60">
                      Total
                    </p>

                    <p className="font-heading text-xl">
                      ₹{booking.total_price}
                    </p>
                  </div>

                </div>

                <div className="mt-6 grid gap-4 border-t border-black/10 pt-5 sm:grid-cols-2">

                  <div>
                    <p className="text-sm text-[var(--color-ink)]/50">
                      Check-in
                    </p>

                    <p className="mt-1">
                      {booking.check_in_date}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[var(--color-ink)]/50">
                      Check-out
                    </p>

                    <p className="mt-1">
                      {booking.check_out_date}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </section>
    </main>
  );
}