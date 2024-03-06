// Fetch restaurant data from local storage
const restaurants = getData('restaurants')
// Function to generate HTML for restaurant cards
function generateRestaurantCards(restaurants) {
    const galleryElement = document.getElementById('restaurant-gallery')
    galleryElement.innerHTML = ''
    restaurants.forEach(restaurant => {
        const card = document.createElement('div')
        card.classList.add('restaurant-card')
        card.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p><strong>Location:</strong> ${restaurant.location} </p>
            <button onclick="viewRestaurant(${restaurant.id})">View menu </button>`
        galleryElement.appendChild(card)
    });
}


// Function to filter restaurants by location


// Function to initialize restaurant gallery


// Call initRestaurantGallery function when the page loads