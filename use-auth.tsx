import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { setAuthTokenGetter, setOnUnauthorized } from "@workspace/api-client-react";
import { setFetchOnUnauthorized } from "@/lib/api-url";

// Ignore stale Replit dev URLs baked into production builds — fall back to
// relative paths so Netlify's /api/* → Render proxy (netlify.toml) takes over.
const _rawApiBase = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/+$/, "") ?? "";
const API_BASE = _rawApiBase.includes("replit.app") ? "" : _rawApiBase;

export function useAuth() {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("auth_token"));
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();

  const logout = (silent = false) => {
    const stored = localStorage.getItem("auth_token");
    localStorage.removeItem("auth_token");
    setToken(null);
    setAuthTokenGetter(() => null);
    queryClient.clear();
    if (!silent && stored) {
      fetch(`${API_BASE}/api/auth/logout`, {
        method: "POST",
        headers: { Authorization: `Bearer ${stored}` },
      }).catch(() => {});
    }
    setLocation("/login");
  };

  useEffect(() => {
    setAuthTokenGetter(() => localStorage.getItem("auth_token"));
    const handleUnauthorized = () => {
      if (localStorage.getItem("auth_token")) {
        logout(true);
      }
    };
    setOnUnauthorized(handleUnauthorized);
    setFetchOnUnauthorized(handleUnauthorized);
    return () => {
      setOnUnauthorized(null);
      setFetchOnUnauthorized(null);
    };
  }, []);

  const login = (newToken: string) => {
    localStorage.setItem("auth_token", newToken);
    setToken(newToken);
    setAuthTokenGetter(() => newToken);
  };

  const clearAuth = () => {
    localStorage.removeItem("auth_token");
    setToken(null);
    setAuthTokenGetter(() => null);
  };

  return { token, login, logout: () => logout(false), clearAuth, isAuthenticated: !!token };
}
