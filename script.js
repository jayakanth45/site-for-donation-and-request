function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple alert for demonstration; replace with actual AJAX call
    alert(`Logging in with Email: ${email} and Password: ${password}`);
    
    // Prevent the form from submitting to a server (for demonstration)
    return false;
}
