// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('active');
});

// Category Card Toggle - Updated to expand all categories in a row
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.querySelector('.category-header').addEventListener('click', () => {
        const row = card.getAttribute('data-row');
        const allCardsInRow = document.querySelectorAll(`.category-card[data-row="${row}"]`);

        // Check if any card in the row is already active
        const isAnyActive = Array.from(allCardsInRow).some(card => card.classList.contains('active'));

        // Close all categories in other rows
        categoryCards.forEach(otherCard => {
            if (otherCard.getAttribute('data-row') !== row) {
                otherCard.classList.remove('active');
            }
        });

        // Toggle all categories in the current row
        allCardsInRow.forEach(cardInRow => {
            if (isAnyActive) {
                cardInRow.classList.remove('active');
            } else {
                cardInRow.classList.add('active');
            }
        });
    });
});

// Testimonial Slider
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;


function goToSlide(slideIndex) {
    testimonialTrack.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');

    currentSlide = slideIndex;
}

// Dot click events
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Auto slide
setInterval(() => {
    let nextSlide = (currentSlide + 1) % testimonialSlides.length;
    goToSlide(nextSlide);
}, 5000);

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });

        // Close mobile menu after clicking a link
        if (window.innerWidth <= 768) {
            document.querySelector('nav ul').classList.remove('active');
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(109, 31, 23, 0.98)';
        header.style.padding = '10px 0';
    } else {
        header.style.background = 'rgba(109, 31, 23, 0.95)';
        header.style.padding = '15px 0';
    }
});





// Dynamic text animation
const dynamicText = document.querySelector('.dynamic-text');
const words = ['Delicious', 'Savory', 'Tasty', 'Flavourful', 'Mouthwatering'];
let currentWordIndex = 0;

function changeWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    dynamicText.textContent = words[currentWordIndex];
}

setInterval(changeWord, 2000);


