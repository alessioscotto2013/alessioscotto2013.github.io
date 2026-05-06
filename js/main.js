/* Croatia Showcase – main.js */

// Navbar scroll shrink + scroll-top visibility
const navbar     = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 60);
  scrollTopBtn.classList.toggle('visible', y > 400);
  highlightNav();
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.textContent = open ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.textContent = '☰';
  });
});

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.textContent = '☰';
  });
});

// Active nav highlight
function highlightNav() {
  const sections = document.querySelectorAll('section[id]');
  const navAs    = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 110) current = s.id; });
  navAs.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
  });
}

// Tab groups
document.querySelectorAll('.tabs').forEach(tabGroup => {
  const buttons = tabGroup.querySelectorAll('.tab-btn');
  const panels = tabGroup.querySelectorAll('.tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = tabGroup.querySelector(`#tab-${btn.dataset.tab}`);
      if (panel) panel.classList.add('active');
    });
  });
});

// Food region tabs
document.querySelectorAll('.region-badge').forEach(badge => {
  badge.addEventListener('click', () => {
    document.querySelectorAll('.region-badge').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.food-content').forEach(c => c.classList.remove('active'));
    badge.classList.add('active');
    const t = document.getElementById(`food-${badge.dataset.region}`);
    if (t) t.classList.add('active');
  });
});

// Intersection Observer – trigger fade-in animations
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.card, .person-card, .curiosity-card, .section-header')
  .forEach(el => io.observe(el));

// Smooth scroll fallback
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

highlightNav();
