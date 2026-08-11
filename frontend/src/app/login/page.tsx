import Link from "next/link";

const points = ["Guest access", "Fast booking", "Saved preferences"];

export default function LoginPage() {
	return (
		<main className="min-h-screen bg-[var(--color-cream)] px-4 py-10 text-[var(--color-ink)] sm:px-6 lg:px-8">
			<section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-5xl items-center gap-8 rounded-[2rem] bg-white/72 p-6 shadow-[0_24px_80px_rgba(35,56,43,0.12)] backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-10">
				<div>
					<p className="text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]">
						Login / Join
					</p>
					<h1 className="mt-4 font-heading text-5xl leading-none sm:text-6xl">
						Welcome back to Yama Kaze.
					</h1>
					<p className="mt-5 max-w-lg text-lg leading-8 text-[var(--color-ink)]/75">
						Sign in to manage your stay, view bookings, and keep your resort
						preferences ready for your next mountain escape.
					</p>
					<div className="mt-8 flex flex-wrap gap-3">
						{points.map((point) => (
							<span
								key={point}
								className="rounded-full border border-[var(--color-mist)] bg-[var(--color-cream)] px-4 py-2 text-sm text-[var(--color-forest)]"
							>
								{point}
							</span>
						))}
					</div>
				</div>

				<div className="rounded-[1.75rem] bg-[var(--color-deep-forest)] p-6 text-[var(--color-cream)] shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:p-8">
					<p className="text-sm uppercase tracking-[0.3em] text-white/70">
						Account access
					</p>
					<div className="mt-8 space-y-4">
						<input
							className="w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-base outline-none placeholder:text-white/45"
							placeholder="Email address"
						/>
						<input
							className="w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-base outline-none placeholder:text-white/45"
							placeholder="Password"
							type="password"
						/>
						<button className="w-full rounded-full bg-[var(--color-primary)] px-5 py-3 font-heading text-lg text-white transition hover:brightness-105">
							Sign in
						</button>
					</div>
					<p className="mt-6 text-sm text-white/72">
						New here?{' '}
						<Link href="/register" className="text-white underline underline-offset-4">
							Create an account
						</Link>
					</p>
				</div>
			</section>
		</main>
	);
}
