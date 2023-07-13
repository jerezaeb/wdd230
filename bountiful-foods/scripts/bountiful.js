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
apiFetch();
//Weather Forecast

const forecast =document.querySelector("#forecast-weather")
const forecastURL="https://api.openweathermap.org/data/2.5/forecast?lat=33.15997555541721&lon=-117.34966610123618&appid=d0931df1a7acbfad9a6e4b6dc518ce69"
async function apiFetch () {
    try{
        const response = await fetch(forecastURL);
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
