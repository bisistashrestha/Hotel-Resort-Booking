const experiences = [
	{
		tag: "Morning",
		title: "Guided Mountain Trails",
		text: "Start before sunrise with a slow forest walk and a local guide who shares hidden viewpoints, quiet ridgelines, and the stories behind the valley.",
	},
	{
		tag: "Rest",
		title: "Tea & Stillness Ritual",
		text: "Enjoy a private tea service in a quiet lounge overlooking the pines, with seasonal infusions and warm pastries prepared for your pace.",
	},
	{
		tag: "Evening",
		title: "Firelit Terrace Dinners",
		text: "Gather by the terrace fire for a candlelit dinner, attentive service, and a view that lingers long after dessert is served.",
	},
	{
		tag: "Wellness",
		title: "Forest Bathing & Breathwork",
		text: "Take time to reset with guided breathwork, sensory walks, and restorative rituals inspired by the surrounding cedar forest.",
	},
	{
		tag: "Family",
		title: "Private Family Activities",
		text: "Create easy, memorable moments together with nature-led games, storytelling evenings, and custom family itineraries for all ages.",
	},
	{
		tag: "Escape",
		title: "Sunset Lounge Sessions",
		text: "Unwind with music, mountain light, and curated mocktails while the day settles into deep gold and shadow.",
	},
];

export default function ExperiencesPage() {
	return (
		<main className="min-h-screen bg-[var(--color-forest)] px-4 py-10 sm:px-6 lg:px-8">
			<section className="mx-auto max-w-6xl rounded-[2rem] bg-[var(--color-cream)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
				<p className="text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]">
					Experiences
				</p>
				<h1 className="mt-4 max-w-3xl font-heading text-5xl leading-none text-[var(--color-forest)] sm:text-6xl">
					Moments designed to slow the pace of the day.
				</h1>
				<p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-ink)]/75">
					From quiet rituals to unforgettable evenings, each Yama Kaze experience is shaped around your rhythm — whether you want connection, rest, or a deeper, richer way to be in the mountains.
				</p>

				<div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
					{experiences.map((experience) => (
						<div
							key={experience.title}
							className="rounded-[1.5rem] border border-[var(--color-mist)] bg-white p-6 shadow-[0_14px_32px_rgba(35,56,43,0.07)]"
						>
							<p className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)]">
								{experience.tag}
							</p>
							<h2 className="mt-4 font-heading text-3xl text-[var(--color-forest)]">
								{experience.title}
							</h2>
							<p className="mt-3 text-base leading-7 text-[var(--color-ink)]/75">
								{experience.text}
							</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
