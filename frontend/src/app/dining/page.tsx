const diningMoments = [
  {
    title: "The Forest Table",
    text: "An intimate dining experience with seasonal tasting menus, local ingredients, and warm mountain-inspired plates designed for a slower evening.",
  },
  {
    title: "Tea Lounge",
    text: "A quiet place for morning tea, warm pastries, and a reset between activities, with handpicked infusions and a view over the pines.",
  },
  {
    title: "Terrace Grillll",
    text: "Open-air dining overlooking the valley, with grilled specialties, crafted cocktails, and fireside service until sunset.",
  },
  {
    title: "Private Dining",
    text: "Curated in-room or villa dining experiences for anniversaries, birthdays, and deeper celebratory moments during your stay.",
  },
];

export default function DiningPage() {
  return (
    <main className="min-h-screen bg-[var(--color-forest)] px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl rounded-[2rem] bg-[var(--color-cream)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]">
          Dining
        </p>
        <h1 className="mt-4 font-heading text-5xl leading-none text-[var(--color-forest)] sm:text-6xl">
          Food shaped by the mountain.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-ink)]/75">
          Every meal at Yama Kaze is designed to feel grounded, generous, and unhurried, with seasonal ingredients and a calm sense of place.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {diningMoments.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-[var(--color-mist)] bg-white p-6 shadow-[0_14px_32px_rgba(35,56,43,0.07)]"
            >
              <h2 className="font-heading text-3xl text-[var(--color-forest)]">
                {item.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-[var(--color-ink)]/75">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
