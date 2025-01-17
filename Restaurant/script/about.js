document.addEventListener('DOMContentLoaded', () => {
    const guestSelect = document.getElementById('guest-select');
    const restaurantCardsContainer = document.getElementById('restaurant-cards-container');
    const popupForm = document.getElementById('tableBookingForm');
    const overlay = document.querySelector('.overlay');
    const closeFormBtn = document.getElementById('closeForm');

    // Event listener for "Add" buttons
    restaurantCardsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-btn')) {
            // Show the pop-up form
            popupForm.style.display = 'block';
            overlay.style.display = 'block';
        }
    });

    // Event listener to close the pop-up form
    closeFormBtn.addEventListener('click', () => {
        popupForm.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Close pop-up when clicking outside the form
    overlay.addEventListener('click', () => {
        popupForm.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const timingButtons = document.querySelectorAll('.timing-btn');

    timingButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle the 'selected' class
            button.classList.toggle('selected');

            // Optionally, log the selected time
            if (button.classList.contains('selected')) {
                console.log(`Selected time: ${button.dataset.time}`);
            } else {
                console.log(`Deselected time: ${button.dataset.time}`);
            }
        });
    });
});