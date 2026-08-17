"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";

type Booking = {
  id: number;
  room: number;
  room_number: string;
  room_type_name: string;
  check_in_date: string;
  check_out_date: string;
  total_price: string | number;
  status: string;
  created_at: string;
};

export default function MyTripsPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cancelingId, setCancelingId] = useState<number | null>(null);

  const getBookings = async () => {
    try {
      const response = await apiFetch("/api/bookings/my-trips/");

      if (response.status === 401) {
        router.push("/login");
        return;
      }

      if (!response.ok) {
        throw new Error("Unable to load your bookings.");
      }

      const data = await response.json();
      setBookings(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookings();
  }, [router]);

  const handleCancel = async (bookingId: number) => {
    setCancelingId(bookingId);
    setError("");

    try {
      const response = await apiFetch(`/api/bookings/${bookingId}/cancel/`, {
        method: "PATCH",
      });

      if (response.status === 401) {
        router.push("/login");
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Unable to cancel this booking.");
      }

      setBookings((current) =>
        current.map((booking) =>
          booking.id === bookingId ? { ...booking, status: "CANCELLED" } : booking
        )
      );
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setCancelingId(null);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--color-forest)] px-4">
        <div className="rounded-[2rem] bg-[var(--color-cream)] px-6 py-5 text-[var(--color-forest)] shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
          <p>Loading your trips...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-forest)] px-4">
        <div className="rounded-[2rem] bg-[var(--color-cream)] px-8 py-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
          <p className="text-red-600">{error}</p>
          <Link href="/login" className="mt-4 inline-block underline">
            Sign in
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-forest)] px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl rounded-[2rem] bg-[var(--color-cream)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
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
            <h2 className="font-heading text-2xl">No bookings yet.</h2>
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
                    <p className="text-sm text-[var(--color-ink)]/60">Total</p>
                    <p className="font-heading text-xl">₹{Number(booking.total_price).toLocaleString()}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 border-t border-black/10 pt-5 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-[var(--color-ink)]/50">Check-in</p>
                    <p className="mt-1">{booking.check_in_date}</p>
                  </div>

                  <div>
                    <p className="text-sm text-[var(--color-ink)]/50">Check-out</p>
                    <p className="mt-1">{booking.check_out_date}</p>
                  </div>
                </div>

                {booking.status !== "CANCELLED" && (
                  <button
                    type="button"
                    onClick={() => handleCancel(booking.id)}
                    disabled={cancelingId === booking.id}
                    className="mt-6 rounded-full border border-red-200 px-5 py-2.5 text-sm font-medium text-red-700 transition hover:bg-red-50 disabled:opacity-60"
                  >
                    {cancelingId === booking.id ? "Cancelling..." : "Cancel booking"}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}