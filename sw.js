const CACHE_NAME = "attendx-v9";

const STATIC_ASSETS = [
  "/icon-192.svg",
  "/icon-512.svg",
  "/manifest.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.pathname.startsWith("/api/")) {
    event.respondWith(
      fetch(request).catch(() =>
        new Response(JSON.stringify({ error: "Offline" }), {
          status: 503,
          headers: { "Content-Type": "application/json" },
        })
      )
    );
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() =>
        caches.match("/icon-192.svg").then(() =>
          new Response("Offline", { status: 503 })
        )
      )
    );
    return;
  }

  if (
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".css") ||
    url.pathname.includes("/assets/")
  ) {
    event.respondWith(fetch(request));
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});

/* ─── Web Push ─────────────────────────────────────────────── */

self.addEventListener("push", (event) => {
  let data = { title: "AttendX", body: "إشعار جديد", icon: "/icon-192.svg", tag: "alarm" };
  try { if (event.data) data = { ...data, ...JSON.parse(event.data.text()) }; } catch { /* ignore */ }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body:    data.body,
      icon:    data.icon ?? "/icon-192.svg",
      badge:   "/icon-192.svg",
      tag:     data.tag ?? "alarm",
      renotify: true,
      vibrate: [200, 100, 200, 100, 200],
      requireInteraction: false,
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ("focus" in client) return client.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow("/");
    })
  );
});
