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
        username: "user1",
        password: "user1password",
        favorites: [],
        role: "user"
    },
];

// Restaurants Data
let restaurants = [
    {
        id: 1,
        name: "Restaurant 1",
        location: "Location 1",
        menu: [
            { item: "Item 1", price: 10 },
            { item: "Item 2", price: 15 },
        ]
    },
    {
        id: 2,
        name: "Restaurant 2",
        location: "Location 2",
        menu: [
            { item: "Item 1", price: 12 },
            { item: "Item 2", price: 18 },
        ]
    },
];


// Function to save data to local storage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Function to retrieve data from local storage
function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Function to clear data from local storage
function clearData(key) {
    localStorage.removeItem(key);
}