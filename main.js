// // script.js
// const apiKey = "7e9f019d15b1f9319fc700058535822e"; // Replace with your OpenWeatherMap API Key
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

// async function getWeather() {
//     const city = document.getElementById("city").value;
//     const weatherInfo = document.getElementById("weatherInfo");
    
//     if (!city) {
//         weatherInfo.innerHTML = "<p>Please enter a city name!</p>";
//         return;
//     }

//     try {
//         const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
//         const data = await response.json();

//         if (data.cod !== 200) {
//             weatherInfo.innerHTML = `<p>${data.message}</p>`;
//             return;
//         }

//         document.getElementById("cityName").textContent = `Weather in ${data.name}`;
//         document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
//         document.getElementById("description").textContent = `Description: ${data.weather[0].description}`;
//     } catch (error) {
//         weatherInfo.innerHTML = `<p>Error fetching weather data.</p>`;
//     }
// }

const apiKey = '7e9f019d15b1f9319fc700058535822e'; // Replace with your OpenWeatherMap API key
const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const cityName = document.getElementById('cityName');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

searchButton.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    updateWeatherUI(data);
  } catch (error) {
    alert(error.message);
  }
}

function updateWeatherUI(data) {
  cityName.textContent = data.name;
  temperature.textContent = `${Math.round(data.main.temp)}°c`;
  humidity.textContent = `${data.main.humidity}%`;
  windSpeed.textContent = `${data.wind.speed} km/hr`;

  const weather = data.weather[0].main.toLowerCase();
  if (weather.includes('rain')) {
    weatherIcon.src = 'images/rain.png';
  } else if (weather.includes('cloud')) {
    weatherIcon.src = 'images/cloud.png';
  } else if (weather.includes('clear')) {
    weatherIcon.src = 'images/sun.png';
  } else {
    weatherIcon.src = 'images/default.png';
  }
}













