// Enhanced JavaScript for modern church website

// DOM Elements
const toggleButton = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const header = document.querySelector('.header');

// Mobile Menu Toggle
toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  toggleButton.classList.toggle('active');
  
  // Prevent body scroll when menu is open
  if (navLinks.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    toggleButton.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!toggleButton.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
    toggleButton.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Set the current year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
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

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.service-card, .vision-item, .section-title');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
});

// Add loading animation to buttons
document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', function(e) {
    // Add loading state
    const originalText = this.innerHTML;
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    this.style.pointerEvents = 'none';
    
    // Simulate loading (remove this in production)
    setTimeout(() => {
      this.innerHTML = originalText;
      this.style.pointerEvents = 'auto';
    }, 1000);
  });
});



// Add hover effects to service cards
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add typing effect to welcome title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
  const welcomeTitle = document.querySelector('.title-line.highlight');
  if (welcomeTitle) {
    const originalText = welcomeTitle.textContent;
    setTimeout(() => {
      typeWriter(welcomeTitle, originalText, 150);
    }, 1000);
  }
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: linear-gradient(90deg, #2563eb, #fbbf24);
  z-index: 9999;
  transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + '%';
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  // Close mobile menu with Escape key
  if (e.key === 'Escape') {
    navLinks.classList.remove('active');
    toggleButton.classList.remove('active');
  }
  
  // Navigate with arrow keys
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    const sections = document.querySelectorAll('section');
    const currentSection = Array.from(sections).find(section => {
      const rect = section.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom >= 100;
    });
    
    if (currentSection) {
      const currentIndex = Array.from(sections).indexOf(currentSection);
      let nextIndex;
      
      if (e.key === 'ArrowDown') {
        nextIndex = Math.min(currentIndex + 1, sections.length - 1);
      } else {
        nextIndex = Math.max(currentIndex - 1, 0);
      }
      
      sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// Add touch gestures for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartY - touchEndY;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe up - scroll down
      window.scrollBy(0, window.innerHeight);
    } else {
      // Swipe down - scroll up
      window.scrollBy(0, -window.innerHeight);
    }
  }
}

