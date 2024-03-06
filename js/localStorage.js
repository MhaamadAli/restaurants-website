let users = [
    {
        id: 1,
        username: "admin",
        password: "adminpassword",
        favorites: [],
        role: "admin"
    },
    {
        id: 2,
        username: "mariam",
        password: "user1password",
        favorites: [],
        role: "user"
    },
];
//saveData('users', users)

// Restaurants Data
let restaurants = [
    {
        id: 1,
        name: "khaliefeh",
        location: "beirut",
        image: "./styles/assets/sushi.png",
        menu: [
            { item: "Item 1", price: 10 },
            { item: "Item 2", price: 15 },
        ],
        favoritesCount: 0
    },
    {
        id: 2,
        name: "Restaurant 2",
        location: "Location 2",
        image: "./styles/assets/image-asset.png",
        menu: [
            { item: "Item 1", price: 12 },
            { item: "Item 2", price: 18 },
        ],
        favoritesCount: 0
    },
];
saveData('restaurants', restaurants)


function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}


function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}


function clearData(key) {
    localStorage.removeItem(key);
}


// localStorage.clear()