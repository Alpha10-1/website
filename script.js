function toggleMenu() {
    document.querySelector('nav ul').classList.toggle('show');
}

// JavaScript for automatic slide
let currentIndex = 0;
const sections = document.querySelectorAll('#about-us .section');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let autoSlideInterval = setInterval(nextSlide, 5000);
let lastInteractionTime = new Date().getTime();

function showSlide(index) {
    if (index >= sections.length) {
        index = 0;
    } else if (index < 0) {
        index = sections.length - 1;
    }
    sections.forEach((section, i) => {
        section.style.transform = `translateX(${-index * 100}vw)`;
    });
    currentIndex = index;
}

function nextSlide() {
    const currentTime = new Date().getTime();
    if (currentTime - lastInteractionTime >= 30000) {
        showSlide(currentIndex + 1);
    }
}

function resetAutoSlideTimer() {
    lastInteractionTime = new Date().getTime();
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
}
rightArrow.addEventListener('click', () => {
    showSlide(currentIndex + 1);
    resetAutoSlideTimer();
});
leftArrow.addEventListener('click', () => {
    showSlide(currentIndex - 1);
    resetAutoSlideTimer();
});

showSlide(currentIndex);

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) { // Apply only on mobile devices
        let sections = document.querySelectorAll(".section");
        let currentIndex = 0;

        // Ensure the first section is always visible
        sections.forEach((section, i) => {
            section.classList.remove("active");
            if (i === 0) {
                section.classList.add("active");
            }
        });

        function showSection(index) {
            sections.forEach((section, i) => {
                section.classList.remove("active");
                if (i === index) {
                    section.classList.add("active");
                }
            });
        }

        document.querySelector(".arrow.left").addEventListener("click", function () {
            currentIndex = (currentIndex === 0) ? sections.length - 1 : currentIndex - 1;
            showSection(currentIndex);
        });

        document.querySelector(".arrow.right").addEventListener("click", function () {
            currentIndex = (currentIndex === sections.length - 1) ? 0 : currentIndex + 1;
            showSection(currentIndex);
        });

        showSection(currentIndex); // Show first section by default
    }
});

        showSection(currentIndex); // Show first section by default
    }
});

