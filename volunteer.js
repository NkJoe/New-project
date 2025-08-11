// Set current year in footer
document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Volunteer form validation and feedback
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('volunteerForm');
    const volunteerMessage = document.getElementById('volunteerMessage');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Simple validation
            const name = form.volunteerName.value.trim();
            const email = form.volunteerEmail.value.trim();
            const phone = form.volunteerPhone.value.trim();
            const interest = form.interest.value;
            const message = form.message.value.trim();

            if (!name || !email || !phone || !interest || !message) {
                volunteerMessage.textContent = "Please fill in all fields.";
                volunteerMessage.style.color = "#d32f2f";
                return;
            }

            volunteerMessage.textContent = "Thank you for volunteering! We will contact you soon.";
            volunteerMessage.style.color = "#0d6efd";
            form.reset();
        });
    }
});