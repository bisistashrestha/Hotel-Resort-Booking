import Link from "next/link";

export default function RegisterPage() {
	return (
		<main className="min-h-screen bg-[var(--color-cream)] px-4 py-10 sm:px-6 lg:px-8">
			<section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-5xl gap-8 rounded-[2rem] bg-white/72 p-6 shadow-[0_24px_80px_rgba(35,56,43,0.12)] backdrop-blur md:grid-cols-[0.95fr_1.05fr] md:p-10">
				<div className="rounded-[1.75rem] bg-[var(--color-primary)] p-6 text-white sm:p-8">
					<p className="text-sm uppercase tracking-[0.3em] text-white/75">
						Register
					</p>
					<h1 className="mt-4 font-heading text-5xl leading-none sm:text-6xl">
						Make it official.
					</h1>
					<p className="mt-5 text-lg leading-8 text-white/82">
						Create your resort profile to track bookings, manage guest details,
						and unlock a faster checkout when you reserve your stay.
					</p>
				</div>

				<div className="rounded-[1.75rem] border border-[var(--color-mist)] bg-[var(--color-cream)] p-6 sm:p-8">
					<div className="grid gap-4">
						<input className="rounded-2xl border border-[var(--color-mist)] bg-white px-4 py-3 outline-none" placeholder="Full name" />
						<input className="rounded-2xl border border-[var(--color-mist)] bg-white px-4 py-3 outline-none" placeholder="Email address" />
						<input className="rounded-2xl border border-[var(--color-mist)] bg-white px-4 py-3 outline-none" placeholder="Password" type="password" />
						<button className="mt-2 rounded-full bg-[var(--color-deep-forest)] px-5 py-3 font-heading text-lg text-white transition hover:brightness-110">
							Create account
						</button>
					</div>
					<p className="mt-6 text-sm text-[var(--color-ink)]/70">
						Already have an account?{' '}
						<Link href="/login" className="text-[var(--color-forest)] underline underline-offset-4">
							Sign in
						</Link>
					</p>
				</div>
			</section>
		</main>
	);
}
