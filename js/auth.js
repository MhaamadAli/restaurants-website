function loginUser(userName, password) {
    const users = getData('users')
    const user = users.find(user => user.userName === userName && user.password === password)

    if(user) {
        saveData('authenticatedUser', user)
        return true
    } else {
        return false
    }
}

function isAuthenticated() {
    return !!getData('authenticatedUser');
}


function logoutUser() {
    clearData('authenticatedUser');
}