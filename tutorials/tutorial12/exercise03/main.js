const restaurants = [
    "Suwana's Thai Orchid", 
    "Khao Thai Cuisine", 
    "Little Bee Thai", 
    "PIE.ZAA Pizza", 
    "Fahrenheit Pizza & Brewhouse", 
    "Fresh Wood Fired Pizza West", 
    "Wasabi", 
    "Red Ginger Dimsum And Tapas", 
    "Murasaki Asheville"
];

for (let i = 0; i < restaurants.length; i++) {
    const template = `<p>${restaurants[i]}<p>`;
    document.querySelector("#output").insertAdjacentHTML('beforeend', template);
}