// ------------------------------
// MOBILE MENU TOGGLE
// ------------------------------
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuBtn.classList.toggle('open');
    });
}
let slideIndex = 0;
const slides = document.querySelectorAll('.slides');

function showSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].classList.add('active');
}

setInterval(showSlides, 4000);
// ------------------------------
// CATALOGUE DROPDOWN TOGGLE
// ------------------------------
const catalogueBtn = document.querySelector('.catalogue-btn');
const catalogueDropdown = document.querySelector('.catalogue-dropdown');

if (catalogueBtn) {
    catalogueBtn.addEventListener('click', () => {
        catalogueDropdown.classList.toggle('show');
    });
}

// Close dropdown if clicked outside
window.addEventListener('click', function(e) {
    if (!e.target.matches('.catalogue-btn')) {
        if (catalogueDropdown.classList.contains('show')) {
            catalogueDropdown.classList.remove('show');
        }
    }
});

// ------------------------------
// SMOOTH SCROLL FOR NAVIGATION
// ------------------------------
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetID = this.getAttribute('href');
        const targetSection = document.querySelector(targetID);
        if (targetSection) {
            e.preventDefault();
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// ------------------------------
// PRODUCT CARD HOVER (EFFECT HANDLED IN CSS)
// ------------------------------
// No JS needed — CSS handles animations.

// ------------------------------
// CONTACT FORM (Optional Future Integration)
// ------------------------------
// You can add email sending API or WhatsApp automation here later.
