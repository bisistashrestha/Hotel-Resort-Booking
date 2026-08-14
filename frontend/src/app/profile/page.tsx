"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiFetch, logout } from "@/lib/api";
import { useRouter } from "next/navigation";

type UserProfile = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogout = () => {
	logout();
	router.push("/login");
	};

  useEffect(() => {
	const getProfile = async () => {
		try {
		const response = await apiFetch("/api/users/profile/");

		if (response.status === 401) {
			router.push("/login");
			return;
		}

		if (!response.ok) {
			throw new Error("Unable to load profile.");
		}

		const data = await response.json();

		setProfile(data);
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

	getProfile();
	}, [router]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--color-cream)]">
        <p>Loading profile...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-cream)]">
        <p className="text-red-600">{error}</p>

        <Link
          href="/login"
          className="mt-4 underline"
        >
          Sign in again
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-cream)] px-4 py-10">
      <section className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-[0_24px_80px_rgba(35,56,43,0.12)]">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">
          Your profile
        </p>

        <h1 className="mt-4 font-heading text-5xl text-[var(--color-forest)]">
          Welcome, {profile?.first_name}.
        </h1>

        <div className="mt-8 space-y-4">
          <div>
            <p className="text-sm text-black/50">Email</p>
            <p>{profile?.email}</p>
          </div>

          <div>
            <p className="text-sm text-black/50">Name</p>
            <p>
              {profile?.first_name} {profile?.last_name}
            </p>
          </div>

          <div>
            <p className="text-sm text-black/50">Phone</p>
            <p>{profile?.phone_number}</p>
          </div>
        </div>
		<button
		onClick={handleLogout}
		className="mt-8 rounded-full bg-[var(--color-deep-forest)] px-6 py-3 text-white"
		>
		Sign out
		</button>
      </section>
    </main>
  );
}