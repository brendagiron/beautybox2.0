document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.product-card');
    const clearButton = document.getElementById('clearButton');

    const originalDisplay = [];

    productCards.forEach(card => {
        originalDisplay.push(getComputedStyle(card).display);
    });


    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase().trim();

        productCards.forEach(card => {
            const productName = card.querySelector('img').getAttribute('alt').toLowerCase();

            if (productName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    clearButton.addEventListener('click', function() {
        searchInput.value = ''; 

        productCards.forEach((card, index) => {
            card.style.display = originalDisplay[index]; 
        });
    });
});

