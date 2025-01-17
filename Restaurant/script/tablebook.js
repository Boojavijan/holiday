document.addEventListener('DOMContentLoaded', () => {
    const guestSelect = document.getElementById('guest-select');
    const restaurantCardsContainer = document.getElementById('restaurant-cards-container');
    const tableNumberDisplay = document.getElementById('table-number-display');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const confirmButton = document.getElementById('confirm-btn'); // Confirm button for reservation

    // Example data for restaurants
    const restaurantData = {
        "3": [
            { name: "Cozy Dining", rating: "⭐ 4.5", price: "$40 per person", img: "../images/table1.avif" },
            { name: "Luxury Feast", rating: "⭐ 4.8", price: "$70 per person", img: "../images/table1.jpg" },
        ],
        "4to5": [
            { name: "Family Fiesta", rating: "⭐ 4.6", price: "$50 per person", img: "../images/table2.avif" },
            { name: "Casual Eats", rating: "⭐ 4.2", price: "$25 per person", img: "../images/table3.1.avif" },
        ],
        "6plus": [
            { name: "Grand Banquet", rating: "⭐ 4.9", price: "$100 per person", img: "../images/table3.avif" },
        ],
    };

    guestSelect.addEventListener('change', () => {
        const selectedValue = guestSelect.value;
        restaurantCardsContainer.innerHTML = "";

        if (restaurantData[selectedValue]) {
            restaurantData[selectedValue].forEach((restaurant, index) => {
                const card = document.createElement('div');
                card.classList.add('restaurant-card');
                card.innerHTML = ` 
                    <img src="${restaurant.img}" alt="${restaurant.name}">
                    <div class="info">
                        <h3>${restaurant.name}</h3>
                        <p>${restaurant.rating} | ${restaurant.price}</p>
                        <button class="add-btn" data-table="${index + 1}">Add</button>
                    </div>
                `;
                restaurantCardsContainer.appendChild(card);
            });

            // Add event listeners for "Add" buttons
            document.querySelectorAll('.add-btn').forEach(button => {
                button.addEventListener('click', () => {
                    const tableNumber = button.getAttribute('data-table');
                    tableNumberDisplay.textContent = `Table Number: ${tableNumber}`;
                });
            });
        } else {
            restaurantCardsContainer.innerHTML = "<p>No options available for the selected guest count.</p>";
        }
    });

    // Handle the "Reserve Now" button click
    document.querySelectorAll('.reserve-now-btn').forEach(button => {
        button.addEventListener('click', () => {
            const restaurantName = button.getAttribute('data-restaurant');
            document.getElementById('restaurantName').value = restaurantName;
            // Show the reservation modal
            const reservationModal = new bootstrap.Modal(document.getElementById('reservationModal'));
            reservationModal.show();
        });
    });

})

// time select button 
// Get all the timing buttons
const timingButtons = document.querySelectorAll('.timing-btn');

// Loop through each button and add an event listener
timingButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Get the data-time attribute from the clicked button
        const selectedTime = this.getAttribute('data-time');

        // Display the selected time
        // document.getElementById('selectedTime').textContent = selectedTime;

        // Show the selected time display
        document.getElementById('selectedTimeDisplay').style.display = 'block';

        // Optional: Highlight the selected button (to indicate it's selected)
        timingButtons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
    });
});


// confirm pop 
document.getElementById('confirmBtn').addEventListener('click', function () {
    // Hide the modal if open
    let modal = document.querySelector('.modal');
    let modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();

    // Generate a random table number between 1 and 50 (you can adjust the range as needed)
    let randomTableNumber = Math.floor(Math.random() * 50) + 1;

    // Get the current time (you can format it as needed)
    let currentTime = new Date().toLocaleTimeString();

    // Display the confirmation card with the details
    document.getElementById('reservationTime').textContent = currentTime;
    document.getElementById('tableNumber').textContent = randomTableNumber;
    document.getElementById('confirmationCard').style.display = 'block';
});

// Event listener for the OK button
document.getElementById('okBtn').addEventListener('click', function () {
    // Hide the confirmation card when OK is clicked
    document.getElementById('confirmationCard').style.display = 'none';
    location.reload();
});
