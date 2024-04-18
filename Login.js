function showRegisterForm() {
    document.querySelector('.register-form').style.display = 'block';
    document.querySelector('.login-form').style.display = 'none';
}

function showLoginForm() {
    document.querySelector('.login-form').style.display = 'block';
    document.querySelector('.register-form').style.display = 'none';
}

function registerUser() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    
    showLoginForm();
}

function loginUser() {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const enteredUsername = document.getElementById('login-username').value;
    const enteredPassword = document.getElementById('login-password').value;

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        window.location.href = 'secured_page.html?username=' + encodeURIComponent(storedUsername); 
        document.getElementById('user-display').textContent = storedUsername;
        document.getElementById('securedPage').style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
}

function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
    }
    const username = getQueryParam('username');
    if (username) {
    document.getElementById('user-display').textContent = username;
}