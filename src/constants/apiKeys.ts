/**
 * Centralized API Key Pool & Rotation System
 * Supports server-side (process.env) and client-side (Vite / LocalStorage / Fallback Pool)
 */

export const DEFAULT_KEY_POOL: string[] = [];

export function cleanSingleKey(raw: string): string {
  if (!raw || typeof raw !== "string") return "";
  let clean = raw.trim();
  // Remove wrapping quotes
  clean = clean.replace(/^["'`]|["'`]$/g, "").trim();
  // Remove env assignment prefix if pasted by mistake (e.g. GEMINI_API_KEY=, API_KEY=, key=, etc)
  clean = clean.replace(/^[A-Za-z0-9_-]+[:=]\s*/i, "").trim();
  // Remove Bearer prefix
  clean = clean.replace(/^Bearer\s+/i, "").trim();
  // Remove quotes again if any were inside
  clean = clean.replace(/^["'`]|["'`]$/g, "").trim();
  return clean;
}

export function isAQKey(raw: string): boolean {
  const clean = cleanSingleKey(raw);
  return clean.startsWith("AQ") || clean.startsWith("ya29") || (clean.length > 20 && clean.includes(".") && !clean.startsWith("AIza"));
}

export function isValidKeyFormat(raw: string): boolean {
  const clean = cleanSingleKey(raw);
  if (!clean || clean.length < 15) return false;
  const lower = clean.toLowerCase();
  if (
    lower === "undefined" ||
    lower === "null" ||
    lower === "none" ||
    lower.includes("your_api_key") ||
    lower.includes("placeholder") ||
    lower.includes("example")
  ) {
    return false;
  }
  // Accepts standard Google AI Studio keys (AIzaSy...), AQ tokens (AQ...), OAuth access tokens (ya29...), and custom tokens
  return clean.startsWith("AIza") || clean.startsWith("AQ") || clean.startsWith("ya29") || clean.length >= 20;
}

export function getCleanKeyArray(rawKeyInput?: string): string[] {
  if (!rawKeyInput || typeof rawKeyInput !== "string") return DEFAULT_KEY_POOL;
  const parsed = rawKeyInput
    .split(/[,\n]/)
    .map(k => cleanSingleKey(k))
    .filter(k => isValidKeyFormat(k));
  return parsed.length > 0 ? parsed : DEFAULT_KEY_POOL;
}

