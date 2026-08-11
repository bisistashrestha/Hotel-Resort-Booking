import Link from "next/link";

const offers = [
	{
		title: "Mountain Escape",
		text: "Two nights with breakfast and late checkout for a slower, quieter arrival.",
	},
	{
		title: "Wellness Weekend",
		text: "Spa credit, tea service, and access to the resort wellness lounge.",
	},
	{
		title: "Family Retreat",
		text: "Spacious rooms, guided activities, and dining perks for longer stays.",
	},
];

export default function OffersPage() {
	return (
		<main className="min-h-screen bg-[var(--color-cream)] px-4 py-10 sm:px-6 lg:px-8">
			<section className="mx-auto max-w-6xl">
				<div className="max-w-2xl">
					<p className="text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]">
						Offers
					</p>
					<h1 className="mt-4 font-heading text-5xl leading-none sm:text-6xl">
						Seasonal stays shaped around the mountain.
					</h1>
				</div>

				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{offers.map((offer) => (
						<article
							key={offer.title}
							className="rounded-[1.75rem] border border-[var(--color-mist)] bg-white p-6 shadow-[0_18px_45px_rgba(35,56,43,0.08)]"
						>
							<h2 className="font-heading text-3xl text-[var(--color-deep-forest)]">
								{offer.title}
							</h2>
							<p className="mt-4 text-base leading-7 text-[var(--color-ink)]/75">
								{offer.text}
							</p>
						</article>
					))}
				</div>

				<Link
					href="/rooms"
					className="mt-10 inline-flex rounded-full bg-[var(--color-primary)] px-6 py-3 font-heading text-lg text-white transition hover:brightness-105"
				>
					View Rooms
				</Link>
			</section>
		</main>
	);
}
