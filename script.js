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

// document.getElementById('enquiryForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//
//     const formData = new FormData(this);
//
//     fetch('/submit-enquiry', {
//         method: 'POST',
//         body: formData
//     }).then(response => response.text()).then(data => {
//         alert(data);
//         this.reset();
//     }).catch(error => {
//         console.error('Error:', error);
//     });
// });
