function loginUser(username, password) {
    const users = getData('users');
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        saveData('authenticatedUser', user);
        return true;
    } else {
        return false;
    }
}
function isAuthenticated() {
    return !!getData('authenticatedUser');
}


function logoutUser() {
    clearData('authenticatedUser');
}



document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (loginUser(username, password)) {
                // Redirect to the home page or any other page after successful login
                window.location.href = '../index.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }
});