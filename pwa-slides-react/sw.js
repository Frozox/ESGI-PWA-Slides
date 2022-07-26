const CACHE_NAME = "V1";

const precachedRessources = [
  "/",
  "./src/pages/App.jsx",
];

const excludeFromCache = ["www.google.com", "localhost:3000"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(precachedRessources);
    })
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (excludeFromCache.includes(url.host)) return;

  event.respondWith(
    caches
      .match(event.request)
      .then((ressource) => {
        return (
          ressource ||
          fetch(event.request).then((response) => {
            const clonedRespond = response.clone();

            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(event.request, clonedRespond));

            return response;
          })
        );
      })
      .catch(console.error)
  );
});