// Function to load an image
function loadImage(source, wrapper) {
    const image = new Image();
    image.classList.add('loading');
    image.src = source;
    image.onload = () => {
        image.classList.replace('loading', 'loaded');
        wrapper.innerHTML = ''; // Clear previous content if needed
        wrapper.appendChild(image);
    };
    image.onerror = (error) => {
        console.error('Error loading image:', error);
        // Handle image loading errors
    };
}

// Function to generate image URLs based on the track
function generateImageUrl(track) {
    const randomId = () => Math.floor(Math.random() * 29) + 1;

    if (track === 'modal') {
        const id = randomId() * 0.5;
        return `https://source.unsplash.com/random/${id}`;
    } else if (track === 'newest-sec') {
        const id = randomId();
        return id > 3 ? `https://source.unsplash.com/random/newest/${id}` : `thumbnails/wall${randomId()}-min.jpg`;
    } else if (track === 'category-sec') {
        const id = randomId();
        return `thumbnails/wall${id}-min.jpg`;
    } else if (track === 'trending-sec') {
        const id = randomId();
        return id > 3 ? `https://source.unsplash.com/random/trending:${id}` : `thumbnails/wall${randomId()}-min.jpg`;
    }

    return null; // Return null if no matching track
}

// Function to preload images based on the limit
function preloadImages(limit) {
    const imgWrappers = document.querySelectorAll('.img-track');
    imgWrappers.forEach((wrapper) => {
        const imageUrl = generateImageUrl(wrapper.parentElement.id);
        if (imageUrl) {
            loadImage(imageUrl, wrapper);
        }
    });
}

// Event listeners for page load and DOM content load
document.addEventListener('DOMContentLoaded', () => {
    preloadImages(10);
    document.body.classList.replace('loading', 'partial');
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelectorAll('.loader-div').forEach((div) => {
            div.style.opacity = '0';
        });
    }, 2000);
});
