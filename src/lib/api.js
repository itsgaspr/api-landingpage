import { API_BASE_URL } from "./constants.js";

async function authRequest(path, body) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => null);

  if (!data) {
    throw new Error("Unexpected response from server. Please try again.");
  }

  return { ok: response.ok, status: response.status, data };
}

export function createUser({ username, email, password }) {
  return authRequest("/auth/user-create", { username, email, password });
}

export function generateKey({ email, password, key_name }) {
  return authRequest("/auth/generate-key", { email, password, key_name });
}

export function forgotPassword({ email }) {
  return authRequest("/auth/forgot-password", { email });
}

export function resetPassword({ token, new_password }) {
  return authRequest("/auth/reset-password", { token, new_password });
}

export function submitContact({ name, email, topic, message }) {
  return authRequest("/contact", { name, email, topic, message });
}
