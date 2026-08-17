"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { apiFetch } from "@/lib/api";

export default function BookingForm() {
  type Room = {
    id: number;
    room_number: string;
    room_type: string;
    room_type_name: string;
    capacity: number;
    price_per_night: number | string;
    description: string | null;
  };

  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const totalGuests = adults + children;
  const today = new Date().toISOString().split("T")[0];
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(false);
  const [bookingLoadingId, setBookingLoadingId] = useState<number | null>(null);

  const checkAvailability = async () => {
    if (!checkIn || !checkOut) {
      setError("Please select both check-in and check-out dates.");
      return;
    }

    if (checkOut <= checkIn) {
      setError("Check-out must be after check-in.");
      return;
    }

    if (totalGuests <= 0) {
      setError("Please add at least one guest to continue.");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await apiFetch(
        `/api/bookings/rooms/?check_in=${checkIn}&check_out=${checkOut}`
      );

      if (response.status === 401) {
        router.push("/login");
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to fetch available rooms.");
      }

      const data = await response.json();
      const eligibleRooms = (Array.isArray(data) ? data : []).filter(
        (room) => Number(room.capacity) >= totalGuests
      );

      setRooms(eligibleRooms);

      if (eligibleRooms.length === 0) {
        setError(
          `No rooms are available for ${totalGuests} guests during the selected dates.`
        );
      }
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to check availability. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = (room: Room) => {
    if (!checkIn || !checkOut) {
      setError("Please select your dates before booking.");
      return;
    }

    if (Number(room.capacity) < totalGuests) {
      setError(`This room accommodates up to ${room.capacity} guests. Please select a different room.`);
      return;
    }

    setBookingLoadingId(room.id);
    setError("");
    setSuccess("");

    const params = new URLSearchParams({
      roomId: String(room.id),
      roomType: room.room_type_name || room.room_type,
      checkIn,
      checkOut,
      guests: String(totalGuests),
      pricePerNight: String(Number(room.price_per_night) || 0),
    });

    const redirectTarget = `/checkout?${params.toString()}`;

    if (!localStorage.getItem("access_token")) {
      localStorage.setItem("return_to", redirectTarget);
    }

    router.push(redirectTarget);
    setBookingLoadingId(null);
  };

  return (
    <div className="mt-10 space-y-8">
      <div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="check-in" className="text-sm font-medium text-[var(--color-ink)]">
              Check-in
            </label>

            <input
              id="check-in"
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="mt-2 w-full border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
            />
          </div>

          <div>
            <label htmlFor="check-out" className="text-sm font-medium text-[var(--color-ink)]">
              Check-out
            </label>

            <input
              id="check-out"
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="mt-2 w-full border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
            />
          </div>

          <div className="sm:col-span-2">
            <p className="text-sm font-medium text-[var(--color-ink)]">Guests</p>
            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="adults" className="mb-1 block text-xs uppercase tracking-[0.2em] text-[var(--color-ink)]/60">
                  Adults
                </label>
                <input
                  id="adults"
                  type="number"
                  min="1"
                  value={adults}
                  onChange={(e) => setAdults(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
                />
              </div>

              <div>
                <label htmlFor="children" className="mb-1 block text-xs uppercase tracking-[0.2em] text-[var(--color-ink)]/60">
                  Children
                </label>
                <input
                  id="children"
                  type="number"
                  min="0"
                  value={children}
                  onChange={(e) => setChildren(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-[var(--color-ink)]/70">
          Total guests: <span className="font-semibold text-[var(--color-forest)]">{totalGuests}</span>
        </div>

        <button
          type="button"
          onClick={checkAvailability}
          disabled={loading}
          className="mt-6 bg-[var(--color-forest)] px-7 py-3 text-[var(--color-cream)] transition hover:bg-[var(--color-primary)] disabled:opacity-50"
        >
          {loading ? "Checking..." : "Check Availability"}
        </button>

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        {success && <p className="mt-3 text-sm text-green-700">{success}</p>}

        {rooms.length > 0 && (
          <div className="mt-10">
            <h2 className="font-heading text-2xl text-[var(--color-forest)]">
              Available Accommodations
            </h2>

            <div className="mt-5 space-y-4">
              {rooms.map((room) => (
                <div key={room.id} className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-[0_12px_28px_rgba(35,56,43,0.06)]">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)]">
                        {room.room_type}
                      </p>
                      <h3 className="mt-2 font-heading text-2xl text-[var(--color-forest)]">
                        {room.room_type_name}
                      </h3>
                    </div>

                    <div className="sm:text-right">
                      <p className="text-sm text-[var(--color-ink)]/60">From</p>
                      <p className="font-heading text-xl text-[var(--color-forest)]">
                        ₹{Number(room.price_per_night).toLocaleString()} / night
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-[var(--color-ink)]/75">
                    {room.description || "Comfortable stay in a beautifully appointed room."}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-4 border-t border-black/10 pt-4">
                    <p className="text-sm text-[var(--color-ink)]/70">
                      Capacity: {room.capacity} guests
                    </p>

                    <button
                      type="button"
                      onClick={() => handleCheckout(room)}
                      disabled={bookingLoadingId === room.id || Number(room.capacity) < totalGuests}
                      className="rounded-full bg-[var(--color-deep-forest)] px-5 py-3 text-sm font-medium text-white transition hover:brightness-110 disabled:opacity-60"
                    >
                      {Number(room.capacity) < totalGuests
                        ? "Too many guests"
                        : bookingLoadingId === room.id
                          ? "Booking..."
                          : "Book this room"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}