// Footer Date
let currentYear = new Date().getFullYear();
document.querySelector ("#year").textContent = currentYear;

let lastModif = new Date(document.lastModified);
document.querySelector ("#modified-date").textContent =`Last Update: ${lastModif}`;

//Hamburger Menu
const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});

//Form

const form = document.querySelector("#drink-form");
const fruitURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Retrieve form data
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData);

  // Get the selected fruits
  const selectedFruits = [
    formObject.fruit1,
    formObject.fruit2,
    formObject.fruit3
  ];

  // Fetch nutritional information for selected fruits
  fetch(fruitURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonObject) {
      const fruits = jsonObject;

      // Calculate total nutritional values
      let totalCarbohydrates = 0;
      let totalProtein = 0;
      let totalFat = 0;
      let totalSugar = 0;
      let totalCalories = 0;

      selectedFruits.forEach(fruitName => {
        const fruit = fruits.find(fruit => fruit.name === fruitName);
        if (fruit) {
          totalCarbohydrates += fruit.nutritions.carbohydrates;
          totalProtein += fruit.nutritions.protein;
          totalFat += fruit.nutritions.fat;
          totalSugar += fruit.nutritions.sugar;
          totalCalories += fruit.nutritions.calories;
        }
      });

      // Get current date
      const currentDate = new Date().toLocaleDateString();

      // Prepare the alert message
      let alertMessage = `Order Details:\n`;
      alertMessage += `First Name: ${formObject.firstName}\n`;
      alertMessage += `Email: ${formObject.email}\n`;
      alertMessage += `Phone: ${formObject.phone}\n`;
      alertMessage += `Fruits: ${selectedFruits.join(", ")}\n`;
      alertMessage += `Special Instructions: ${formObject.instruction}\n`;
      alertMessage += `Order Date: ${currentDate}\n\n`;
      alertMessage += `Nutritional Information:\n`;
      alertMessage += `Total Carbohydrates: ${totalCarbohydrates.toFixed(2)}g\n`;
      alertMessage += `Total Protein: ${totalProtein}g\n`;
      alertMessage += `Total Fat: ${totalFat}g\n`;
      alertMessage += `Total Sugar: ${totalSugar}g\n`;
      alertMessage += `Total Calories: ${totalCalories}kcal`;

      
      // Display the alert message
      alert (`Order Place Successfully\n${alertMessage}`);

      // Reset the form
      form.reset();
    })
    .catch(error => {
      console.log("Error fetching fruit data:", error);
    });
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