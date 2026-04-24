/* ============================================================
   PORTFOLIO — main.js
   Author  : EE × DEV
   Sections: Scroll Effects · Fade-In Observer · Form Handler
   ============================================================ */


/* ── SCROLL EFFECTS ─────────────────────────────────────────── */

const navbar        = document.getElementById('navbar');
const scrollProgress = document.getElementById('scrollProgress');

/**
 * Updates the vertical scroll-progress bar on the right edge
 * and collapses the navbar padding once the user scrolls past 50px.
 */
window.addEventListener('scroll', () => {
  const scrolled  = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const pct       = (scrolled / maxScroll) * 100;

  scrollProgress.style.height = pct + '%';
  navbar.classList.toggle('scrolled', scrolled > 50);
});


/* ── FADE-IN ON SCROLL ──────────────────────────────────────── */

/**
 * IntersectionObserver watches every .fade-in element.
 * When 12% of the element enters the viewport the
 * .visible class is added, triggering the CSS transition
 * defined in style.css.
 */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));


/* ── CONTACT FORM ───────────────────────────────────────────── */

/**
 * Handles the contact form submission.
 * Shows a success state on the button for 3 seconds,
 * then resets the form and button text.
 *
 * To wire up a real backend, replace the setTimeout block
 * with a fetch() call to your API endpoint or a service
 * like Formspree / EmailJS.
 *
 * @param {Event} e - the form submit event
 */
function handleSubmit(e) {
  e.preventDefault();

  const btn = e.target.querySelector('.btn-submit');

  // Success state
  btn.textContent         = 'Message Sent ✓';
  btn.style.background    = '#28c840';
  btn.style.borderColor   = '#28c840';
  btn.disabled            = true;

  // Reset after 3 seconds
  setTimeout(() => {
    btn.textContent       = 'Send Message →';
    btn.style.background  = '';
    btn.style.borderColor = '';
    btn.disabled          = false;
    e.target.reset();
  }, 3000);
}

// Attach submit handler to the contact form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', handleSubmit);
}
