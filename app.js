/* we_share — app.js */

// ----- Signup form toast -----
function handleSignup(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  input.value = '';
  showToast('You\'re on the list! We\'ll be in touch.');
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ----- Mobile nav toggle -----
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.nav__hamburger');
  const links = document.querySelector('.nav__links');

  if (hamburger && links) {
    hamburger.addEventListener('click', () => {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '64px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = '#111';
      links.style.padding = '1.5rem 2rem';
      links.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
      if (open) links.removeAttribute('style');
    });
  }

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 600) {
        links.removeAttribute('style');
      }
    });
  });

  // ----- Scroll-reveal for cards/steps -----
  const revealEls = document.querySelectorAll('.step, .topic-card, .stat, .pillar');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }
});
