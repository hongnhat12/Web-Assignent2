// Carousel Autoplay
document.addEventListener('DOMContentLoaded', () => {
    const heroCarousel = document.querySelector('#heroCarousel');
    if (heroCarousel && window.bootstrap) {
        new bootstrap.Carousel(heroCarousel, {
            interval: 5000,
            ride: 'carousel'
        });
    }
});
