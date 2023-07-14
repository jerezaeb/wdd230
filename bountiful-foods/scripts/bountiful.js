// Footer Date
let currentYear = new Date().getFullYear();
document.querySelector ("#year").textContent = currentYear;

let lastModif = new Date(document.lastModified);
document.querySelector ("#modified-date").textContent =`Last Update: ${lastModif}`;


// Weather
const currentTemp = document.querySelector ("#current-temp");
const weatherIcon = document.querySelector ("#weather-icon");
const captionDesc = document.querySelector ("figcaption");
const currentHumidity = document.querySelector ("#humidity");
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=33.15997555541721&lon=-117.34966610123618&units=metric&appid=deec5ac8c906a029b39c1155690017b2"

async function apiFetch () {
    try{
        const response = await fetch(weatherURL);
        if(response.ok){
            const data= await response.json();
            displayResults(data);
        }else {
            throw Error(await response.text())
        }
    } catch (error){
        console.log(error);
    }
}
function displayResults (weatherData){
    const temperature = weatherData.main.temp.toFixed(1);
    const desc = weatherData.weather[0].description;
    const humidity = weatherData.main.humidity.toFixed(0);
    currentTemp.textContent=temperature;
    currentHumidity.textContent=humidity;
    captionDesc.innerHTML = desc;

}
//Weather Forecast

const forecast =document.querySelector("#forecast-weather")
const forecastURL="https://api.openweathermap.org/data/2.5/forecast?lat=33.15997555541721&lon=-117.34966610123618&units=metric&appid=d0931df1a7acbfad9a6e4b6dc518ce69"
async function fetchForecast () {
    try{
        const response = await fetch(forecastURL);
        if(response.ok){
            const data= await response.json();
            // console.log(data);
            displayForecast(data);
        }else {     
            throw Error(await response.text())
        }
    } catch (error){
        console.log(error);
    }
}


function displayForecast(forecastData){
    forecast.innerHTML =" ";
    const forecastCards = {};

    for (const forecastItem of forecastData.list){
        const forecastDate = forecastItem.dt_txt.split(" ")[0];

        if (isWithinNextThreeDays (forecastDate)){
            if (!forecastCards[forecastDate]){
                const forecastTemperature = forecastItem.main.temp.toFixed(1);
                const forecastDesc = forecastItem.weather[0].description;
                
                const forecastCard = document.createElement ("div");
                forecastCard.classList.add ("forecast-card");
                
                const dateElement = document.createElement ("p");
                dateElement.textContent = `${formatDate(forecastDate)}`;
                
                const temperatureElement = document.createElement ("p");
                temperatureElement.textContent = `${forecastTemperature}°C`;
                
                const descElement =document.createElement ("p");
                descElement.textContent = `${forecastDesc}`;
                
                forecastCard.appendChild(dateElement);
                forecastCard.appendChild(temperatureElement);
                forecastCard.appendChild(descElement);

                forecast.appendChild(forecastCard);

                forecastCards[forecastDate] = forecastCard;

            }
        }
    }
}

function isWithinNextThreeDays (dateString){
    const currentDate = new Date();
    const forecastDate = new Date(dateString);
    //Calculate the difference in days
    const timeDiff= forecastDate.getTime()-currentDate.getTime();
    const diffDays =Math.ceil (timeDiff / (1000*3600*24));
    return diffDays >= 1 && diffDays <=3;
}

function formatDate (dateString){
    const date = new Date (dateString);
    return date.toLocaleDateString(undefined, {weekday:"long", month:"long",day:"numeric"});
}
    
fetchForecast();
apiFetch();


//Form

// const form=document.querySelector("#drink-form");
// const fruitURL ="https://brotherblazzard.github.io/canvas-content/fruit.json";

// form.addEventListener("Submit", function(event) {
//     event.preventDefault();
//     const formData = new FormData(form);
//     const formObject=Object.formEntries(formData);
//     localStorage.setItem('formEntry', JSON.stringify(formObject));
//     form.reset();
//     alert("Form submitted successfully!")
// });

// fetch(fruitURL)

// .then (function(response) {
//     return response.json();
//     })
// .then (function (jsonObject){
//   const fruits = jsonObject;
//   const fruitOptions=fruits.map(fruit =>fruit.name);
// //   .then(response => response.json())
// //   .then(data => {
// //  const fruitOptions = data.fruit;

//     // Populate the select elements with fruit options
//     const fruit1Select = document.querySelector('#fruit1');
//     const fruit2Select = document.querySelector('#fruit2');
//     const fruit3Select = document.querySelector('#fruit3');

//     fruitOptions.forEach(fruit => {
//       const option = document.createElement('option');
//       option.value = fruit;
//       option.textContent = fruit;

//       fruit1Select.appendChild(option);
//       fruit2Select.appendChild(option.cloneNode(true));
//       fruit3Select.appendChild(option.cloneNode(true));
//     });
//   })
//   .catch(error => {
//     console.log('Error fetching fruit data:', error);
//   });


// //Drinks Served

// const drinksServedSection = document.querySelector('.drinks-served');
// const drinksCountElement = document.querySelector('#drinks');

// // Retrieve the drinks count from local storage
// let drinksCount = localStorage.getItem('drinksCount');
// drinksCount = drinksCount ? parseInt(drinksCount) : 0;

// // Update the drinks count element
// drinksCountElement.textContent = drinksCount;

// // Event listener for form submission
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form submission

//   // Increment the drinks count
//   drinksCount++;
  
//   // Update the drinks count element
//   drinksCountElement.textContent = drinksCount;

//   // Save the updated drinks count to local storage
//   localStorage.setItem('drinksCount', drinksCount.toString());

//   // Reset the form
//   form.reset();

//   // Show a confirmation message or perform any desired action
//   alert('Form submitted successfully!');
// });



const drinksCountElement = document.querySelector("#drinks");

let drinksCount = localStorage.getItem("drinksCount");
drinksCount = drinksCount ? parseInt(drinksCount) : 0;

drinksCountElement.textContent = drinksCount;