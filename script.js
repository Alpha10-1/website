function toggleMenu() {
    document.querySelector('nav ul').classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function () {
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
});
e >= 30000) {
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
