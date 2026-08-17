export const API_URL =
  (process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000").replace(/\/+$/, "");

export async function readJsonSafe(response: Response) {
  const raw = await response.text();

  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch {
    throw new Error(
      "Server returned HTML instead of JSON. Check NEXT_PUBLIC_API_URL and backend CORS/CSRF settings."
    );
  }
}

export async function apiFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  return response;
}

export async function logout() {
  try {
    await fetch(`${API_URL}/api/users/logout/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.warn("Logout request failed:", error);
  }

  if (typeof window !== "undefined") {
    localStorage.removeItem("return_to");
  }
}