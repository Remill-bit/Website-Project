/* Main JS */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Mobile menu toggle
const menu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
