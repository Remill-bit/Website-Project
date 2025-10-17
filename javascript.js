/* Main JS */

// Smooth scrolling for anchor links
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

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Program cards interactivity
document.querySelectorAll('.learn-more-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent card click event
    const programCard = btn.closest('.program');
    
    // Close other expanded cards
    document.querySelectorAll('.program.expanded').forEach(card => {
      if (card !== programCard) {
        card.classList.remove('expanded');
      }
    });
    programCard.classList.toggle('expanded');
    if (programCard.classList.contains('expanded')) {
      btn.textContent = 'Show Less';
    } else {
      btn.textContent = 'Learn More';
    }
  });
});
document.querySelectorAll('.program').forEach(card => {
  card.addEventListener('click', (e) => {
    // Only trigger if not clicking the button
    if (!e.target.classList.contains('learn-more-btn')) {
      const btn = card.querySelector('.learn-more-btn');
      btn.click();
    }
  });
});

// for scroll animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);
document.addEventListener('DOMContentLoaded', () => {
  const programCards = document.querySelectorAll('.program');
  
  programCards.forEach((card, index) => {
    // Set initial state
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    
    // Observe the card
    observer.observe(card);
  });

  // Observe about section
  const aboutText = document.querySelector('.about-text');
  const aboutImg = document.querySelector('.about-img');
  
  if (aboutText) {
    aboutText.style.opacity = '0';
    aboutText.style.transform = 'translateX(-30px)';
    aboutText.style.transition = 'all 0.8s ease';
    observer.observe(aboutText);
  }
  
  if (aboutImg) {
    aboutImg.style.opacity = '0';
    aboutImg.style.transform = 'translateX(30px)';
    aboutImg.style.transition = 'all 0.8s ease 0.2s';
    observer.observe(aboutImg);
  }
});
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
      });
      if (navLink) {
        navLink.classList.add('active');
      }
    }
  });
});

// effect to hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrolled = window.pageYOffset;
  if (hero) {
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
  }
});

// hover effect
document.querySelectorAll('.program').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  });
});

document.querySelectorAll('.program').forEach(card => {
  card.setAttribute('tabindex', '0');
  card.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const btn = card.querySelector('.learn-more-btn');
      btn.click();
    }
  });
});