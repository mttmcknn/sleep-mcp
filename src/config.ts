export const DEFAULT_MAX_SLEEP_MS = 3_600_000;
// Deliberate public-service bound, safely below the 2^31-1 ms timer overflow limit.
export const HARD_MAX_SLEEP_MS = 3_600_000;
export const MAX_REQUEST_BODY_BYTES = 8_192;

export interface Env {
  MAX_SLEEP_MS?: string;
  ALLOWED_HOSTNAMES?: string;
}

export function readConfig(env: Env) {
  const raw = env.MAX_SLEEP_MS ?? String(DEFAULT_MAX_SLEEP_MS);
  const maxSleepMs = Number(raw);
  if (!/^\d+$/.test(raw) || !Number.isSafeInteger(maxSleepMs) || maxSleepMs < 1 || maxSleepMs > HARD_MAX_SLEEP_MS) {
    throw new Error(`MAX_SLEEP_MS must be an integer between 1 and ${HARD_MAX_SLEEP_MS}`);
  }
  const allowedHostnames = (env.ALLOWED_HOSTNAMES ?? "localhost,127.0.0.1,[::1]")
    .split(",").map((name) => name.trim()).filter(Boolean);
  if (!allowedHostnames.length) throw new Error("ALLOWED_HOSTNAMES must not be empty");
  return { maxSleepMs, allowedHostnames };
}
