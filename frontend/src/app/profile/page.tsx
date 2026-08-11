export default function ProfilePage() {
	return (
		<main className="min-h-screen bg-[var(--color-cream)] px-4 py-10 sm:px-6 lg:px-8">
			<section className="mx-auto grid max-w-5xl gap-8 rounded-[2rem] bg-white/76 p-6 shadow-[0_24px_80px_rgba(35,56,43,0.12)] md:grid-cols-[1fr_1.1fr] md:p-10">
				<aside className="rounded-[1.75rem] bg-[var(--color-deep-forest)] p-6 text-[var(--color-cream)] sm:p-8">
					<p className="text-sm uppercase tracking-[0.35em] text-white/70">
						Profile
					</p>
					<h1 className="mt-4 font-heading text-5xl leading-none sm:text-6xl">
						Your stay, arranged.
					</h1>
					<p className="mt-5 text-lg leading-8 text-white/78">
						Manage your guest profile, upcoming bookings, and preferences from a
						single place.
					</p>
				</aside>

				<div className="grid gap-4 rounded-[1.75rem] border border-[var(--color-mist)] bg-[var(--color-cream)] p-6 sm:p-8">
					{[
						["Upcoming bookings", "2"],
						["Saved guests", "4"],
						["Loyalty tier", "Summit"],
					].map(([label, value]) => (
						<div
							key={label}
							className="flex items-center justify-between rounded-2xl bg-white px-4 py-4 shadow-[0_10px_24px_rgba(35,56,43,0.06)]"
						>
							<span className="text-base text-[var(--color-ink)]/70">{label}</span>
							<span className="font-heading text-2xl text-[var(--color-forest)]">{value}</span>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
