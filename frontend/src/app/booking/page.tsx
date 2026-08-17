import BookingForm from "@/components/booking/BookingForm";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-forest)] px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[var(--color-cream)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
        <div className="mb-8 flex items-center justify-between gap-4 border-b border-[var(--color-forest)]/10 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Booking
            </p>
            <h1 className="mt-3 font-heading text-5xl leading-none text-[var(--color-forest)] sm:text-6xl">
              Plan Your Stay.
            </h1>
          </div>
        </div>

        <p className="max-w-2xl text-lg leading-8 text-[var(--color-ink)]/75">
          Choose your dates and accommodation to begin your reservation at Yama Kaze.
        </p>

        <div className="mt-8">
          <BookingForm />
        </div>
      </section>
    </main>
  );
}