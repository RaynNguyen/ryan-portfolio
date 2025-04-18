// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Ryan's portfolio script loaded!");
  
    // Basic form handler (client-side only)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', e => {
        e.preventDefault();
  
        // Normally you'd send data to a service like Formspree, EmailJS, etc.
        const status = document.getElementById('formStatus');
        status.textContent = "Thanks! Your message has been 'sent' (locally).";
  
        // Reset the form
        contactForm.reset();
      });
    }
  
    // Optional: Theme toggle (for fun later)
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
      });
    }
  });
  