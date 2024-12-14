// Toggle Password Visibility
function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

// Validate Email and Enable Login Button
document.getElementById("email").addEventListener("input", function() {
    var emailField = this.value;
    var loginButton = document.getElementById("login-button");

    // Use a regular expression to validate the email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    loginButton.disabled = !emailPattern.test(emailField); // Enable button if email is valid
});
