"use client";

import { useState } from "react";

export default function BookingForm() {
    type Room = {
    id: number;
    room_number: string;
    room_type: string;
    room_type_name: string;
    capacity: number;
    price_per_night: string;
    description: string | null;
  };
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const [error, setError] = useState("");
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(false);

  const checkAvailability = async () => {
  if (!checkIn || !checkOut) {
    setError("Please select both check-in and check-out dates.");
    return;
  }

  if (checkOut <= checkIn) {
    setError("Check-out must be after check-in.");
    return;
  }

  setError("");
  setLoading(true);

  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/bookings/rooms/?check_in=${checkIn}&check_out=${checkOut}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch available rooms.");
    }

    const data = await response.json();

    setRooms(data);
  } catch (error) {
    setError("Unable to check availability. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="mt-10 space-y-8">
      {/* Dates */}
      <div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {/* Check-in */}
          <div>
            <label
              htmlFor="check-in"
              className="text-sm font-medium text-[var(--color-ink)]"
            >
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

          {/* Check-out */}
          <div>
            <label
              htmlFor="check-out"
              className="text-sm font-medium text-[var(--color-ink)]"
            >
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
          <div>
            <label
              htmlFor="guests"
              className="text-sm font-medium text-[var(--color-ink)]"
            >
              Number of Guest(s)
            </label>

            <input
              id="check-out"
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="mt-2 w-full border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
            />
          </div>
        </div>
        <button
            type="button"
            onClick={checkAvailability}
            disabled={loading}
            className="mt-6 bg-[var(--color-forest)] px-7 py-3 text-[var(--color-cream)] transition hover:bg-[var(--color-primary)] disabled:opacity-50"
            >
            {loading ? "Checking..." : "Check Availability"}
            </button>
            {error && (
            <p className="mt-3 text-sm text-red-600">
                {error}
            </p>
            )}
            {rooms.length > 0 && (
            <div className="mt-10">
                <h2 className="font-heading text-2xl text-[var(--color-forest)]">
                Available Accommodations
                </h2>

                <div className="mt-5 space-y-4">
                {rooms.map((room) => (
                    <div
                    key={room.id}
                    className="border border-black/10 p-5"
                    >
                    <h1 className="font-heading text-xl">
                        {room.room_type}
                    </h1>
                    <h3 className="font-heading text-x4">
                        {room.room_type_name}
                    </h3>

                    <p className="mt-1 text-sm">
                        No. of Guests : {room.capacity}
                    </p>

                    <p className="mt-1 text-sm">
                        {room.description}
                    </p>

                    <p className="mt-2 text-sm">
                        ₹ {room.price_per_night}  /  night
                    </p>
                    </div>
                ))}
                </div>
            </div>
            )}
      </div>
    </div>
  );
}