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

// Restaurants Data
let restaurants = [
    {
        id: 1,
        name: "khaliefeh",
        location: "beirut",
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
        menu: [
            { item: "Item 1", price: 12 },
            { item: "Item 2", price: 18 },
        ],
        favoritesCount: 0
    },
];



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