let users = [
    {
        id: 1,
        username: "mohammad",
        password: "1234",
        favorites: [],
        role: "admin"
    },
    {
        id: 2,
        username: "mariam",
        password: "1234",
        favorites: [],
        role: "user"
    },
    {
        id: 3,
        username: "fadi",
        password: "1234",
        favorites: [],
        role: "user"
    },
    {
        id: 4,
        username: "saja",
        password: "1234",
        favorites: [],
        role: "user"
    },
    {
        id: 5,
        username: "hadi",
        password: "1234",
        favorites: [],
        role: "user"
    },
    {
        id: 6,
        username: "ali",
        password: "1234",
        favorites: [],
        role: "user"
    },
];
saveData('users', users)

// Restaurants Data
let restaurants = [
    {
        id: 1,
        name: "MNBV Restaurant",
        location: "beirut",
        image: "leila-restaurant.png",
        menu: [
            { item: "Item 1", price: 10 },
            { item: "Item 2", price: 15 },
            { item: "Item 3", price: 35 },
        ],
        favoritesCount: 0
    },
    {
        id: 2,
        name: "ABCD Restaurant",
        location: "Tyre",
        image: "image-asset.png",
        menu: [
            { item: "Item 1", price: 12 },
            { item: "Item 2", price: 18 },
        ],
        favoritesCount: 0
    },
    {
        id: 3,
        name: "RETYW Restaurant",
        location: "Beirut",
        image: "image-asset.png",
        menu: [
            { item: "Item 1", price: 12 },
            { item: "Item 2", price: 18 },
        ],
        favoritesCount: 0
    },
    {
        id: 4,
        name: "QWCRTY Restaurant",
        location: "Beirut",
        image: "image-asset.png",
        menu: [
            { item: "Item 1", price: 12 },
            { item: "Item 2", price: 18 },
        ],
        favoritesCount: 0
    },
    {
        id: 5,
        name: "Restaurant 2",
        location: "Location 2",
        image: "image-asset.png",
        menu: [
            { item: "Item 1", price: 12 },
            { item: "Item 2", price: 18 },
        ],
        favoritesCount: 0
    },
    {
        id: 6,
        name: "ZXC Restaurant",
        location: "Khalde",
        image: "image-asset.png",
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