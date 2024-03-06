const restaurantsData = getData('restaurants')


function generateRestaurantCards(restaurantsData) {
    const galleryElement = document.getElementById('restaurant-gallery')
    galleryElement.innerHTML = ''
    restaurantsData.forEach(restaurant => {
        const card = document.createElement('div')
        card.classList.add('restaurant-card')
        card.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p><strong>Location:</strong> ${restaurant.location} </p>
            <button onclick="viewRestaurant(${restaurant.id})">View menu </button>`
        galleryElement.appendChild(card)
    });
}


function initRestaurantGallery() {
    generateRestaurantCards(restaurantsData);
}


document.addEventListener('DOMContentLoaded', initRestaurantGallery);