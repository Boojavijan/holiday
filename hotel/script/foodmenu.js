// Sample menu items
const menuItems = [
    { id: 1, name: 'Chicken Tikka', type: 'chinese', category: 'veg', meal: 'lunch', chef: 'chef1', image: '../images/Chicken Tikka.jpg' },
    { id: 2, name: 'Chinese Fried Rice', type: 'indian', category: 'non-veg', meal: 'dinner', chef: 'chef2', image: '../images/Chinese Fried Rice.jpg' },
    { id: 3, name: 'Sushi', type: 'italian', category: 'veg', meal: 'lunch', chef: 'chef3', image: '../images/Sushi.jpg' },
    { id: 4, name: 'Veg Sandwich', type: 'mexican', category: 'non-veg', meal: 'snacks', chef: 'chef4', image: '../images/Veg Sandwich.jpg' },
    { id: 5, name: 'Mexican Tacos', type: 'indian', category: 'veg', meal: 'breakfast', chef: 'chef1', image: '../images/Mexican Tacos.jpg' },
    { id: 5, name: 'Italian Pasta', type: 'indian', category: 'veg', meal: 'breakfast', chef: 'chef1', image: '../images/Italian Pasta.jpg' },
    { id: 5, name: 'Greek Salad', type: 'indian', category: 'veg', meal: 'breakfast', chef: 'chef1', image: '../images/Greek Salad.jpg' },
    
];

const menuContainer = document.getElementById('menu-items');

// Function to display menu items
function displayMenuItems(items) {
    menuContainer.innerHTML = '';
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.classList.add('visible');
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.type} | ${item.category} | ${item.meal}</p>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Initial display of all menu items
displayMenuItems(menuItems);

// Filter functionality
const foodTypeFilter = document.getElementById('food-type');
const foodCategoryFilter = document.getElementById('food-category');
const mealTimeFilter = document.getElementById('meal-time');
const chefFilter = document.getElementById('chef');

function filterMenuItems() {
    let filteredItems = menuItems;

    const foodType = foodTypeFilter.value;
    const foodCategory = foodCategoryFilter.value;
    const mealTime = mealTimeFilter.value;
    const chef = chefFilter.value;

    if (foodType !== 'all') {
        filteredItems = filteredItems.filter(item => item.type === foodType);
    }
    if (foodCategory !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === foodCategory);
    }
    if (mealTime !== 'all') {
        filteredItems = filteredItems.filter(item => item.meal === mealTime);
    }
    if (chef !== 'all') {
        filteredItems = filteredItems.filter(item => item.chef === chef);
    }

    displayMenuItems(filteredItems);
}

// Add event listeners to filters
foodTypeFilter.addEventListener('change', filterMenuItems);
foodCategoryFilter.addEventListener('change', filterMenuItems);
mealTimeFilter.addEventListener('change', filterMenuItems);
chefFilter.addEventListener('change', filterMenuItems);
