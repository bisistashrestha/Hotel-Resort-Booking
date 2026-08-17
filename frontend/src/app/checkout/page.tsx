"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { apiFetch } from "@/lib/api";

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const roomId = Number(searchParams.get("roomId") || 0);
  const roomType = searchParams.get("roomType") || "Selected room";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guests = Number(searchParams.get("guests") || 0);
  const pricePerNight = Number(searchParams.get("pricePerNight") || 0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, [checkIn, checkOut]);

  const totalPrice = nights * pricePerNight;

  useEffect(() => {
    if (!roomId || !checkIn || !checkOut || !guests) {
      router.replace("/booking");
    }
  }, [checkIn, checkOut, guests, roomId, router]);

  const handleBooking = async () => {
    if (!roomId || !checkIn || !checkOut) return;

    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await apiFetch("/api/bookings/book/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          room: roomId,
          check_in_date: checkIn,
          check_out_date: checkOut,
        }),
      });

      const data = await response.json();

      if (response.status === 401) {
        const returnTo = `${window.location.pathname}${window.location.search}`;
        localStorage.setItem("return_to", returnTo);
        router.push(`/login?redirect=${encodeURIComponent(returnTo)}`);
        return;
      }

      if (!response.ok) {
        throw new Error(
          data.detail ||
            data.non_field_errors?.[0] ||
            data.dates ||
            "Unable to complete the booking."
        );
      }

      setSuccessMessage("Booking confirmed. Redirecting to your trips...");
      setTimeout(() => router.push("/my-trips"), 1200);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Something went wrong while confirming your booking."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--color-forest)] px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl rounded-[2rem] bg-[var(--color-cream)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]">
          Checkout
        </p>

        <h1 className="mt-4 font-heading text-5xl text-[var(--color-forest)]">
          Complete your stay.
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-[1.5rem] border border-black/10 bg-[var(--color-cream)] p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-primary)]">Booking summary</p>
              <h2 className="mt-3 font-heading text-3xl text-[var(--color-forest)]">{roomType}</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/45">Check-in</p>
                  <p className="mt-1 font-medium">{checkIn}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/45">Check-out</p>
                  <p className="mt-1 font-medium">{checkOut}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/45">Guests</p>
                  <p className="mt-1 font-medium">{guests}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/45">Nights</p>
                  <p className="mt-1 font-medium">{nights}</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-[1.5rem] border border-black/10 bg-[#F7F3EC] p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-primary)]">Total</p>
            <div className="mt-4 flex items-end justify-between">
              <span className="text-lg text-black/60">₹{pricePerNight.toLocaleString()} x {nights}</span>
              <span className="font-heading text-3xl text-[var(--color-forest)]">
                ₹{totalPrice.toLocaleString()}
              </span>
            </div>

            {error && <p className="mt-5 text-sm text-red-600">{error}</p>}
            {successMessage && <p className="mt-5 text-sm text-green-700">{successMessage}</p>}

            <button
              type="button"
              onClick={handleBooking}
              disabled={loading}
              className="mt-6 w-full rounded-full bg-[var(--color-deep-forest)] px-5 py-3 text-white transition hover:brightness-110 disabled:opacity-60"
            >
              {loading ? "Confirming..." : "Confirm booking"}
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[var(--color-cream)] px-4 py-10 text-center">Loading checkout...</main>}>
      <CheckoutContent />
    </Suspense>
  );
}
