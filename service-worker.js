importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');

if (workbox) {
    console.log('Workbox is loaded.');

   
    workbox.routing.registerRoute(
        new RegExp('https://v2.jokeapi.dev/joke/Any?type=single'),
        new workbox.strategies.NetworkFirst()
    );

    
    workbox.routing.registerRoute(
        new RegExp('https://dog.ceo/api/breeds/image/random'),
        new workbox.strategies.NetworkFirst()
    );
} else {
    console.log('Workbox failed to load.');
}
