document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    let isValid = true;

    // Reset errors
    emailError.textContent = '';
    passwordError.textContent = '';

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value) {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate password
    if (!password.value) {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // If form is valid, proceed to submit
    if (isValid) {
        alert('Login successful');
        window.location.href = '/propertybuyer.html';
    }
});
