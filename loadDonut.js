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
function createDonutCard(donut) {
  const card = document.createElement('div');
  card.className = 'donut-card';
  card.style.animation = 'slideIn 0.5s ease-out';

  card.innerHTML = `
        <div class="donut-header">
            <div>
                <div class="donut-name">${donut.name}</div>
                <div class="donut-price">$${donut.price.toFixed(1)}</div>
            </div>
            <button class="delete-btn" onclick="confirmDelete(${donut.id})" title="Delete donut">×</button>
        </div>
        <div class="seal-rating">
            Seal of Approval: ${donut.seal_of_approval}/5
        </div>
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