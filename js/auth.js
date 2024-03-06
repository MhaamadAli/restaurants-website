function loginUser(username, password) {
    const users = getData('users');
    console.log('Users:', users); // Log the users array to check if it's retrieved correctly
    const user = users.find(user => user.username === username && user.password === password);
    console.log('User:', user); // Log the found user to check if it's correct
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


// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('login-form');
//     if (loginForm) {
//         loginForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             const username = document.getElementById('username').value;
//             const password = document.getElementById('password').value;
//             if (loginUser(username, password)) {
//                 // Redirect to the home page or any other page after successful login
//                 window.location.href = '../index.html';
//             } else {
//                 alert('Invalid username or password');
//             }
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded'); // Add this line for debugging
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