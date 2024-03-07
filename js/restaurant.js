function getRestaurantById(restaurantId) {
    const allRestaurants = getData('restaurants')
    return allRestaurants.find(restaurant => restaurant.id === restaurantId);
}

function populateRestaurantPage(restaurantId) {
    const restaurant = getRestaurantById(restaurantId)
// true
    if(restaurant) {
        const restaurantNameEl = document.getElementById('restaurant-name')
        const restaurantLocationEl = document.getElementById('restaurant-location')
        const restaurantImage = document.getElementById('restaurant-image')
        const menuListEl = document.getElementById('menu-list')
//pass
        restaurantNameEl.textContent = restaurant.name
        restaurantLocationEl.textContent = `Location: ${restaurant.location}`
        restaurantImage.innerHTML = `<img src="../styles/assets/${restaurant.image}" >`
//pass - add style to image
        menuListEl.innerHTML = ''
        restaurant.menu.forEach(menuItem => {
            const imageEl = document.createElement('img')
            imageEl.src = `../styles/assets/${restaurant.image}`
            
            const listItem = document.createElement('li')
            listItem.textContent = `${menuItem.item}: $${menuItem.price}`

            menuListEl.appendChild(imageEl)
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

