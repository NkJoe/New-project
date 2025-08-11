// Set current year in footer
document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Contact form validation and feedback
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Simple validation
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            if (!name || !email || !message) {
                formMessage.textContent = "Please fill in all fields.";
                formMessage.style.color = "#d32f2f";
                return;
            }

            // Simulate successful submission
            formMessage.textContent = "Thank you for contacting us! We will get back to you soon.";
            formMessage.style.color = "#0d6efd";
            form.reset();
        });
    }})