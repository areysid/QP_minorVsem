// Function to toggle the visibility of the password field
function togglePassword() {
    const passwordField = event.target.previousElementSibling;
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
}

// Event listener for the form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting immediately

    // Optionally: Add validation to check if the passwords match
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // If passwords match, redirect to the login page
    window.location.href = "login.html";
});
