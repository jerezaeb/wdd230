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

// Drinks Served

const drinksServedSection = document.querySelector(".drinks-served");
const drinksCountElement = document.querySelector("#drinks");

let drinksCount = localStorage.getItem("drinksCount");
drinksCount = drinksCount ? parseInt(drinksCount) : 0;

drinksCountElement.textContent = drinksCount;

form.addEventListener("submit", function(event) {
  event.preventDefault();
  drinksCount++;
  drinksCountElement.textContent = drinksCount;
  localStorage.setItem("drinksCount", drinksCount.toString());
  form.reset();
  alert("Form submitted successfully!");
});
