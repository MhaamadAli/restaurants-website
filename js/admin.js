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