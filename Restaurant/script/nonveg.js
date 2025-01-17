// Non-Vegetarian Menu Items
const menuItems = [
    { name: "Butter Chicken", cuisine: "north-indian", menu: "lunch", type: "non-veg", price: 300, rating: 4.8, image: "../images/Butter Chicken.jpg" },
    { name: "Chicken Biryani", cuisine: "north-indian", menu: "lunch", type: "non-veg", price: 250, rating: 4.7, image: "../images/Chicken Biryani.jpg" },
    { name: "Sweet and Sour Chicken", cuisine: "chinese", menu: "lunch", type: "non-veg", price: 240, rating: 4.6, image: "../images/Sweet and Sour Chicken.jpg" },
    { name: "Fish Curry", cuisine: "south-indian", menu: "lunch", type: "non-veg", price: 320, rating: 4.7, image: "../images/Fish Curry.jpg" },
    { name: "Ramen", cuisine: "japanese", menu: "dinner", type: "non-veg", price: 400, rating: 4.6, image: "../images/Ramen.jpg" },
    { name: "Chicken Wings", cuisine: "american", menu: "snack", type: "non-veg", price: 250, rating: 4.5, image: "../images/Chicken Wings.webp" },
    { name: "Chicken Nuggets", cuisine: "american", menu: "fast-food", type: "non-veg", price: 200, rating: 4.6, image: "../images/Chicken Nuggets.jpg" },
    { name: "Margherita Pizza", cuisine: "italian", menu: "lunch", type: "non-veg", price: 280, rating: 4.6, image: "../images/Margherita Pizza.jpg" }
];

// Menu container and other variables
const vegMenuContainer = document.getElementById('vegMenu');
let currentFood = null;
let quantity = 1;
// Function to display menu items
function displayMenu(items) {
    const menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = ""; // Clear the menu container
    items.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
                    <div class="menu-details">
                        <h3>${item.name}</h3>
                        <p>${item.cuisine.toUpperCase()}</p>
                        <div class="price-rating">
                            <span class="price">₹${item.price}</span>
                            <span class="rating">⭐ ${item.rating}</span>
                        </div>
                        <button onclick="openPopup('${item.name}', ${item.price})" class="btn-theme">Order Now</button>
                    </div>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Function to filter menu by cuisine
function filterCuisine(cuisine) {
    const filteredItems = menuItems.filter(item => item.cuisine === cuisine);
    displayMenu(filteredItems);
}

// Function to show all menu items
function showAll() {
    displayMenu(menuItems);
}

// Display all items initially
showAll();
// Popup related functions
function openPopup(foodName, foodPrice) {
    currentFood = { name: foodName, price: foodPrice };
    document.getElementById('foodName').innerText = foodName;
    document.getElementById('price').innerText = `Price: ₹${foodPrice}`;
    document.getElementById('totalPrice').innerText = `Total Price: ₹${foodPrice * quantity}`;
    document.getElementById('quantity').innerText = quantity;

    document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}

function increaseQuantity() {
    quantity++;
    updateTotalPrice();
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        updateTotalPrice();
    }
}

function updateTotalPrice() {
    document.getElementById('quantity').innerText = quantity;
    document.getElementById('totalPrice').innerText = `Total Price: ₹${currentFood.price * quantity}`;
}

function addToCart() {
    alert(`Added ${currentFood.name} (x${quantity}) to the cart. Total: ₹${currentFood.price * quantity}`);
    closePopup();
}

