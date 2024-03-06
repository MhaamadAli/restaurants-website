function getAuthenticatedUser() {
    return getData('authenticatedUser');
}

function isRestaurantInFavorites(restaurantId) {
    const user = getAuthenticatedUser();
    return user && user.favorites.includes(restaurantId);
}


function removeFromFavorites(restaurantId) {
    const user = getAuthenticatedUser();
    if (user) {
        const index = user.favorites.indexOf(restaurantId);
        if (index !== -1) {
            user.favorites.splice(index, 1);
            saveData('users', users);
            alert('Restaurant removed from favorites!');
        } else {
            alert('Restaurant is not in favorites!');
        }
    } else {
        alert('Please log in to remove from favorites!');
    }
}


function addToFavorites(restaurantId) {
    const user = getAuthenticatedUser();
    if (user) {
        if (!user.favorites.includes(restaurantId)) {
            user.favorites.push(restaurantId);
            saveData('users', users);
            alert('Restaurant added to favorites!');
        } else {
            alert('Restaurant is already in favorites!');
        }
    } else {
        alert('Please log in to add to favorites!');
    }
}

