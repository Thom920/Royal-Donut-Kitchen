        function toggleSort(field) {
            const sortedDonuts = [...donuts];
            
            if (currentSort.field === field) {
                currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
            } else {
                currentSort.field = field;
                currentSort.direction = 'asc';
            }

            sortedDonuts.sort((a, b) => {
                let aVal, bVal;
                
                if (field === 'name') {
                    aVal = a.name.toLowerCase();
                    bVal = b.name.toLowerCase();
                } else if (field === 'seal') {
                    aVal = a.seal_of_approval;
                    bVal = b.seal_of_approval;
                }

                if (currentSort.direction === 'asc') {
                    return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
                } else {
                    return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
                }
            });

            updateSortButtons();
            renderDonuts(sortedDonuts);
        }

        function updateSortButtons() {
            document.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));
            
            document.getElementById('name-arrow').textContent = '↕️';
            document.getElementById('seal-arrow').textContent = '↕️';
            
            if (currentSort.field === 'name') {
                document.getElementById('name-sort').classList.add('active');
                document.getElementById('name-arrow').textContent = currentSort.direction === 'asc' ? '↑' : '↓';
            } else if (currentSort.field === 'seal') {
                document.getElementById('seal-sort').classList.add('active');
                document.getElementById('seal-arrow').textContent = currentSort.direction === 'asc' ? '↑' : '↓';
            }
        }