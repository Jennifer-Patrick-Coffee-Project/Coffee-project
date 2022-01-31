"use strict"

// create coffee table-like entries
function renderCoffee(coffee) {
    let html = '<div class="coffee_display col-xs-12 col-lg-6 mt-4">';
    html += '<div class="d-flex align-items-baseline">';
    html += '<h2 class="name mr-3">' + coffee.name + '</h2>';
    html += '<p class="roast">' + coffee.roast + '</p>';
    html += '</div>'
    html += '</div>'
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// update the displayed coffee from user input
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let namedCoffee = coffeeName.value.toLowerCase();
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (namedCoffee === "") {
         if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            } else if (selectedRoast === 'all') {
                filteredCoffees.push(coffee);
            }
        }
         else if (coffee.name.toLowerCase().includes(namedCoffee)) {
            filteredCoffees.push(coffee);
        }
    });
    coffee_display.innerHTML = renderCoffees(filteredCoffees);
}

// User added new coffees to the list
function newCoffee (id, name, roast) {
    if (newCoffeeName.value !== "") {
        name = newCoffeeName.value;
        roast = newCoffeeRoast.value;
        id = coffees.length + 1;
        let coffee = {id, name, roast};
        coffees.push(coffee);
    }
    coffee_display.innerHTML = renderCoffees(coffees);
}



let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
    {id: 15, name: "Azathoth's Spawn", roast: 'extra-dark'},
    {id: 16, name: "Hastur's Revenge", roast: 'extra-dark'},
    {id: 16, name: "Call of Brewhulu", roast: 'extra-dark'},
    {id: 17, name: "Chtonic Tonic", roast: 'extra-dark'},
    {id: 18, name: "The Coffee That Should Not Be", roast: 'extra-dark'},
    {id: 19, name: 'Dark Abyss', roast: "extra-dark"},
];

// set up Query Selectors
let coffee_display = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let coffeeName = document.querySelector('#coffee-name');
let newCoffeeName = document.querySelector('#newCoffeeName');
let newCoffeeRoast = document.querySelector('#newCoffeeRoast');
let submitToo = document.querySelector('#submitToo');
let searchbutton = document.querySelector('#search-button');
let merch = document.querySelector('merch');


coffee_display.innerHTML = renderCoffees(coffees);

// Add event listeners
submitButton.addEventListener('click', updateCoffees);
submitToo.addEventListener('click', newCoffee);
coffeeName.addEventListener('keyup', updateCoffees);
searchbutton.addEventListener('click', updateCoffees);
merch.addEventListener('click', updateviews);
