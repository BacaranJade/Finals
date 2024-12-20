importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');

// Ensure Workbox is available
if (workbox) {
    // Caching jokes API response with NetworkFirst strategy
    workbox.routing.registerRoute(
        new RegExp('https://v2.jokeapi.dev/joke/Any?type=single'),
        new workbox.strategies.NetworkFirst({
            cacheName: 'joke-api-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 60 * 60 * 24, // Cache for 24 hours
                    maxEntries: 10, // Keep only 10 jokes in the cache
                }),
            ],
        })
    );

    // Caching static assets (e.g., HTML, CSS, JS, Images) with CacheFirst strategy
    workbox.routing.registerRoute(
        /\.(?:html|css|js|png|jpg|jpeg|svg|gif)$/,
        new workbox.strategies.CacheFirst({
            cacheName: 'static-assets-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 60 * 60 * 24 * 7, // Cache static assets for 1 week
                    maxEntries: 50, // Keep a maximum of 50 static files in cache
                }),
            ],
        })
    );

    // You can add additional routes here to cache other resources as needed
} else {
    console.error('Workbox didn’t load successfully');
}
