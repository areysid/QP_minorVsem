// Main.js

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0; // Starting index for the carousel
    const games = [
        {
            //title: 'Red Dead Redemption 2',
            description: 'Experience the epic tale of Arthur Morgan and the Van der Linde gang.',
            video: 'trailer/rdr2.mp4',
            logo: 'logo/rdr2 logo.png',
             background: ('trailer/rdrbg.jpg')
        },
        {
            //title: 'Forza Horizon 5 ',
            description: 'We Race or We Die.',
            video: 'trailer/forza.mp4',
            logo: 'logo/forza.png',
            // background: ('trailer/forzabg.jpg')
        },
        {
            //title: 'GTA V ',
            description: 'GTA V: Dive into a sprawling world of crime, adventure, and limitless possibilities in Los Santos.',
            video: 'trailer/gtav.mp4',
            logo: 'logo/gtav.png',
            //  background: ('trailer/gtavbg.jpg.webp')
        },
        {
            //title: 'GOT',
            description: 'Embrace the way of the samurai and defend your honor in a breathtaking open world.',
            video: 'trailer/got.mp4',
            logo: 'logo/got.png',
            // background: ('trailer/gotbg.jpg')
        },
        {

            //title: 'GOW IV',
            description: 'Unleash epic power in a mythic world where gods clash and legends rise.',
            video: 'trailer/gow.mp4',
            logo: 'logo/godwar.png',
            // background: ('trailer/gowbg.jpg')
        }
    ];

     //DOM elements
    const carouselContainer = document.querySelector('.content-container'); // Define the carousel container
    const videoElement = document.getElementById('game-video');
    const titleElement = document.getElementById('game-title');
    const descriptionElement = document.getElementById('game-description');
    const logoElement = document.getElementById('game-logo');
    const dots = document.querySelectorAll('.dot');
    const muteBtn = document.getElementById('mute-btn');
    let isMuted = true;

      function updateCarousel() {
      const currentGame = games[currentIndex];
      }


    // Function to update the carousel with the current game
    function updateCarousel() {
        const game = games[currentIndex];
        videoElement.src = game.video;
        titleElement.textContent = game.title;
        descriptionElement.textContent = game.description;
        logoElement.src = game.logo;
        // carouselContainer.style.backgroundImage = `url('${game.background}')`; // Set the background image

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Function to handle next button click
    function nextGame() {
        currentIndex = (currentIndex + 1) % games.length;
        updateCarousel();
    }

    // Function to handle previous button click
    function prevGame() {
        currentIndex = (currentIndex - 1 + games.length) % games.length;
        updateCarousel();
    }

    // Event listeners for next and previous buttons
    document.querySelector('.next-btn').addEventListener('click', nextGame);
    document.querySelector('.prev-btn').addEventListener('click', prevGame);

    // Add event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Mute and unmute video functionality
    muteBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        videoElement.muted = isMuted;
        muteBtn.textContent = isMuted ? 'Unmute' : 'Mute';
    });

    // Auto-play next game in carousel every 10 seconds
    setInterval(nextGame, 20000);

    // Initialize the carousel
    updateCarousel();
});

// JavaScript for scroll buttons
const genreScroll = document.querySelector('.genre-scroll');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

leftBtn.addEventListener('click', () => {
    genreScroll.scrollBy({
        left: -150, // Adjust scroll amount as needed
        behavior: 'smooth'
    });
});

rightBtn.addEventListener('click', () => {
    genreScroll.scrollBy({
        left: 150, // Adjust scroll amount as needed
        behavior: 'smooth'
    });
});

// pop games 

// Select all game cards with videos
const gameCards = document.querySelectorAll('.game-card');

gameCards.forEach(card => {
    const video = card.querySelector('video');
    card.addEventListener('mouseenter', () => {
        video.play(); // Play video on hover
    });
    card.addEventListener('mouseleave', () => {
        video.pause(); // Pause video when hover ends
        video.currentTime = 0; // Reset to beginning
    });
});
