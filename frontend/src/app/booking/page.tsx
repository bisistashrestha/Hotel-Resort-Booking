export default function BookingPage() {
	return (
		<main className="min-h-screen bg-[var(--color-cream)] px-4 py-10 sm:px-6 lg:px-8">
			<section className="mx-auto max-w-4xl rounded-[2rem] bg-white/76 p-6 shadow-[0_24px_80px_rgba(35,56,43,0.12)] sm:p-8">
				<p className="text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]">
					Booking
				</p>
				<h1 className="mt-4 font-heading text-5xl leading-none sm:text-6xl">
					Reserve your stay.
				</h1>
				<p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-ink)]/75">
					This page is ready for the booking flow and will connect to room and
					guest selection when the backend is wired in.
				</p>
			</section>
		</main>
	);
}
