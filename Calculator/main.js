const marsCost = 5000;
const moonCost = 3000;


function handleQuantity(plannet, operator) {

    const quantityInput = document.getElementById(plannet + "-quantity").value;

    // convert to number
    let quantity = parseInt(quantityInput);
    // increment quantity
    if (operator === 'plus') {
        quantity++;
    }
    else {
        // error handing
        if (quantity < 1) {
            return;
        }
        quantity--;
    }

    // update input value
    document.getElementById(plannet + "-quantity").value = quantity;
    calculateJourney(plannet);
    updateTotalCost()

}

function calculateJourney(plannet) {
    const quantityInput = document.getElementById(plannet + "-quantity").value;
    let quantity = parseInt(quantityInput);


    if (plannet === 'mars') {
        let marstotal = quantity * marsCost;
        updateCost(plannet, marstotal)
    }
    else {
        let moonTotal = quantity * moonCost;
        updateCost(plannet, moonTotal)
    }
}

function updateCost(plannet, total) {
    const plannetTotal = document.getElementById(plannet + '-total');
    plannetTotal.innerText = total;
}

function updateTotalCost() {

    const marsQuantityInput = document.getElementById("mars-quantity").value;
    const moonQuantityInput = document.getElementById("moon-quantity").value;

    let marsQuantity = parseInt(marsQuantityInput);
    let moonQuantity = parseInt(moonQuantityInput);

    total = marsQuantity * marsCost + moonQuantity * moonCost;

    document.getElementById('total').innerText = total;
}