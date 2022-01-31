"use strict"


function renderCoffee(coffee) {
    let html = '<div class="coffee_display d-block mt-4">';
    html += '<div class="d-flex align-items-baseline">';
    html += '<h2 class="name mr-3">' + coffee.name + '</h2>';
    html += '<p class="roast mr-5">' + coffee.roast + '</p>';
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

function newCoffee (id, name, roast) {
    name = newCoffeeName.value;
    roast = newCoffeeRoast.value;
    id = coffees.length + 1;
    let coffee = {id, name, roast};
    coffees.push(coffee);
    // localStorage.setItem(name, roast); Not working
    console.log(coffee) //test to see if id is correct//
    coffee_display.innerHTML = renderCoffees(coffees);
}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
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
];

let coffee_display = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let coffeeName = document.querySelector('#coffee-name');
let newCoffeeName = document.querySelector('#newCoffeeName');
let newCoffeeRoast = document.querySelector('#newCoffeeRoast');
let submitToo = document.querySelector('#submitToo')


coffee_display.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitToo.addEventListener('click', newCoffee);
coffeeName.addEventListener('keyup', updateCoffees)
