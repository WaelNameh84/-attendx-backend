import { createRoot } from "react-dom/client";
import App from "./App";
import "./i18n";
import "./index.css";
import { setBaseUrl } from "@workspace/api-client-react";

const apiBase = import.meta.env.VITE_API_BASE_URL as string | undefined;
// Ignore any stale Replit dev URLs baked into the build; fall back to relative
// paths so Netlify's /api/* → Render proxy (in netlify.toml) takes over.
if (apiBase && !apiBase.includes("replit.app")) {
  setBaseUrl(apiBase.replace(/\/+$/, ""));
}

createRoot(document.getElementById("root")!).render(<App />);
