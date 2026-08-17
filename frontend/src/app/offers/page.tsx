import Link from "next/link";

const offers = [
	{
		title: "Mountain Escape",
		description:
			"Two nights with breakfast, a late checkout, and a guided sunrise moment designed to ease you into the valley.",
		includes: ["Breakfast for two", "Late checkout", "Sunrise trail briefing"],
	},
	{
		title: "Wellness Weekend",
		description:
			"A restorative reset complete with spa credit, tea rituals, and a slower rhythm that gives you time to breathe deeply.",
		includes: ["Spa credit", "Tea service", "Wellness lounge access"],
	},
	{
		title: "Family Retreat",
		description:
			"A longer, easier stay for families with room upgrades, family activities, and thoughtful dining perks throughout the weekend.",
		includes: ["Family activity pass", "Dining perk", "Extra room flexibility"],
	},
	{
		title: "Autumn Fireside",
		description:
			"A seasonal stay for slower evenings with warm dinners, soundscapes, and terrace fireside moments after a day in the mountains.",
		includes: ["Welcome drink", "Firepit evening", "Seasonal tasting menu"],
	},
	{
		title: "Couples Reset",
		description:
			"A calm and intimate escape designed for two, with thoughtful touches, quiet moments, and restorative dining.",
		includes: ["Couples dinner", "Private tea ritual", "Complimentary stayscaping"],
	},
	{
		title: "Long Stay Escape",
		description:
			"Stay longer, settle deeper, and enjoy a tailored pace with extended room service, wellness access, and concierge planning.",
		includes: ["Extended stay rate", "Wellness access", "Concierge planning"],
	},
];

export default function OffersPage() {
	return (
		<main className="min-h-screen bg-[var(--color-forest)] px-4 py-10 sm:px-6 lg:px-8">
			<section className="mx-auto max-w-6xl rounded-[2rem] bg-[var(--color-cream)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
				<div className="max-w-2xl">
					<p className="text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]">
						Offers
					</p>
					<h1 className="mt-4 font-heading text-5xl leading-none text-[var(--color-forest)] sm:text-6xl">
						Seasonal stays shaped around the mountain.
					</h1>
					<p className="mt-5 text-lg leading-8 text-[var(--color-ink)]/75">
						Choose a rhythm that fits your trip — from restorative weekends to purposeful family stays, each offer is designed to feel easy and memorable from the first arrival to the final morning.
					</p>
				</div>

				<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{offers.map((offer) => (
						<article
							key={offer.title}
							className="rounded-[1.75rem] border border-[var(--color-mist)] bg-white p-6 shadow-[0_18px_45px_rgba(35,56,43,0.08)]"
						>
							<h2 className="font-heading text-3xl text-[var(--color-deep-forest)]">
								{offer.title}
							</h2>
							<p className="mt-4 text-base leading-7 text-[var(--color-ink)]/75">
								{offer.description}
							</p>
							<ul className="mt-5 space-y-2 text-sm text-[var(--color-ink)]/70">
								{offer.includes.map((item) => (
									<li key={item} className="flex items-start gap-2">
										<span className="mt-1 text-[var(--color-primary)]">•</span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</article>
					))}
				</div>

				<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-[1.5rem] bg-[var(--color-forest)] p-6 text-[var(--color-cream)]">
					<div>
						<p className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)]">
							Plan your stay
						</p>
						<h3 className="mt-2 font-heading text-3xl">Find the right pace for your trip.</h3>
					</div>
					<Link
						href="/rooms"
						className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 font-heading text-lg text-white transition hover:brightness-105"
					>
						View Rooms
					</Link>
				</div>
			</section>
		</main>
	);
}
