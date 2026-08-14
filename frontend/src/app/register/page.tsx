"use client";
import Link from "next/link";

import { useState } from "react";
import { API_URL } from "@/lib/api";

export default function RegisterPage() {
	const [form, setForm] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`${API_URL}/api/users/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail ||
            Object.values(data).flat().join(" ") ||
            "Registration failed."
        );
      }

      setSuccess("Account created successfully.");

      setForm({
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        password: "",
      });
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };
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
				<form onSubmit={handleSubmit} className="grid gap-4">

					<input
					name="first_name"
					value={form.first_name}
					onChange={handleChange}
					required
					className="rounded-2xl border border-[var(--color-mist)] bg-white px-4 py-3 outline-none"
					placeholder="First name"
					/>

					<input
					name="last_name"
					value={form.last_name}
					onChange={handleChange}
					required
					className="rounded-2xl border border-[var(--color-mist)] bg-white px-4 py-3 outline-none"
					placeholder="Last name"
					/>

					<input
					name="email"
					type="email"
					value={form.email}
					onChange={handleChange}
					required
					className="rounded-2xl border border-[var(--color-mist)] bg-white px-4 py-3 outline-none"
					placeholder="Email address"
					/>

					<input
					name="phone_number"
					type="tel"
					value={form.phone_number}
					onChange={handleChange}
					required
					className="rounded-2xl border border-[var(--color-mist)] bg-white px-4 py-3 outline-none"
					placeholder="Phone number"
					/>

					<input
					name="password"
					type="password"
					value={form.password}
					onChange={handleChange}
					required
					className="rounded-2xl border border-[var(--color-mist)] bg-white px-4 py-3 outline-none"
					placeholder="Password"
					/>

					{error && (
					<p className="text-sm text-red-600">
						{error}
					</p>
					)}

					{success && (
					<p className="text-sm text-green-700">
						{success}
					</p>
					)}

					<button
					type="submit"
					disabled={loading}
					className="mt-2 rounded-full bg-[var(--color-deep-forest)] px-5 py-3 font-heading text-lg text-white transition hover:brightness-110 disabled:opacity-50"
					>
					{loading ? "Creating account..." : "Create account"}
					</button>

				</form>

				<p className="mt-6 text-sm text-[var(--color-ink)]/70">
					Already have an account?{" "}
					<Link
					href="/login"
					className="text-[var(--color-forest)] underline underline-offset-4"
					>
					Sign in
					</Link>
				</p>
				</div>
			</section>
		</main>
	);
}
