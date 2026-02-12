// InnerGlowYoga - Main JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Update icon
      const icon = mobileMenuBtn.querySelector('svg');
      if (mobileMenu.classList.contains('active')) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
      } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
      }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('svg');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
      });
    });
  }

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (
      (currentPage === 'index.html' && href === 'index.html') ||
      (currentPage === '' && href === 'index.html') ||
      (currentPage === href)
    ) {
      link.classList.add('active');
    }
  });

  // Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form container
      const formContainer = contactForm.parentElement;
      
      // Create success message
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.innerHTML = `
        <div style="margin-bottom: 0.5rem;">
          <svg style="width: 4rem; height: 4rem; margin: 0 auto; color: var(--emerald-600);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 style="font-size: 1.25rem; color: var(--emerald-800); margin-bottom: 0.5rem;">Thank You!</h3>
        <p style="color: var(--emerald-700);">
          Your message has been sent successfully. We'll get back to you soon!
        </p>
      `;
      
      // Replace form with success message
      formContainer.innerHTML = '';
      formContainer.appendChild(successMessage);
      
      // Reset after 3 seconds
      setTimeout(() => {
        location.reload();
      }, 3000);
    });
  }

  // Newsletter Form Handling
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      const email = input.value;
      
      if (email) {
        alert('Thank you for subscribing to our newsletter!');
        input.value = '';
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Scroll to top on page load
  window.scrollTo(0, 0);
});

// Image fallback handler
function handleImageError(img) {
  img.style.backgroundColor = 'var(--gray-200)';
  img.alt = 'Image not available';
}
