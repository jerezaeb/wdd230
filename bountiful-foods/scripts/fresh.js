// Footer Date
let currentYear = new Date().getFullYear();
document.querySelector ("#year").textContent = currentYear;

let lastModif = new Date(document.lastModified);
document.querySelector ("#modified-date").textContent =`Last Update: ${lastModif}`;

const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});

const form = document.querySelector("#drink-form");
const fruitURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData);
  localStorage.setItem("formEntry", JSON.stringify(formObject));
  form.reset();
  alert("Form submitted successfully!");
});

fetch(fruitURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    const fruits = jsonObject;
    const fruitOptions = fruits.map(fruit => fruit.name);

    const fruit1Select = document.querySelector("#fruit1");
    const fruit2Select = document.querySelector("#fruit2");
    const fruit3Select = document.querySelector("#fruit3");

    fruitOptions.forEach(fruit => {
      const option = document.createElement("option");
      option.value = fruit;
      option.textContent = fruit;

      fruit1Select.appendChild(option);
      fruit2Select.appendChild(option.cloneNode(true));
      fruit3Select.appendChild(option.cloneNode(true));
    });
  })
  .catch(error => {
    console.log("Error fetching fruit data:", error);
  });

// Drinks Servedconst form = document.querySelector("#drink-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Retrieve the current drinks count from local storage
    let drinksCount = localStorage.getItem("drinksCount");
    drinksCount = drinksCount ? parseInt(drinksCount) : 0;
    
    // Increment the drinks count
    drinksCount++;
    
    // Update the drinks count in local storage
    localStorage.setItem("drinksCount", drinksCount.toString());
  
    // Reset the form
    form.reset();
    
    // Redirect to the other page where the drinks count will be displayed
    window.location.href = "index.html";
  });

