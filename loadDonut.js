let donuts = [
    {id: 1, name: "Moonlit Meringue", seal_of_approval: 4, price: 8.0, created_at: "2025-06-12T10:13:15.334268"},
    {id: 2, name: "Unicorn Rainbow", seal_of_approval: 5, price: 9.5, created_at: "2025-06-12T10:13:15.334283"},
    {id: 3, name: "Starlight Sprinkle", seal_of_approval: 3, price: 7.0, created_at: "2025-06-12T10:13:15.334285"},
    {id: 4, name: "Sunfire Glaze", seal_of_approval: 5, price: 8.5, created_at: "2025-06-12T10:13:15.334287"},
    {id: 5, name: "Dragon's Breath", seal_of_approval: 4, price: 9.0, created_at: "2025-06-12T10:13:15.334289"},
    {id: 6, name: "Velvet Crème", seal_of_approval: 2, price: 6.5, created_at: "2025-06-12T10:13:15.334290"},
    {id: 7, name: "Aurora Swirl", seal_of_approval: 4, price: 8.2, created_at: "2025-06-12T10:13:15.334292"},
    {id: 8, name: "Midnight Cocoa", seal_of_approval: 3, price: 7.8, created_at: "2025-06-12T10:13:15.334294"},
    {id: 9, name: "Royal Raspberry", seal_of_approval: 5, price: 9.2, created_at: "2025-06-12T10:13:15.334296"},
    {id: 10, name: "Lemon Mist", seal_of_approval: 3, price: 7.3, created_at: "2025-06-12T10:13:15.334299"},
    {id: 11, name: "Caramel Crown", seal_of_approval: 4, price: 8.7, created_at: "2025-06-12T10:13:15.334302"},
    {id: 12, name: "Cherry Blossom", seal_of_approval: 2, price: 6.9, created_at: "2025-06-12T10:13:15.334305"},
    {id: 13, name: "Mint Majesty", seal_of_approval: 5, price: 9.1, created_at: "2025-06-12T10:13:15.334308"},
    {id: 14, name: "Berry Bliss", seal_of_approval: 3, price: 7.5, created_at: "2025-06-12T10:13:15.334310"},
    {id: 15, name: "Golden Honeycomb", seal_of_approval: 4, price: 8.4, created_at: "2025-06-12T10:13:15.334313"}
];

function createDonutCard(donut) {
    const card = document.createElement('div');
    card.className = 'donut-card';
    card.innerHTML = `
        <h3>${donut.name}</h3>
        <p>Price: $${donut.price.toFixed(2)}</p>
        <p>Rating: ${'⭐'.repeat(donut.seal_of_approval)}</p>
    `;
    return card;
}

async function loadDonuts() {
    const loadingEl = document.getElementById('loading');
    const gridEl = document.getElementById('donut-grid');
            
    try {
        loadingEl.style.display = 'block';
        gridEl.style.display = 'none';
                
        const donutData = await fetchDonuts();
        renderDonuts(donutData);
                
        loadingEl.style.display = 'none';
        gridEl.style.display = 'grid';
    } catch (error) {
        showError('Failed to load donuts. Please try again.');
        loadingEl.style.display = 'none';
    }
}

        function renderDonuts(donutData) {
            const grid = document.getElementById('donut-grid');
            grid.innerHTML = '';

            donutData.forEach(donut => {
                const card = createDonutCard(donut);
                grid.appendChild(card);
            });
        }

async function createDonut(donutData) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newDonut = {
        id: Math.max(...donuts.map((d) => d.id)) + 1,
        ...donutData,
        created_at: new Date().toISOString(),
    };
    donuts.push(newDonut);
    return newDonut;
}

async function fetchDonuts() {
    return donuts;
}

window.addEventListener('DOMContentLoaded', () => {
    loadDonuts();
});

