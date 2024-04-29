// Simple floating hearts effect
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duration between 3 to 5 seconds

    heart.innerText = '❤️';
    document.body.appendChild(heart);

    // Remove the heart after it has floated past the top of the screen
    setTimeout(() => {
        heart.remove();
    }, 5000); // This matches the longest possible duration
}

// Create a new heart every 300 milliseconds
setInterval(createHeart, 300);

