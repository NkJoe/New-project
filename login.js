// Mobile Navigation Toggle for Login Page
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const body = document.body;

    // Toggle mobile menu
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            menuToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('show')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });

        // Close menu when clicking on a link
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('show');
                menuToggle.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
                menuToggle.classList.remove('active');
                body.style.overflow = '';
            }
        });

        // Close menu on window resize (if screen becomes larger)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('show');
                menuToggle.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }

    // Password toggle functionality
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');

    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            const icon = passwordToggle.querySelector('i');
            if (type === 'text') {
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }

    // Form validation and submission
    const loginForm = document.getElementById('loginform');
    const messageElement = document.getElementById('message');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;

            // Basic validation
            if (!email || !password) {
                showMessage('Please fill in all fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }

            if (password.length < 6) {
                showMessage('Password must be at least 6 characters long', 'error');
                return;
            }

            // Simulate form submission
            showMessage('Signing you in...', 'success');
            
            // Simulate API call
            setTimeout(() => {
                showMessage('Login successful! Welcome back to Open Heavens Parish.', 'success');
                
                // Simulate redirect after successful login
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            }, 2000);
        });
    }

    function showMessage(message, type) {
        if (messageElement) {
            messageElement.textContent = message;
            messageElement.className = `message ${type}`;
            
            // Auto-hide success messages after 5 seconds
            if (type === 'success') {
                setTimeout(() => {
                    messageElement.textContent = '';
                    messageElement.className = 'message';
                }, 5000);
            }
        }
    }

    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation to form submission
    const submitButton = loginForm?.querySelector('button[type="submit"]');
    if (submitButton) {
        loginForm.addEventListener('submit', function() {
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
            submitButton.disabled = true;
            
            // Reset button after form processing
            setTimeout(() => {
                submitButton.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In';
                submitButton.disabled = false;
            }, 3000);
        });
    }

    // Remember me functionality
    const rememberCheckbox = document.getElementById('remember');
    const savedEmail = localStorage.getItem('savedEmail');
    
    if (rememberCheckbox && savedEmail) {
        document.getElementById('email').value = savedEmail;
        rememberCheckbox.checked = true;
    }

    // Save email when form is submitted with remember me checked
    if (loginForm && rememberCheckbox) {
        loginForm.addEventListener('submit', function() {
            if (rememberCheckbox.checked) {
                localStorage.setItem('savedEmail', document.getElementById('email').value);
            } else {
                localStorage.removeItem('savedEmail');
            }
        });
    }

    // Forgot password functionality
    const forgotPasswordLink = document.querySelector('.forgot-password');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            
            if (!email) {
                showMessage('Please enter your email address first', 'error');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }

            showMessage('Password reset link sent to your email', 'success');
        });
    }

    // Auto-focus on email field when page loads
    const emailInput = document.getElementById('email');
    if (emailInput && !emailInput.value) {
        emailInput.focus();
    }
}); 