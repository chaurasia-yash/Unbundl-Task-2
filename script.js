document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.choco-checkbox');
    const selectedList = document.getElementById('selected-list');
    const totalPriceElement = document.getElementById('total-price');
    const errorMessage = document.getElementById('error-message');
    let totalPrice = 0;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const isChecked = this.checked;
            const chocolateName = this.value;
            const price = calculatePrice(chocolateName);

            const selectedItems = Array.from(selectedList.getElementsByTagName('li'));
            const totalItems = selectedItems.length;

            if (isChecked && totalItems >= 8) {
                // Show error message if trying to add more than 8 chocolates
                errorMessage.textContent = "The custom pack can only contain a maximum of 8 chocolates.";
                this.checked = false; // Uncheck the checkbox
                return;
            }

            if (isChecked) {
                totalPrice += price;
                const listItem = document.createElement('li');
                listItem.textContent = `${chocolateName} - $${price.toFixed(2)}`;
                selectedList.appendChild(listItem);
                errorMessage.textContent = ''; // Clear error message if previously shown
            } else {
                totalPrice -= price;
                const itemsToRemove = Array.from(selectedList.getElementsByTagName('li')).filter(item => item.textContent.includes(chocolateName));
                itemsToRemove.forEach(item => item.remove());
                errorMessage.textContent = ''; // Clear error message if previously shown
            }

            totalPriceElement.textContent = totalPrice.toFixed(2);
        });
    });

    function calculatePrice(chocolateName) {
        // Add logic to calculate price based on selected chocolate
        // For demonstration, let's assign different prices to each chocolate
        let price = 0;
        switch (chocolateName) {
            case 'Dark Chocolate':
                price += 3.5;
                break;
            case 'Milk Chocolate':
                price += 2.75;
                break;
            case 'White Chocolate':
                price += 4.0;
                break;
            case 'Ruby Chocolate':
                price += 3.75;
                break;
            case 'Couverture Chocolate':
                price += 4.25;
                break;
            case 'Sweet German Chocolate':
                price += 4.5;
                break;
            case 'Semisweet Chocolate':
                price += 4.0;
                break;
            case 'Bittersweet Chocolate':
                price += 4.25;
                break;
            case 'Unsweetened Chocolate':
                price += 3.25;
                break;
            case 'Cocoa Powder':
                price += 3.0;
                break;
            default:
                price = 0;
        }
        return price;
    }
});
