// Function to start the experience on heart click
function startExperience() {
    const music = document.getElementById('backgroundMusic');
    document.querySelector('.cover').style.transform = 'translateY(-100vh)';
    
    // Play the background music after user interaction
    music.play().catch((error) => {
        console.error('Background music failed to play:', error);
    });
}

// Add scroll-based animation reveal effect
window.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.image-animated');
    images.forEach((image) => {
        const position = image.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            image.classList.add('visible');
        }
    });
});
