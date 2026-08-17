"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${API_URL}/api/users/profile/`, {
          credentials: "include",
        });

        if (response.ok) {
          router.replace("/my-trips");
        }
      } catch (error) {
        console.warn("Auth check failed:", error);
      }
    };

    checkAuth();
  }, [router]);

  const getRedirectTarget = () => {
    if (typeof window === "undefined") return "/my-trips";

    const params = new URLSearchParams(window.location.search);
    const redirectParam = params.get("redirect");

    if (redirectParam) {
      return redirectParam;
    }

    const savedRedirect = localStorage.getItem("return_to");
    return savedRedirect || "/my-trips";
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/users/login/`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Invalid email or password.");
      }

      const redirectTarget = getRedirectTarget();
      localStorage.removeItem("return_to");

      router.push(redirectTarget);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--color-forest)] px-4 py-10 text-[var(--color-ink)] sm:px-6 lg:px-8">
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-5xl items-center gap-8 rounded-[2rem] bg-[var(--color-cream)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Login / Join
          </p>
          <h1 className="mt-4 font-heading text-5xl leading-none text-[var(--color-forest)] sm:text-6xl">
            Welcome back to Yama Kaze.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-[var(--color-ink)]/75">
            Sign in to manage your stay, view bookings, and keep your resort preferences ready for your next mountain escape.
          </p>
        </div>

        <div className="rounded-[1.75rem] bg-[var(--color-deep-forest)] p-6 text-[var(--color-cream)] shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            Account access
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-base outline-none placeholder:text-white/45"
              placeholder="Email address"
            />
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-base outline-none placeholder:text-white/45"
              placeholder="Password"
            />
            {error && <p className="text-sm text-red-300">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[var(--color-primary)] px-5 py-3 font-heading text-lg text-white transition hover:brightness-105 disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
          <p className="mt-6 text-sm text-white/72">
            New here? {" "}
            <Link href="/register" className="text-white underline underline-offset-4">
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
