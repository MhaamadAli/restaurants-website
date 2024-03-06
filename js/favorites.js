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


function updateFavoriteButtons(restaurantId) {
    const addToFavoritesButton = document.getElementById('add-to-favorites');
    const removeFromFavoritesButton = document.getElementById('remove-from-favorites');

    if (isRestaurantInFavorites(restaurantId)) {
        addToFavoritesButton.style.display = 'none';
        removeFromFavoritesButton.style.display = 'block';
    } else {
        addToFavoritesButton.style.display = 'block';
        removeFromFavoritesButton.style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = parseInt(urlParams.get('id'));
    updateFavoriteButtons(restaurantId);
});


document.getElementById('add-to-favorites').addEventListener('click', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = parseInt(urlParams.get('id'));
    addToFavorites(restaurantId);
    updateFavoriteButtons(restaurantId);
});

document.getElementById('remove-from-favorites').addEventListener('click', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = parseInt(urlParams.get('id'));
    removeFromFavorites(restaurantId);
    updateFavoriteButtons(restaurantId);
});