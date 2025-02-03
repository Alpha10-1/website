function toggleMenu() {
    document.querySelector('nav ul').classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function () {
    // "About Us" Section Switching
    let sections = document.querySelectorAll(".section");
    let aboutUs = document.querySelector("#about-us");
    let currentIndex = 0;

    function updateSectionHeight() {
        let activeSection = document.querySelector(".section.active");
        if (activeSection) {
            aboutUs.style.height = activeSection.scrollHeight + "px"; // Adjust height dynamically
        }
    }

    function showSection(index) {
        sections.forEach((section, i) => {
            section.classList.remove("active");
            section.style.display = "none";
            section.style.opacity = "0";
            if (i === index) {
                section.classList.add("active");
                section.style.display = "block";
                setTimeout(() => {
                    section.style.opacity = "1";
                }, 50);
            }
        });

        updateSectionHeight(); // Update height after changing section
    }

    document.querySelector(".arrow.left").addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? sections.length - 1 : currentIndex - 1;
        showSection(currentIndex);
    });

    document.querySelector(".arrow.right").addEventListener("click", function () {
        currentIndex = (currentIndex === sections.length - 1) ? 0 : currentIndex + 1;
        showSection(currentIndex);
    });

    showSection(currentIndex); // Ensure first section is visible
    updateSectionHeight(); // Set initial height

    // Slideshow Functionality
    let slides = document.querySelectorAll(".slide");
    let currentSlideIndex = 0;
    let autoSlideInterval;
    let lastInteractionTime = new Date().getTime();
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
        currentSlideIndex = index;
    }

    function nextSlide() {
        let now = new Date().getTime();
        if (now - lastInteractionTime >= 30000) {
            showSlide((currentSlideIndex + 1) % slides.length);
        }
    }

    function resetAutoSlideTimer() {
        lastInteractionTime = new Date().getTime();
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    document.querySelector(".arrow.right").addEventListener("click", () => {
        showSlide((currentSlideIndex + 1) % slides.length);
        resetAutoSlideTimer();
    });

    document.querySelector(".arrow.left").addEventListener("click", () => {
        showSlide((currentSlideIndex - 1 + slides.length) % slides.length);
        resetAutoSlideTimer();
    });

    showSlide(currentSlideIndex);
    autoSlideInterval = setInterval(nextSlide, 5000); // Start auto-sliding
});
