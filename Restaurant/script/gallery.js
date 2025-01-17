
        const galleryItems = {
            all: [
                { image: '../images/party1.jpg' },
                { image: '../images/CELEBRATE1.jpg' },
                { image: '../images/FUNCTION2.jpg' },
                { image: '../images/party3.jpg' },
                { image: '../images/FUNCTION3.jpg' },
                { image: '../images/Ramen.jpg' },
                { image: '../images/Chicken Burger.jpg' },
                { image: '../images/table1.jpg' },
                
            ],
            event: {
                party: [
                    { image: '../images/party1.jpg' },
                    { image: '../images/party2.jpg' },
                    { image: '../images/party3.jpg' },
                    { image: '../images/party4.jpg' },
                ],
                celebrate: [
                    { image: '../images/CELEBRATE1.jpg' },
                    { image: '../images/CELEBRATE2.jpg' },
                    { image: '../images/CELEBRATE3.jpg' },
                    { image: '../images/CELEBRATE4.jpg' },
                ],
                function: [
                    { image: '../images/FUNCTION1.jpg' },
                    { image: '../images/FUNCTION2.jpg' },
                    { image: '../images/FUNCTION3.jpg' },
                    { image: '../images/FUNCTION4.jpg' },
                ],
            },
            food: {
                veg: [
                    { image: '../images/French Fries.jpg' },
                    { image: '../images/Ramen.jpg' },
                    { image: '../images/Hakka Noodles.jpg' },
                    { image: '../images/Dal Tadka.jpg' },
                ],
                nonveg: [
                    { image: '../images/Chicken Biryani.jpg' },
                    { image: '../images/Fish Curry2.webp' },
                    { image: '../images/Chicken Burger.jpg' },
                    { image: '../images/Tandoori Roti.jpg' },
                ],
            },
            table: [
                    { image: '../images/table7.jpg' },
                    { image: '../images/table1.jpg' },
                    { image: '../images/table2.avif' },
                    { image: '../images/table3.avif' },
                    { image: '../images/table3.1.avif' },
                    { image: '../images/table4.jpg' },
                    { image: '../images/table5.jpg' },
                    { image: '../images/table6.jpg' },
            ],
        };

        const gallery = document.getElementById('gallery');

        function filterGallery() {
            const selectedValue = document.querySelector('input[name="galleryFilter"]:checked').value;
            if (selectedValue === 'all') {
                displayGalleryItems('all');
            } else if (selectedValue === 'event') {
                displayEventItems();
            } else if (selectedValue === 'food') {
                displayFoodItems();
            } else if (selectedValue === 'table') {
                displayTableItems();
            }
        }

        function displayGalleryItems(category) {
            gallery.innerHTML = '';
            const items = galleryItems[category];
            createGallerySection(category.toUpperCase(), items);
        }

        function displayEventItems() {
            gallery.innerHTML = '';
            const event = galleryItems.event;
            Object.keys(event).forEach(subCategory => {
                createGallerySection(subCategory.toUpperCase(), event[subCategory]);
            });
        }

        function displayFoodItems() {
            gallery.innerHTML = '';
            const food = galleryItems.food;
            Object.keys(food).forEach(subCategory => {
                createGallerySection(subCategory.toUpperCase(), food[subCategory]);
            });
        }

        function displayTableItems() {
            gallery.innerHTML = '';
            createGallerySection('TABLE', galleryItems.table);
        }

        function createGallerySection(headerText, items) {
            const header = document.createElement('h3');
            header.className = 'gallery-header';
            header.textContent = headerText;
            gallery.appendChild(header);

            const container = document.createElement('div');
            container.className = 'gallery-container';

            items.forEach(item => {
                const div = document.createElement('div');
                div.className = 'gallery-item';
                div.innerHTML = `<img src="${item.image}" alt="${headerText} Image">`;
                container.appendChild(div);
            });

            gallery.appendChild(container);
        }

        displayGalleryItems('all');

        const checkboxes = document.querySelectorAll('.form-check-input');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterGallery);
        });
   