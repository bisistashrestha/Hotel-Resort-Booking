const terms = [
  {
    title: "Booking terms",
    text: "Reservations are confirmed only after the guest receives a booking confirmation and the necessary payment details are settled as agreed. Dates, room choices, and guest counts may be adjusted before check-in subject to availability.",
  },
  {
    title: "Check-in & check-out",
    text: "Check-in begins at 2:00 PM and check-out is by 12:00 PM unless otherwise arranged in advance. Early arrivals and late departures are subject to room availability and may incur additional charges.",
  },
  {
    title: "Guest responsibility",
    text: "Guests are responsible for their personal conduct, safety, and the condition of their room during the stay. Any damage, loss, or misuse of resort property may result in additional charges.",
  },
  {
    title: "Cancellations",
    text: "If a booking is cancelled before the check-in date, the guest may be eligible for a refund according to the cancellation window applicable to the selected stay. Cancellations on or after the check-in date may not be refundable.",
  },
  {
    title: "Privacy & communication",
    text: "Guest information is used only to manage bookings, communicate essential trip updates, and provide guest services. Yama Kaze may contact guests by email or phone regarding their reservation and resort experience.",
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[var(--color-forest)] px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl rounded-[2rem] bg-[var(--color-cream)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]">
          Terms of Service
        </p>
        <h1 className="mt-4 font-heading text-5xl leading-none text-[var(--color-forest)] sm:text-6xl">
          A few essential guest terms.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-ink)]/75">
          These terms help ensure a smooth, respectful, and comfortable stay for every guest at Yama Kaze.
        </p>

        <div className="mt-10 space-y-5">
          {terms.map((term) => (
            <article
              key={term.title}
              className="rounded-[1.5rem] border border-[var(--color-mist)] bg-white p-6 shadow-[0_14px_32px_rgba(35,56,43,0.07)]"
            >
              <h2 className="font-heading text-2xl text-[var(--color-forest)]">
                {term.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-[var(--color-ink)]/75">
                {term.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
