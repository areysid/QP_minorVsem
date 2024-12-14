// Toggle Password Visibility
function togglePassword() {
    var passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

// Validate Email and Enable Login Button
document.getElementById("email").addEventListener("input", function() {
    var emailField = this.value;
    var loginButton = document.getElementById("login-button");

    // Use a regular expression to validate the email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    loginButton.disabled = !emailPattern.test(emailField); // Enable button if email is valid
});

// Handle Login Form Submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Example login validation (replace with actual logic)
    if (email === 'admin@quantum.com' && password === 'password') {
        alert('Logged in successfully');
        window.location.href = 'main.html'; // Redirect after login
    } else {
        alert('Invalid email or password');
    }
});
