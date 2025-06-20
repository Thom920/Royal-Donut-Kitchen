async function deleteDonut(id) {
            await new Promise(resolve => setTimeout(resolve, 500));
            donuts = donuts.filter(d => d.id !== id);
            return true;
        }

        async function confirmDelete(id) {
            if (confirm('Are you sure you want to delete this donut? This action cannot be undone.')) {
                try {
                    await deleteDonut(id);
                    showSuccess('Donut deleted successfully!');
                    
                    if (currentSort.field) {
                        toggleSort(currentSort.field);
                        toggleSort(currentSort.field);
                    } else {
                        renderDonuts(donuts);
                    }
                } catch (error) {
                    showError('Failed to delete donut. Please try again.');
                }
            }
        }