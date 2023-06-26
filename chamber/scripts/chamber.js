let currentYear = new Date().getFullYear ();
document.querySelector ("#year").textContent = currentYear;

let lastModif = new Date(document.lastModified);
document.querySelector ("#date").textContent = `Last Updated: ${lastModif}`

const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});


  function updateDate() {
    var now = new Date();
    var options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    var formattedDate = now.toLocaleDateString('en-US', options);
    
    document.getElementById("day").textContent = formattedDate;
  }
  
  updateDate();

  const url = 'https://jerezaeb.github.io/wdd230/chamber/data.json';


// async function getProphetData(url) {
//    const response = await fetch(url);
//     const data = await response.json();
//     console.table(data.prophets);
//     //displayProphets(data.prophets);
//   }

fetch (url)
    .then (function(response) {
        return response.json();
        })
    .then (function (jsonObject){
      const business = jsonObject ['business'];
      const cards = document.querySelector ('div.cards');
   
    business.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let logo = document.createElement('img');
      let address = document.createElement ('p');
      let phone = document.createElement ('p');
      let description = document.createElement ('p');

  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${business.businessname}`;
  
      // Build the image portrait by setting all the relevant attribute
      logo.setAttribute('src', business.imagepath);
      logo.setAttribute('alt', `Logo of ${business.businessname}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '250');
      logo.setAttribute('height', '250');


      address.innerHTML = `Address: ${business.address}`;
      phone.innerHTML = `Phone: ${business.phone}`;
      description.innerHTML = `${business.description}`;
    



  
      // Append the section(card) with the created elements
      card.append(h2);
      card.append(logo);
      cards.append(card);
      card.append(address);
      card.append(phone);
      card.append(description)
   


    }); // end of forEach loop
  // end of function expression
})

  //weather
  
  // select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wind-speed');
//let windChill  = calculateWindChill (currentTemp, windSpeed);
const windChill = document.querySelector ('#wind-chill');

const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=10.315880299252855&lon=123.88737017449185&units=metric&appid=4d1acff0243661ed11c7e970e0d0d326';

async function apiFetch() {
    try {
      const response = await fetch(weatherURL);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function calculateWindChill (temp, speed){
    if (temp >50 || speed <3) {
      return "N/A"
    } else {
      const windChill = 35.74 + (.6215 * temp) - (37.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
      return windChill.toFixed(2);
      
    }
  }
  function displayResults (weatherData) {
    const temperature =  weatherData.main.temp.toFixed(1);
    const imagesrc = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const speed = weatherData.wind.speed.toFixed(2);
    const chill = calculateWindChill(parseFloat(temperature), parseFloat(speed));
    currentTemp.textContent = temperature;
    weatherIcon.setAttribute('src',imagesrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
    windSpeed.textContent = weatherData.wind.speed.toFixed(2);
    windChill.textContent = chill;
  }
  apiFetch();

  

    
    
  