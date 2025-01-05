const filterInput = document.getElementById('filterInput');
const productGrid = document.getElementById('productGrid');
const cards = document.querySelectorAll('.card');

filterInput.addEventListener('input', (e) => {
    const filter = e.target.value.toLowerCase();
    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        if (name.includes(filter)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});