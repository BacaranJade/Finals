if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(function(registration) {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(function(error) {
                console.error('Service Worker registration failed:', error);
            });
    });
} else {
    console.log('Service Worker is not supported in this browser.');
}

const button = document.getElementById('fetchBtn');
const jokeContainer = document.getElementById('jokeContainer');
const imageContainer = document.getElementById('imageContainer');

button.addEventListener('click', async () => {
    try {
        
        const jokeResponse = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        const jokeData = await jokeResponse.json();
        const joke = jokeData.joke || "Here's a funny joke for you!";

       
        const imageResponse = await fetch('https://dog.ceo/api/breeds/image/random');
        const imageData = await imageResponse.json();
        const imageUrl = imageData.message;

        
        jokeContainer.textContent = joke;
        imageContainer.src = imageUrl;

    } catch (error) {
        jokeContainer.textContent = 'Error fetching joke or image!';
        jokeContainer.classList.add('error');
        console.error('Error:', error);
    }
});
