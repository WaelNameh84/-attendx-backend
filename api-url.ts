// Ignore stale Replit dev URLs baked into production builds — fall back to
// relative paths so Netlify's /api/* → Render proxy (netlify.toml) takes over.
const _rawApiBase = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/+$/, "") ?? "";
const _apiBase = _rawApiBase.includes("replit.app") ? "" : _rawApiBase;

let _onUnauthorized: (() => void) | null = null;

export function setFetchOnUnauthorized(cb: (() => void) | null) {
  _onUnauthorized = cb;
}

export function apiUrl(path: string): string {
  if (_apiBase && path.startsWith("/")) return `${_apiBase}${path}`;
  return path;
}

export function authHeaders(): Record<string, string> {
  const token = localStorage.getItem("auth_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function authFetch(url: string, options: RequestInit = {}): Promise<Response> {
  const token = localStorage.getItem("auth_token");
  const resolvedUrl = (_apiBase && url.startsWith("/")) ? `${_apiBase}${url}` : url;
  const res = await fetch(resolvedUrl, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...((options.headers as Record<string, string>) || {}),
    },
  });
  if (res.status === 401 && _onUnauthorized) {
    _onUnauthorized();
  }
  return res;
}
