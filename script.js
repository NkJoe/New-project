const toggleButton = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Set the current year dynamically
document.getElementById("year").textContent = new Date().getFullYear();
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

