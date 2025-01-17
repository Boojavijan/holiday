// Menu items array
const menuItems = [
    // Breakfast items
    { name: "Masala Dosa", cuisine: "south-indian", menu: "breakfast", type: "veg", price: 150, rating: 4.5, image: "../images/mdosa.webp" },
    { name: "Idli Sambar", cuisine: "south-indian", menu: "breakfast", type: "veg", price: 100, rating: 4.0, image: "../images/idlisambar.jpg" },
    { name: "Pongal", cuisine: "south-indian", menu: "breakfast", type: "veg", price: 120, rating: 4.3, image: "../images/pongal.jpg" },
    { name: "Aloo Paratha", cuisine: "north-indian", menu: "breakfast", type: "veg", price: 130, rating: 4.4, image: "../images/Aloo Paratha.jpg" },
    { name: "Upma", cuisine: "south-indian", menu: "breakfast", type: "veg", price: 110, rating: 4.1, image: "../images/Upma.jpg" },
    { name: "Poha", cuisine: "north-indian", menu: "breakfast", type: "veg", price: 100, rating: 4.2, image: "../images/Poha.webp" },
    { name: "Paneer Sandwich", cuisine: "continental", menu: "breakfast", type: "veg", price: 160, rating: 4.5, image: "../images/Paneer Sandwich.jpg" },

    // Lunch items
    { name: "Butter Chicken", cuisine: "north-indian", menu: "lunch", type: "non-veg", price: 300, rating: 4.8, image: "../images/Butter Chicken.jpg" },
    { name: "Veg Fried Rice", cuisine: "chinese", menu: "lunch", type: "veg", price: 180, rating: 4.2, image: "../images/Veg Fried Rice.jpg" },
    { name: "Chicken Biryani", cuisine: "north-indian", menu: "lunch", type: "non-veg", price: 250, rating: 4.7, image: "../images/Chicken Biryani.jpg" },
    { name: "Paneer Butter Masala", cuisine: "north-indian", menu: "lunch", type: "veg", price: 220, rating: 4.5, image: "../images/Paneer Butter Masala.jpg" },
    { name: "Schezwan Fried Rice", cuisine: "chinese", menu: "lunch", type: "veg", price: 200, rating: 4.4, image: "../images/Schezwan Fried Rice.jpg" },
    { name: "Hakka Noodles", cuisine: "chinese", menu: "lunch", type: "veg", price: 190, rating: 4.3, image: "../images/Hakka Noodles.jpg" },
    { name: "Sweet and Sour Chicken", cuisine: "chinese", menu: "lunch", type: "non-veg", price: 240, rating: 4.6, image: "../images/Sweet and Sour Chicken.jpg" },
    { name: "Butter Chicken", cuisine: "north-indian", menu: "lunch", type: "non-veg", price: 300, rating: 4.8, image: "../images/Butter Chicken.jpg" },
    { name: "Veg Fried Rice", cuisine: "chinese", menu: "lunch", type: "veg", price: 180, rating: 4.2, image: "../images/Paneer Sandwich.jpg" },
    { name: "Paneer Butter Masala", cuisine: "north-indian", menu: "lunch", type: "veg", price: 250, rating: 4.6, image: "../images/Paneer Butter Masala.jpg" },
    { name: "Fish Curry", cuisine: "south-indian", menu: "lunch", type: "non-veg", price: 320, rating: 4.7, image: "../images/Fish Curry.jpg" },
    { name: "Tandoori Roti", cuisine: "north-indian", menu: "lunch", type: "veg", price: 50, rating: 4.5, image: "../images/Tandoori Roti.jpg" },
    { name: "Dal Tadka", cuisine: "north-indian", menu: "lunch", type: "veg", price: 200, rating: 4.3, image: "../images/Dal Tadka.jpg" },
    { name: "Chicken Biryani", cuisine: "indian", menu: "lunch", type: "non-veg", price: 350, rating: 4.9, image: "../images/Chicken Biryani.jpg" },

    // Dinner items
    { name: "Ramen", cuisine: "japanese", menu: "dinner", type: "non-veg", price: 400, rating: 4.6, image: "../images/Ramen.jpg" },
    { name: "Sushi", cuisine: "japanese", menu: "dinner", type: "non-veg", price: 450, rating: 4.8, image: "../images/Sushi.jpg" },
    { name: "Teriyaki Chicken", cuisine: "japanese", menu: "dinner", type: "non-veg", price: 380, rating: 4.7, image: "../images/Teriyaki Chicken.jpg" },
    { name: "Tempura", cuisine: "japanese", menu: "dinner", type: "non-veg", price: 400, rating: 4.5, image: "../images/Tempura.jpg" },
    { name: "Miso Soup", cuisine: "japanese", menu: "dinner", type: "veg", price: 200, rating: 4.3, image: "../images/Miso Soup.jpg" },
    { name: "Udon Noodles", cuisine: "japanese", menu: "dinner", type: "veg", price: 350, rating: 4.4, image: "../images/Udon Noodles.jpg" },
    { name: "Kung Pao Chicken", cuisine: "chinese", menu: "dinner", type: "non-veg", price: 300, rating: 4.6, image: "../images/Kung Pao Chicken.jpg" },
    { name: "Ramen", cuisine: "japanese", menu: "dinner", type: "non-veg", price: 200, rating: 4.6, image: "../images/Ramen.jpg" },
    { name: "Miso Soup", cuisine: "japanese", menu: "dinner", type: "veg", price: 120, rating: 4.5, image: "../images/Miso Soup.jpg" },
    { name: "Grilled Salmon", cuisine: "continental", menu: "dinner", type: "non-veg", price: 450, rating: 4.7, image: "../images/Grilled Salmon.jpg" },
    { name: "Pasta Alfredo", cuisine: "italian", menu: "dinner", type: "veg", price: 300, rating: 4.4, image: "../images/Pasta Alfredo.webp" },
    { name: "Shawarma", cuisine: "middle-eastern", menu: "dinner", type: "non-veg", price: 280, rating: 4.6, image: "../images/Shawarma.jpg" },
    { name: "Paneer Tikka", cuisine: "indian", menu: "dinner", type: "veg", price: 320, rating: 4.6, image: "../images/Paneer Tikka.jpg" },

    // Snack items
    { name: "Mochi", cuisine: "japanese", menu: "snack", type: "veg", price: 180, rating: 4.4, image: "../images/Mochi.jpg" },
    { name: "Takoyaki", cuisine: "japanese", menu: "snack", type: "non-veg", price: 220, rating: 4.6, image: "../images/Takoyaki.jpg" },
    { name: "Spring Rolls", cuisine: "chinese", menu: "snack", type: "veg", price: 150, rating: 4.3, image: "../images/Spring Rolls.jpg" },
    { name: "Samosa", cuisine: "indian", menu: "snack", type: "veg", price: 30, rating: 4.2, image: "../images/Samosa.jpg" },
    { name: "Chicken Wings", cuisine: "american", menu: "snack", type: "non-veg", price: 250, rating: 4.5, image: "../images/Chicken Wings.webp" },
    { name: "Pav Bhaji", cuisine: "indian", menu: "snack", type: "veg", price: 120, rating: 4.4, image: "../images/Pav Bhaji.jpg" },
    { name: "Nachos", cuisine: "mexican", menu: "snack", type: "veg", price: 200, rating: 4.3, image: "../images/Nachos.jpg" },
    { name: "Pakoras", cuisine: "indian", menu: "snack", type: "veg", price: 100, rating: 4.1, image: "../images/Pakoras.jpg" },

    // Fast Food items
    { name: "Chicken Burger", cuisine: "north-indian", menu: "fast-food-branch", type: "non-veg", price: 200, rating: 4.7, image: "../images/Chicken Burger.jpg" },
    { name: "Veg Pizza", cuisine: "italian", menu: "fast-food-branch", type: "veg", price: 250, rating: 4.4, image: "../images/Veg Pizza.jpg" },
    { name: "French Fries", cuisine: "american", menu: "fast-food-branch", type: "veg", price: 120, rating: 4.3, image: "../images/French Fries.jpg" },
    { name: "Hot Dog", cuisine: "american", menu: "fast-food-branch", type: "non-veg", price: 220, rating: 4.5, image: "../images/Hot Dog.jpg" },
    { name: "Paneer Wrap", cuisine: "indian", menu: "fast-food-branch", type: "veg", price: 180, rating: 4.4, image: "../images/Paneer Wrap.jpg" },
    { name: "Chicken Nuggets", cuisine: "american", menu: "fast-food-branch", type: "non-veg", price: 200, rating: 4.6, image: "../images/Chicken Nuggets.jpg" },
    { name: "Veg Submarine Sandwich", cuisine: "continental", menu: "fast-food-branch", type: "veg", price: 200, rating: 4.5, image: "../images/Veg Submarine Sandwich.jpg" }
];

// All cuisines array
const allCuisines = ["south-indian", "north-indian", "chinese", "japanese"];

// Function to filter menu items
function filterMenu() {
    const cuisine = document.getElementById('cuisines').value;
    const menu = document.getElementById('menu').value;
    const type = document.getElementById('food-type').value;

    const filteredItems = menuItems.filter(item => {
        return (cuisine === 'all' || item.cuisine === cuisine) &&
               (menu === 'all' || item.menu === menu) &&
               (type === 'all' || item.type === type);
    });

    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = '<p class="no-results">No items found matching the criteria.</p>';
        return;
    }

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'col-md-4 menu-item';
        menuItem.innerHTML = `<div>${item.name}-₹${item.price}</div>`;
        menuGrid.appendChild(menuItem);
    });
}

// Function to display cuisines
function displayCuisines() {
    const cuisineList = document.getElementById('cuisineList');
    cuisineList.innerHTML = '';

    allCuisines.forEach(cuisine => {
        const cuisineButton = document.createElement('div');
        cuisineButton.className = 'cuisine-item';
        cuisineButton.innerHTML = cuisine.charAt(0).toUpperCase() + cuisine.slice(1);
        cuisineButton.onclick = () => filterCuisine(cuisine);
        cuisineList.appendChild(cuisineButton);
    });
}

// Function to filter by cuisine
function filterCuisine(cuisine) {
    document.getElementById('cuisines').value = cuisine;
    filterMenu();
}

// Function to display online order menu
function displayOnlineOrder() {
    const orderGrid = document.getElementById('orderMenuGrid');
    orderGrid.innerHTML = '';

    menuItems.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'col-md-2 menu-item';
        orderItem.innerHTML = `<img src="${item.image}" class="card-img-top" alt="${item.name}">
                               <h4>${item.name}</h4>
                               <div class="price">₹${item.price}</div>
                               <p class="card-text">Cuisine: ${item.cuisine.replace("-", " ")}</p>
                               <p class="card-text">Type: ${item.type}</p>
                               <p class="card-text">Rating: ${item.rating} ★</p>
                               <button class="btn btn-theme w-100" onclick="openOrderModal('${item.name}', ${item.price})">Order Now</button>`;
        orderGrid.appendChild(orderItem);
    });
}

// Function to open order modal
function openOrderModal(itemName, itemPrice) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Order ${itemName}</h5>
                    <button type="button" class="btn-close" onclick="closeModal()">×</button>
                </div>
                <div class="modal-body">
                    <p>Item Name: ${itemName}</p>
                    <p>Item Price: ₹${itemPrice} </p>
                    <p class="inquty">Quantity: <input type="number" id="quantity" value="1"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
                    <button type="button" class="btn btn-primary" onclick="placeOrder()">Place Order</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    const modal = document.querySelector('.modal');
    modal.remove();
}

// Function to place order
// Function to place order
function placeOrder() {
    const quantity = document.getElementById('quantity').value;
    const itemName = document.querySelector('.modal-title').textContent.split(' ')[1];
    const itemPriceText = document.querySelector('.modal-body p:nth-child(2)').textContent;
    const itemPrice = parseFloat(itemPriceText.split(' ')[2].replace('₹', ''));

    const totalPrice = quantity * itemPrice;

    alert(`Your order of ${quantity} ${itemName}(s) has been placed successfully. Total price: ₹${totalPrice.toFixed(2)}`);

    closeModal();
}

// Initial load
displayCuisines();
filterMenu();
displayOnlineOrder();
