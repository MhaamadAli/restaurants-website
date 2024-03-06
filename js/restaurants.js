const restaurantsData = getData('restaurants')


function generateRestaurantCards(restaurantsData) {
    const galleryElement = document.getElementById('restaurant-gallery')
    galleryElement.innerHTML = ''
    restaurantsData.forEach(restaurant => {
        const card = document.createElement('div')
        card.classList.add('card') 
        card.innerHTML = `
            <img src="./styles/assets/sushi.png" class="card-img-top" alt="${restaurant.name}">
            <div class="card-body">
            <h2 class="card-title" >${restaurant.name}</h2>
            <p class="card-text"><strong>Location:</strong> ${restaurant.location} </p>
            <button onclick="viewRestaurant(${restaurant.id})" class="btn-primary">View menu </button>
            </div>`
        galleryElement.appendChild(card)
    });
}



function initRestaurantGallery() {
    generateRestaurantCards(restaurantsData);
}


document.addEventListener('DOMContentLoaded', initRestaurantGallery);