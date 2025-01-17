
const menuItems = [
    { name: "Masala Dosa", cuisine: "south-indian", menu: "breakfast", type: "veg", price: 150, rating: 4.5, image: "../images/mdosa.webp" },
    { name: "Idli Sambar", cuisine: "south-indian", menu: "breakfast", type: "veg", price: 100, rating: 4.0, image: "../images/idlisambar.jpg" },
    { name: "Paneer Butter Masala", cuisine: "north-indian", menu: "lunch", type: "veg", price: 220, rating: 4.5, image: "../images/Paneer Butter Masala.jpg" },
    { name: "Veg Fried Rice", cuisine: "chinese", menu: "lunch", type: "veg", price: 180, rating: 4.2, image: "../images/Veg Fried Rice.jpg" },
    { name: "Pasta Alfredo", cuisine: "italian", menu: "dinner", type: "veg", price: 300, rating: 4.4, image: "../images/Pasta Alfredo.webp" },
    { name: "Spring Rolls", cuisine: "chinese", menu: "snack", type: "veg", price: 150, rating: 4.3, image: "../images/Spring Rolls.jpg" },
    { name: "Pav Bhaji", cuisine: "indian", menu: "snack", type: "veg", price: 120, rating: 4.4, image: "../images/Pav Bhaji.jpg" },
    { name: "Paneer Tikka", cuisine: "indian", menu: "dinner", type: "veg", price: 320, rating: 4.6, image: "../images/Paneer Tikka.jpg" }
];
        

        // Menu container and other variables
        const vegMenuContainer = document.getElementById('vegMenu');
        let currentFood = null;
        let quantity = 1;

        // Function to display the menu items
        function displayMenu(items) {
            vegMenuContainer.innerHTML = "";
            items.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';

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

                vegMenuContainer.appendChild(menuItem);
            });
        }

        // Function to handle the PDF download
        function downloadPDF() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            doc.text("Vegetarian Menu", 20, 20);

            menuItems.forEach((item, index) => {
                doc.text(`${index + 1}. ${item.name} - ₹${item.price}`, 20, 30 + (index * 10));
            });

            doc.save('veg_menu.pdf');
        }

        // Initial display of all vegetarian items
        showAll();

        // Filter and show all functionality
        function filterCuisine(cuisineType) {
            const filteredItems = menuItems.filter(item => item.cuisine === cuisineType && item.type === 'veg');
            displayMenu(filteredItems);
        }

        function showAll() {
            const allItems = menuItems.filter(item => item.type === 'veg');
            displayMenu(allItems);
        }

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
    

