function getRestaurantById(restaurantId) {
    const allRestaurants = getData('restaurants')
    return allRestaurants.find(restaurant => restaurant.id === restaurantId);
}

function populateRestaurantPage(restaurantId) {
    const restaurant = getRestaurantById(restaurantId)
    if(restaurant) {
        const restaurantNameEl = document.getElementById('restaurant-name')
        const restaurantLocationEl = document.getElementById('restaurant-location')
        const menuListEl = document.getElementById('menu-list')

        restaurantNameEl.textContent = restaurant.name
        restaurantLocationEl.textContent = `Location: ${restaurant.location}`

        menuListEl.innerHTML = ''
        restaurant.menu.forEach(menuItem => {
            const listItem = document.createElement('li')
            listItem.textContent = `${menuItem.item}: $${menuItem.price}`
            menuListEl.appendChild(listItem)
        });
    } else {
        console.error('Restaurant not found')
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = parseInt(urlParams.get('id'));
    populateRestaurantPage(restaurantId);
});