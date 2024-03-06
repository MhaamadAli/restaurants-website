let restaurants = getData('restaurants') || []


function addRestaurant(restaurantData) {
    restaurants.push(restaurantData)
    saveData('restaurants', restaurants)
}

function deleteRestaurant(restaurantId) {
    restaurants.filter(restaurant => restaurant.id !== restaurantId)
    saveData('restaurants', restaurants)
}


function updateRestaurant(restaurantId, updatedData) {
    const restaurantIndex = restaurants.findIndex(restaurant => restaurant.id === restaurantId);

    if (restaurantIndex !== -1) {
        restaurants[restaurantIndex] = { ...restaurants[restaurantIndex], ...updatedData };

        saveData('restaurants', restaurants);
    } else {
        console.error('Restaurant not found');
    }
}


function displayAllRestaurants() {
    const users = getData('users') || [];

    const favoritesCounter = {};
    users.forEach(user => {
        user.favorites.forEach(restaurantId => {
            favoritesCounter[restaurantId] = (favoritesCounter[restaurantId] || 0) + 1;
        });
    });

    const galleryElement = document.getElementById('restaurant-gallery-admin');
    galleryElement.innerHTML = '';
    restaurants.forEach(restaurant => {
        const card = document.createElement('div');
        card.classList.add('restaurant-card');
        card.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p><strong>Location:</strong> ${restaurant.location}</p>
            <p><strong>Number of Favorites:</strong> ${favoritesCounter[restaurant.id] || 0}</p>
            <button onclick="viewRestaurant(${restaurant.id})">View Menu</button>`;
        galleryElement.appendChild(card);
    });
}
