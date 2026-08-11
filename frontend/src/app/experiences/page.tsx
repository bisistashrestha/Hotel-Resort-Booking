const experiences = [
	"Guided mountain trails",
	"Private tea service",
	"Firelit terrace evenings",
];

export default function ExperiencesPage() {
	return (
		<main className="min-h-screen bg-[var(--color-cream)] px-4 py-10 sm:px-6 lg:px-8">
			<section className="mx-auto max-w-6xl">
				<p className="text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]">
					Experiences
				</p>
				<h1 className="mt-4 max-w-3xl font-heading text-5xl leading-none sm:text-6xl">
					Moments designed to slow the pace of the day.
				</h1>
				<div className="mt-10 grid gap-4 md:grid-cols-3">
					{experiences.map((experience) => (
						<div
							key={experience}
							className="rounded-[1.5rem] border border-[var(--color-mist)] bg-white p-6 text-lg text-[var(--color-ink)]/80 shadow-[0_14px_32px_rgba(35,56,43,0.07)]"
						>
							{experience}
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
