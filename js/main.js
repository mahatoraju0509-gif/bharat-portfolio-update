/* =====================================================
   BHARAT PRASAD SHAH — PORTFOLIO | main.js
   ===================================================== */

// ── Dynamic Footer Year ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── Navbar Scroll Behaviour ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile Nav Toggle ──
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Active Link Highlight on Scroll ──
const sections = document.querySelectorAll('section[id], header[id]');
const navLinkItems = document.querySelectorAll('.nav__link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinkItems.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === '#' + entry.target.id
        );
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));

// ── Smooth Fade‑In Animations ──
const animEls = document.querySelectorAll(
  '.milestone__card, .value__item, .edu__item, .timeline__card, .about__card'
);

const fadeIn = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeIn.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

animEls.forEach(el => fadeIn.observe(el));
const timelineCards = document.querySelectorAll('.timeline__card');
const revealTimeline = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealTimeline.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
timelineCards.forEach(card => revealTimeline.observe(card));
