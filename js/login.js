// Toggle Password
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePasswordBtn');

if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        togglePasswordBtn.textContent = isPassword ? 'Hide' : 'Show';
    });
}

// Login Validation & Submit
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        emailError.textContent = '';
        passwordError.textContent = '';

        let isValid = true;
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === '') {
            emailError.textContent = 'Please enter your email.';
            isValid = false;
        }

        if (password === '') {
            passwordError.textContent = 'Please enter your password.';
            isValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters.';
            isValid = false;
        }

        if (isValid) {
            alert('Login successful!');
            window.location.href = 'home.html';
        }
    });
}
