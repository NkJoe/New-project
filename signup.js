document.getElementById("signupform").addEventListener("submit", function(event) {
    event.preventDefault();

    // Validate form fields
    var fullname = document.getElementById("fullname").value;
    var phone = document.getElementById("phone").value;
    var department = document.getElementById("department").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (fullname === "" || phone === "" || department === "" || username === "" || email === "" || password === "" || confirmPassword === "") {
        document.getElementById("message").innerText = "Please fill in all fields.";
        return;
    }

    if (password.length < 6 || password.length > 8) {
        document.getElementById("message").innerText = "Password must be between 6 and 8 characters.";
        return;
    }

    if (password.search(/[a-z]/i) < 0) {
        document.getElementById("message").innerText = "Password must contain at least one letter.";
        return;
    }

    if (password.search(/[!@#$%^&*]/) < 0) {
        document.getElementById("message").innerText = "Password must contain at least one special character.";
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById("message").innerText = "Passwords do not match.";
        return;
    message.style.color = "red";
    }

    // If validation passes, submit the form (you can replace this with your own logic)
    document.getElementById("message").innerText = "Sign up successful!";
    message.style.color = "green";

});

document.getElementById('menuToggle').addEventListener('click', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');


});

