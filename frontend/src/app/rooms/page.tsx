import Link from "next/link";
import { rooms } from "@/lib/rooms";

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-forest)] px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl rounded-[2.25rem] bg-[var(--color-cream)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Rooms
            </p>
            <h1 className="mt-4 font-heading text-5xl leading-none text-[var(--color-forest)] sm:text-6xl">
              Rest in the quiet luxury of the mountain.
            </h1>
          </div>

          <p className="max-w-xl text-base leading-7 text-[var(--color-ink)]/70 md:text-lg">
            Thoughtfully designed rooms and suites for slow mornings, long dinners, and unforgettable mountain views.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className={`overflow-hidden rounded-[2rem] border border-[var(--color-mist)] bg-white shadow-[0_18px_50px_rgba(35,56,43,0.08)] ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } md:flex md:items-start`}
            >
              <div className="relative h-72 w-full overflow-hidden md:w-[48%] md:min-h-[420px] md:shrink-0">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex w-full flex-col justify-between p-6 md:w-[52%] md:p-8 lg:p-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-primary)]">
                    {room.type}
                  </p>
                  <h2 className="mt-4 font-heading text-4xl text-[var(--color-forest)]">
                    {room.name}
                  </h2>
                  <p className="mt-4 max-w-lg text-base leading-7 text-[var(--color-ink)]/75">
                    {room.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-[var(--color-forest)]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-ink)]/55">
                      Starting from
                    </p>
                    <p className="mt-1 font-heading text-3xl text-[var(--color-forest)]">
                      {room.price}
                    </p>
                  </div>

                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(178,149,82,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-forest)]"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
