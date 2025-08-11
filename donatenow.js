 // Set current year in footer
        document.addEventListener('DOMContentLoaded', function () {
            const yearSpan = document.getElementById('year');
            if (yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }
        });

        // Donate form validation and feedback
        document.addEventListener('DOMContentLoaded', function () {
            const form = document.getElementById('donateForm');
            const donateMessage = document.getElementById('donateMessage');

            if (form) {
                form.addEventListener('submit', function (e) {
                    e.preventDefault();

                    // Simple validation
                    const name = form.donorName.value.trim();
                    const email = form.donorEmail.value.trim();
                    const amount = form.amount.value.trim();
                    const purpose = form.purpose.value;

                    if (!name || !email || !amount || !purpose) {
                        donateMessage.textContent = "Please fill in all fields.";
                        donateMessage.style.color = "#d32f2f";
                        return;
                    }

                    donateMessage.textContent = "Thank you for your generosity! Your donation has been received.";
                    donateMessage.style.color = "#0d6efd";
                    form.reset();
                });
            }
        });