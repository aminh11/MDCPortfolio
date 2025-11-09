// Effet de défilement fluide pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animation de la navigation au défilement
window.addEventListener('scroll', function() {
  const nav = document.getElementById('desktop-nav');
  if (window.scrollY > 100) {
    nav.style.padding = '10px 0';
    nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.padding = '15px 0';
    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// Animation des éléments au défilement
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', function() {
  const elementsToAnimate = document.querySelectorAll('.details-container, .section-title');
  
  elementsToAnimate.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});